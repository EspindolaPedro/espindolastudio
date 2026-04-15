"use client";

import { useEffect, useRef } from "react";

type GalaxyProps = {
  starSpeed?: number;
  density?: number;
  hueShift?: number;
  speed?: number;
  glowIntensity?: number;
  saturation?: number;
  mouseRepulsion?: boolean;
  repulsionStrength?: number;
  twinkleIntensity?: number;
  rotationSpeed?: number;
  transparent?: boolean;
};

type Star = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  twinkle: number;
  offset: number;
};

export default function Galaxy({
  starSpeed = 2.1,
  density = 2.1,
  glowIntensity = 0.15,
  twinkleIntensity = 0.3,
  rotationSpeed = 0.1,
  transparent = true,
}: GalaxyProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      width = parent.clientWidth;
      height = parent.clientHeight;
      centerX = width / 2;
      centerY = height / 2;

      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(width * ratio));
      canvas.height = Math.max(1, Math.floor(height * ratio));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.max(90, Math.floor((width * height) / 18000 * density));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.45 + 0.2,
        twinkle: Math.random() * twinkleIntensity + 0.05,
        offset: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      if (!transparent) {
        context.fillStyle = "#000";
        context.fillRect(0, 0, width, height);
      }

      const angle = (time * 0.00002 * rotationSpeed) % (Math.PI * 2);
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      for (const star of stars) {
        const dx = star.x - centerX;
        const dy = star.y - centerY;
        const rx = dx * cos - dy * sin + centerX;
        const ry = dx * sin + dy * cos + centerY;
        const drift = (time * 0.0001 * starSpeed) % height;
        const y = ((ry + drift) % (height + 40)) - 20;
        const pulse = 0.7 + Math.sin(time * 0.0015 + star.offset) * star.twinkle;
        const alpha = Math.max(0.08, Math.min(1, star.alpha * pulse));

        context.beginPath();
        context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        context.shadowBlur = 18 * glowIntensity;
        context.shadowColor = `rgba(255, 255, 255, ${alpha})`;
        context.arc(rx, y, star.radius, 0, Math.PI * 2);
        context.fill();
      }

      context.shadowBlur = 0;
      animationFrame = window.requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) {
      observer.observe(canvas.parentElement);
    }

    resize();
    animationFrame = window.requestAnimationFrame(draw);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [density, glowIntensity, rotationSpeed, starSpeed, transparent, twinkleIntensity]);

  return <canvas ref={canvasRef} aria-hidden="true" />;
}

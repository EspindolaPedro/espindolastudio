import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

type TypeOnScrollProps = {
  text: string;
  className?: string;
  delay?: number; // atraso opcional (ms)
  speed?: number; // velocidade opcional (ms por caractere)
};

export function TypeOnScroll({
  text,
  className = "",
  delay = 0,
  speed = 10,
}: TypeOnScrollProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 1 });
  const [visibleCount, setVisibleCount] = useState(0);
  const [canStart, setCanStart] = useState(false);

  // controla o delay
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isInView) {
      if (delay > 0) {
        timer = setTimeout(() => setCanStart(true), delay);
      } else {
        setCanStart(true);
      }
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isInView, delay]);

  // animação de digitação
  useEffect(() => {
    if (canStart && isInView && visibleCount < text.length) {
      const timeout = setTimeout(() => setVisibleCount((v) => v + 1), speed);
      return () => clearTimeout(timeout);
    }
  }, [canStart, isInView, text.length, visibleCount, speed]);

  return (
    <span ref={ref} className={className}>
      {text.slice(0, visibleCount)}
    </span>
  );
}

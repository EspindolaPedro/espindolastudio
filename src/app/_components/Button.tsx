import Image from "next/image";
import React from "react";

function Button() {
  return (
    <div className="flex justify-center sm:justify-start relative">
      <button
        className="relative mt-8 px-[34px] py-[10px] rounded-[18px]
        bg-[#707070] text-white border border-white/30 overflow-hidden
        transition-all duration-300 group hover:scale-105"
      >
        <span className="relative z-10">Solicitar orçamento</span>

        {/* Brilho animado (correndo na borda) */}
        <span
          className="absolute inset-0 rounded-[18px]
          bg-[conic-gradient(from_0deg,transparent_0deg,white_90deg,transparent_180deg)]
          opacity-0 group-hover:opacity-100 animate-spin-slow"
        ></span>
      </button>

      {/* Ícone à direita */}
      <div className="absolute -right-10 bottom-0 flex items-center justify-center">
        <Image
          src="/svg/btncircle.svg"
          alt="Ícone circular"
          width={48}
          height={48}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </div>
  );
}

export default Button;

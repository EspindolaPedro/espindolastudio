
'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image';

const steps = [
    {
        letter: 'M',
        title: 'Mapeamento Estratégico',
        description: 'Estudamos o negócio, público, concorrência e objetivos para traçar um plano sob medida para seu site e marketing',
    },
    {
        letter: 'A',
        title: 'Arquitetura de Conversão',
        description: 'Aqui realizamos a criação da estrutura que irá sustentar as suas conversões, envolvendo criação do site ou contas de anúncios',
    },
    {
        letter: 'T',
        title: 'Tráfego Qualificado',
        description: 'Analisamos a oferta, elementos, performance e criativos que irão ser validados com o seu público.',
    },
    {
        letter: 'R',
        title: 'Refinamento',
        description: 'Aperfeiçoamos cada palavra, imagem, comunicação e público para extrair o máximo de performance.',
    },
    {
        letter: 'I',
        title: 'Implementação e Testes',
        description: 'Testes A/B de anúncios, páginas e criativos para otimizar continuamente a performance.',
    },
    {
        letter: 'Z',
        title: 'Zerar Desperdício',
        description: 'Monitoramos, testamos e ajustamos continuamente para escalar resultados.',
    },
];

export default function Matriz() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // A linha vertical fixa
    const lineOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])

    return (

        <div className="container max-w-[1440px] mx-auto px-5 pb-8 overflow-x-clip mb-15 p-26">

            <div className='flex flex-col items-center justify-center mb-10 relative'>
                <Image src={'/MATRIZ.png'} className='w-[1000px] opacity-70 mt-[10px] md:w-[549px] md:h-[80px] md:h-[100px] absolute top-[-42px]' width={800} height={180} alt='' />
                <h2 className="text-white text-center font-bricolage font-semibold text-3xl md:text-4xl md:leading-11  ">Seguimos uma metodologia própria, <br /> aplicada em diversos negócios.</h2>
                <h3 className='text-center mt-4 text-thin text-base opacity-95 md:max-w-[40ch] '>Este método é aplicando tanto para sites quanto para o tráfego pago que realizo para meus clientes.</h3>
            </div>

        <div ref={containerRef} className="relative p-8 mt-22">
  {/* Linha vertical fixa */}
  <motion.div
    className="
      absolute 
      left-[1.5rem] sm:left-1/2 
      sm:transform sm:-translate-x-1/2 
      w-[0.9px] h-full bg-white/70
    "
    style={{ opacity: lineOpacity }}
  />

  <div className="flex flex-col space-y-32">
    {steps.map((step, idx) => (
      <div
        key={step.letter}
        className={`
          relative flex
          ${idx % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}
          justify-end   /* no mobile todos à direita da linha */
        `}
      >
        {/* Ponto na linha */}
        <motion.div
          className="
            absolute 
            left-[-15px] sm:left-1/2 
            sm:transform sm:-translate-x-1/2
            w-4 h-4 rounded-full border-4 border-white bg-white/90 shadow-lg z-10
          "
          initial={{ scale: 1, opacity: 0 }}
          whileInView={{ scale: 1.2, opacity: 1 }}
          viewport={{ once: true, margin: '-50% 0px -50% 0px' }}
          transition={{ duration: 0.3 }}
        />

        {/* Card */}
        <motion.div
          className="
            bg-[#0c0c0c] text-white p-6 rounded-lg shadow-md w-124 relative  ml-3.5
          "
          initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50% 0px -50% 0px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-semibold bg-gradient-to-r from-white to-white/35 bg-clip-text text-transparent text-lg md:text-2xl mb-2 font-bricolage">
            {step.title}
          </h3>
          <p className="text-white/70 font-light text-sm font-inter">
            {step.description}
          </p>
        </motion.div>
      </div>
    ))}
  </div>
</div>
        </div>
    )
}
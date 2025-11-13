'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from './Button'
export default function Hero() {
  return (
    <section className={`
    bg-[url('/hero-mobile.jpg')] h-[405px] 
    bg-center bg-no-repeat bg-cover sm:h-[705px]
    md:bg-[url('/hero-desktop.jpg')] md:h-['650px']
    md:bg-cover md:bg-center 
    
    `} >

      <div className='
        max-w-[1440px] mx-auto

        container flex flex-col h-full px-5 pt-28 z-10 pb-16
        items-center
        md:items-start
        
        
      '>
        <Image src={'/svg/logo.svg'} width={150} height={55} alt='Espindola Studio logo' className='
          mx-auto mt-48 md:mt-0 md:mx-0
        ' />

        <motion.div 
            initial={{ filter: "blur(5px)", opacity: 0 }}
            animate={{ filter: "none", opacity:1 }}
            
          className='font-bricolage mt-6 bg-gradient-to-r from-white to-white/35 bg-clip-text text-transparent
          text-center text-[1.85rem]
          font-medium leading-10
          md:max-w-[23ch] md:font-bold
          md:text-left md:text-[2.5rem]
          md:leading-12

        '>Sites de Alta Performance Que Potencializam seus resultados</motion.div>

        <motion.p 
         initial={{ filter: "blur(5px)", opacity: 0, y:10 }}
            animate={{ filter: "none", opacity:1, y:0 }}

          className='text-white/70 max-w-[35ch] mt-4 
            text-xl
            text-center
            md:text-left
            md:text-2xl
            font-light
        '>
          Apresente seus serviços e produtos com sites profissionais, modernos e que convertem.
        </motion.p>

      <Button />

      </div>



    </section>
  )
}

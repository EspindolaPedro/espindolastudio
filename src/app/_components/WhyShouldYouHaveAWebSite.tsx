'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

export default function WhyShouldYouHaveAWebSite() {
    return (
        <div className='container max-w-[1440px] mx-auto px-5 md:grid md:grid-cols-2 my-42 justify-between items-center  '>
            <div className=''>
                <h2
                    className='text-center md:text-left text-[26px] leading-10 font-medium md:text-4xl text-white  md:font-semibold font-bricolage  mb-7 md:max-w-[20ch]'

                >Por que um site profissional pode mudar seus resultados?</h2>

                <p
                    className=' text-center  md:text-xl md:text-left  opacity-70 font-light'
                >Um site de qualidade que apresenta seus serviços e/ou produtos podem gerar grandes resultados e confiança para aqueles que não te conhecem.
                </p>

                <p
                    className=' text-center  md:text-xl md:text-left  opacity-70 font-light'
                >
                    E também, todos os dias as pessoas estão procurando por soluções iguais a que você oferece, e se não encontram sua empresa... Seu concorrente vai estar ganhando mais oportunidade.
                </p>


                <Button />
            </div>

            <div className='flex justify-end mt-14'>
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        x: [0, 5, 0],
                        rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >

                    <Image
                        src={'/performance.png'}
                        alt='' width={455}
                        height={471}
                        className=" object-contain"
                    />
                </motion.div>
            </div>
        </div>
    )
}

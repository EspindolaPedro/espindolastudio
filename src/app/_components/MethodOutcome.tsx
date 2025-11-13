'use client'
import Image from 'next/image'
import React from 'react'
import Button from './Button'

export default function MethodOutcome() {
  return (
    <section className=" 
    pattern-grid
    container max-w-[1440px] mx-auto py-11
    md:grid md:grid-cols-2
    items-center
    px-5
    my-14
    ">

        <div>
            <h2 className='font-bricolage text-3xl text-white font-bold mb-7 text-center md:text-left'>Resultados desse método?</h2>

   <Image 
                src={'/turbo-fitness.png'}
                alt=''
                width={460}
                height={300}
                className='md:hidden mb-4 my-16'
            />
                
                <p className='text-center  md:text-md md:text-left mb-4 font-light'>O <strong>método M.A.T.R.I.Z </strong>aplicado em conjunto com estratégias de conteúdos foi possível trazer mais de <strong className='text-purple-600'>187 alunos no lançamento da academia @GYMTURBOFITNESS</strong> no interior da Bahia e mais de 2.8k de seguidores (até o momento)</p>
                            

                    <p className=' text-center  md:text-md md:text-left   opacity-90 font-light'>E já aplicamos este mesmo método ao longo de +2 anos em diversas outras empresas locais e obtiveram bons resultados.</p>
                <br />

                <Button />
             
        </div>

        <div className=' hidden md:flex justify-end'>
            <Image 
                src={'/turbo-fitness.png'}
                alt=''
                width={460}
                height={300}
            />
        </div>

    </section>
)
}

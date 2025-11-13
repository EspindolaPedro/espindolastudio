import React from 'react'

export default function Marquee() {
    return (

        <div className='overflow-x-clip relative w-full '>

            <div className=" relative w-[115%] overflow-hidden bg-gradient-to-r from-[#7A06D9] to-[#410373] py-4
            mt-[400px]
            md:my-[30px]        
            -rotate-6
            md:-rotate-2
            ">
                <div className="flex marquee whitespace-nowrap items-center justify-center">
                    <span className="mx-6 text-white font-bold uppercase text-2xl">Sites</span>
                    <span className='w-2 h-2 inline-block rounded-full bg-blue-500  mb-1'></span>
                    <span className="mx-6 text-white font-bold uppercase text-2xl">Landing Pages</span>
                    <span className='w-2 h-2 inline-block rounded-full bg-blue-500  mb-1'></span>

                    <span className="mx-6 text-white font-bold uppercase text-2xl">Ecommerce</span>

                    <span className='w-2 h-2 inline-block rounded-full bg-blue-500  mb-1'></span>


                    <span className="mx-6 text-white font-bold uppercase text-2xl">Gestão de Tráfego</span>

                    <span className='w-2 h-2 inline-block rounded-full bg-blue-500  mb-1'></span>


                    <span className="mx-6 text-white font-bold uppercase text-2xl">Copywriting</span>

                    <span className='w-2 h-2 inline-block rounded-full bg-blue-500  mb-1'></span>


                    <span className="mx-6 text-white font-bold uppercase text-2xl">Design Estratégico</span>

                    <span className='w-2 h-2 inline-block rounded-full bg-blue-500  mb-1'></span>


                    <span className="mx-6 text-white font-bold uppercase text-2xl">Sites</span>

                    <span className='w-2 h-2 inline-block rounded-full bg-blue-500  mb-1'></span>


                    <span className="mx-6 text-white font-bold uppercase text-2xl">Landing Pages</span>


                    <span className='w-2 h-2 inline-block rounded-full bg-blue-500  mb-1'></span>

                    <span className="mx-6 text-white font-bold uppercase text-2xl">Ecommerce</span>

                    <span className='w-2 h-2 inline-block rounded-full bg-blue-500  mb-1'></span>


                    <span className="mx-6 text-white font-bold uppercase text-2xl">Gestão de Tráfego</span>

                    <span className='w-2 h-2 inline-block rounded-full bg-blue-500  mb-1'></span>


                    <span className="mx-6 text-white font-bold uppercase text-2xl">Copywriting</span>

                    <span className='w-2 h-2 inline-block rounded-full bg-blue-500  mb-1'></span>

                    <span className="mx-6 text-white font-bold uppercase text-2xl">Design Estratégico</span>
                </div>
            </div>
        </div>
    )
}

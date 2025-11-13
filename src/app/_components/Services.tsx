'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { TypeOnScroll } from './animation/TypeOnScroll'

export default function Services() {
  return (
    <section
      id='services'
      className='
        container max-w-[1440px] mx-auto px-5
        pt-26
        mb-26
        overflow-x-clip
        '>
      <div className='md:flex relative gap-12'>
        <div className='md:w-[50%]'>
          <div className='sticky top-16 min-h-fit '>

            <TypeOnScroll text="Posicionamento no digital é fundamental atualmente e oferecemos o serviço que precisa para conquistar novos leads e lucrar. "
              className='font-bricolage bg-gradient-to-r text-white 
              text-2xl font-light
              text-center
              md:text-left
              md:text-2xl'
            />
          </div>
        </div>

        <div className='flex flex-col flex-1 items-end'>
          {
            [ // Array com os dados dos serviços
              {
                icon: '/svg/sites.svg',
                title: 'Sites institucionais e Landing pages',
                desc: 'Crie uma presença profissional e impactante, apresentando sua empresa, serviços ou produto. Isso aumenta a confiança do público e a autoridade da sua marca no mercado.',
              },
              {
                icon: '/svg/shop.svg',
                title: 'Ecommerce',
                desc: 'Leve sua loja para o digital e alcance novos clientes todos os dias. Venda além das redes sociais e Marketplaces com uma estrutura própria, escalável e pronta para converter.',
              },
              {
                icon: '/svg/trafego.svg',
                title: 'Tráfego pago',
                desc: 'Não basta ter um bom site se ele não recebe visitantes qualificados. Criamos campanhas estratégicas e funis de conversão para atrair leads e gerar vendas com base em dados reais.',
              },
              {
                icon: '/svg/copywriting.svg',
                title: 'Copywriting',
                desc: 'Desenvolvemos textos persuasivos para páginas que conectam sua marca ao cliente e aumentam suas vendas.',
              },

            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 80, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15, type: 'spring', stiffness: 60 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`px-8 py-9 border-b border-b-purple-900 rounded-b-xl mb-8 bg-transparent z-${10 + i} md:max-w-[550px]  `}
              >
                <div className="relative w-[68px] h-[68px] flex items-center justify-center mb-4 ">
                  <span className="absolute inset-0 rounded-full border-1 border-transparent bg-gradient-to-tr from-transparent via-purple-700 to-transparent animate-spin-glow"></span>
                  <span className="relative w-16 h-16 rounded-full bg-black flex items-center justify-center">
                    <Image src={service.icon} alt='' width={39} height={39} />
                  </span>
                </div>
                <h3 className='bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent font-bricolage font-semibold mt-[24px] mb-[16px] text-xl'>
                  {service.title}
                </h3>
                <p className='opacity-70 font-light font-inter text-sm'>{service.desc}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { LayoutIcon, CodeIcon, MegaphoneIcon, CogIcon, UsersIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid"

const features = [
  "Criação de Páginas Web",
  "Desenvolvimento de SaaS",
  "Tráfego Pago",
  "Automação",
  "Aplicação de CRM",
]

const bentoFeatures = [
  {
    Icon: LayoutIcon,
    name: "Criação de Página",
    description: "Designs modernos e responsivos que capturam a essência da sua marca.",
    href: "#",
    cta: "Saiba mais",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Image
          src="/pitanga-laranja.png"
          alt="Pitanga"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
    ),
  },
  {
    Icon: CodeIcon,
    name: "Criação de SaaS",
    description: "Desenvolvemos soluções de software escaláveis e personalizadas para o seu negócio.",
    href: "#",
    cta: "Explore",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/4 h-3/4 bg-gradient-to-br from-[#ed6c08] to-[#f28c01] opacity-20 rounded-full blur-2xl"></div>
      </div>
    ),
  },
  {
    Icon: MegaphoneIcon,
    name: "Tráfego Pago",
    description: "Aumente sua visibilidade online com campanhas de publicidade otimizadas.",
    href: "#",
    cta: "Descubra",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#ed6c08" strokeWidth="2"/>
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="#ed6c08" strokeWidth="2"/>
        </svg>
      </div>
    ),
  },
  {
    Icon: CogIcon,
    name: "Automação",
    description: "Otimize seus processos com nossas soluções de automação inteligentes.",
    className: "col-span-3 lg:col-span-2",
    href: "#",
    cta: "Conheça mais",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="40" width="120" height="120" rx="20" stroke="#f28c01" strokeWidth="2"/>
          <circle cx="100" cy="100" r="30" stroke="#ed6c08" strokeWidth="2"/>
          <path d="M100 70 L100 130 M70 100 L130 100" stroke="#ed6c08" strokeWidth="2"/>
        </svg>
      </div>
    ),
  },
  {
    Icon: UsersIcon,
    name: "Aplicação de CRM",
    description: "Gerencie seus clientes com eficiência e precisão usando nossas soluções de CRM.",
    className: "col-span-3",
    href: "#",
    cta: "Saiba mais",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="absolute text-[#f28c01] text-xs"
            style={{
              transform: `rotate(${index * (360 / features.length)}deg) translateY(-40px)`,
            }}
          >
            {feature}
          </div>
        ))}
      </div>
    ),
  },
]

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={`bg-white pt-32 pb-16 transition-all duration-300 ${
      scrolled ? 'bg-opacity-90 backdrop-blur-sm' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0 lg:sticky lg:top-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Transforme sua presença digital com a{' '}
              <span className="text-[#ed6c08]">Pitanga Studio</span>
            </h1>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image
                    src="/pitanga-laranja.png"
                    alt="Pitanga"
                    width={24}
                    height={24}
                    className="mr-3 hover:animate-spin"
                  />
                  {feature}
                </motion.li>
              ))}
            </ul>
            <Button className="bg-[#ed6c08] hover:bg-[#f28c01] text-white text-lg px-8 py-6 rounded transition-colors duration-300">
              Solicite um orçamento
            </Button>
            <p className="mt-4 text-sm text-gray-500">
              Soluções personalizadas para o seu negócio
            </p>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <BentoGrid className="grid-cols-3 gap-4">
              {bentoFeatures.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
              ))}
            </BentoGrid>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
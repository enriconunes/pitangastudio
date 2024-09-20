'use client'

import { motion } from 'framer-motion'
import { Layout, Code, Megaphone, Zap, Cog, Users } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const features = [
  {
    title: "Criação de Páginas Web",
    description: "Designs modernos e responsivos que capturam a essência da sua marca e impulsionam sua presença online.",
    icon: Layout
  },
  {
    title: "Desenvolvimento de SaaS",
    description: "Criamos soluções de software escaláveis e personalizadas para atender às necessidades específicas do seu negócio.",
    icon: Code
  },
  {
    title: "Tráfego Pago",
    description: "Estratégias de publicidade online otimizadas para aumentar sua visibilidade e atrair clientes qualificados.",
    icon: Megaphone
  },
  {
    title: "Automação de Processos",
    description: "Implementamos soluções inteligentes para otimizar seus fluxos de trabalho e aumentar a eficiência operacional.",
    icon: Zap
  },
  {
    title: "Integração de Sistemas",
    description: "Conectamos suas ferramentas e plataformas existentes para criar um ecossistema digital coeso e eficiente.",
    icon: Cog
  },
  {
    title: "Aplicação de CRM",
    description: "Desenvolvemos e implementamos sistemas de CRM personalizados para melhorar o relacionamento com seus clientes.",
    icon: Users
  }
]

export function Features() {
  return (
    <section className="bg-[#ed6c08] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Recursos que impulsionam seu negócio digital
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-[#f28c01] border-[#ff9f1a]">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#ffb347] rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-white mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-[#fff3e0]">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Headphones, MessageCircle, Mail, Phone, Clock } from 'lucide-react'

export function SupportSection() {
  return (
    <section className="relative bg-white py-24">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#fff0e6] to-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 bg-[#ed6c08] rounded-full flex items-center justify-center mx-auto mb-6">
            <Headphones className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Suporte <span className="text-[#ed6c08]">especializado</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A equipe da Pitanga Studio está pronta para ajudar seu negócio a crescer no mundo digital!
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 bg-[#ed6c08] text-white">
              <h3 className="text-2xl font-semibold mb-4">
                Precisa de ajuda com seu projeto digital?
              </h3>
              <p className="mb-6">
                Se você tem dúvidas sobre nossos serviços ou precisa de suporte em um projeto existente, estamos aqui para ajudar. Nossa equipe de especialistas está pronta para oferecer soluções personalizadas para suas necessidades digitais.
              </p>
              <button 
                className="bg-white text-[#ed6c08] font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-orange-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50"
              >
                Entre em contato
              </button>
            </div>
            <div className="p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ed6c08] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Atendimento Profissional</h3>
                <p className="text-gray-600 mb-4">
                  Nossa equipe está disponível para ajudar você a alcançar seus objetivos digitais.
                </p>
                <div className="flex items-center justify-center text-gray-600 mb-2">
                  <Clock className="w-5 h-5 mr-2 text-[#ed6c08]" />
                  <span>Segunda a Sexta, 09:00 - 18:00</span>
                </div>
                <div className="flex items-center justify-center text-gray-600 mb-2">
                  <Phone className="w-5 h-5 mr-2 text-[#ed6c08]" />
                  <span>+55 73 99108-7043</span>
                </div>
                <div className="flex items-center justify-center text-gray-600">
                  <Mail className="w-5 h-5 mr-2 text-[#ed6c08]" />
                  <span>contato@pitangastudio.com</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-md' : 'bg-black'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="p-2 rounded">
                <Image src="/logoBranco.png" alt="Pitanga Studio" width={120} height={32} />
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/servicos" className="text-white hover:text-white relative group">
              Serviços
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#ed6c08] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link href="/sobre-nos" className="text-white hover:text-white relative group">
              Sobre Nós
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#ed6c08] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Button 
              className="bg-transparent text-white border-2 border-[#ed6c08] hover:border-[#f28c01] hover:text-[#f28c01] font-bold rounded transition-colors duration-300"
            >
              Contato
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-black py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center space-y-4">
            <Link 
              href="/servicos" 
              className="text-white hover:text-[#ed6c08] w-full text-center py-2 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              href="/sobre-nos" 
              className="text-white hover:text-[#ed6c08] w-full text-center py-2 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <Button 
              className="bg-transparent text-white border-2 border-[#ed6c08] hover:border-[#f28c01] hover:text-[#f28c01] font-bold rounded w-full max-w-xs transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
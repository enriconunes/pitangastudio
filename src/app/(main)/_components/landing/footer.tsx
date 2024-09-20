'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Mail } from 'lucide-react'

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-400 hover:text-[#ed6c08] transition-colors">
    {children}
  </Link>
)

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-white font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {children}
    </ul>
  </div>
)

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image src="/logoBranco.png" alt="Pitanga Studio Logo" width={150} height={50} className="mb-4" />
            <p className="text-sm text-gray-400 mb-4">
              Transformando ideias em soluções digitais inovadoras
            </p>
            <p className="text-sm text-gray-400">
              contato@pitangastudio.com
            </p>
          </div>

          <FooterSection title="Serviços">
            <li><FooterLink href="/criacao-de-paginas">Criação de Páginas</FooterLink></li>
            <li><FooterLink href="/desenvolvimento-saas">Desenvolvimento SaaS</FooterLink></li>
            <li><FooterLink href="/trafego-pago">Tráfego Pago</FooterLink></li>
            <li><FooterLink href="/automacao">Automação</FooterLink></li>
            <li><FooterLink href="/crm">Aplicação de CRM</FooterLink></li>
          </FooterSection>

          <FooterSection title="Empresa">
            <li><FooterLink href="/sobre-nos">Sobre Nós</FooterLink></li>
            <li><FooterLink href="/portfolio">Portfólio</FooterLink></li>
            <li><FooterLink href="/blog">Blog</FooterLink></li>
            <li><FooterLink href="/contato">Contato</FooterLink></li>
          </FooterSection>

          <div>
            <h3 className="text-white font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/pitangastudio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ed6c08] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com/pitangastudio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ed6c08] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="mailto:contato@pitangastudio.com" className="text-gray-400 hover:text-[#ed6c08] transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Pitanga Studio • Todos os Direitos Reservados
          </p>
          <div className="flex items-center">
            <span className="text-sm text-gray-400 mr-2">Powered by </span>
            <Image src="/logo-pitanga.png" alt="Pitanga Studio Logo" width={100} height={30} />
          </div>
        </div>
      </div>
    </footer>
  )
}
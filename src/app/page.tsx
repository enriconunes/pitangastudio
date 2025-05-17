'use client'

import { HeroParallax } from '@/components/aceternityui/hero-parallax'
import { CTASection } from './(components)/landing/cta-section'
import { Features } from './(components)/landing/features'
import { Footer } from './(components)/landing/footer'
import Header from './(components)/landing/header'
import HeroSection from './(components)/landing/hero-section'
import { MarqueeDemo } from './(components)/landing/marquee'
import { SupportSection } from './(components)/landing/suport'
import OurServices from './(components)/landing/our-services'
import { PresentationSpotlight } from './(components)/landing/presentation-spotlight'
import Paragraph from './(components)/landing/paragraph'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroParallax />
      <PresentationSpotlight />
      <OurServices />
      <Paragraph>
        {"Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows"}
      </Paragraph>
      {/* <HeroSection /> */}
      <MarqueeDemo />
      {/* <Features /> */}
      {/* <CTASection /> */}
      {/* <SupportSection /> */}
      <Footer />
    </main>
  )
}
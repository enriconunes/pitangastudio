import { CTASection } from './(main)/_components/landing/cta-section'
import { Features } from './(main)/_components/landing/features'
import { Footer } from './(main)/_components/landing/footer'
import Header from './(main)/_components/landing/header'
import HeroSection from './(main)/_components/landing/hero-section'
import { MarqueeDemo } from './(main)/_components/landing/marquee'
import { SupportSection } from './(main)/_components/landing/suport'

export default function Home() {
  return (
    <main className='bg-white'>
      <Header />
      <HeroSection />
      <MarqueeDemo />
      <Features />
      {/* <CTASection /> */}
      <SupportSection />
      <Footer />
    </main>
  )
}
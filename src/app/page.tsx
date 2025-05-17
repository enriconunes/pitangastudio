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

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/projects/a1.webp",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "/projects/a3.webp",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "/projects/a4.webp",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "/projects/a5.webp",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "/projects/a6.webp",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/projects/6.webp",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "/projects/7.webp",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  }
];

export default function Home() {
  return (
    <main>
      <Header />
      <HeroParallax products={products} />
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
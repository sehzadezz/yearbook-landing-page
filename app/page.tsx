import { BackgroundGradients } from '@/components/background-gradients'
import { Navbar } from '@/components/navbar'
import { SmoothScroll } from '@/components/smooth-scroll'
import { About } from '@/components/sections/about'
import { Footer } from '@/components/sections/footer'
import { Future } from '@/components/sections/future'
import { Gallery } from '@/components/sections/gallery'
import { Hero } from '@/components/sections/hero'
import { Quotes } from '@/components/sections/quotes'
import { Stats } from '@/components/sections/stats'
import { Students } from '@/components/sections/students'
import { Timeline } from '@/components/sections/timeline'
import { Videos } from '@/components/sections/videos'

export default function Page() {
  return (
    <main className="relative bg-background">
      <SmoothScroll />
      <BackgroundGradients />
      <Navbar />
      <div className="relative z-10">
        <Hero />
      <About />
      <Stats />
      <Timeline />
      <Gallery />
      <Students />
      <Videos />
      <Quotes />
        <Future />
        <Footer />
      </div>
    </main>
  )
}

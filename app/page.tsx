import Hero from '@/components/sections/hero'
import Experience from '@/components/sections/experience'
import Projects from '@/components/sections/projects'
import Automation from '@/components/sections/automation'
import Contact from '@/components/sections/contact'
import ScrollToTop from '@/components/scroll-to-top'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <Projects />
      <Automation />
      <Contact />
      <ScrollToTop />
    </main>
  )
}
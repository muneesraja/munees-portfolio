"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Github, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <TypeAnimation
              sequence={[
                "Hey, I'm Munees ",
                1000,
                "Just a Full-Stack dev",
                1000,
                'Building AI-powered stuff',
                1000,
                'Automating boring tasks',
                1000
              ]}
              wrapper="span"
              speed={50}
              className="text-gradient"
              repeat={Infinity}
              cursor={true}
            />
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Crafting AI-powered solutions with React.js | 4+ years of scaling applications
          </motion.p>

          <motion.div 
            className="flex items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              size="lg" 
              className="glow"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                })
              }}
            >
              Explore Work <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="glow">
              Connect
            </Button>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center gap-6 pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link 
              href="https://github.com/muneesraja" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link 
              href="mailto:muneesrajaa@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </Link>
            <Link 
              href="tel:+918778604904"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-6 w-6" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="geometric-background">
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={index}
              className="geometric-shape"
              style={{
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
                '--rotation': `${Math.random() * 360}deg`,
                '--scale': `${0.5 + Math.random() * 1.5}`,
                '--delay': `${Math.random() * 5}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20 backdrop-blur-[1px]" />
      </div>
    </section>
  )
}
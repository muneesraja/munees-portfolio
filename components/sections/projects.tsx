"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Appvector.io",
    description: "A comprehensive App Store Optimization (ASO) platform tracking competitor apps and boosting app rankings.",
    image: "/images/appvector.png",
    tech: ["React.js", "Jotai", "React Query", "Django"],
    demoLink: "https://appvector.io/",
    highlights: [
      "Built and managed UI components",
      "Consumed and integrated APIs",
      "Optimized SEO using Django templates",
      "Integrated analytics (GA, OpenReplay, Sentry)"
    ]
  },
  {
    title: "WhatsApp Automation (Discontinued project)",
    description: "Node.js and EJS-based system for bulk and scheduled WhatsApp messages with payment integration.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200",
    tech: ["Node.js", "EJS", "Stripe", "WhatsApp API"],
    demoLink: "https://whatsapp.multivariate.ai",
    highlights: [
      "Automated reminders system",
      "Stock market alerts",
      "Birthday reminders",
      "Stripe payment integration"
    ]
  },
  {
    title: "Audio Hiring Tool",
    description: "Internal tool streamlining the hiring process using audio interviews for efficient candidate screening.",
    image: "/images/hiring_tool.png",
    tech: ["React.js", "Node.js", "Audio API", "PostgreSQL"],
    demoLink: "https://hiring.maakeetoo.com/login",
    highlights: [
      "Custom audio recorder",
      "Multi-step screening",
      "HR portal",
      "Candidate portal"
    ]
  },
  {
    title: "MindlyQ - AI WhatsApp Assistant (Hobby project)",
    description: "A smart WhatsApp assistant powered by AI that helps users manage reminders, content, and collaborate effectively through natural language interactions.",
    image: "/images/mindlyq.png",
    tech: ["Node.js", "Twilio API", "Google Gemini", "MongoDB"],
    demoLink: "https://mindlyq.com/",
    highlights: [
      "AI-powered natural language processing",
      "Smart reminder system",
      "Content management and organization",
      "WhatsApp integration using Twilio"
    ]
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="glow">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-4 pt-4">
                      {project.demoLink && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="glow"
                          onClick={() => window.open(project.demoLink, '_blank', 'noopener,noreferrer')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
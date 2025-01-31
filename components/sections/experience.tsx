"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Building2, ArrowRight } from "lucide-react"

const experiences = [
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "June 2023 - Present",
    description: "Building prototype web products for various clients while exploring AI technologies like ChatGPT and Stable Diffusion.",
    achievements: [
      "Developed YouTube upload automation using Data API V3",
      "Created financial tool prototypes with CRUD operations",
      "Built WhatsApp bot using Twilio API and Google Gemini AI"
    ],
    tech: ["React.js", "Node.js", "AI/ML", "Automation"]
  },
  {
    company: "Multivariate Pvt Ltd",
    role: "Web Developer",
    period: "June 2021 - June 2023",
    description: "Collaborated with design team for sprint planning, optimized SEO, and managed application monitoring.",
    achievements: [
      "Implemented SEO optimizations for landing and blog pages",
      "Monitored and resolved issues using Sentry",
      "Prioritized and fixed critical bugs"
    ],
    tech: ["React.js", "SEO", "Sentry", "Sprint Planning"]
  },
  {
    company: "Cogent E-Services",
    role: "IT Executive",
    period: "Prior to June 2021",
    description: "Managed IT infrastructure and system setups while self-learning web development.",
    achievements: [
      "Diagnosed and resolved hardware/software issues",
      "Configured systems per client requirements",
      "Self-learned React.js and web development"
    ],
    tech: ["System Administration", "IT Support", "React.js"]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-muted/5">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 glow space-y-4">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 mt-1 text-primary" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="glow">
                        {tech}
                      </Badge>
                    ))}
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
"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Zap, Clock, Notebook as Robot, PenTool as Tool } from "lucide-react"

const automationProjects = [
  {
    title: "WhatsApp Business Automation",
    icon: <Robot className="h-6 w-6 text-primary" />,
    metrics: "1000+ automated messages/month",
    description: "Automated reminder system handling birthday wishes, stock alerts, and scheduled messages, integrated with Stripe for payments.",
    tools: "Node.js, Twilio API, Stripe"
  },
  {
    title: "YouTube Content Management",
    icon: <Tool className="h-6 w-6 text-primary" />,
    metrics: "20+ hours saved/month",
    description: "Automated video upload system using YouTube Data API V3 and Google Sheets integration for content management.",
    tools: "YouTube API, Google Sheets API"
  },
  {
    title: "Recruitment Process Automation",
    icon: <Clock className="h-6 w-6 text-primary" />,
    metrics: "75% reduction in screening time",
    description: "Custom audio interview system with automated candidate screening and multi-step evaluation process.",
    tools: "React.js, Audio API, PostgreSQL"
  },
  {
    title: "Workflow Automation Tools",
    icon: <Zap className="h-6 w-6 text-primary" />,
    metrics: "Daily workflow optimization",
    description: "Expertise in various automation tools including Google Apps Script for mailing & sheets, Puppeteer for web scraping.",
    tools: "Google Apps Script, Puppeteer, RabbitMQ"
  }
]

export default function Automation() {
  return (
    <section id="automation" className="section-padding bg-muted/5">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Automation Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating efficient solutions through automation, from simple scripts to complex systems that save time and reduce manual effort.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {automationProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 glow h-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      {project.icon}
                      <div>
                        <h3 className="font-semibold text-lg">{project.title}</h3>
                        <p className="text-primary text-sm">{project.metrics}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="text-sm text-muted-foreground">
                      <strong>Tools:</strong> {project.tools}
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
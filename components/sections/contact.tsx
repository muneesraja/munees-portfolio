"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail, Phone, Send } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const formData = new FormData(e.currentTarget)
      await fetch("https://formsubmit.co/muneesrajaa@gmail.com", {
        method: "POST",
        body: formData,
      })
      
      toast.success("Message sent successfully!")
      e.currentTarget.reset()
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Looking for a developer who thrives in fast-paced environments and enjoys problem-solving through automation? Let's connect!
            </p>
          </div>

          <Card className="max-w-xl mx-auto p-6 glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value="New Portfolio Contact" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input 
                type="hidden" 
                name="_next" 
                value={typeof window !== 'undefined' ? window.location.href : ''}
              />
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input 
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full glow" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          <div className="flex justify-center items-center gap-6">
            <Link
              href="https://github.com/muneesraja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:muneesrajaa@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
            >
              <Mail className="h-6 w-6" />
            </Link>
            <Link
              href="tel:+918778604904"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
            >
              <Phone className="h-6 w-6" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
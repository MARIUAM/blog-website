"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <motion.h1 
          className="text-4xl font-bold gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>
        <p className="text-muted-foreground max-w-[600px]">
          Have a question or want to collaborate? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>contact@modernblog.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span>Live chat available 9 AM - 5 PM EST</span>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject">Subject</label>
                <Input id="subject" placeholder="Message subject" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message">Message</label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
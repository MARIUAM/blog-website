"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Editor in Chief",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "With over 10 years of experience in tech journalism"
    },
    {
      name: "Michael Chen",
      role: "Senior Writer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "Specializing in web development and cloud technologies"
    },
    {
      name: "Emily Rodriguez",
      role: "Technical Editor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Full-stack developer turned technical writer"
    }
  ]

  return (
    <div className="container py-8 space-y-16">
      <section className="flex flex-col items-center text-center space-y-4">
        <motion.h1 
          className="text-4xl font-bold gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Modern Blog
        </motion.h1>
        <p className="text-muted-foreground max-w-[600px]">
          We're passionate about sharing knowledge and insights in web development, 
          design, and technology.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-4">
            We believe in making technology accessible to everyone. Our goal is to provide
            high-quality, easy-to-understand content that helps developers and designers
            grow in their careers.
          </p>
          <Link href="/contact">
            <Button>
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
        <motion.div
          className="relative h-[300px] rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Team</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
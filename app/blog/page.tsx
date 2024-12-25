"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    date: "March 1, 2024",
    author: "John Doe",
    category: "Development",
    slug: "getting-started-with-nextjs"
  },
  {
    title: "The Power of Tailwind CSS",
    excerpt: "Discover why Tailwind CSS is becoming the go-to styling solution",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    date: "March 2, 2024",
    author: "Jane Smith",
    category: "Design",
    slug: "power-of-tailwind-css"
  },
  {
    title: "Modern Web Development",
    excerpt: "Exploring the latest trends in web development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    date: "March 3, 2024",
    author: "Mike Johnson",
    category: "Technology",
    slug: "modern-web-development"
  }
]

export default function BlogPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <motion.h1 
          className="text-4xl font-bold gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Blog
        </motion.h1>
        <p className="text-muted-foreground max-w-[600px]">
          Discover the latest insights, tutorials, and trends in web development and design.
        </p>
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search articles..." 
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden group">
                <div className="aspect-video relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-medium">Read More</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-sm text-primary mb-2">{post.category}</div>
                  <h3 className="font-semibold tracking-tight mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
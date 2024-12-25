import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const featuredPosts = [
    {
      title: "Getting Started with Next.js",
      excerpt: "Learn how to build modern web applications with Next.js",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      date: "March 1, 2024",
      author: "John Doe",
      slug: "getting-started-with-nextjs"
    },
    {
      title: "The Power of Tailwind CSS",
      excerpt: "Discover why Tailwind CSS is becoming the go-to styling solution",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      date: "March 2, 2024",
      author: "Jane Smith",
      slug: "power-of-tailwind-css"
    },
    {
      title: "Modern Web Development",
      excerpt: "Exploring the latest trends in web development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      date: "March 3, 2024",
      author: "Mike Johnson",
      slug: "modern-web-development"
    }
  ]

  return (
    <div className="flex flex-col gap-8 pb-8">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to Modern Blog
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover insightful articles about web development, design, and technology.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/blog">
                <Button>
                  Browse Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tight mb-8">Featured Posts</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden transition-colors hover:bg-muted/50">
                <div className="aspect-video relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold tracking-tight">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
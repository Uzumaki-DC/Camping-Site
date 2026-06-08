import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/lib/data"

export default function JournalPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Camp Journal</h1>
          <p className="text-primary-foreground/80 text-lg">
            Practical guides for camping, activities, and planning a Windmills trip.
          </p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/journal/${post.slug}`} className="group">
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{post.category}</p>
              <h2 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}

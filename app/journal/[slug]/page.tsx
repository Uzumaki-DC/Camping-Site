import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/lib/data"
import { ArrowLeft } from "lucide-react"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function JournalPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <article>
        <section className="pt-32 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/journal" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to journal
            </Link>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">{post.category}</p>
            <h1 className="text-4xl md:text-5xl font-serif mb-6">{post.title}</h1>
            <p className="text-lg text-muted-foreground">{post.excerpt}</p>
          </div>
        </section>
        <div className="relative h-[480px] max-w-7xl mx-auto">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        </div>
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-neutral">
            <p>{post.content}</p>
            <p>
              For current rates, visit details, and reservation steps, use the estimator on the home page or contact Windmills Camp Grounds directly.
            </p>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  )
}

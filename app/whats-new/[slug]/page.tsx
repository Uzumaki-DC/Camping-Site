import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { whatsNewPosts } from '@/lib/data'

export function generateStaticParams() {
  return whatsNewPosts.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = whatsNewPosts.find((post) => post.slug === slug)
  return item ? { title: `${item.title} | Windmills Viewpoint Camps`, description: item.excerpt } : {}
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = whatsNewPosts.find((post) => post.slug === slug)
  if (!item) notFound()

  return (
    <main className="min-h-screen">
      <Header />
      <article>
        <section className="pt-32 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/whats-new" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Offers
            </Link>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">{item.category} / {item.dateLabel}</p>
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-balance">{item.title}</h1>
            <p className="text-lg text-muted-foreground">{item.excerpt}</p>
          </div>
        </section>
        <div className="relative mx-auto aspect-[16/9] max-h-[680px] max-w-7xl overflow-hidden bg-secondary">
          <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 1280px) 1280px, 100vw" className="object-cover" priority />
        </div>
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {item.body.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 border-t border-border pt-8 leading-relaxed text-muted-foreground">
              {item.section === 'activity'
                ? 'Activities and schedules can change with the season. '
                : 'For current rates, visit details, and reservation steps, use the estimator on the home page or '}
              <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
                contact Windmills Viewpoint Camps
              </Link>
              {item.section === 'activity' ? ' to confirm availability before your visit.' : ' directly.'}
            </p>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  )
}

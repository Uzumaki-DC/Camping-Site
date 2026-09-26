import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { announcements } from '@/lib/data'

export function generateStaticParams() {
  return announcements.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = announcements.find((announcement) => announcement.slug === slug)
  return item ? { title: `${item.title} | Windmills Viewpoint Camps`, description: item.excerpt } : {}
}

export default async function AnnouncementPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = announcements.find((announcement) => announcement.slug === slug)
  if (!item) notFound()

  const isArchived = item.status === 'archived'

  return (
    <main className="min-h-screen">
      <Header />
      <article>
        <section className="pt-32 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/whats-new" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to What&apos;s New
            </Link>
            {isArchived && (
              <span className="mb-5 block w-fit border border-border px-2 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">Archived offer</span>
            )}
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">{item.category} / {item.dateLabel}</p>
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-balance">{item.title}</h1>
            <p className="text-lg text-muted-foreground">{item.excerpt}</p>
          </div>
        </section>
        <div className={`relative mx-auto ${isArchived ? 'h-[70vh] min-h-[520px] max-w-4xl bg-secondary/30' : 'h-[480px] max-w-7xl'}`}>
          <Image src={item.image} alt={item.imageAlt} fill className={isArchived ? 'object-contain p-4' : 'object-cover'} priority />
        </div>
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-muted-foreground">{item.content}</p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {isArchived
                ? 'This offer is no longer active. Contact Windmills Viewpoint Camps for current activities, dates, and rates.'
                : 'For current rates, visit details, and reservation steps, use the estimator on the home page or contact Windmills Viewpoint Camps directly.'}
            </p>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  )
}

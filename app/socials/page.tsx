import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { contactInfo } from "@/lib/data"
import { Facebook, Instagram, Youtube } from "lucide-react"

export const metadata = {
  title: "Socials | Windmills Camp Grounds",
  description: "Follow Windmills Camp Grounds for Tanay Windmills Viewpoint updates, camper reels, and trip inspiration.",
}

const socials = [
  { name: "Facebook", href: contactInfo.facebook, icon: Facebook, detail: "Tanay Windmills' Viewpoint Cafe" },
  { name: "Instagram", href: contactInfo.instagram, icon: Instagram, detail: "@tanaywindmillsviewpoint" },
  { name: "YouTube features", href: "https://youtube.com", icon: Youtube, detail: "Camper and influencer visits" },
]

export default function SocialsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Follow Windmills</h1>
          <p className="text-primary-foreground/80 text-lg">
            See camper stories, influencer visits, reels, and current updates from Tanay Windmills Viewpoint.
          </p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {socials.map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="border border-border p-6 hover:bg-muted/40 transition-colors">
              <social.icon className="h-7 w-7 text-primary mb-5" />
              <h2 className="text-2xl font-serif mb-2">{social.name}</h2>
              <p className="text-muted-foreground">{social.detail}</p>
            </a>
          ))}
        </div>
        <div className="max-w-3xl mx-auto text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to reserve instead of browse? Send your camp details and preferred dates.
          </p>
          <Link href="/contact" className="inline-flex bg-primary text-primary-foreground px-8 py-3 text-sm font-medium uppercase tracking-wider">
            Reserve a Campsite
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}

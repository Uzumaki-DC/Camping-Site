"use client"

import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Send, Youtube } from "lucide-react"
import { contactInfo, locations } from "@/lib/data"

const footerLinks = {
  explore: [
    { name: "Camps", href: "/locations" },
    { name: "Activities", href: "/groups-events" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
  ],
  plan: [
    { name: "Reserve", href: "/contact" },
    { name: "Packing Guide", href: "/faq#packing" },
    { name: "Rates", href: "/" },
    { name: "Contact", href: "/contact" },
  ],
}

const socialLinks = [
  { name: "Instagram", href: contactInfo.instagram, icon: Instagram },
  { name: "Facebook", href: contactInfo.facebook, icon: Facebook },
  { name: "YouTube", href: "https://youtube.com", icon: Youtube },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4">Ready for a Windmills camp-out?</h3>
              <p className="text-primary-foreground/70">
                Send your preferred date, guest count, and camp setup. A 50% GCash downpayment confirms your slot.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="border border-primary-foreground/15 p-4 hover:bg-primary-foreground/10 transition-colors">
                <Phone className="h-5 w-5 mb-3" />
                <span className="block text-sm text-primary-foreground/60">Phone / Viber</span>
                <span className="block text-sm font-medium">{contactInfo.phoneDisplay}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="border border-primary-foreground/15 p-4 hover:bg-primary-foreground/10 transition-colors">
                <Mail className="h-5 w-5 mb-3" />
                <span className="block text-sm text-primary-foreground/60">Email</span>
                <span className="block text-sm font-medium break-all">{contactInfo.email}</span>
              </a>
              <div className="border border-primary-foreground/15 p-4">
                <Send className="h-5 w-5 mb-3" />
                <span className="block text-sm text-primary-foreground/60">GCash</span>
                <span className="block text-sm font-medium">{contactInfo.gcash}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium uppercase tracking-wider">Camp Locations</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {locations.map((location) => (
                <Link key={location.id} href={`/locations/${location.id}`} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors py-1">
                  <span className="block font-medium text-primary-foreground">{location.shortName}</span>
                  <span className="block text-primary-foreground/55">{location.tagline}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="text-sm font-medium uppercase tracking-wider mb-4 block">Explore</span>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors py-1 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-sm font-medium uppercase tracking-wider mb-4 block">Plan</span>
            <ul className="space-y-2 mb-6">
              {footerLinks.plan.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors py-1 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors" aria-label={`Follow us on ${social.name}`}>
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="font-serif text-2xl">Windmills</Link>
            <p className="text-xs text-primary-foreground/50">
              Windmills Camp Grounds - Two locations, one adventure - Made in the Philippines
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

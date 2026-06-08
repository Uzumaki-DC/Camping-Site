"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { faqs } from "@/lib/data"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const packingSections = [
  {
    title: "Shelter & Sleep",
    items: ["Your tent", "Ground sheet / footprint", "Sleeping bag or blanket", "Sleeping pad or air mat", "Extra stakes and guy lines"],
  },
  {
    title: "Food & Cooking",
    items: ["Camp stove or portable burner", "Cooking pot, pan and utensils", "Lighter and matches", "Food and meal ingredients", "Water bottles"],
  },
  {
    title: "Safety & Tools",
    items: ["Headlamp or flashlight", "First aid kit", "Insect repellent", "Sunscreen", "Power bank"],
  },
  {
    title: "Leave at Home",
    items: ["Single-use plastics", "Glass bottles", "Drones without permit", "Loud Bluetooth speakers after 10 PM"],
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>(["1"])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-primary pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-4">FAQ & Packing Guide</h1>
          <p className="text-primary-foreground/80 text-lg">
            Rates, BYOT camping rules, reservation terms, and what to bring to Windmills Camp Grounds.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openItems.includes(faq.id)
              return (
                <div key={faq.id} className="border border-border rounded-sm overflow-hidden">
                  <button onClick={() => toggleItem(faq.id)} className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors">
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">{faq.category}</span>
                      <span className="font-medium text-foreground">{faq.question}</span>
                    </div>
                    <ChevronDown className={cn("h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 ml-4", isOpen && "rotate-180")} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="packing" className="py-16 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Packing Guide</p>
            <h2 className="text-3xl md:text-4xl font-serif">What to bring to camp</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packingSections.map((section) => (
              <div key={section.title} className="bg-background border border-border p-6">
                <h3 className="text-xl font-serif mb-4">{section.title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

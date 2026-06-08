import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { contactInfo } from "@/lib/data"

const voucherIdeas = [
  "Day tour entrance for a barkada",
  "Overnight BYOT camping contribution",
  "Moto camping weekend fund",
  "Photoshoot fee add-on",
]

export default function GiftCardsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Camp Vouchers</h1>
          <p className="text-primary-foreground/80 text-lg">
            Give someone a Windmills day tour, overnight camp-out, or group trip contribution.
          </p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div className="bg-secondary/40 p-8">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Windmills Camp Grounds</p>
            <h2 className="text-3xl font-serif mb-4">Request a custom camp voucher</h2>
            <p className="text-muted-foreground">
              Voucher handling is manual for now. Contact the reservations team with your preferred amount, recipient name, and message.
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Phone / Viber: {contactInfo.phoneDisplay}</p>
              <p>Email: {contactInfo.email}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {voucherIdeas.map((idea) => (
              <div key={idea} className="border border-border p-6">
                <p className="font-medium">{idea}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/contact" className="inline-flex bg-primary text-primary-foreground px-8 py-3 text-sm font-medium uppercase tracking-wider">
            Contact Reservations
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}

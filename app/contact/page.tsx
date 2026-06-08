"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { contactInfo, locations } from "@/lib/data"
import { CalendarCheck, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "tanay",
    visitType: "overnight",
    campers: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-primary pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-4">Reserve Your Campsite</h1>
          <p className="text-primary-foreground/80 text-lg">
            Send your preferred camp, dates, guest count, and setup. We will confirm availability and payment instructions.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone / Viber</p>
                      <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-primary">
                        {contactInfo.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-primary">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">GCash Downpayment</p>
                      <p className="text-muted-foreground">
                        {contactInfo.gcash}<br />
                        {contactInfo.gcashName}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Locations</p>
                      <p className="text-muted-foreground">
                        Tanay, Rizal<br />
                        Amadeo, Cavite
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent p-6 rounded-sm">
                <div className="flex items-center gap-3 mb-3">
                  <CalendarCheck className="h-5 w-5 text-primary" />
                  <p className="font-medium">Reservation Terms</p>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>50% downpayment required to confirm reservation.</li>
                  <li>Remaining 50% balance is due upon arrival.</li>
                  <li>Use reference format: WIND-[YourName]-[CheckInDate].</li>
                  <li>Free cancellation up to 48 hours before arrival.</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-accent p-8 rounded-sm">
                <h2 className="font-serif text-2xl mb-6">Send a Reservation Request</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl mb-2">Request Prepared</h3>
                    <p className="text-muted-foreground">
                      Please send these details to {contactInfo.email} or {contactInfo.phoneDisplay}. We will confirm your booking within 24 hours after payment confirmation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                        <input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                        <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number *</label>
                        <input type="tel" id="phone" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-sm font-medium mb-2">Camp Location *</label>
                        <select id="location" required value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary">
                          {locations.map((location) => (
                            <option key={location.id} value={location.id}>{location.shortName}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="visitType" className="block text-sm font-medium mb-2">Visit Type *</label>
                        <select id="visitType" required value={formData.visitType} onChange={(e) => setFormData({ ...formData, visitType: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary">
                          <option value="day-tour">Day tour</option>
                          <option value="overnight">Overnight</option>
                          <option value="moto-camping">Moto camping</option>
                          <option value="car-camping">Car camping</option>
                          <option value="group-event">Group / team building</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="campers" className="block text-sm font-medium mb-2">Number of Campers *</label>
                        <input id="campers" required value={formData.campers} onChange={(e) => setFormData({ ...formData, campers: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Preferred dates, setup, and notes *
                      </label>
                      <textarea id="message" rows={6} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Example: June 20-21, 4 adults, 2 kids, 2 BYOT tents, sedan parking." className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                    </div>

                    <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-sm hover:bg-primary/90 transition-colors font-medium">
                      Prepare Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

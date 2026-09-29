"use client"

import { Button } from "../ui/Button"
import { ArrowRight, Phone, MessageCircle, CheckCircle } from "lucide-react"
import { siteConfig } from "@/lib/seo"
import { cn } from "@/lib/utils"

function Badge({ children, className, style, ...props }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <span className={cn("inline-flex items-center px-3 py-1 rounded-full text-xs font-medium", className)} style={style} {...props}>
      {children}
    </span>
  )
}

export function CTA() {
  const benefits = [
    "Free assessment session",
    "No obligation to continue",
    "Customized lesson plan",
    "Meet your instructor",
  ]

  const whatsappMessage = encodeURIComponent(
    "Hi DriveSmart Academy, I'd like to book a free driving assessment. Please share available slots."
  )

  return (
    <section className="py-20 sm:py-28" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-orange-600">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-center opacity-10" />
          <div className="relative p-8 sm:p-12 md:p-16 lg:p-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white", borderColor: "rgba(255,255,255,0.3)" }}>
                  Limited slots available this week
                </Badge>
                
                <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Start Your Driving Journey?
                </h2>
                
                <p className="text-blue-100 text-lg mb-8 max-w-xl">
                  Book a free 30-minute assessment session. Meet your instructor, try the car, 
                  and get a personalized learning plan. No commitment required.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="xl" className="group bg-white text-blue-700 hover:bg-blue-50" href="/contact">
                    Book Free Assessment
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="whatsapp" size="xl" href={`https://wa.me/91${siteConfig.contact.phoneRaw}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </Button>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-blue-100">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-6">Contact Us Directly</h3>
                  <div className="space-y-4">
                    <a 
                      href={`tel:${siteConfig.contact.phoneRaw}`}
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-blue-200 text-sm">Call Us Now</p>
                        <p className="font-semibold text-white">{siteConfig.contact.phone}</p>
                      </div>
                    </a>
                    <a 
                      href={`https://wa.me/91${siteConfig.contact.phoneRaw}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <p className="text-blue-200 text-sm">WhatsApp Us</p>
                        <p className="font-semibold text-white">Instant reply</p>
                      </div>
                    </a>
                    <a 
                      href={siteConfig.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-blue-200 text-sm">Visit Us</p>
                        <p className="font-semibold text-white text-sm">{siteConfig.contact.address}</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-orange-500/30 rounded-full blur-3xl" />
                <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
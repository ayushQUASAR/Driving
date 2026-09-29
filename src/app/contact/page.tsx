"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Select } from "@/components/ui/Select"
import { Textarea } from "@/components/ui/Textarea"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Phone, Mail, MapPin, Clock, CheckCircle, MessageCircle, MapPin as MapPinIcon, Shield, Star } from "lucide-react"
import { siteConfig } from "@/lib/seo"
import { generateBreadcrumbSchema } from "@/lib/schema"
import { faqs, serviceFAQs } from "@/data/faq"

const bookingSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  carPreference: z.enum(["manual", "automatic", "no-preference"]),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

const serviceOptions = [
  { value: "driving-lessons", label: "Driving Lessons (1:1 Training)" },
  { value: "learning-license", label: "Learning License Assistance" },
  { value: "driving-license", label: "Driving License Guidance" },
  { value: "refresher-course", label: "Refresher Course" },
]

const timeSlots = [
  "06:00 - 07:00", "07:00 - 08:00", "08:00 - 09:00", "09:00 - 10:00",
  "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00", "13:00 - 14:00",
  "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00",
  "18:00 - 19:00", "19:00 - 20:00",
]

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [isMounted, setIsMounted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      service: "driving-lessons",
      carPreference: "no-preference",
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
    },
  })

  useEffect(() => {
    setIsMounted(true)
    const params = new URLSearchParams(window.location.search)
    setValue("utmSource", params.get("utm_source") || "")
    setValue("utmMedium", params.get("utm_medium") || "")
    setValue("utmCampaign", params.get("utm_campaign") || "")
    
    const preSelectedCar = params.get("car")
    if (preSelectedCar && !watch("carPreference")) {
      setValue("carPreference", preSelectedCar as "manual" | "automatic" | "no-preference")
    }
  }, [setValue, watch])

  const onSubmit = async (data: BookingFormData) => {
    setSubmitStatus("submitting")
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      
      if (response.ok) {
        setSubmitStatus("success")
        setFormSubmitted(true)
        reset()
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "booking_submit", {
            event_category: "engagement",
            event_label: data.service,
            value: 1,
          })
        }
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    }
  }

  const whatsappMessage = encodeURIComponent(
    `Hi DriveSmart Academy, I'd like to book a ${serviceOptions.find(s => s.value === watch("service"))?.label || "driving lesson"}. Please share available slots.`
  )

  const structuredData = [
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Contact", url: `${siteConfig.url}/contact` },
    ]),
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-3" style={{ backgroundColor: "rgba(30, 58, 138, 0.1)", color: "#1e3a8a", borderColor: "#1e3a8a" }}>
                Book Your Free Assessment
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Get Started Today
              </h1>
              <p className="text-lg text-gray-600">
                Book a free 30-minute assessment. Meet your instructor, try the car, and get a 
                personalized learning plan. No obligation to continue.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="lg:sticky lg:top-24">
                <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                    Book Your Free Assessment
                  </h2>
                  
                  {submitStatus === "success" ? (
                    <div className="text-center py-6">
                      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-7 h-7 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Booking Submitted!</h3>
                      <p className="text-gray-600 mb-6">
                        We'll contact you within 30 minutes to confirm your assessment slot.
                      </p>
                      <Button className="w-full sm:w-auto" onClick={() => { setFormSubmitted(false); setSubmitStatus("idle"); }}>
                        Book Another Slot
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Input
                          label="Full Name"
                          placeholder="Your full name"
                          error={errors.name?.message}
                          {...register("name")}
                        />
                        <Input
                          label="Phone Number"
                          type="tel"
                          placeholder="98765 43210"
                          error={errors.phone?.message}
                          {...register("phone")}
                        />
                      </div>
                      
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="you@example.com"
                        error={errors.email?.message}
                        {...register("email")}
                      />

                      <div className="grid sm:grid-cols-2 gap-4">
                        <Select
                          label="Service"
                          options={serviceOptions}
                          placeholder="Select a service"
                          error={errors.service?.message}
                          {...register("service")}
                        />

                        <Select
                          label="Car Preference"
                          options={[
                            { value: "no-preference", label: "No Preference" },
                            { value: "manual", label: "Manual Transmission" },
                            { value: "automatic", label: "Automatic Transmission" },
                          ]}
                          placeholder="Transmission preference"
                          error={errors.carPreference?.message}
                          {...register("carPreference")}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <Input
                          label="Preferred Date"
                          type="date"
                          min={new Date().toISOString().split("T")[0]}
                          error={errors.preferredDate?.message}
                          {...register("preferredDate")}
                        />

                        <Select
                          label="Preferred Time"
                          options={timeSlots.map(t => ({ value: t, label: t }))}
                          placeholder="Select time"
                          error={errors.preferredTime?.message}
                          {...register("preferredTime")}
                        />
                      </div>

                      <Textarea
                        label="Additional Notes (Optional)"
                        placeholder="Any specific goals, concerns, or questions?"
                        rows={3}
                        {...register("message")}
                      />

                      <Button type="submit" className="w-full" size="lg" loading={submitStatus === "submitting"}>
                        {submitStatus === "submitting" ? "Submitting..." : "Book Free Assessment"}
                      </Button>

                      <p className="text-center text-xs text-gray-500">
                        By submitting, you agree to be contacted via phone/WhatsApp for booking purposes.
                      </p>
                    </form>
                  )}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <ContactCard icon={Phone} title="Call Us" value={siteConfig.contact.phone} href={`tel:${siteConfig.contact.phoneRaw}`} />
                  <ContactCard icon={MessageCircle} title="WhatsApp" value="Instant Reply" href={`https://wa.me/91${siteConfig.contact.phoneRaw}?text=${whatsappMessage}`} target="_blank" />
                  <ContactCard icon={MapPinIcon} title="Visit Us" value="Koramangala, Bangalore" href={siteConfig.googleMapsUrl} target="_blank" />
                </div>
              </div>

              <div>
                <Card variant="elevated" padding="lg" className="h-full">
                  <h3 className="text-lg font-bold text-gray-900 mb-5">Why Book With Us?</h3>
                  <ul className="space-y-3 mb-6" role="list">
                    {[
                      { icon: CheckCircle, text: "Free 30-minute assessment session" },
                      { icon: CheckCircle, text: "No obligation to continue after assessment" },
                      { icon: CheckCircle, text: "Personalized lesson plan based on your skill level" },
                      { icon: CheckCircle, text: "Same instructor throughout your course" },
                      { icon: CheckCircle, text: "Pick-up & drop within 5km radius" },
                      { icon: CheckCircle, text: "Flexible timings: 6 AM - 9 PM, 7 days a week" },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-sm text-gray-700">{item.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-blue-50 rounded-xl p-5">
                    <h4 className="font-semibold text-gray-900 mb-3">Business Hours</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {Object.entries(siteConfig.businessHours).map(([day, hours]) => (
                        <li key={day} className="flex justify-between">
                          <span className="capitalize">{day}</span>
                          <span className="font-medium">{hours.replace("-", " - ")}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Card variant="outlined" padding="lg" className="text-center">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-2">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">RTO Approved</h4>
                    <p className="text-xs text-gray-600">Government certified driving school</p>
                  </Card>
                  <Card variant="outlined" padding="lg" className="text-center">
                    <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center mx-auto mb-2">
                      <Star className="w-5 h-5 text-yellow-600 fill-current" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">4.8/5 Rating</h4>
                    <p className="text-xs text-gray-600">127+ Google reviews</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-gray-50" id="faqs">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-gray-600">
                Quick answers to common questions about booking and learning with us
              </p>
            </div>

            <div className="space-y-3 mb-10">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))}
            </div>

            <div className="border-t border-gray-200 pt-10">
              <h3 className="text-lg font-bold text-gray-900 mb-5 text-center">Service-Specific FAQs</h3>
              <div className="space-y-6">
                {Object.entries(serviceFAQs).map(([serviceId, serviceFaqs]) => (
                  <div key={serviceId}>
                    <h4 className="text-base font-semibold text-gray-900 mb-3 capitalize">{serviceId.replace("-", " ")}</h4>
                    <div className="space-y-2">
                      {serviceFaqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

function ContactCard({ icon: Icon, title, value, href, target, ...props }: { icon: React.ComponentType<{ className?: string }>; title: string; value: string; href: string; target?: string }) {
  return (
    <a href={href} target={target} rel={target ? "noopener noreferrer" : undefined} className="bg-white rounded-xl p-4 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all text-center min-h-[100px] flex flex-col justify-center">
      <Icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{title}</p>
      <p className="font-semibold text-gray-900 text-sm">{value}</p>
    </a>
  )
}

function FAQItem({ faq }: { faq: { question: string; answer: string } }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white">
      <summary className="flex items-center justify-between p-4 cursor-pointer list-none min-h-[48px] touch-manipulation">
        <span className="font-medium text-gray-900 pr-4 text-sm">{faq.question}</span>
        <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-4 pb-4 text-gray-600 text-sm animate-fade-in">
        {faq.answer}
      </div>
    </details>
  )
}
"use client"

import { ArrowRight, CheckCircle, Star, Shield, Users, Clock, Car, Calendar, RotateCcw, Award } from "lucide-react"
import { Button } from "../ui/Button"
import { siteConfig } from "@/lib/seo"

export function Hero() {
  const stats = [
    { value: "500+", label: "Students Trained" },
    { value: "95%+", label: "First Attempt Pass Rate" },
    { value: "15+", label: "Certified Instructors" },
    { value: "4.8★", label: "Google Rating" },
  ]

  const trustBadges = [
    { icon: Shield, text: "RTO Approved" },
    { icon: Users, text: "1:1 Training" },
    { icon: Clock, text: "6 AM - 9 PM Daily" },
    { icon: Car, text: "Free Pickup & Drop" },
    { icon: Calendar, text: "365 Days Open" },
    { icon: RotateCcw, text: "Pause & Resume" },
    { icon: Award, text: "Completion Guarantee" },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-auto opacity-5" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>Rated 4.8/5 on Google · 127+ Reviews</span>
            </div>
            
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Learn to Drive with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Confidence
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl">
              Bangalore's most trusted driving school. 1:1 personalized training, modern fleet, 
              complimentary theory sessions, and 95%+ first-attempt pass rate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="xl" className="group" href="/contact">
                Book Free Assessment
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="whatsapp" size="xl" href={`https://wa.me/91${siteConfig.contact.phoneRaw}?text=${encodeURIComponent("Hi, I'd like to book a free driving assessment.")}`} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-600">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 whitespace-nowrap">
                  <badge.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
                alt="Driving instructor guiding student in modern car"
                className="w-full h-auto aspect-[4/3] object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl shadow-gray-900/10 border border-gray-100 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Free Pick-up & Drop</p>
                  <p className="text-sm text-gray-500">Within 5km radius</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-5 shadow-xl shadow-gray-900/10 border border-gray-100 animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  <Star className="w-6 h-6 text-orange-600 fill-current" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">4.8/5 Rating</p>
                  <p className="text-sm text-gray-500">127+ Google Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
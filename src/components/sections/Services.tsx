"use client"

import { services } from "@/data/services"
import { Card } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Button } from "../ui/Button"
import { ArrowRight, CheckCircle, Clock, Users, BookOpen, Car } from "lucide-react"
import { cn } from "@/lib/utils"

const serviceIcons = {
  FileText: BookOpen,
  Car: Car,
  GraduationCap: Users,
  RefreshCw: ArrowRight,
}

export function Services() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Driving Solutions
          </h2>
          <p className="text-lg text-gray-600">
            From getting your learner's license to mastering advanced driving skills, 
            we offer complete end-to-end solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] || Car
            
            return (
              <Card key={service.id} variant="elevated" padding="lg" className="flex flex-col h-full transition-all hover:shadow-2xl hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-blue-600" aria-hidden="true" />
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="info" className="text-xs">{service.duration}</Badge>
                  {service.price && (
                    <Badge variant="success" className="text-xs">{service.price}</Badge>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-5 flex-1">{service.shortDescription}</p>
                
                <ul className="space-y-2 mb-6 flex-1" role="list">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full" href={service.ctaLink}>
                  {service.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button variant="secondary" size="lg" href="/services">
            View All Services & Details
          </Button>
        </div>
      </div>
    </section>
  )
}
import { Metadata } from "next"
import { services, serviceCategories } from "@/data/services"
import { Service } from "@/types"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { ArrowRight, CheckCircle, Clock, Users, BookOpen, Car, Shield, Star, MapPin } from "lucide-react"
import { siteConfig } from "@/lib/seo"
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema"

const serviceIcons = {
  FileText: BookOpen,
  Car: Car,
  GraduationCap: Users,
  RefreshCw: ArrowRight,
}

const featureIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Traffic rules": BookOpen,
  "Mock tests": CheckCircle,
  "Document": Shield,
  "RTO appointment": Clock,
  "Application": BookOpen,
  "Free study": BookOpen,
  "Practical test": MapPin,
  "Vehicle control": Car,
  "Parking": MapPin,
  "Document checklist": Shield,
  "RTO test day": Clock,
  "Re-test": ArrowRight,
  "1:1 instructor": Users,
  "Customized lesson": BookOpen,
  "Complimentary theory": BookOpen,
  "U-turns": MapPin,
  "Highway": Car,
  "Defensive driving": Shield,
  "Emergency braking": Shield,
  "Skill assessment": CheckCircle,
  "Targeted practice": MapPin,
  "Updated traffic rules": BookOpen,
  "Modern car": Car,
  "Corporate": Users,
}

export const metadata: Metadata = {
  title: "Our Services | DriveSmart Academy",
  description: "Complete driving solutions: Learning License assistance, Driving License guidance, 1:1 Driving Lessons, and Refresher Courses. Expert instructors, modern fleet, 95%+ pass rate.",
  openGraph: {
    title: "Our Services | DriveSmart Academy",
    description: "Complete driving solutions: Learning License, Driving License, 1:1 Driving Lessons, Refresher Courses.",
  },
}

function ServiceDetail({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] || Car

  return (
    <article className="mb-16 pb-16 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0" itemScope itemType={service.schemaType === "Course" ? "https://schema.org/Course" : "https://schema.org/Service"}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="sticky top-24">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-blue-600" aria-hidden="true" />
            </div>
            
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="info">{service.duration}</Badge>
              {service.price && <Badge variant="success">{service.price}</Badge>}
              <Badge variant="outline">{service.schemaType}</Badge>
            </div>
            
            <h2 itemProp="name" className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
            <p itemProp="description" className="text-gray-600 mb-6">{service.fullDescription}</p>

            <div className="space-y-3 mb-6 p-4 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-900">Key Benefits</h3>
              <ul className="space-y-2" role="list">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <Button className="w-full" size="lg" href={service.ctaLink}>
                {service.ctaText}
              </Button>
              <Button variant="whatsapp" className="w-full" href={`https://wa.me/91${siteConfig.contact.phoneRaw}?text=${encodeURIComponent(`Hi, I'm interested in ${service.title}. Can you share more details?`)}`} target="_blank" rel="noopener noreferrer">
                WhatsApp for Details
              </Button>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <img
              src={getServiceImage(service.id)}
              alt={`${service.title} - DriveSmart Academy`}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.features.map((feature, index) => {
                  const FeatureIcon = featureIcons[feature.split(" ")[0]] || CheckCircle
                  return (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                      <FeatureIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function getServiceImage(serviceId: string): string {
  const images: Record<string, string> = {
    "learning-license": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    "driving-license": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
    "driving-lessons": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    "refresher-course": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  }
  return images[serviceId] || images["driving-lessons"]
}

export default function ServicesPage() {
  const structuredData = [
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/services` },
    ]),
    ...services.map(generateServiceSchema),
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4" style={{ backgroundColor: "rgba(30, 58, 138, 0.1)", color: "#1e3a8a", borderColor: "#1e3a8a" }}>
                Our Services
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Complete Driving Solutions for Every Need
              </h1>
              <p className="text-xl text-gray-600">
                From getting your learner's license to mastering advanced driving skills, 
                we offer end-to-end solutions with expert guidance and modern fleet.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {serviceCategories.map((category) => (
              <div key={category.id} className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <span className="w-1 h-8 bg-blue-600 rounded-full" />
                  {category.title}
                </h2>
                <div className="space-y-8">
                  {category.services.map((serviceId) => {
                    const service = services.find((s) => s.id === serviceId)
                    return service ? <ServiceDetail key={service.id} service={service} /> : null
                  })}
                </div>
              </div>
            ))}

            <div className="mt-12 text-center">
              <Button variant="secondary" size="lg" href="/contact">
                Get Started Today
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
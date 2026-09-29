import { Metadata } from "next"
import { Hero } from "@/components/sections/Hero"
import { USP } from "@/components/sections/USP"
import { Services } from "@/components/sections/Services"
import { Fleet } from "@/components/sections/Fleet"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQSection } from "@/components/sections/FAQ"
import { CTA } from "@/components/sections/CTA"
import { siteConfig } from "@/lib/seo"
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema"
import { faqs } from "@/data/faq"

export const metadata: Metadata = {
  title: "Professional Driving School in Bangalore | DriveSmart Academy",
  description: "Learn driving with 1:1 personalized training, modern fleet (manual & automatic), complimentary theory sessions, and 95%+ first-attempt pass rate. Book free assessment today!",
  keywords: siteConfig.keywords,
  openGraph: {
    title: "DriveSmart Academy | Professional Driving School in Bangalore",
    description: "Learn driving with 1:1 personalized training, modern fleet, complimentary theory sessions, and 95%+ first-attempt pass rate.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "DriveSmart Academy - Professional Driving School" }],
  },
}

export default function HomePage() {
  const structuredData = [
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([{ name: "Home", url: siteConfig.url }]),
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <USP />
      <Services />
      <Fleet />
      <Testimonials />
      <FAQSection />
      <CTA />
    </>
  )
}
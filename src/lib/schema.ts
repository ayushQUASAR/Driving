import { siteConfig } from "./seo"
import { Service } from "@/types"
import { Car } from "@/types"
import { Testimonial } from "@/types"
import { FAQ } from "@/types"

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.state,
      postalCode: siteConfig.contact.pincode,
      addressCountry: siteConfig.contact.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9352,
      longitude: 77.6245,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, Net Banking",
    areaServed: {
      "@type": "City",
      name: siteConfig.contact.city,
    },
    hasMap: siteConfig.googleMapsUrl,
    sameAs: Object.values(siteConfig.links),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  }
}

export function generateServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": service.schemaType,
    name: service.title,
    description: service.fullDescription,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      "@id": `${siteConfig.url}#organization`,
    },
    offers: {
      "@type": "Offer",
      name: service.title,
      description: service.shortDescription,
      price: service.price?.replace(/[₹,]/g, "") || "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}${service.ctaLink}`,
    },
    areaServed: siteConfig.contact.city,
    hasCourseInstance: service.schemaType === "Course" ? {
      "@type": "CourseInstance",
      courseMode: "in-person",
      courseWorkload: service.duration,
    } : undefined,
  }
}

export function generateCarSchema(car: Car) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: car.name,
    description: car.description,
    brand: {
      "@type": "Brand",
      name: car.name.split(" ")[0],
    },
    vehicleConfiguration: car.transmission,
    bodyType: car.type,
    modelDate: car.year.toString(),
    fuelType: car.fuelType,
    seatingCapacity: car.seatingCapacity,
    image: car.images,
    offers: {
      "@type": "Offer",
      price: car.pricePerHour?.toString() || "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: car.pricePerHour?.toString() || "0",
        priceCurrency: "INR",
        unitText: "hour",
      },
    },
  }
}

export function generateReviewSchema(testimonials: Testimonial[]) {
  return testimonials.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.name,
    },
    datePublished: t.date,
    reviewBody: t.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      "@id": `${siteConfig.url}#organization`,
    },
  }))
}

export function generateAggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      "@id": `${siteConfig.url}#organization`,
    },
    ratingValue: "4.8",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  }
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  }
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}
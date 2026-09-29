import { Metadata } from "next"
import { siteConfig } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Contact & Book | DriveSmart Academy",
  description: "Book your free driving assessment or contact DriveSmart Academy. Call +91 98765 43210, WhatsApp us, or fill the form below. Flexible timings 6 AM - 9 PM.",
  openGraph: {
    title: "Contact & Book | DriveSmart Academy",
    description: "Book free driving assessment. Call +91 98765 43210 or WhatsApp. Flexible timings 6 AM - 9 PM.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "DriveSmart Academy - Contact Us" }],
  },
}
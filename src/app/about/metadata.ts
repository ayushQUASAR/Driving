import { Metadata } from "next"
import { siteConfig } from "@/lib/seo"

export const metadata: Metadata = {
  title: "About Us | DriveSmart Academy",
  description: "Learn about DriveSmart Academy - Bangalore's trusted driving school with 1:1 personalized training, certified instructors, modern fleet, and 95%+ first-attempt pass rate.",
  openGraph: {
    title: "About Us | DriveSmart Academy",
    description: "Bangalore's trusted driving school with 1:1 personalized training, certified instructors, modern fleet, and 95%+ first-attempt pass rate.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "DriveSmart Academy - About Us" }],
  },
}
import { Metadata } from "next"
import { siteConfig } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Our Fleet | DriveSmart Academy",
  description: "Choose from 8 modern dual-control vehicles (2023-2024 models): Swift, Baleno, Dzire, Brezza. Manual & automatic options. All cars equipped with safety features.",
  openGraph: {
    title: "Our Fleet | DriveSmart Academy",
    description: "Modern dual-control fleet: Swift, Baleno, Dzire, Brezza. Manual & automatic options available.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "DriveSmart Academy Fleet" }],
  },
}
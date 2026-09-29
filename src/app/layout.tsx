import type { Metadata, Viewport } from "next"
import { Inter, DM_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { siteConfig, defaultMeta } from "@/lib/seo"
import { generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/schema"
import { Analytics } from "@/components/Analytics"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  ...defaultMeta,
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: defaultMeta.robots,
  openGraph: defaultMeta.openGraph,
  twitter: defaultMeta.twitter,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e3a8a" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a8a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = [
    generateLocalBusinessSchema(),
    generateWebSiteSchema(),
  ]

  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
      </head>
      <body className="min-h-full flex flex-col font-sans text-gray-900 bg-white">
        <Analytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
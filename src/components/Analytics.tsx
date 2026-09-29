"use client"

import { useEffect } from "react"
import { siteConfig } from "@/lib/seo"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
    dataLayer: any[]
    _fbq: any
  }
}

export function Analytics() {
  const ga4Id = siteConfig.analytics.ga4Id
  const metaPixelId = siteConfig.analytics.metaPixelId

  useEffect(() => {
    if (ga4Id && ga4Id !== "G-XXXXXXXXXX") {
      const script1 = document.createElement("script")
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`
      document.head.appendChild(script1)

      window.dataLayer = window.dataLayer || []
      window.gtag = function gtag(...args: any[]) {
        window.dataLayer.push(args)
      }
      window.gtag("js", new Date())
      window.gtag("config", ga4Id, {
        send_page_view: true,
      })
    }

    if (metaPixelId && metaPixelId !== "XXXXXXXXXX") {
      const fbq = window.fbq || function(...args: any[]) {
        (fbq as any).queue = (fbq as any).queue || []
        ;(fbq as any).queue.push(args)
      }
      window.fbq = fbq
      window._fbq = window._fbq || fbq
      
      ;(window.fbq as any).loaded = true
      ;(window.fbq as any).version = "2.0"
      ;(window.fbq as any).queue = []
      
      const script = document.createElement("script")
      script.async = true
      script.src = "https://connect.facebook.net/en_US/fbevents.js"
      document.head.appendChild(script)
      
      window.fbq("init", metaPixelId)
      window.fbq("track", "PageView")
    }
  }, [ga4Id, metaPixelId])

  return null
}

export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", eventName, parameters)
    }
    if (window.fbq) {
      window.fbq("trackCustom", eventName, parameters)
    }
  }
}

export function trackConversion(eventName: string, value?: number, currency = "INR") {
  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", eventName, {
        value,
        currency,
      })
    }
    if (window.fbq) {
      window.fbq("track", "Lead", {
        value,
        currency,
      })
    }
  }
}
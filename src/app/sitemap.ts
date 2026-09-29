import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const lastModified = new Date()

  const routes = [
    "",
    "/services",
    "/fleet",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  return routes
}
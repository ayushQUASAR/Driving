import Link from "next/link"
import { siteConfig } from "@/lib/seo"
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react"

export function Footer() {
  const footerLinks = {
    services: [
      { label: "Learning License", href: "/services#learning-license" },
      { label: "Driving License", href: "/services#driving-license" },
      { label: "Driving Lessons", href: "/services#driving-lessons" },
      { label: "Refresher Course", href: "/services#refresher-course" },
    ],
    fleet: [
      { label: "Hatchbacks", href: "/fleet?type=hatchback" },
      { label: "Sedans", href: "/fleet?type=sedan" },
      { label: "SUVs", href: "/fleet?type=suv" },
      { label: "Automatic Cars", href: "/fleet?transmission=automatic" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Instructors", href: "/about#instructors" },
      { label: "Testimonials", href: "/about#testimonials" },
      { label: "FAQs", href: "/contact#faqs" },
    ],
    support: [
      { label: "Contact Us", href: "/contact" },
      { label: "Book a Lesson", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  }

  const formatHours = (day: string, hours: string) => {
    const [open, close] = hours.split("-")
    return `${day}: ${open} - ${close}`
  }

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6" aria-label={`${siteConfig.name} - Home`}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="font-bold text-2xl text-white">{siteConfig.name}</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              Professional driving school offering 1:1 personalized training, license assistance, and comprehensive lessons with modern fleet. Your safety is our priority.
            </p>
            <div className="flex items-center gap-2 text-yellow-400 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <span className="text-white font-semibold ml-2">4.8 (127 reviews)</span>
            </div>
            <div className="flex gap-4">
              <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href={siteConfig.links.google} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Google Reviews">
                <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Our Fleet</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.fleet.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <address className="not-italic space-y-3">
              <a href={`tel:${siteConfig.contact.phoneRaw}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                {siteConfig.contact.phone}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                {siteConfig.contact.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{siteConfig.contact.address}</span>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Business Hours
              </h4>
              <ul className="space-y-1 text-sm">
                {Object.entries(siteConfig.businessHours).map(([day, hours]) => (
                  <li key={day} className="flex justify-between">
                    <span className="capitalize">{day}</span>
                    <span>{formatHours(day, hours)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-semibold text-white mb-3">Why Choose Us?</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <li className="flex items-center gap-2">✓ 1:1 Personalized Training</li>
                <li className="flex items-center gap-2">✓ Complimentary Theory Sessions</li>
                <li className="flex items-center gap-2">✓ Modern Fleet (Manual & Auto)</li>
                <li className="flex items-center gap-2">✓ Pick-up & Drop Service</li>
                <li className="flex items-center gap-2">✓ Flexible Timings (6 AM - 9 PM)</li>
                <li className="flex items-center gap-2">✓ Female Instructors Available</li>
                <li className="flex items-center gap-2">✓ 95%+ First Attempt Pass Rate</li>
                <li className="flex items-center gap-2">✓ Transparent Pricing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
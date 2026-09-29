"use client"

import Link from "next/link"
import { useState, useEffect, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/seo"
import { Button } from "@/components/ui/Button"
import { Menu, X, Phone, MapPin, Clock } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 20)
      lastScrollY.current = currentScrollY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu()
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen, closeMobileMenu])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        closeMobileMenu()
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileMenuOpen, closeMobileMenu])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/fleet", label: "Our Fleet" },
    { href: "/about", label: "Why Us" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2" aria-label={`${siteConfig.name} - Home`}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="font-bold text-xl text-gray-900 hidden sm:block">{siteConfig.name}</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <a href={`tel:${siteConfig.contact.phoneRaw}`} className="font-medium hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">
                {siteConfig.contact.phone}
              </a>
            </div>
            <Button variant="primary" size="sm" href="/contact">
              Book Now
            </Button>
          </div>

          {/* Hamburger Button - High Contrast */}
          <button
            className="md:hidden relative p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            {/* Animated indicator */}
            <span className={cn(
              "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500 transition-all duration-200",
              isMobileMenuOpen ? "scale-100" : "scale-0"
            )} />
          </button>
        </div>

        {/* Mobile Menu - Dark Theme for Contrast */}
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className={cn(
            "md:hidden overflow-hidden transition-all duration-400 ease-out",
            isMobileMenuOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"
          )}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="bg-gray-950 border-t border-gray-800">
            <div className="px-4 py-4 border-b border-gray-800 flex items-center justify-between">
              <span className="font-semibold text-white">Menu</span>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-4 text-base font-medium text-gray-200 hover:text-white rounded-xl hover:bg-gray-800 active:bg-gray-700 transition-colors touch-manipulation border border-transparent hover:border-gray-700"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="px-4 pb-6 space-y-3 border-t border-gray-800 pt-4">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-center gap-3 px-4 py-4 text-gray-200 font-medium rounded-xl hover:bg-gray-800 active:bg-gray-700 transition-colors touch-manipulation border border-gray-700"
              >
                <Phone className="w-6 h-6 text-orange-400 flex-shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <Button variant="primary" className="w-full py-4 text-lg" href="/contact" onClick={closeMobileMenu}>
                Book Free Assessment
              </Button>
              <Button variant="whatsapp" className="w-full py-4 text-lg" href={generateWhatsAppUrl(siteConfig.contact.phoneRaw, "Hi, I'd like to book a driving lesson.")} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </Button>
            </div>

            {/* Quick info badges */}
            <div className="px-4 pb-6 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-blue-900/50 text-blue-300 border border-blue-800">
                365 Days Open
              </span>
              <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-green-900/50 text-green-300 border border-green-800">
                Free Pickup & Drop
              </span>
              <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-amber-900/50 text-amber-300 border border-amber-800">
                Pause & Resume
              </span>
              <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-rose-900/50 text-rose-300 border border-rose-800">
                Completion Guarantee
              </span>
            </div>
          </div>
        </div>

        {/* Backdrop overlay when menu is open */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 md:hidden animate-fade-in"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}
      </nav>
    </header>
  )
}

function generateWhatsAppUrl(phone: string, message: string): string {
  const cleaned = phone.replace(/\D/g, "")
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/91${cleaned}?text=${encodedMessage}`
}
"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { testimonials, googleReviewsSummary, getFeaturedTestimonials } from "@/data/testimonials"
import { Testimonial } from "@/types"
import { Card } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Button } from "../ui/Button"
import { Star, Quote, MapPin, Calendar, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/seo"

interface GoogleReview {
  author_name: string
  profile_photo_url: string
  rating: number
  relative_time_description: string
  text: string
}

export function Testimonials() {
  const [googleReviews, setGoogleReviews] = useState<GoogleReview[]>([])
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const featuredTestimonials = getFeaturedTestimonials(6)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetchGoogleReviews()
  }, [])

  const fetchGoogleReviews = async () => {
    try {
      const response = await fetch("/api/google-reviews")
      if (response.ok) {
        const data = await response.json()
        setGoogleReviews(data.reviews || [])
      }
    } catch (error) {
      console.log("Google reviews not available, using fallback")
    } finally {
      setIsLoadingGoogle(false)
    }
  }

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length)
  }, [])

  const goToTestimonial = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextTestimonial()
      } else {
        prevTestimonial()
      }
    }
    setTouchStartX(null)
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [nextTestimonial])

  const displayTestimonials = featuredTestimonials.slice(currentIndex, currentIndex + 3)
    .concat(featuredTestimonials.slice(0, Math.max(0, 3 - (featuredTestimonials.length - currentIndex))))

  return (
    <section className="py-16 sm:py-24 bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <Badge variant="outline" className="mb-3">Student Reviews</Badge>
            <h2 id="testimonials-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Trusted by 500+ Students Across Bangalore
            </h2>
            <p className="text-base sm:text-lg text-gray-600">Real experiences from real learners</p>
          </div>
          
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
              <span className="ml-2 font-bold text-lg text-gray-900">{googleReviewsSummary.rating}</span>
              <span className="text-gray-600">({googleReviewsSummary.totalReviews} reviews)</span>
            </div>
            <Badge variant="success" className="hidden sm:inline-flex">Google Verified</Badge>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div 
          ref={carouselRef}
          className="relative mb-10"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={(e) => e.preventDefault()}
          style={{ touchAction: 'pan-y' }}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                width: `${featuredTestimonials.length * (100 / 3)}%`
              }}
              role="region"
              aria-label="Testimonials carousel"
            >
              {featuredTestimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="w-full px-2 sm:px-3"
                  style={{ width: `${100 / 3}%`, flexShrink: 0 }}
                >
                  <TestimonialCard testimonial={testimonial} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows - visible on mobile */}
          <div className="flex justify-center gap-3 mt-6 md:hidden">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevTestimonial} 
              aria-label="Previous testimonial"
              className="min-w-[44px] min-h-[44px] p-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextTestimonial} 
              aria-label="Next testimonial"
              className="min-w-[44px] min-h-[44px] p-2"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex justify-center items-center gap-3 mt-8">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevTestimonial} 
              aria-label="Previous testimonial"
              className="min-w-[44px] min-h-[44px] p-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {featuredTestimonials.slice(0, 6).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all min-w-[10px] min-h-[10px]",
                    index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                  )}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextTestimonial} 
              aria-label="Next testimonial"
              className="min-w-[44px] min-h-[44px] p-2"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Google Reviews Summary</h3>
                <p className="text-gray-600">{googleReviewsSummary.totalReviews}+ verified reviews on Google</p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-gray-900">{googleReviewsSummary.rating}/5.0</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{siteConfig.contact.city}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Updated {new Date(googleReviewsSummary.lastFetched).toLocaleDateString()}</span>
              </div>
            </div>

            <Button variant="outline" href={siteConfig.links.google} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
              View All on Google
            </Button>
          </div>

          {googleReviews.length > 0 && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {googleReviews.slice(0, 3).map((review, index) => (
                <GoogleReviewCard key={index} review={review} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <Card variant="elevated" padding="lg" className="relative h-full">
      <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-100" aria-hidden="true" />
      
      <div className="flex items-center gap-3 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
      
      <div className="flex items-center gap-3">
        {testimonial.photo ? (
          <img src={testimonial.photo} alt="" className="w-12 h-12 rounded-full object-cover" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center text-white font-bold">
            {testimonial.initials}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.course}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
        <Calendar className="w-3.5 h-3.5" />
        <span>{new Date(testimonial.date).toLocaleDateString("en-IN", { month: "long", year: "numeric" })}</span>
        <span>·</span>
        <MapPin className="w-3.5 h-3.5" />
        <span>{testimonial.location}</span>
      </div>
    </Card>
  )
}

function GoogleReviewCard({ review }: { review: GoogleReview }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
        ))}
      </div>
      <p className="text-gray-700 text-sm mb-3 line-clamp-3">"{review.text}"</p>
      <div className="flex items-center gap-2 text-xs text-gray-500">
        {review.profile_photo_url && (
          <img src={review.profile_photo_url} alt="" className="w-6 h-6 rounded-full" />
        )}
        <span className="font-medium">{review.author_name}</span>
        <span>·</span>
        <span>{review.relative_time_description}</span>
      </div>
    </div>
  )
}
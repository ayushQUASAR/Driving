export interface Service {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
  features: string[]
  benefits: string[]
  duration: string
  price?: string
  ctaText: string
  ctaLink: string
  schemaType: "Course" | "Service"
}

export interface Car {
  id: string
  name: string
  type: "hatchback" | "sedan" | "suv"
  transmission: "manual" | "automatic" | "both"
  year: number
  isNew: boolean
  fuelType: "petrol" | "diesel" | "cng" | "electric"
  seatingCapacity: number
  features: string[]
  images: string[]
  thumbnail: string
  description: string
  suitableFor: ("beginners" | "license-test" | "refresher" | "highway" | "parking" | "traffic")[]
  pricePerHour?: number
}

export interface Testimonial {
  id: string
  name: string
  initials: string
  photo?: string
  rating: 5
  course: "Learning License" | "Driving Lessons" | "Refresher Course" | "License Test Prep"
  text: string
  date: string
  location: string
  isGoogleReview?: boolean
  googleReviewId?: string
}

export interface GoogleReview {
  author_name: string
  author_url?: string
  language: string
  original_language: string
  profile_photo_url: string
  rating: number
  relative_time_description: string
  text: string
  time: number
  translated?: boolean
}

export interface GooglePlaceDetails {
  rating: number
  user_ratings_total: number
  reviews: GoogleReview[]
  name: string
  formatted_address: string
  place_id: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Lesson {
  id: string
  title: string
  description: string
  icon: string
  duration: string
  difficulty: "beginner" | "intermediate" | "advanced"
}

export interface USPFeature {
  id: string
  title: string
  description: string
  icon: string
  highlight?: string
}

export interface BookingFormData {
  service: string
  carPreference: "manual" | "automatic" | "no-preference"
  preferredDate: string
  preferredTime: string
  name: string
  phone: string
  email: string
  message?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}
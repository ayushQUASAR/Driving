import { Testimonial } from "@/types"

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    initials: "PS",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    rating: 5,
    course: "Driving Lessons",
    text: "Best decision I made! My instructor Rajesh was incredibly patient and taught me everything from basics to highway driving. The 1:1 attention made all the difference - I never felt rushed. Passed my test on first attempt!",
    date: "2024-11-15",
    location: "RK Puram, New Delhi",
  },
  {
    id: "t2",
    name: "Arjun Reddy",
    initials: "AR",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 5,
    course: "Learning License",
    text: "The learning license process was seamless. They handled all paperwork, gave me mock tests, and I cleared the RTO exam in first try. The theory classes were comprehensive and easy to understand. Highly recommended!",
    date: "2024-10-28",
    location: "Vasant Vihar, New Delhi",
  },
  {
    id: "t3",
    name: "Sneha Patel",
    initials: "SP",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    rating: 5,
    course: "Driving Lessons",
    text: "As a complete beginner, I was nervous. But my instructor Meera made me comfortable from day one. The complimentary theory sessions on rules & driving behavior were eye-opening. Parking and U-turns are now my strongest skills!",
    date: "2024-11-03",
    location: "Chanakyapuri, New Delhi",
  },
  {
    id: "t4",
    name: "Vikram Singh",
    initials: "VS",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    rating: 5,
    course: "License Test Prep",
    text: "Needed to pass my driving test urgently for a job. Pro Motor arranged intensive sessions focusing exactly on the test route. The instructor knew every tricky spot. Cleared on first attempt - worth every penny!",
    date: "2024-09-22",
    location: "Safdarjung Enclave, New Delhi",
  },
  {
    id: "t5",
    name: "Anita Desai",
    initials: "AD",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286523?w=150&q=80",
    rating: 5,
    course: "Refresher Course",
    text: "Hadn't driven in 5 years. The refresher course was perfect - they assessed my skills first, then focused only on what I needed. Highway driving and parallel parking were my weak areas, now I'm confident!",
    date: "2024-10-12",
    location: "Munirka, New Delhi",
  },
  {
    id: "t6",
    name: "Rohit Kumar",
    initials: "RK",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    rating: 5,
    course: "Driving Lessons",
    text: "The automatic car option made learning so much easier. No clutch stress, pure focus on road sense. Instructor was punctual, professional, and the pick-up/drop service saved me so much time. 5 stars!",
    date: "2024-11-20",
    location: "RK Puram Sector 7, New Delhi",
  },
]

export const googleReviewsSummary = {
  rating: 4.8,
  totalReviews: 127,
  placeId: "ChIJxxxxxxxxxxxxxx",
  lastFetched: "2024-12-01",
}

export function getTestimonialsByCourse(course: Testimonial["course"]): Testimonial[] {
  return testimonials.filter((t) => t.course === course)
}

export function getFeaturedTestimonials(limit = 3): Testimonial[] {
  return testimonials.slice(0, limit)
}
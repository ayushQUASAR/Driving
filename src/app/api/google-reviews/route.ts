import { NextRequest, NextResponse } from "next/server"

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID || "ChIJxxxxxxxxxxxxxx"

export async function GET(request: NextRequest) {
  if (!GOOGLE_PLACES_API_KEY) {
    return NextResponse.json({ 
      reviews: [], 
      rating: 4.8,
      user_ratings_total: 127,
      error: "Google Places API not configured" 
    })
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews,rating,user_ratings_total,name,formatted_address&key=${GOOGLE_PLACES_API_KEY}`
    
    const response = await fetch(url, {
      next: { revalidate: 3600 }
    })
    
    const data = await response.json()

    if (data.status !== "OK") {
      console.error("Google Places API error:", data.status, data.error_message)
      return NextResponse.json({ 
        reviews: [], 
        rating: 4.8,
        user_ratings_total: 127,
        error: "Failed to fetch reviews"
      })
    }

    const reviews = data.result.reviews?.slice(0, 5).map((review: any) => ({
      author_name: review.author_name,
      author_url: review.author_url,
      language: review.language,
      original_language: review.original_language,
      profile_photo_url: review.profile_photo_url,
      rating: review.rating,
      relative_time_description: review.relative_time_description,
      text: review.text,
      time: review.time,
      translated: review.translated,
    })) || []

    return NextResponse.json({
      reviews,
      rating: data.result.rating,
      user_ratings_total: data.result.user_ratings_total,
      name: data.result.name,
      formatted_address: data.result.formatted_address,
      lastFetched: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Google Reviews API error:", error)
    return NextResponse.json({ 
      reviews: [], 
      rating: 4.8,
      user_ratings_total: 127,
      error: "Failed to fetch reviews"
    })
  }
}
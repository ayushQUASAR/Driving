import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { name, phone, email, service, carPreference, preferredDate, preferredTime, message, utmSource, utmMedium, utmCampaign } = body

    if (!name || !phone || !email || !service || !preferredDate || !preferredTime) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const bookingData = {
      name,
      phone,
      email,
      service,
      carPreference,
      preferredDate,
      preferredTime,
      message: message || "",
      utmSource: utmSource || "",
      utmMedium: utmMedium || "",
      utmCampaign: utmCampaign || "",
      submittedAt: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || "unknown",
    }

    console.log("New booking:", bookingData)

    return NextResponse.json({ 
      success: true, 
      message: "Booking submitted successfully",
      bookingId: `DS-${Date.now()}`
    })
  } catch (error) {
    console.error("Booking error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
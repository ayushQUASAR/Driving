"use client"

import { useState, useEffect } from "react"
import { cars, carFilters, getCarsByType, getCarsByTransmission } from "@/data/cars"
import { Car } from "@/types"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { CheckCircle, Settings, Gauge, Fuel, Users, Calendar, Shield, Sparkles, Car as CarIcon, Truck, Search, Filter } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/seo"
import { generateCarSchema, generateBreadcrumbSchema } from "@/lib/schema"

const transmissionLabels = {
  manual: "Manual",
  automatic: "Automatic",
  both: "Both",
}

const fuelLabels = {
  petrol: "Petrol",
  diesel: "Diesel",
  cng: "CNG",
  electric: "Electric",
}

const suitableLabels = {
  beginners: "Beginners",
  "license-test": "License Test",
  refresher: "Refresher",
  highway: "Highway",
  parking: "Parking",
  traffic: "Heavy Traffic",
}

export default function FleetPage() {
  const [selectedType, setSelectedType] = useState("all")
  const [selectedTransmission, setSelectedTransmission] = useState("all")
  const [filteredCars, setFilteredCars] = useState(cars)

  useEffect(() => {
    const filtered = cars.filter((car) => {
      const typeMatch = selectedType === "all" || car.type === selectedType
      const transmissionMatch = 
        selectedTransmission === "all" || 
        car.transmission === selectedTransmission ||
        (selectedTransmission === "automatic" && car.transmission === "both") ||
        (selectedTransmission === "manual" && car.transmission === "both")
      return typeMatch && transmissionMatch
    })
    setFilteredCars(filtered)
  }, [selectedType, selectedTransmission])

  const structuredData = [
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Our Fleet", url: `${siteConfig.url}/fleet` },
    ]),
    ...cars.map(generateCarSchema),
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4" style={{ backgroundColor: "rgba(30, 58, 138, 0.1)", color: "#1e3a8a", borderColor: "#1e3a8a" }}>
                Our Modern Fleet
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Learn in the Car That Suits You Best
              </h1>
              <p className="text-xl text-gray-600">
                Choose from 8 modern dual-control vehicles (2023-2024 models) with manual & automatic options. 
                All cars equipped with ABS, airbags, reverse cameras & 360° cameras for stress-free learning.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Filter Vehicles</h2>
                <p className="text-gray-600">Find the perfect car for your learning style</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto" role="group" aria-label="Filter cars">
                <div className="flex items-center gap-2 flex-1 sm:flex-none">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-600">Type:</span>
                  <div className="flex gap-2 flex-wrap">
                    {carFilters.types.map((filter) => (
                      <button
                        key={filter.value}
                        onClick={() => setSelectedType(filter.value)}
                        className={cn(
                          "px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap",
                          selectedType === filter.value
                            ? "bg-blue-600 text-white shadow-lg"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        )}
                        aria-pressed={selectedType === filter.value}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-1 sm:flex-none">
                  <Settings className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-600">Transmission:</span>
                  <div className="flex gap-2 flex-wrap">
                    {carFilters.transmissions.map((filter) => (
                      <button
                        key={filter.value}
                        onClick={() => setSelectedTransmission(filter.value)}
                        className={cn(
                          "px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap",
                          selectedTransmission === filter.value
                            ? "bg-orange-600 text-white shadow-lg"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        )}
                        aria-pressed={selectedTransmission === filter.value}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8 flex items-center gap-3 text-sm text-gray-600">
              <Search className="w-4 h-4" />
              <span>Showing <strong>{filteredCars.length}</strong> of <strong>{cars.length}</strong> vehicles</span>
              {filteredCars.length === 0 && (
                <span className="text-orange-600">No vehicles match your filters</span>
              )}
            </div>

            {filteredCars.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Truck className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No vehicles found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters to see more options</p>
                <Button variant="outline" onClick={() => { setSelectedType("all"); setSelectedTransmission("all"); }}>
                  Clear All Filters
                </Button>
              </div>
            )}

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <FeatureCard
                icon={Shield}
                title="Dual Controls"
                description="All cars equipped with instructor brake & accelerator for maximum safety"
              />
              <FeatureCard
                icon={Sparkles}
                title="2023-2024 Models"
                description="Latest models with modern safety features like ABS, airbags, 360° cameras"
              />
              <FeatureCard
                icon={CarIcon}
                title="Manual & Automatic"
                description="Choose transmission based on your license type and comfort level"
              />
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Not Sure Which Car to Choose?
              </h2>
              <p className="text-lg text-gray-600">
                Our instructors can recommend the best vehicle based on your goals, 
                license type, and comfort level during your free assessment.
              </p>
            </div>
            <div className="text-center">
              <Button size="lg" href="/contact">
                Book Free Assessment
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

function CarCard({ car }: { car: Car }) {
  return (
    <Card variant="outlined" padding="none" className="overflow-hidden h-full transition-all hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={car.thumbnail}
          alt={`${car.name} - ${car.transmission} ${car.type}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 right-3 flex flex-wrap justify-between gap-2">
          {car.isNew && (
            <Badge variant="success">New</Badge>
          )}
          <Badge variant="default" className="capitalize">{car.type}</Badge>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap justify-between gap-2">
          <Badge variant={car.transmission === "automatic" ? "info" : "outline"}>
            {transmissionLabels[car.transmission]}
          </Badge>
          <Badge variant="outline">{fuelLabels[car.fuelType]}</Badge>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-bold text-lg text-gray-900">{car.name}</h3>
            <p className="text-sm text-gray-500">({car.year} Model)</p>
          </div>
          {car.pricePerHour && (
            <div className="text-right flex-shrink-0">
              <p className="font-bold text-lg text-blue-600">₹{car.pricePerHour.toLocaleString()}</p>
              <p className="text-xs text-gray-500">per hour</p>
            </div>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{car.description}</p>

        <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-gray-400" />
            <span>{car.seatingCapacity} Seater</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Shield className="w-4 h-4 text-gray-400" />
            <span>Dual Control</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Suitable for">
          {car.suitableFor.map((suitable) => (
            <Badge key={suitable} variant="outline" className="text-xs">
              {suitableLabels[suitable]}
            </Badge>
          ))}
        </div>

        <div className="space-y-2 mb-5">
          {car.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
          {car.features.length > 3 && (
            <p className="text-sm text-gray-500">+{car.features.length - 3} more features</p>
          )}
        </div>

        <Button variant="outline" className="w-full" href={`/contact?car=${car.id}`}>
          Book This Car
        </Button>
      </div>
    </Card>
  )
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.ComponentType<{ className?: string }>; title: string; description: string }) {
  return (
    <Card variant="elevated" padding="lg" className="text-center">
      <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-7 h-7 text-blue-600" aria-hidden="true" />
      </div>
      <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  )
}
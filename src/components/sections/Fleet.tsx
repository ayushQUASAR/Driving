"use client"

import { useState, useRef } from "react"
import { cars, carFilters } from "@/data/cars"
import { Car } from "@/types"
import { Card } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Button } from "../ui/Button"
import { CheckCircle, Settings, Gauge, Fuel, Users, Calendar, Shield, Sparkles, Filter, X } from "lucide-react"
import { cn } from "@/lib/utils"

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

export function Fleet() {
  const [selectedType, setSelectedType] = useState("all")
  const [selectedTransmission, setSelectedTransmission] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const filtersRef = useRef<HTMLDivElement>(null)

  const filteredCars = cars.filter((car) => {
    const typeMatch = selectedType === "all" || car.type === selectedType
    const transmissionMatch = 
      selectedTransmission === "all" || 
      car.transmission === selectedTransmission ||
      (selectedTransmission === "automatic" && car.transmission === "both") ||
      (selectedTransmission === "manual" && car.transmission === "both")
    return typeMatch && transmissionMatch
  })

  const hasActiveFilters = selectedType !== "all" || selectedTransmission !== "all"

  const clearFilters = () => {
    setSelectedType("all")
    setSelectedTransmission("all")
    setShowFilters(false)
  }

  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="fleet-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge variant="outline" className="mb-3">Our Modern Fleet</Badge>
          <h2 id="fleet-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Learn in the Car That Suits You Best
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Choose from 8 modern dual-control vehicles (2023-2024 models) with manual & automatic options. 
            All cars equipped with safety features for stress-free learning.
          </p>
        </div>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-6">
          <Button 
            variant={hasActiveFilters ? "primary" : "outline"} 
            size="lg" 
            className="w-full"
            onClick={() => setShowFilters(!showFilters)}
            aria-expanded={showFilters}
            aria-controls="mobile-filters"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filters {hasActiveFilters && (
              <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                {((selectedType !== "all" ? 1 : 0) + (selectedTransmission !== "all" ? 1 : 0))}
              </span>
            )}
          </Button>
        </div>

        {/* Filters - Desktop visible, Mobile collapsible */}
        <div 
          ref={filtersRef}
          id="mobile-filters"
          className={cn(
            "mb-8 transition-all duration-300 ease-in-out",
            showFilters || !hasActiveFilters ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
            "md:max-h-96 md:opacity-100"
          )}
          role="group"
          aria-label="Filter cars"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-center sm:justify-start flex-wrap">
            <div className="flex items-center gap-2 flex-1 sm:flex-none min-w-[200px]">
              <label className="text-sm font-medium text-gray-600 whitespace-nowrap">Type:</label>
              <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Car type">
                {carFilters.types.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setSelectedType(filter.value)}
                    className={cn(
                      "px-4 py-2.5 rounded-xl text-sm font-medium transition-all min-h-[44px] touch-manipulation whitespace-nowrap",
                      selectedType === filter.value
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                    aria-pressed={selectedType === filter.value}
                    role="radio"
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 flex-1 sm:flex-none min-w-[200px]">
              <label className="text-sm font-medium text-gray-600 whitespace-nowrap">Transmission:</label>
              <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Transmission type">
                {carFilters.transmissions.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setSelectedTransmission(filter.value)}
                    className={cn(
                      "px-4 py-2.5 rounded-xl text-sm font-medium transition-all min-h-[44px] touch-manipulation whitespace-nowrap",
                      selectedTransmission === filter.value
                        ? "bg-orange-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                    aria-pressed={selectedTransmission === filter.value}
                    role="radio"
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 transition-colors min-h-[44px] touch-manipulation"
                aria-label="Clear all filters"
              >
                <X className="w-4 h-4" />
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="mb-6 flex items-center gap-3 text-sm text-gray-600">
          <span>Showing <strong>{filteredCars.length}</strong> of <strong>{cars.length}</strong> vehicles</span>
          {filteredCars.length === 0 && (
            <span className="text-orange-600">No vehicles match your filters</span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No vehicles match your filters. Try adjusting your selection.</p>
            <Button variant="outline" onClick={clearFilters}>Clear All Filters</Button>
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <FeatureCard icon={Shield} title="Dual Controls" description="All cars equipped with instructor brake & accelerator for maximum safety" />
          <FeatureCard icon={Sparkles} title="2023-2024 Models" description="Latest models with modern safety features like ABS, airbags, 360° cameras" />
          <FeatureCard icon={Users} title="Manual & Automatic" description="Choose transmission based on your license type and comfort level" />
        </div>
      </div>
    </section>
  )
}

function CarCard({ car }: { car: Car }) {
  return (
    <Card variant="outlined" padding="none" className="overflow-hidden h-full transition-all hover:shadow-xl active:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={car.thumbnail}
          alt={`${car.name} - ${car.transmission} ${car.type}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 active:scale-100"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-2">
          {car.isNew && (
            <Badge variant="success" className="text-xs py-1 px-2">New</Badge>
          )}
          <Badge variant="default" className="capitalize text-xs py-1 px-2">{car.type}</Badge>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 justify-between">
          <Badge variant={car.transmission === "automatic" ? "info" : "outline"} className="text-xs py-1 px-2">
            {transmissionLabels[car.transmission]}
          </Badge>
          <Badge variant="outline" className="text-xs py-1 px-2">{fuelLabels[car.fuelType]}</Badge>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="min-w-0">
            <h3 className="font-bold text-base sm:text-lg text-gray-900 truncate">{car.name}</h3>
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

        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 p-3 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span>{car.seatingCapacity} Seater</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Shield className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span>Dual Control</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4" role="list" aria-label="Suitable for">
          {car.suitableFor.slice(0, 4).map((suitable) => (
            <Badge key={suitable} variant="outline" className="text-xs py-1 px-2">
              {suitableLabels[suitable]}
            </Badge>
          ))}
          {car.suitableFor.length > 4 && (
            <Badge variant="outline" className="text-xs py-1 px-2">
              +{car.suitableFor.length - 4} more
            </Badge>
          )}
        </div>

        <div className="space-y-2 mb-5">
          {car.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
          {car.features.length > 3 && (
            <p className="text-sm text-gray-500">+{car.features.length - 3} more features</p>
          )}
        </div>

        <Button variant="outline" className="w-full py-3" href={`/contact?car=${car.id}`}>
          Book This Car
        </Button>
      </div>
    </Card>
  )
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.ComponentType<{ className?: string }>; title: string; description: string }) {
  return (
    <Card variant="elevated" padding="lg" className="text-center">
      <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
      </div>
      <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Card>
  )
}
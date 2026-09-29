import { Star, MapPin, Languages, Calendar, Car, Settings } from "lucide-react"
import { Instructor } from "@/data/about"
import { Card } from "./Card"
import { Badge } from "./Badge"
import { cn } from "@/lib/utils"

interface InstructorCardProps {
  instructor: Instructor
}

export function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <Card variant="elevated" padding="lg" className="text-center">
      <div className="relative mb-4">
        <img
          src={instructor.photo}
          alt={instructor.name}
          className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
        />
        {instructor.gender === "female" && (
          <Badge variant="info" className="absolute -bottom-2 -left-2 text-xs">
            Female Instructor
          </Badge>
        )}
      </div>
      
      <h3 className="font-bold text-lg text-gray-900">{instructor.name}</h3>
      <p className="text-sm text-gray-500 mb-3">{instructor.experience} Experience</p>
      
      <div className="flex items-center justify-center gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className={cn("w-4 h-4", star <= instructor.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300")} aria-hidden="true" />
        ))}
        <span className="text-sm font-medium text-gray-700 ml-1">{instructor.rating}</span>
        <span className="text-sm text-gray-400">({instructor.totalStudents}+ students)</span>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5 mb-4">
        {instructor.specialization.slice(0, 2).map((spec) => (
          <Badge key={spec} variant="outline" className="text-xs">
            {spec}
          </Badge>
        ))}
        {instructor.specialization.length > 2 && (
          <Badge variant="outline" className="text-xs">
            +{instructor.specialization.length - 2} more
          </Badge>
        )}
      </div>

      <div className="flex items-center justify-center gap-3 text-xs text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <Languages className="w-3.5 h-3.5" />
          <span>{instructor.languages.join(", ")}</span>
        </div>
        <div className="flex items-center gap-1">
          <Car className="w-3.5 h-3.5" />
          <span>{instructor.availableFor.join("/")}</span>
        </div>
      </div>

      <p className="text-sm text-gray-600 line-clamp-3">{instructor.bio}</p>
    </Card>
  )
}
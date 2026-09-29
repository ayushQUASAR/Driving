import { Users, Award, GraduationCap, Car } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  value: string
  label: string
  icon: string
  color: string
}

const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  users: Users,
  award: Award,
  "graduation-cap": GraduationCap,
  car: Car,
}

export function StatCard({ value, label, icon, color }: StatCardProps) {
  const Icon = iconComponents[icon] || Users
  
  const colorStyles: Record<string, string> = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
    purple: "bg-purple-100 text-purple-600",
  }

  return (
    <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4", colorStyles[color] || colorStyles.blue)}>
        <Icon className="w-7 h-7" aria-hidden="true" />
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}
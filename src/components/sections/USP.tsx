import { Car, GraduationCap, UserCheck, Clock, Shield, Star, BookOpen, MapPin, Heart, Truck, Calendar, RotateCcw, Award, CheckCircle2 } from "lucide-react"
import { Card } from "../ui/Card"
import { Badge } from "../ui/Badge"

const uspFeatures = [
  {
    id: "one-on-one",
    icon: UserCheck,
    title: "1:1 Personalized Training",
    description: "Every student gets a dedicated instructor throughout their entire course. No sharing, no waiting - just focused, personalized attention tailored to your learning pace.",
    highlight: "Always 1:1 ratio",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "theory-sessions",
    icon: BookOpen,
    title: "Complimentary Theory Sessions",
    description: "Free comprehensive theory classes covering traffic rules, road signs, driving behavior, defensive driving, and emergency procedures. Online and offline options available.",
    highlight: "Included at no extra cost",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: "complete-curriculum",
    icon: Car,
    title: "Complete Driving Curriculum",
    description: "From basics to advanced: parking (parallel, reverse, angle), U-turns, 3-point turns, roundabouts, highway driving, night driving, and emergency maneuvers.",
    highlight: "All maneuvers covered",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    id: "modern-fleet",
    icon: Shield,
    title: "Modern Dual-Control Fleet",
    description: "New 2023-2024 cars with dual controls, ABS, airbags, reverse cameras, and 360° cameras. Choose from hatchbacks, sedans, SUVs - manual or automatic.",
    highlight: "2023-2024 models",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: "flexible-timing",
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Lessons available 6 AM to 9 PM, 7 days a week. Pick-up and drop service within 5km. Perfect for students, working professionals, and homemakers.",
    highlight: "6 AM - 9 PM daily",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    id: "free-pickup-drop",
    icon: Truck,
    title: "Free Pickup & Drop",
    description: "Complimentary door-to-door pickup and drop within 5km radius of our center. No extra charges, no hassle - we come to you.",
    highlight: "Within 5km radius",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    id: "365-days",
    icon: Calendar,
    title: "365 Days Availability",
    description: "We're open every single day of the year including holidays. Learn at your convenience - weekends, festivals, or weekdays, we're here.",
    highlight: "Open all year",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    id: "pause-resume",
    icon: RotateCcw,
    title: "Pause & Resume Anytime",
    description: "Life happens. Pause your course for days or weeks and resume exactly where you left off. Your progress is saved, no lessons wasted.",
    highlight: "No expiry on packages",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: "completion-guarantee",
    icon: Award,
    title: "100% Completion Guarantee",
    description: "We're committed to your success. If you don't pass, we provide additional training at no extra cost until you do. Your success is our guarantee.",
    highlight: "Unlimited retraining",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    id: "proven-results",
    icon: Star,
    title: "Proven Track Record",
    description: "95%+ first-attempt pass rate at RTO. 500+ successful students. Google 4.8★ rating with 127+ reviews. RTO-approved instructors with years of experience.",
    highlight: "95%+ pass rate",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
]

const lessonModules = [
  { icon: Car, title: "Basic Controls", desc: "Steering, pedals, gears, mirrors, dashboard" },
  { icon: MapPin, title: "Parking Mastery", desc: "Parallel, reverse, angle, hill parking" },
  { icon: Heart, title: "U-Turns & 3-Point Turns", desc: "Tight space maneuvering techniques" },
  { icon: BookOpen, title: "Roundabouts & Junctions", desc: "Lane discipline, right of way, signaling" },
  { icon: Shield, title: "Highway Driving", desc: "Merging, overtaking, lane changes, exits" },
  { icon: Star, title: "Night & Rain Driving", desc: "Low visibility, glare handling, hydroplaning" },
  { icon: UserCheck, title: "Defensive Driving", desc: "Hazard perception, safe following distance" },
  { icon: Clock, title: "Emergency Maneuvers", desc: "Emergency braking, skid control, evasive action" },
]

export function USP() {
  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="usp-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Why Choose DriveSmart Academy</Badge>
          <h2 id="usp-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Become a Confident Driver
          </h2>
          <p className="text-lg text-gray-600">
            Our unique approach combines personalized 1:1 training with comprehensive theory 
            and modern fleet to ensure you pass your test and drive safely for life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {uspFeatures.map((feature) => (
            <Card key={feature.id} variant="elevated" padding="lg" className="transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-5`}>
                <feature.icon className={`w-7 h-7 ${feature.iconColor}`} aria-hidden="true" />
              </div>
              <Badge variant="info" className="mb-3">{feature.highlight}</Badge>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">What You'll Master</h3>
              <p className="text-blue-100 mb-6">
                Our structured curriculum covers every skill needed for confident, safe driving:
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {lessonModules.map((module) => (
                <div key={module.title} className="flex items-start gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <module.icon className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{module.title}</p>
                    <p className="text-blue-100 text-sm">{module.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-8 border-t border-blue-500/30">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-blue-100 text-sm">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">95%+</div>
              <div className="text-blue-100 text-sm">Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-blue-100 text-sm">Expert Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">8</div>
              <div className="text-blue-100 text-sm">Cars in Fleet</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">365</div>
              <div className="text-blue-100 text-sm">Days Open</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
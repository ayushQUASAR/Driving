export interface Instructor {
  id: string
  name: string
  photo: string
  experience: string
  specialization: string[]
  languages: string[]
  rating: number
  totalStudents: number
  bio: string
  availableFor: ("manual" | "automatic" | "both")[]
  gender: "male" | "female"
}

export interface LessonModule {
  id: string
  title: string
  description: string
  image: string
  duration: string
  skills: string[]
}

export interface CompanyStat {
  value: string
  label: string
  icon: string
  color: string
}

export const instructors: Instructor[] = [
  {
    id: "rajesh-kumar",
    name: "Rajesh Kumar",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    experience: "12+ years",
    specialization: ["Beginner Training", "License Test Prep", "Highway Driving"],
    languages: ["English", "Hindi", "Punjabi"],
    rating: 4.9,
    totalStudents: 180,
    bio: "Rajesh specializes in nervous beginners and has the highest first-attempt pass rate among our instructors. His calm demeanor and step-by-step approach make complex maneuvers feel simple. Expert in navigating Delhi traffic.",
    availableFor: ["manual", "automatic"],
    gender: "male",
  },
  {
    id: "meera-singh",
    name: "Meera Singh",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    experience: "8+ years",
    specialization: ["Women Learners", "Parking Mastery", "City Traffic Navigation"],
    languages: ["English", "Hindi", "Punjabi"],
    rating: 4.8,
    totalStudents: 145,
    bio: "Meera is our most requested female instructor. She excels at teaching parking techniques and helping women gain confidence in heavy Delhi traffic. Her students love her patient, encouraging style.",
    availableFor: ["manual", "automatic"],
    gender: "female",
  },
  {
    id: "arjun-reddy",
    name: "Arjun Reddy",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    experience: "10+ years",
    specialization: ["Advanced Maneuvers", "Defensive Driving", "Refresher Courses"],
    languages: ["English", "Hindi", "Telugu"],
    rating: 4.9,
    totalStudents: 160,
    bio: "Arjun handles our advanced training and refresher courses. He's an expert in defensive driving techniques and helps experienced drivers update their skills for modern roads and vehicles in Delhi NCR.",
    availableFor: ["manual", "automatic"],
    gender: "male",
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    experience: "6+ years",
    specialization: ["Learning License Theory", "Automatic Transmission", "Young Adult Learners"],
    languages: ["English", "Hindi"],
    rating: 4.8,
    totalStudents: 120,
    bio: "Priya makes theory sessions engaging and practical. She's our go-to instructor for automatic transmission training and works great with college students and young professionals getting their first license in Delhi.",
    availableFor: ["automatic"],
    gender: "female",
  },
]

export const lessonModules: LessonModule[] = [
  {
    id: "basic-controls",
    title: "Module 1: Basic Vehicle Controls",
    description: "Master the fundamentals before hitting the road. This module builds your foundation with hands-on practice in a safe, controlled environment.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    duration: "2-3 sessions",
    skills: [
      "Steering control & hand positioning",
      "Pedal operation (accelerator, brake, clutch)",
      "Gear shifting (manual) / Drive modes (automatic)",
      "Mirror adjustment & blind spot awareness",
      "Dashboard controls & warning lights",
      "Starting, stopping & smooth acceleration",
    ],
  },
  {
    id: "road-basics",
    title: "Module 2: Road Basics & Traffic Rules",
    description: "Apply your controls knowledge in real traffic situations with guided practice on quiet roads before progressing to busier streets.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    duration: "3-4 sessions",
    skills: [
      "Lane discipline & positioning",
      "Turn signals & hand signals",
      "Right-of-way rules at intersections",
      "Traffic light & sign compliance",
      "Safe following distance",
      "Speed control & limit adherence",
    ],
  },
  {
    id: "parking-mastery",
    title: "Module 3: Parking Mastery",
    description: "The most requested skill - we dedicate focused sessions to make you confident in every parking scenario you'll encounter.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    duration: "3-4 sessions",
    skills: [
      "Parallel parking (step-by-step technique)",
      "Reverse bay parking",
      "Angle parking (forward & reverse)",
      "Hill parking with handbrake control",
      "Tight space maneuvering",
      "Parking sensor & camera usage",
    ],
  },
  {
    id: "maneuvers",
    title: "Module 4: Advanced Maneuvers",
    description: "Master the maneuvers that appear on the RTO test and are essential for daily driving in tight urban spaces.",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    duration: "2-3 sessions",
    skills: [
      "U-turns in narrow & wide roads",
      "3-point turns (K-turns)",
      "Roundabout navigation & lane selection",
      "Narrow lane & one-way street driving",
      "Reversing in straight line & curves",
      "Emergency stop procedure",
    ],
  },
  {
    id: "highway-driving",
    title: "Module 5: Highway & Expressway Driving",
    description: "Gain confidence at higher speeds with proper merging, overtaking, and lane management techniques.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    duration: "2-3 sessions",
    skills: [
      "Highway entry & exit ramp technique",
      "Lane changing & overtaking safely",
      "Maintaining consistent speed",
      "Dealing with large vehicles & blind spots",
      "Toll plaza navigation (FASTag)",
      "Long-distance driving fatigue management",
    ],
  },
  {
    id: "night-weather",
    title: "Module 6: Night & Adverse Weather Driving",
    description: "Essential skills for low visibility conditions - often overlooked but critical for safe driving.",
    image: "https://images.unsplash.com/photo-1492057566300-fd6d0e95204a?w=800&q=80",
    duration: "1-2 sessions",
    skills: [
      "Headlight usage (low/high beam etiquette)",
      "Glare reduction from oncoming traffic",
      "Rain driving & hydroplaning prevention",
      "Fog light usage & reduced visibility",
      "Wet road braking distances",
      "Night parking & maneuvering",
    ],
  },
  {
    id: "defensive-driving",
    title: "Module 7: Defensive Driving & Hazard Perception",
    description: "Learn to anticipate and avoid dangerous situations before they become accidents.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    duration: "1-2 sessions",
    skills: [
      "Scanning technique (SIPDE method)",
      "Predicting other road users' actions",
      "Safe escape routes identification",
      "Dealing with aggressive drivers",
      "Pedestrian & cyclist awareness",
      "Emergency braking & evasive steering",
    ],
  },
  {
    id: "test-prep",
    title: "Module 8: RTO Test Preparation",
    description: "Final polish focusing on the exact test route, evaluation criteria, and mock tests with your instructor.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    duration: "2-3 sessions",
    skills: [
      "Official test route practice runs",
      "Mock test with instructor evaluation",
      "Common failure points & how to avoid them",
      "Test day documentation checklist",
      "Vehicle inspection (show me/tell me)",
      "Mental preparation & confidence building",
    ],
  },
]

export const companyStats: CompanyStat[] = [
  {
    value: "500+",
    label: "Licensed Drivers",
    icon: "users",
    color: "blue",
  },
  {
    value: "95%+",
    label: "First-Attempt Pass Rate",
    icon: "award",
    color: "green",
  },
  {
    value: "15+",
    label: "Certified Instructors",
    icon: "graduation-cap",
    color: "orange",
  },
  {
    value: "8",
    label: "Modern Training Vehicles",
    icon: "car",
    color: "purple",
  },
]
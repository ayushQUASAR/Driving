import { FAQ } from "@/types"

export const faqs: FAQ[] = [
  {
    question: "What is the minimum age to learn driving?",
    answer: "You must be at least 18 years old to apply for a learning license for non-transport vehicles (cars, motorcycles). For transport vehicles, the minimum age is 20 years.",
  },
  {
    question: "How many driving lessons do I need before taking the test?",
    answer: "Most beginners need 10-15 sessions (1 hour each) to be test-ready. However, this varies based on individual learning pace. We offer a free assessment to recommend the right package.",
  },
  {
    question: "Do you provide the car for the driving test?",
    answer: "Yes, we provide the training car for your RTO driving test. The car will be the same model you practiced with, and your instructor can accompany you to the RTO on test day.",
  },
  {
    question: "Can I choose between manual and automatic transmission?",
    answer: "Absolutely! We have both manual and automatic cars in our fleet. You can choose based on your preference or the type of license you want. Automatic-only license restricts you to automatic vehicles.",
  },
  {
    question: "What documents are needed for a learning license?",
    answer: "You'll need: Proof of age (Aadhaar/PAN/Passport), Proof of address (Aadhaar/Passport/Utility bill), Passport-size photos (3-4), and Form 1 (medical certificate if over 40). We help with all documentation.",
  },
  {
    question: "Do you offer pick-up and drop service?",
    answer: "Yes, we provide complimentary pick-up and drop within 5km radius of our center for all driving lesson packages. For longer distances, nominal charges apply.",
  },
  {
    question: "What if I fail the driving test?",
    answer: "If you don't pass on the first attempt, we provide additional focused practice sessions at a discounted rate and re-book your test. Our instructors analyze the failure points and prepare you specifically for re-test.",
  },
  {
    question: "Are there any hidden charges?",
    answer: "No hidden charges. Our pricing is transparent - the quoted price includes instructor fees, fuel, car usage, and theory materials. RTO fees (paid directly to government) are separate and we'll inform you upfront.",
  },
  {
    question: "Do you have female instructors?",
    answer: "Yes, we have certified female instructors available. You can request a female instructor at the time of booking, subject to availability.",
  },
  {
    question: "What are your operating hours?",
    answer: "We operate Monday-Saturday 8:00 AM - 8:00 PM, Sunday 9:00 AM - 4:00 PM. Lessons can be scheduled within these hours based on instructor availability.",
  },
]

export const serviceFAQs: Record<string, FAQ[]> = {
  "learning-license": [
    {
      question: "How long does it take to get a learning license?",
      answer: "With our assistance, the process takes 3-5 working days from document submission to receiving your LL. The RTO computer test is usually scheduled within 2-3 days of application.",
    },
    {
      question: "Is the learning license test difficult?",
      answer: "Not with proper preparation. It's a 15-question multiple choice test on traffic rules and signs. You need 9 correct answers to pass. Our mock tests ensure you're well-prepared.",
    },
    {
      question: "Can I apply for a learning license online?",
      answer: "Yes, the application is online via Parivahan portal. We handle the entire online process for you - form filling, document upload, fee payment, and slot booking.",
    },
  ],
  "driving-lessons": [
    {
      question: "What does the complimentary theory session cover?",
      answer: "Traffic rules & regulations, road signs & markings, driving behavior & etiquette, defensive driving principles, emergency procedures, and basic vehicle maintenance.",
    },
    {
      question: "Can I practice parking specifically?",
      answer: "Yes! Parking is a dedicated module covering parallel parking, reverse parking, angle parking, and hill parking. We practice until you're confident.",
    },
    {
      question: "Do you teach highway driving?",
      answer: "Yes, highway driving is included in advanced lessons. We cover lane discipline, overtaking, merging, exit/entry ramps, and high-speed control on actual highways.",
    },
  ],
}
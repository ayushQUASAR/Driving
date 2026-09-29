import { USP } from "@/components/sections/USP"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQSection } from "@/components/sections/FAQ"
import { CTA } from "@/components/sections/CTA"
import { siteConfig } from "@/lib/seo"
import { generateBreadcrumbSchema } from "@/lib/schema"
import { instructors, lessonModules, companyStats } from "@/data/about"
import { InstructorCard } from "@/components/ui/InstructorCard"
import { StatCard } from "@/components/ui/StatCard"

export default function AboutPage() {
  const structuredData = [
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "About Us", url: `${siteConfig.url}/about` },
    ]),
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
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "rgba(30, 58, 138, 0.1)", color: "#1e3a8a", borderColor: "#1e3a8a" }}>
                About DriveSmart Academy
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Building Confident Drivers Since 2015
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're Bangalore's most trusted driving school, dedicated to providing personalized 1:1 training 
                that goes beyond just passing the test - we teach safe driving for life.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-white" id="our-story">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission: Safe Drivers, Safer Roads
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2015, DriveSmart Academy was born from a simple belief: learning to drive 
                    shouldn't be stressful, rushed, or one-size-fits-all. We saw too many driving schools 
                    packing multiple students into one car, rushing through lessons, and focusing only on 
                    passing the RTO test.
                  </p>
                  <p>
                    We chose a different path. Every student gets their own instructor, their own car, 
                    and their own learning pace. Our 1:1 approach means you never wait for your turn, 
                    never feel rushed, and always get immediate feedback tailored to your needs.
                  </p>
                  <p>
                    Today, we've trained over 500 students across Bangalore with a 95%+ first-attempt 
                    pass rate. But our real measure of success? Confident drivers who stay safe on the 
                    road long after they get their license.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="DriveSmart Academy driving instructor with student"
                  className="w-full h-auto aspect-[4/3] object-cover rounded-2xl shadow-xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">500+</p>
                      <p className="text-gray-600">Students Trained</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-gray-50" id="instructors">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "rgba(30, 58, 138, 0.1)", color: "#1e3a8a", borderColor: "#1e3a8a" }}>
                Our Team
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Certified Instructors
              </h2>
              <p className="text-lg text-gray-600">
                All our instructors are RTO-certified, background-verified, and trained in our 
                proprietary 1:1 teaching methodology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {instructors.map((instructor) => (
                <InstructorCard key={instructor.id} instructor={instructor} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700">
                Request a Specific Instructor
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-white" id="curriculum">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "rgba(30, 58, 138, 0.1)", color: "#1e3a8a", borderColor: "#1e3a8a" }}>
                Complete Curriculum
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                What You'll Learn - Module by Module
              </h2>
              <p className="text-lg text-gray-600">
                Our structured curriculum covers every skill needed for confident, safe driving - 
                from your first time behind the wheel to advanced maneuvers.
              </p>
            </div>

            <div className="space-y-8">
              {lessonModules.map((module, index) => (
                <div 
                  key={module.id} 
                  className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="w-full md:w-1/2">
                    <img
                      src={module.image}
                      alt={`${module.title} driving lesson`}
                      className="w-full h-64 md:h-auto aspect-[4/3] object-cover rounded-2xl shadow-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        Module {index + 1}
                      </span>
                      <span className="text-sm text-gray-500">{module.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{module.title}</h3>
                    <p className="text-gray-600 mb-4">{module.description}</p>
                    <ul className="space-y-2" role="list">
                      {module.skills.map((skill, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <USP />

        <section className="py-20 sm:py-28 bg-gray-50" id="stats">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {companyStats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        <FAQSection />
        <CTA />
      </div>
    </>
  )
}
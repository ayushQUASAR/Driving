"use client"

import { useState } from "react"
import { faqs } from "@/data/faq"
import { FAQ } from "@/types"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 sm:py-28 bg-white" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about learning to drive with us
          </p>
        </div>

        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} isOpen={openIndex === index} onToggle={() => toggleFAQ(index)} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Still have questions? We're here to help.</p>
          <a href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700">
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function FAQItem({ faq, index, isOpen, onToggle }: { faq: FAQ; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <article className="border border-gray-200 rounded-xl overflow-hidden bg-white transition-shadow hover:shadow-md" role="listitem">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
        <span className="flex-shrink-0" aria-hidden="true">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </span>
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}
      >
        <div className="px-6 pb-5 text-gray-600 leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </article>
  )
}
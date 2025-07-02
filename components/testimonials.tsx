"use client"

import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Portland, OR",
    text: "Pristine ProWash completely transformed our home's exterior. The roof looks brand new, and they were able to remove years of grime from our driveway. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Thompson",
    location: "Eugene, OR",
    text: "I was amazed at how quickly and efficiently they cleaned our gutters. The team was professional, and the results were outstanding. Our gutters look like they were just installed!",
    rating: 5,
  },
  {
    id: 3,
    name: "Jennifer Davis",
    location: "Portland, OR",
    text: "The oil stains on our driveway seemed impossible to remove, but Pristine ProWash made it look brand new. Great service and very reasonable pricing.",
    rating: 5,
  },
  {
    id: 4,
    name: "Robert Wilson",
    location: "Eugene, OR",
    text: "Excellent service from start to finish. They were on time, professional, and did an amazing job on our roof. The moss is completely gone!",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Martinez",
    location: "Portland, OR",
    text: "We've used several pressure washing companies in the past, but Pristine ProWash is by far the best. Their attention to detail and customer service is unmatched.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused])

  return (
    <section className="section-padding bg-gray-900">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Our Customers Say</h2>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-charcoal p-6 md:p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-charcoal p-2 rounded-full shadow-lg md:flex items-center justify-center hidden"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-charcoal p-2 rounded-full shadow-lg md:flex items-center justify-center hidden"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-cyan" : "bg-gray-600"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Marcus Liu",
    location: "Portland, OR",
    text: "I've hired pressure washers before but this was hands down the best service. Hernan took time to point out areas that needed extra attention. My concrete patio looks fantastic. I will be recommending him to neighbors.",
    rating: 5,
  },
  {
    id: 2,
    name: "Elaine Brooks",
    location: "Portland, OR",
    text: "Hernan was friendly and professional. He explained the quote process clearly and showed up when he said he would. He cleaned my gutters and even unclogged a downspout. I feel confident they won't overflow this season.",
    rating: 5,
  },
  {
    id: 3,
    name: "Tyler Nguyen",
    location: "Portland, OR",
    text: "As someone who cares about the environment, I appreciated Hernan's gentle soft wash approach. He removed algae from my siding without any harsh chemicals and the results speak for themselves. I'll definitely call him again.",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya Shah",
    location: "Portland, OR",
    text: "I love that Hernan uses plant safe products. He cleaned my deck and fence without any damage and left everything spotless. He checked in afterward to make sure I was happy. Highly recommended.",
    rating: 5,
  },
  {
    id: 5,
    name: "Jorge Castillo",
    location: "Portland, OR",
    text: "When I reached out, Hernan responded within minutes. He arrived exactly on time and tackled the mildew on my driveway in under an hour. He even shared tips on keeping it clean. Great experience.",
    rating: 5,
  },
  {
    id: 6,
    name: "Mia Alvarez",
    location: "Portland, OR",
    text: "I booked Hernan on a Tuesday and he was at my house by Thursday morning. He walked me through what he'd do and got straight to work. My roof and gutters look like new. I'm really impressed.",
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
  }, [isPaused, activeIndex])

  return (
    <section className="py-16 bg-gray-100">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">What Our Customers Say</h2>

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
                  <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-navy">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-lg md:flex items-center justify-center hidden text-navy"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-lg md:flex items-center justify-center hidden text-navy"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-cyan" : "bg-gray-400"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

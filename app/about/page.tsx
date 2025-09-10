import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src="/images/oregon-ducks.jpg"
            alt="University of Oregon Ducks logo and campus"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative z-10 text-center space-y-4 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">About Me</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Student-run business built on attention to detail and pride in work
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">My Story</h2>
                <div className="w-16 h-1 bg-cyan mb-6"></div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    I grew up in Mexico City and moved to Portland when I was 11. New city, new language, same lesson I
                    learned at home: pay attention to details and take pride in your work.
                  </p>
                  <p>
                    I am a finance student at the University of Oregon. Classes in the morning, quotes in the afternoon,
                    jobs on the calendar. Building Pristine ProWash has been my way to pay for school and do work where
                    the effort shows.
                  </p>
                  <p>
                    It started simple. A neighbor needed a driveway cleaned. Then a roof. Then another neighbor. I kept
                    saying yes, learned the right methods, got licensed and insured, and turned it into something real.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Values */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">What Drives Me</h2>
                <div className="w-16 h-1 bg-cyan mb-6"></div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    What I like most is the moment you step back and see a surface come back to life. Clean edges, even
                    lines, and no mess left behind. That part never gets old.
                  </p>
                  <p>
                    Portland's weather is tough on roofs, siding, concrete, and wood. I use plant-safe detergents and
                    soft-wash techniques, protect landscaping before I start, and rinse everything down when I finish.
                    It is careful work, not rushed work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Promise Section */}
      <section className="py-16" style={{ backgroundColor: "var(--section-light)" }}>
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">My Promise to You</h2>
          <div className="w-16 h-1 bg-cyan mx-auto mb-8"></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-cyan/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-navy">Clear & Reliable</h3>
              <p className="text-gray-700 text-sm">Clear pricing, fast replies, and a set time when I arrive.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-cyan/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-navy">Quality Work</h3>
              <p className="text-gray-700 text-sm">
                Right tools, before and after photos, and attention to details people usually miss.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-cyan/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-navy">Satisfaction Guaranteed</h3>
              <p className="text-gray-700 text-sm">If something is not right, I fix it. No drama, just the standard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              I am local. I learned to love rain, moss, and good coffee. On days off, I am usually outdoors or at a
              Ducks game with friends. <span className="font-semibold text-navy">Go Ducks.</span>
            </p>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-lg font-medium text-navy mb-4">Thanks for supporting a student-run business.</p>
              <p className="text-lg">If you want your place to look new again, I am ready when you are.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Changed to lighter gray */}
      <section className="py-16" style={{ backgroundColor: "var(--section-light)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 mb-8">Let's make your place look pristine again.</p>
          <Button asChild size="lg" className="bg-cyan hover:bg-cyan/90 text-navy font-bold">
            <Link href="/#contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

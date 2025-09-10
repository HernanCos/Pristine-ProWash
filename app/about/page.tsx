import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src="/images/oregon-ducks.jpg"
            alt="University of Oregon Ducks logo and campus"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
        </div>
        <div className="relative z-10 text-center space-y-6 px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">About Me</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto font-light">
            Student-run business built on attention to detail and pride in work
          </p>
          <div className="w-24 h-1 bg-cyan mx-auto mt-8"></div>
        </div>
      </section>

      {/* Main Content - Enhanced with images */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Story with image */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">My Story</h2>
                <div className="w-20 h-1 bg-cyan mb-8"></div>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
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
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/student-studying-finance-books-at-university-of-or.jpg"
                  alt="Student life at University of Oregon"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column - Values with image */}
            <div className="space-y-8">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/pressure-washing-equipment-and-tools-professional-.jpg"
                  alt="Professional pressure washing equipment"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">What Drives Me</h2>
                <div className="w-20 h-1 bg-cyan mb-8"></div>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
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

      {/* My Promise Section - Enhanced design */}
      <section className="py-20" style={{ backgroundColor: "var(--section-light)" }}>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">My Promise to You</h2>
            <div className="w-24 h-1 bg-cyan mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three core commitments that define every job I take on
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-cyan/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy">Clear & Reliable</h3>
              <p className="text-gray-700">Clear pricing, fast replies, and a set time when I arrive.</p>
            </div>
            <div className="text-center space-y-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-cyan/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy">Quality Work</h3>
              <p className="text-gray-700">
                Right tools, before and after photos, and attention to details people usually miss.
              </p>
            </div>
            <div className="text-center space-y-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-cyan/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy">Satisfaction Guaranteed</h3>
              <p className="text-gray-700">If something is not right, I fix it. No drama, just the standard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch Section - Enhanced with image */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-navy">Local & Proud</h2>
                <div className="w-20 h-1 bg-cyan"></div>
                <p className="text-xl">
                  I am local. I learned to love rain, moss, and good coffee. On days off, I am usually outdoors or at a
                  Ducks game with friends. <span className="font-semibold text-navy">Go Ducks.</span>
                </p>
              </div>
              <div className="border-t border-gray-200 pt-8 space-y-4">
                <p className="text-xl font-semibold text-navy">Thanks for supporting a student-run business.</p>
                <p className="text-xl">If you want your place to look new again, I am ready when you are.</p>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/portland-oregon-cityscape-with-mountains-and-green.jpg"
                alt="Beautiful Portland Oregon landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced design */}
      <section className="py-20" style={{ backgroundColor: "var(--section-light)" }}>
        <div className="container text-center max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-navy">Ready to Get Started?</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Let's make your place look pristine again. Get your free quote today and see the difference quality makes.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="bg-cyan hover:bg-cyan/90 text-navy font-bold px-8 py-4 text-lg">
                <Link href="/#contact">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function AboutUs() {
  return (
    <section className="bg-lightband py-16">
      <div className="container mx-auto max-w-3xl text-navy">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-6 text-center">About Pristine ProWash</h2>
        {/* Cyan divider */}
        <hr className="border-b-2 border-cyan my-8" />
        {/* Body copy */}
        <p className="mb-4 text-gray-700 leading-relaxed">
          I’m Hernan, a finance student at the University of Oregon and the owner-operator of Pristine ProWash. What
          began with me scrubbing mud off bikes and surfboards has grown into a student-run crew that gives every roof,
          gutter, and driveway the same care I’d give my own home.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Portland is where I was raised, so I’m committed to keeping our neighborhoods clean with plant-safe
          detergents, clear up-front pricing, and a simple guarantee: if you’re not happy, you don’t pay.
        </p>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Whether you need a gentle moss soft-wash or a concrete deep-clean before guests arrive, I’m only a text away.
          Let’s make your place look pristine again. Reach out for a free quote today.
        </p>
        {/* Value-prop grid */}
        <div className="grid gap-8 sm:grid-cols-3 text-center">
          {/* Safety First */}
          <div>
            <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center text-cyan">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-semibold">Safety First</h3>
            <p className="text-sm text-gray-700">Eco-friendly detergents</p>
          </div>
          {/* Transparent Pricing */}
          <div>
            <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center text-cyan">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="2" x2="12" y2="22" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
            </div>
            <h3 className="font-semibold">Transparent Pricing</h3>
            <p className="text-sm text-gray-700">No hidden fees or surprises</p>
          </div>
          {/* Respect for Property & Schedule */}
          <div>
            <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center text-cyan">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 15.25C4 14.01 4.99 13 6.24 13h11.52c1.25 0 2.24 1.01 2.24 2.25v3.5c0 1.24-1 2.25-2.24 2.25H6.24C4.99 21 4 19.99 4 18.75v-3.5z"></path>
                <path d="M8 13V9l4-4 4 4v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </div>
            <h3 className="font-semibold">Respect for Your Property &amp; Schedule</h3>
            <p className="text-sm text-gray-700">Careful work and on-time arrivals</p>
          </div>
        </div>
      </div>
    </section>
  )
}

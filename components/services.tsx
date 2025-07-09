const services = [
  {
    name: "Roof Soft Wash",
    desc: "Low-pressure, eco-safe removal of moss & algae that extends shingle life.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-cyan mb-4"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <path d="M9 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2z"></path>
        <path d="M7 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
        <path d="M18 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
      </svg>
    ),
    slug: "roof-soft-wash",
  },
  {
    name: "Gutter Cleaning & Brightening",
    desc: "Debris removal, downspout flush, and oxidation rinse for like-new gutters.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-cyan mb-4"
      >
        <path d="M4 5h16v4H4z" />
        <path d="M12 9v5" />
        <path d="M12 18a2 2 0 0 1-2-2c0-1.1.8-2 2-2s2 .9 2 2a2 2 0 0 1-2 2z" />
      </svg>
    ),
    slug: "gutter-cleaning",
  },
  {
    name: "Driveway & Concrete Cleaning",
    desc: "Surface-cleaner wash for driveways, patios, and sidewalks, no streaks.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-cyan mb-4"
      >
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="3" y1="15" x2="21" y2="15"></line>
        <line x1="9" y1="3" x2="9" y2="21"></line>
        <line x1="15" y1="3" x2="15" y2="21"></line>
      </svg>
    ),
    slug: "driveway-cleaning",
  },
  {
    name: "Deck & Fence Cleaning",
    desc: "Gentle wood wash restores color and preps surfaces for stain or sealant.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-cyan mb-4"
      >
        <rect width="20" height="4" x="2" y="6" rx="1"></rect>
        <rect width="20" height="4" x="2" y="11" rx="1"></rect>
        <rect width="20" height="4" x="2" y="16" rx="1"></rect>
      </svg>
    ),
    slug: "deck-fence-cleaning",
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-lightband">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.slug} className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-start text-left">
              {service.icon}
              <h3 className="text-xl font-bold mb-3 text-navy">{service.name}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

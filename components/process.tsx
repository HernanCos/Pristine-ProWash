export default function Process() {
  return (
    <section className="section-padding bg-darkband">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">Our Process</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
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
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <path d="M9 2v4" />
              <path d="M15 2v4" />
              <path d="m9 14 2 2 4-4" />
            </svg>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-navy">1. Request Quote Online</h3>
            <p className="text-gray-600 text-base">
              Fill out our simple form to get a detailed quote tailored to your specific needs.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
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
              <path d="M20 18V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12" />
              <path d="M12 18v-6" />
              <path d="M12 9h.01" />
              <path d="M12 3v3" />
              <path d="M10 3h4" />
              <path d="M17 21H7" />
            </svg>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-navy">2. On-Site Service</h3>
            <p className="text-gray-600 text-base">
              Our team arrives with professional equipment for thorough soft washing and pressure cleaning.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
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
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </svg>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-navy">3. Final Walk-Through</h3>
            <p className="text-gray-600 text-base">
              We complete a detailed inspection with you to ensure 100% satisfaction with our work.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

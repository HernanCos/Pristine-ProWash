import QuoteForm from "./quote-form"

export default function Hero() {
  return (
    <section className="bg-lightband bg-cover bg-center py-16" style={{ backgroundImage: "url(/Main.jpg)" }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Restore Your Home’s Fresh Look With Expert Exterior Cleaning
            </h1>
            <p className="text-lg md:text-xl font-semibold my-8">
              Licensed, student-run pros delivering eco-safe, fast roof, gutter, and driveway cleaning, all backed by a
              satisfaction guarantee.
            </p>
          </div>
          <div>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"

export default function CtaBanner() {
  return (
    <section className="py-16 bg-navy text-white">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl text-white mb-6">Ready for a spotless home exterior?</h2>
          <Link href="#contact" className="btn-primary">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
}

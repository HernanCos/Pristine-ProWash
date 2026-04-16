import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { services, getServiceBySlug } from "../data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const svc = getServiceBySlug(slug);
  if (!svc) return {};

  return {
    title: {
      absolute: svc.meta.title,
    },
    description: svc.meta.description,
    alternates: {
      canonical: `https://pristineprowash.net/services/${svc.slug}`,
    },
    openGraph: {
      title: svc.meta.title,
      description: svc.meta.description,
      url: `https://pristineprowash.net/services/${svc.slug}`,
      images: [{ url: "/logo.jpg", alt: "Pristine ProWash logo" }],
    },
    twitter: {
      card: "summary",
      title: svc.meta.title,
      description: svc.meta.description,
      images: ["/logo.jpg"],
    },
  };
}

export default async function ServicePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    description: svc.description,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Pristine ProWash",
      url: "https://pristineprowash.net",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: svc.faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-brand-dark text-white overflow-hidden">
        {svc.image && (
          <Image
            src={svc.image}
            alt={svc.imageAlt}
            fill
            className="object-cover opacity-25"
            preload
            sizes="100vw"
          />
        )}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {svc.title}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            {svc.tagline}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-blue hover:bg-brand-blue-dark text-white px-7 py-3 rounded-xl font-bold transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-brand-blue text-white">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm font-semibold text-white/90">
            {[
              "Licensed & Insured",
              "No Damage Guarantee",
              "Eco-Friendly Detergents",
              "100% Satisfaction or We Re-Clean Free",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-white/70 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Overview + Image */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Image */}
            <div className="w-full md:w-2/5 shrink-0">
              {svc.image ? (
                <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                  <div className="relative h-52 md:h-64">
                    <Image
                      src={svc.image}
                      alt={svc.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    {svc.imageCaption && (
                      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        {svc.imageCaption}
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl h-52 md:h-64 bg-gray-100 border border-dashed border-gray-300 flex flex-col items-center justify-center gap-2 text-gray-400">
                  <svg
                    className="w-8 h-8 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium">Photo Coming Soon</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-1">
                {svc.title}
              </h2>
              <p className="text-brand-blue font-semibold mb-3">{svc.tagline}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {svc.description}
              </p>
              <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-3">
                What&apos;s Included
              </h3>
              <ul className="space-y-2 mb-5">
                {svc.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <svg
                      className="w-4 h-4 text-brand-blue mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-brand-blue hover:bg-brand-blue-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                Get a Quote for {svc.title}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-3">
              Our Process
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              How every {svc.title.toLowerCase()} job gets done , step by step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {svc.process.map((step, idx) => (
              <div
                key={step.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 flex gap-4"
              >
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results (conditional) */}
      {svc.results && (
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-3">
                {svc.results.title ?? "Results"}
              </h2>
              <p className="text-gray-500">{svc.results.caption}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {svc.results.images.map((img) => (
                <div
                  key={img.src}
                  className="rounded-2xl overflow-hidden shadow-sm border border-gray-200"
                >
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Pristine ProWash */}
      <section className={`${svc.results ? "bg-gray-50" : "bg-white"} py-16 md:py-20`}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-3">
              Why Pristine ProWash
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Owner-Operated",
                desc: "I handle every job personally. No subcontractors.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
              },
              {
                title: "Licensed & Insured",
                desc: "Full liability coverage. Your property is protected.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "100% Satisfaction Guarantee",
                desc: "Not happy? I come back and re-clean for free.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map(({ title, desc, icon }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-gray-200 flex gap-4"
              >
                <div className="text-brand-blue shrink-0 mt-0.5">{icon}</div>
                <div>
                  <h3 className="font-bold text-brand-dark mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${svc.results ? "bg-white" : "bg-gray-50"} py-16 md:py-20`}>
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-3">
              Common Questions
            </h2>
          </div>
          <div className="space-y-3">
            {svc.faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group border border-gray-200 rounded-xl overflow-hidden bg-white"
              >
                <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer list-none font-semibold text-brand-dark hover:bg-gray-50 transition-colors">
                  {q}
                  <svg
                    className="faq-icon w-5 h-5 text-brand-blue shrink-0 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-blue text-white py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-3">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-6">
            Call us, text us, or fill out a quick form , we respond within the
            hour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white text-brand-blue hover:bg-blue-50 px-7 py-3.5 rounded-xl font-bold transition-colors"
            >
              Request My Free Estimate
            </Link>
            <a
              href="tel:+19712806104"
              className="w-full sm:w-auto border-2 border-white/50 hover:border-white text-white px-7 py-3.5 rounded-xl font-bold transition-colors"
            >
              Call (971) 280-6104
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

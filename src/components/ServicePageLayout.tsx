import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SchemaMarkup from "@/components/SchemaMarkup";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface ServicePageLayoutProps {
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  overviewTitle: string;
  overviewText: string[];
  processSteps: ProcessStep[];
  benefits: Benefit[];
  faqs: FAQItem[];
  slug: string;
  heroImage?: string;
}

export default function ServicePageLayout({
  heroTitle,
  heroHighlight,
  heroDescription,
  overviewTitle,
  overviewText,
  processSteps,
  benefits,
  faqs,
  slug,
  heroImage,
}: ServicePageLayoutProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${heroTitle} ${heroHighlight}`,
    description: heroDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Northeast Paving, LLC",
      telephone: "860-447-1518",
      address: {
        "@type": "PostalAddress",
        streetAddress: "419 Montauk Avenue",
        addressLocality: "New London",
        addressRegion: "CT",
        postalCode: "06320",
      },
    },
    areaServed: { "@type": "State", name: "Connecticut" },
    url: `https://northeastpavingllc.com/services/${slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <SchemaMarkup schema={[serviceSchema, faqSchema]} />

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: heroTitle },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-charcoal text-white py-16 md:py-24 overflow-hidden">
        {heroImage && (
          <>
            <Image
              src={heroImage}
              alt={`${heroTitle} ${heroHighlight} in Southeastern Connecticut`}
              fill
              priority
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
          </>
        )}
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
              {heroTitle}{" "}
              <span className="text-orange">{heroHighlight}</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              {heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-estimate"
                className="inline-flex items-center justify-center bg-orange hover:bg-orange-dark text-white font-bold px-8 py-4 rounded-md transition-colors uppercase tracking-wide"
              >
                Get a Free Estimate
              </Link>
              <a
                href="tel:860-447-1518"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-md transition-colors border border-white/20"
              >
                <Phone className="w-5 h-5" />
                860-447-1518
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-6">
              {overviewTitle}
            </h2>
            {overviewText.map((paragraph, i) => (
              <p key={i} className="text-gray-warm leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-12 text-center">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-orange text-white rounded-full flex items-center justify-center text-xl font-bold font-heading mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-warm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-gray-light rounded-lg p-6">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-charcoal mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-warm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}

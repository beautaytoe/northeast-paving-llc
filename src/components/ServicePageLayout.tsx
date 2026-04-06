import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ShieldCheck } from "lucide-react";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SchemaMarkup from "@/components/SchemaMarkup";

const serviceAreaLinks = [
  { name: "New London", slug: "asphalt-paving-new-london-ct" },
  { name: "Groton", slug: "asphalt-paving-groton-ct" },
  { name: "Waterford", slug: "asphalt-paving-waterford-ct" },
  { name: "Mystic", slug: "asphalt-paving-mystic-ct" },
  { name: "East Lyme", slug: "asphalt-paving-east-lyme-ct" },
  { name: "Old Saybrook", slug: "asphalt-paving-old-saybrook-ct" },
  { name: "Stonington", slug: "asphalt-paving-stonington-ct" },
  { name: "Ledyard", slug: "asphalt-paving-ledyard-ct" },
  { name: "Montville", slug: "asphalt-paving-montville-ct" },
  { name: "Norwich", slug: "asphalt-paving-norwich-ct" },
  { name: "Colchester", slug: "asphalt-paving-colchester-ct" },
  { name: "East Haddam", slug: "asphalt-paving-east-haddam-ct" },
];

const allServices = [
  { title: "Asphalt Paving", href: "/services/asphalt-paving" },
  { title: "Sealcoating & Repair", href: "/services/sealcoating-repair" },
  { title: "Grading & Excavation", href: "/services/grading-excavation" },
  { title: "Material Delivery", href: "/services/material-delivery" },
  { title: "Gravel & Stone Installation", href: "/services/gravel-stone-installation" },
];

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface DecisionContent {
  title: string;
  paragraphs: string[];
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
  /** Slug used for service+city pages (e.g. "driveway-paving") */
  serviceCitySlug?: string;
  /** Optional decision support content section */
  decisionContent?: DecisionContent;
  /** Optional warranty/guarantee callout */
  warrantyText?: string;
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
  serviceCitySlug,
  decisionContent,
  warrantyText,
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
              <span className="text-blue">{heroHighlight}</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              {heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-estimate"
                className="inline-flex items-center justify-center bg-blue hover:bg-blue-dark text-white font-bold px-8 py-4 rounded-md transition-colors uppercase tracking-wide"
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
            Our Paving Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-blue text-white rounded-full flex items-center justify-center text-xl font-bold font-heading mx-auto mb-4">
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

      {/* Decision Support Content */}
      {decisionContent && (
        <section className="py-16 md:py-24 bg-gray-light">
          <div className="max-w-3xl mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-6">
              {decisionContent.title}
            </h2>
            {decisionContent.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-gray-warm leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Warranty Callout */}
      {warrantyText && (
        <section className={`py-8 ${decisionContent ? "bg-white" : "bg-gray-light"}`}>
          <div className="max-w-3xl mx-auto px-4 lg:px-8">
            <div className="bg-blue-50 border-l-4 border-blue rounded-r-lg p-6 flex gap-4 items-start">
              <ShieldCheck className="w-6 h-6 text-blue shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-charcoal mb-2">
                  Our Guarantee
                </h3>
                <p className="text-gray-warm leading-relaxed text-sm">
                  {warrantyText}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className={`py-16 md:py-24 ${decisionContent || warrantyText ? "bg-white" : "bg-gray-light"}`}>
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-8">
            Related Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {allServices
              .filter((s) => !s.href.endsWith(slug))
              .map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="bg-gray-light hover:bg-blue/10 text-charcoal hover:text-blue px-5 py-2.5 rounded-md transition-colors font-medium text-sm"
                >
                  {s.title} →
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mb-4">
            Where We Provide {heroTitle}
          </h2>
          <p className="text-gray-warm mb-8">
            We provide {heroTitle.toLowerCase()} services throughout Southeastern Connecticut.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreaLinks.map((area) => {
              const townSlug = area.slug.replace("asphalt-paving-", "");
              const href = serviceCitySlug
                ? `/services/${serviceCitySlug}/${townSlug}`
                : `/service-areas/${area.slug}`;
              return (
                <Link
                  key={area.slug}
                  href={href}
                  className="flex items-center gap-1.5 bg-white hover:bg-blue/10 text-charcoal hover:text-blue px-4 py-2 rounded-md transition-colors text-sm font-medium border border-gray-200"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {area.name}
                </Link>
              );
            })}
          </div>
          <Link
            href="/service-areas"
            className="inline-block mt-6 text-blue hover:text-blue-dark font-bold uppercase tracking-wide text-sm transition-colors"
          >
            View All Service Areas →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}

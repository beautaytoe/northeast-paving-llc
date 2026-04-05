import Link from "next/link";
import { Phone } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SchemaMarkup from "@/components/SchemaMarkup";
import FAQAccordion from "@/components/FAQAccordion";
import GHLForm from "@/components/GHLForm";
import type { LocationData } from "@/lib/locations";
import type { ServiceCityConfig } from "@/lib/service-city";

interface ServiceCityLayoutProps {
  service: ServiceCityConfig;
  location: LocationData;
}

export default function ServiceCityLayout({ service, location }: ServiceCityLayoutProps) {
  const faqs = service.faqs(location.town);
  const content = service.getContent(location.town);

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${service.serviceName} in ${location.town}, CT`,
      description: `Professional ${service.serviceDescription} in ${location.town}, Connecticut. 30+ years experience.`,
      provider: {
        "@type": "LocalBusiness",
        name: "Northeast Paving, LLC",
        telephone: "860-447-1518",
        address: { "@type": "PostalAddress", streetAddress: "419 Montauk Avenue", addressLocality: "New London", addressRegion: "CT", postalCode: "06320" },
      },
      areaServed: { "@type": "City", name: `${location.town}, CT` },
      url: `https://northeastpavingllc.com/services/${service.serviceSlug}/${location.slug.replace("asphalt-paving-", "")}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <>
      <SchemaMarkup schema={schemas} />

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.serviceName, href: service.mainServicePage },
          { label: `${location.town}, CT` },
        ]}
      />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
              {service.serviceName} in{" "}
              <span className="text-blue">{location.town}, CT</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              Professional {service.serviceDescription} for {location.town}{" "}
              homes and businesses. Licensed, insured, and W.B.E. certified with
              30+ years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#estimate-form" className="inline-flex items-center justify-center bg-blue hover:bg-blue-dark text-white font-bold px-8 py-4 rounded-md transition-colors uppercase tracking-wide">
                Get a Free Estimate
              </a>
              <a href="tel:860-447-1518" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-md transition-colors border border-white/20">
                <Phone className="w-5 h-5" />
                860-447-1518
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-charcoal mb-6">
            {service.serviceName} Services in {location.town}
          </h2>
          {content.map((paragraph, i) => (
            <p key={i} className="text-gray-warm leading-relaxed mb-4">{paragraph}</p>
          ))}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={service.mainServicePage} className="text-sm bg-gray-light hover:bg-blue/10 text-charcoal hover:text-blue px-4 py-2 rounded-md transition-colors font-medium">
              Learn More About {service.serviceName} →
            </Link>
            <Link href={`/service-areas/${location.slug}`} className="text-sm bg-gray-light hover:bg-blue/10 text-charcoal hover:text-blue px-4 py-2 rounded-md transition-colors font-medium">
              All Services in {location.town} →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* GHL Form */}
      <section id="estimate-form" className="bg-charcoal text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-center mb-8">
            Get a Free {service.serviceName} Estimate in{" "}
            <span className="text-blue">{location.town}</span>
          </h2>
          <div className="bg-white rounded-lg p-6">
            <GHLForm />
          </div>
        </div>
      </section>
    </>
  );
}

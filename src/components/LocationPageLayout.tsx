import Link from "next/link";
import { Phone, CheckCircle, MapPin, HardHat, Layers, Shovel, Truck, PackageOpen, ExternalLink as ExternalLinkIcon, Users, MapPinned, Clock } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SchemaMarkup from "@/components/SchemaMarkup";
import FAQAccordion from "@/components/FAQAccordion";
import GHLForm from "@/components/GHLForm";
import type { LocationData } from "@/lib/locations";

const services = [
  { title: "Asphalt Paving", href: "/services/asphalt-paving", icon: HardHat },
  { title: "Sealcoating & Repair", href: "/services/sealcoating-repair", icon: Layers },
  { title: "Grading & Excavation", href: "/services/grading-excavation", icon: Shovel },
  { title: "Material Delivery", href: "/services/material-delivery", icon: Truck },
  { title: "Gravel & Stone Installation", href: "/services/gravel-stone-installation", icon: PackageOpen },
];

const serviceCityLinks = [
  { title: "Driveway Paving", slug: "driveway-paving", description: "New driveway installation, repaving, and widening" },
  { title: "Parking Lot Paving", slug: "parking-lot-paving", description: "Commercial parking lot construction and resurfacing" },
  { title: "Sealcoating", slug: "sealcoating", description: "Protective sealcoat application for driveways and lots" },
  { title: "Grading & Excavation", slug: "grading-excavation", description: "Site prep, drainage solutions, and excavation work" },
  { title: "Gravel & Stone", slug: "gravel-stone", description: "Gravel driveways, stone bases, and recycled millings" },
];

interface LocationPageLayoutProps {
  location: LocationData;
}

export default function LocationPageLayout({ location }: LocationPageLayoutProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Northeast Paving, LLC",
    description: `Professional asphalt paving, sealcoating, and site work services in ${location.town}, CT. Over 30 years of experience.`,
    telephone: "860-447-1518",
    faxNumber: "860-447-1535",
    address: {
      "@type": "PostalAddress",
      streetAddress: "419 Montauk Avenue",
      addressLocality: "New London",
      addressRegion: "CT",
      postalCode: "06320",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.lat,
      longitude: location.lng,
    },
    areaServed: {
      "@type": "City",
      name: `${location.town}, CT`,
    },
    url: `https://northeastpavingllc.com/service-areas/${location.slug}`,
    priceRange: "$$",
    openingHours: "Mo-Fr 07:00-17:00",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <SchemaMarkup schema={[jsonLd, faqSchema]} />

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
          { label: `${location.town}, CT` },
        ]}
      />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
              Asphalt Paving & Driveway Contractor in{" "}
              <span className="text-blue">{location.town}, CT</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              Professional asphalt paving, sealcoating, grading, and more for{" "}
              {location.town} homes and businesses. 30+ years of trusted local
              service.
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

      {/* Stats Bar */}
      <section className="bg-blue text-white py-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2">
              <MapPinned className="w-4 h-4 opacity-80" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">{location.county}</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2">
              <Users className="w-4 h-4 opacity-80" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">Pop. {location.population.toLocaleString()}+</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2">
              <Clock className="w-4 h-4 opacity-80" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">{location.proximity}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-6">
            Driveway & Parking Lot Paving in {location.town}
          </h2>
          {location.intro.map((paragraph, i) => (
            <p key={i} className="text-gray-warm leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
          {location.landmarkLinks.length > 0 && (
            <div className="mt-6 p-5 bg-gray-light rounded-lg">
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-charcoal mb-3">
                Local Landmarks & Institutions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {location.landmarkLinks.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue hover:text-blue-dark transition-colors">
                    <ExternalLinkIcon className="w-3.5 h-3.5 shrink-0" />
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Neighborhoods & Challenges */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-6">
            Neighborhoods We Pave in {location.town}
          </h2>
          <p className="text-gray-warm leading-relaxed mb-6">
            We provide paving services throughout {location.town}, including these neighborhoods and areas:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {location.neighborhoods.map((area) => (
              <div key={area} className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue shrink-0" />
                <span className="text-gray-warm">{area}</span>
              </div>
            ))}
          </div>
          <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-charcoal mb-4">
            Paving Challenges in {location.town}
          </h3>
          {location.localChallenges.map((challenge, i) => (
            <p key={i} className="text-gray-warm leading-relaxed mb-3">{challenge}</p>
          ))}
          {location.permitsInfo && (
            <div className="mt-6 p-5 bg-white rounded-lg border border-gray-200">
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-charcoal mb-2">Local Permits & Regulations</h3>
              <p className="text-gray-warm leading-relaxed text-sm">{location.permitsInfo}</p>
              {location.townWebsite && (
                <a href={location.townWebsite.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-sm text-blue hover:text-blue-dark transition-colors font-medium">
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                  {location.townWebsite.text}
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Available Paving Services — cards linking to service+city pages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-4 text-center">
            Paving Services in {location.town}
          </h2>
          <p className="text-gray-warm text-center mb-10 max-w-2xl mx-auto">
            Click any service below to learn more about how we can help with your specific {location.town} project.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceCityLinks.map((sc) => {
              const townSlug = location.slug.replace("asphalt-paving-", "");
              return (
                <Link
                  key={sc.slug}
                  href={`/services/${sc.slug}/${townSlug}`}
                  className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue/30 transition-all"
                >
                  <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-charcoal mb-2">
                    {sc.title}
                  </h3>
                  <p className="text-sm text-gray-warm leading-relaxed mb-3">
                    {sc.description} in {location.town}
                  </p>
                  <span className="text-sm font-semibold text-blue group-hover:translate-x-1 transition-transform inline-block">
                    Learn More →
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="text-blue hover:text-blue-dark font-bold uppercase tracking-wide text-sm transition-colors">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-8 text-center">
            Why {location.town} Homeowners Choose Northeast Paving
          </h2>
          <div className="space-y-4">
            {location.whyChooseUs.map((reason) => (
              <div key={reason} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue shrink-0 mt-0.5" />
                <span className="text-gray-warm leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {location.faqs.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={location.faqs} />
          </div>
        </section>
      )}

      {/* GHL Form */}
      <section className="bg-charcoal text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-center mb-8">
            Get a Free Paving Estimate in{" "}
            <span className="text-blue">{location.town}</span>
          </h2>
          <div className="bg-white rounded-lg p-6">
            <GHLForm />
          </div>
        </div>
      </section>

      {/* Nearby Communities */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-4">
            Serving {location.town} & Nearby Communities
          </h2>
          <p className="text-gray-warm leading-relaxed mb-8">
            In addition to {location.town}, we provide paving services to these
            neighboring towns throughout Southeastern Connecticut:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {location.neighbors.map((neighbor) => (
              <Link key={neighbor.slug} href={`/service-areas/${neighbor.slug}`} className="bg-white hover:bg-blue/10 text-charcoal hover:text-blue px-4 py-2 rounded-md transition-colors font-medium text-sm">
                {neighbor.name}, CT →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline={`Ready to Start Your ${location.town} Project?`}
        subtext={`Get a free, no-obligation estimate for your ${location.town} paving project. Call today or fill out our online form.`}
      />
    </>
  );
}

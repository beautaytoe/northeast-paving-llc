import Link from "next/link";
import { Phone, CheckCircle, MapPin, HardHat, Layers, Shovel, Truck, PackageOpen } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SchemaMarkup from "@/components/SchemaMarkup";
import type { LocationData } from "@/lib/locations";

const services = [
  { title: "Asphalt Paving", href: "/services/asphalt-paving", icon: HardHat },
  { title: "Sealcoating & Repair", href: "/services/sealcoating-repair", icon: Layers },
  { title: "Grading & Excavation", href: "/services/grading-excavation", icon: Shovel },
  { title: "Material Delivery", href: "/services/material-delivery", icon: Truck },
  { title: "Gravel & Stone Installation", href: "/services/gravel-stone-installation", icon: PackageOpen },
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
    areaServed: {
      "@type": "City",
      name: `${location.town}, CT`,
    },
    url: `https://northeastpavingllc.com/service-areas/${location.slug}`,
    priceRange: "$$",
    openingHours: "Mo-Fr 07:00-17:00",
    image: "https://northeastpavingllc.com/images/og-image.jpg",
  };

  return (
    <>
      <SchemaMarkup schema={jsonLd} />

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
              Paving Services in{" "}
              <span className="text-orange">{location.town}, CT</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              Professional asphalt paving, sealcoating, grading, and more for
              {location.town} homes and businesses. 30+ years of trusted local
              service.
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

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-6">
            Your Trusted {location.town} Paving Contractor
          </h2>
          {location.intro.map((paragraph, i) => (
            <p key={i} className="text-gray-warm leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-10 text-center">
            Services Available in {location.town}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="flex items-center gap-4 bg-white rounded-lg p-5 hover:shadow-md hover:border-orange/30 border border-gray-200 transition-all"
              >
                <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center shrink-0">
                  <service.icon className="w-5 h-5 text-orange" />
                </div>
                <span className="font-heading text-base font-bold uppercase tracking-wide text-charcoal">
                  {service.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Landmarks */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-6">
            Serving All of {location.town}
          </h2>
          <p className="text-gray-warm leading-relaxed mb-6">
            We provide paving services throughout {location.town}, including
            areas near:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {location.landmarks.map((landmark) => (
              <div key={landmark} className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-orange shrink-0" />
                <span className="text-gray-warm">{landmark}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-8 text-center">
            Why {location.town} Residents Choose Us
          </h2>
          <div className="space-y-4">
            {location.whyChooseUs.map((reason) => (
              <div key={reason} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                <span className="text-gray-warm leading-relaxed">{reason}</span>
              </div>
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

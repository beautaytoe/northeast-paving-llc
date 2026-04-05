import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import LocationCard from "@/components/LocationCard";
import { locations } from "@/lib/locations";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Service Areas — Southeastern CT Paving",
  description:
    "Northeast Paving serves 25+ towns in Southeastern CT including New London, Groton, Waterford, Mystic, East Lyme, and Old Saybrook. Call 860-447-1518.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Service Areas" }]} />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
              Our <span className="text-blue">Service Areas</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              Northeast Paving proudly serves 25+ towns across Southeastern
              Connecticut. Based in New London, we&apos;re just a short drive
              from every community we serve.
            </p>
            <a
              href="tel:860-447-1518"
              className="inline-flex items-center gap-2 bg-blue hover:bg-blue-dark text-white font-bold px-8 py-4 rounded-md transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Call 860-447-1518
            </a>
          </div>
        </div>
      </section>

      {/* Location Grid */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-charcoal mb-10 text-center">
            Towns We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <LocationCard
                key={loc.slug}
                town={loc.town}
                slug={loc.slug}
                description={loc.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">
            Don&apos;t See Your Town?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            We may still be able to help. Call us to discuss your project
            location and we&apos;ll let you know if we can serve your area.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:860-447-1518"
              className="flex items-center gap-2 bg-blue hover:bg-blue-dark text-white font-bold px-8 py-4 rounded-md transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Call 860-447-1518
            </a>
            <Link
              href="/free-estimate"
              className="bg-white hover:bg-gray-100 text-charcoal font-bold px-8 py-4 rounded-md transition-colors text-lg"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

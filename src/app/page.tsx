import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Truck,
  HardHat,
  Shovel,
  PackageOpen,
  Layers,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTABanner from "@/components/CTABanner";
import SchemaMarkup from "@/components/SchemaMarkup";
import { heroImages } from "@/lib/images";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Northeast Paving, LLC",
  description:
    "Southeast Connecticut's trusted paving contractor for 30+ years. Asphalt paving, sealcoating, grading & excavation.",
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
    latitude: 41.3473,
    longitude: -72.1012,
  },
  url: "https://northeastpavingllc.com",
  priceRange: "$$",
  openingHours: "Mo-Fr 07:00-17:00",
  areaServed: [
    "New London, CT", "Groton, CT", "Waterford, CT", "Mystic, CT",
    "East Lyme, CT", "Old Saybrook, CT", "Stonington, CT", "Ledyard, CT",
    "Montville, CT", "Niantic, CT", "Old Lyme, CT", "Essex, CT",
    "Salem, CT", "North Stonington, CT", "Lyme, CT",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Paving Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Asphalt Paving" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sealcoating & Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Grading & Excavation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Material Delivery" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gravel & Stone Installation" } },
    ],
  },
};

const services = [
  {
    title: "Asphalt Paving",
    description:
      "Professional driveway and parking lot paving for residential, commercial, and municipal projects.",
    href: "/services/asphalt-paving",
    icon: HardHat,
  },
  {
    title: "Sealcoating & Repair",
    description:
      "Extend the life of your asphalt with expert sealcoating, crack repair, and patching services.",
    href: "/services/sealcoating-repair",
    icon: Layers,
  },
  {
    title: "Grading & Excavation",
    description:
      "Complete site preparation including grading, drainage solutions, and excavation work.",
    href: "/services/grading-excavation",
    icon: Shovel,
  },
  {
    title: "Material Delivery",
    description:
      "Fast, reliable delivery of mulch, topsoil, gravel, and stone throughout Southeastern CT.",
    href: "/services/material-delivery",
    icon: Truck,
  },
  {
    title: "Gravel & Stone Installation",
    description:
      "Base materials, recycled asphalt millings, and stone installation for driveways and lots.",
    href: "/services/gravel-stone-installation",
    icon: PackageOpen,
  },
];

export default function Home() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      {/* Hero Section */}
      <section className="relative bg-charcoal text-white overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/gallery/commercial-parking-lot-paving-ct-01.webp"
          alt="Professional asphalt parking lot paving by Northeast Paving in Southeastern Connecticut"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 lg:py-40 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue font-semibold uppercase tracking-widest text-sm mb-4">
              Southeastern Connecticut&apos;s Trusted Paving Contractor
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight tracking-wide mb-6">
              Quality Asphalt Paving
              <br />
              <span className="text-blue">For Over 30 Years</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              From driveways to parking lots, Northeast Paving delivers
              professional results backed by three decades of experience.
              Licensed, insured, and W.B.E. certified.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-estimate"
                className="inline-flex items-center justify-center bg-blue hover:bg-blue-dark text-white font-bold px-8 py-4 rounded-md transition-colors text-lg uppercase tracking-wide"
              >
                Get a Free Estimate
              </Link>
              <a
                href="tel:860-447-1518"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-md transition-colors text-lg border border-white/20"
              >
                <Phone className="w-5 h-5" />
                860-447-1518
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="bg-blue text-white py-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-semibold uppercase tracking-wide">
            <span>30+ Years Experience</span>
            <span className="hidden sm:inline">·</span>
            <span>Licensed & Insured</span>
            <span className="hidden sm:inline">·</span>
            <span>W.B.E. Certified</span>
            <span className="hidden sm:inline">·</span>
            <span>Free Estimates</span>
            <span className="hidden sm:inline">·</span>
            <span>Locally Owned</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-4">
              Our Services
            </h2>
            <p className="text-gray-warm text-lg max-w-2xl mx-auto">
              Comprehensive paving and site work solutions for residential,
              commercial, and municipal clients across Southeastern Connecticut.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-blue hover:text-blue-dark font-bold uppercase tracking-wide transition-colors"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-warm text-lg">
              Don&apos;t just take our word for it — hear from our satisfied
              customers.
            </p>
          </div>
          <TestimonialSlider />
          <div className="text-center mt-10">
            <Link
              href="/reviews"
              className="inline-flex items-center text-blue hover:text-blue-dark font-bold uppercase tracking-wide transition-colors"
            >
              Read More Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}

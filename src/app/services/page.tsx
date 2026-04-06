import type { Metadata } from "next";
import Link from "next/link";
import {
  HardHat,
  Layers,
  Shovel,
  Truck,
  PackageOpen,
  Phone,
  Shield,
  Award,
  BadgeCheck,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Paving & Site Work Services — Southeastern CT",
  description:
    "Full-service asphalt paving, sealcoating, grading, excavation, and material delivery in Southeastern CT. 30+ years experience. Call 860-447-1518.",
};

const services = [
  {
    title: "Asphalt Paving",
    description:
      "Professional driveway and parking lot paving for residential, commercial, and municipal projects throughout Southeastern Connecticut.",
    href: "/services/asphalt-paving",
    icon: HardHat,
  },
  {
    title: "Sealcoating & Repair",
    description:
      "Extend the life of your asphalt with expert sealcoating, crack repair, and patching services that protect your investment.",
    href: "/services/sealcoating-repair",
    icon: Layers,
  },
  {
    title: "Grading & Excavation",
    description:
      "Complete site preparation including grading, drainage solutions, and excavation work for projects of all sizes.",
    href: "/services/grading-excavation",
    icon: Shovel,
  },
  {
    title: "Material Delivery & Trucking",
    description:
      "Fast, reliable delivery of mulch, topsoil, gravel, and stone throughout Southeastern CT with our fleet of trucks.",
    href: "/services/material-delivery",
    icon: Truck,
  },
  {
    title: "Gravel & Stone Installation",
    description:
      "Base materials, recycled asphalt millings, and stone installation for driveways, parking areas, and construction sites.",
    href: "/services/gravel-stone-installation",
    icon: PackageOpen,
  },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Services" }]} />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
              Our <span className="text-blue">Services</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              From new asphalt paving to complete site work, Northeast Paving
              delivers comprehensive solutions for residential, commercial, and
              municipal clients across Southeastern Connecticut.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Link */}
      <section className="py-12 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-warm mb-4">
            We provide all of these services across{" "}
            <Link href="/service-areas" className="text-blue hover:text-blue-dark font-semibold transition-colors">
              25+ towns in Southeastern Connecticut
            </Link>
            , including{" "}
            <Link href="/service-areas/asphalt-paving-new-london-ct" className="text-blue hover:text-blue-dark transition-colors">New London</Link>,{" "}
            <Link href="/service-areas/asphalt-paving-groton-ct" className="text-blue hover:text-blue-dark transition-colors">Groton</Link>,{" "}
            <Link href="/service-areas/asphalt-paving-waterford-ct" className="text-blue hover:text-blue-dark transition-colors">Waterford</Link>,{" "}
            <Link href="/service-areas/asphalt-paving-mystic-ct" className="text-blue hover:text-blue-dark transition-colors">Mystic</Link>, and more.
          </p>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mb-10 text-center">
            Why Northeast Paving
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/about" className="group text-center bg-gray-light hover:bg-blue/5 rounded-lg p-6 transition-colors">
              <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <HardHat className="w-6 h-6 text-blue" />
              </div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-charcoal group-hover:text-blue transition-colors">
                30+ Years Experience
              </h3>
            </Link>
            <Link href="/about" className="group text-center bg-gray-light hover:bg-blue/5 rounded-lg p-6 transition-colors">
              <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-blue" />
              </div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-charcoal group-hover:text-blue transition-colors">
                CT Licensed &amp; Insured
              </h3>
              <p className="text-xs text-gray-warm mt-1">Reg. #571106</p>
            </Link>
            <Link href="/why-choose-us" className="group text-center bg-gray-light hover:bg-blue/5 rounded-lg p-6 transition-colors">
              <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-blue" />
              </div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-charcoal group-hover:text-blue transition-colors">
                Certified W.B.E.
              </h3>
            </Link>
            <Link href="/free-estimate" className="group text-center bg-gray-light hover:bg-blue/5 rounded-lg p-6 transition-colors">
              <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-blue" />
              </div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-charcoal group-hover:text-blue transition-colors">
                Free Estimates
              </h3>
              <p className="text-xs text-gray-warm mt-1">860-447-1518</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Call us for a free consultation. We&apos;ll assess your project and
            recommend the best solution.
          </p>
          <a
            href="tel:860-447-1518"
            className="inline-flex items-center gap-2 bg-charcoal hover:bg-gray-warm text-white font-bold px-8 py-4 rounded-md transition-colors text-lg"
          >
            <Phone className="w-5 h-5" />
            Call 860-447-1518
          </a>
        </div>
      </section>
    </>
  );
}

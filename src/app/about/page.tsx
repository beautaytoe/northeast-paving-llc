import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Award, Shield, Users, Clock, MapPin } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { aboutImages, heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us — 30+ Years of Paving Excellence",
  description:
    "Learn about Northeast Paving LLC — Southeastern CT's trusted paving contractor for over 30 years. Women-owned, licensed, insured. Call 860-447-1518.",
};

const milestones = [
  {
    icon: Clock,
    title: "30+ Years",
    description: "Serving Southeastern Connecticut since the early 1990s",
  },
  {
    icon: Award,
    title: "W.B.E. Certified",
    description: "State of Connecticut Certified Women-Owned Business Enterprise",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "CT Dept. of Consumer Protection Registration #571106",
  },
  {
    icon: Users,
    title: "Locally Owned",
    description: "Based in New London, CT — your neighbors in the community",
  },
  {
    icon: MapPin,
    title: "15+ Towns Served",
    description: "Covering all of Southeastern Connecticut",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      {/* Hero */}
      <section className="relative bg-charcoal text-white py-16 md:py-24 overflow-hidden">
        <Image
          src={heroImages.pavingCrew.src}
          alt={heroImages.pavingCrew.alt}
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
              About <span className="text-blue">Northeast Paving</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              For over three decades, we&apos;ve been building and maintaining
              the roads, driveways, and parking lots of Southeastern
              Connecticut.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-8">
            Our Story
          </h2>
          <div className="space-y-5 text-gray-warm leading-relaxed">
            <p>
              Northeast Paving, LLC was founded with a simple mission: deliver
              the highest quality paving and site work to the communities of
              Southeastern Connecticut. What started as a small, local operation
              has grown into one of the region&apos;s most trusted paving
              contractors — but we&apos;ve never lost sight of the values that
              built this company.
            </p>
            <p>
              With over 30 years of experience, we&apos;ve paved thousands of
              driveways, parking lots, and roads across New London County and
              beyond. Every project, no matter the size, receives the same
              attention to detail, quality materials, and professional execution
              that our reputation is built on.
            </p>
            <p>
              As a State of Connecticut Certified Women-Owned Business
              Enterprise (W.B.E.), we&apos;re proud to bring diversity and a
              unique perspective to the construction industry. Our certification
              reflects our commitment to excellence, integrity, and community
              involvement.
            </p>
            <p>
              We&apos;re headquartered at 419 Montauk Avenue in New London, CT,
              and our service area covers 15+ towns throughout Southeastern
              Connecticut. When you work with Northeast Paving, you&apos;re
              working with your neighbors — people who care about this community
              as much as you do.
            </p>
          </div>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={aboutImages.waterfordTeam.src}
              alt={aboutImages.waterfordTeam.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-12 text-center">
            Why We Stand Out
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {milestones.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-6 text-center"
              >
                <div className="w-14 h-14 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-blue" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-warm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-6">
            What We Do
          </h2>
          <p className="text-gray-warm leading-relaxed mb-8">
            We provide a full range of paving and site work services including
            asphalt paving, sealcoating and repair, grading and excavation,
            material delivery, and gravel and stone installation. Whether
            you&apos;re a homeowner, business owner, or municipality, we have
            the experience and equipment to handle your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="bg-blue hover:bg-blue-dark text-white font-bold px-8 py-4 rounded-md transition-colors uppercase tracking-wide"
            >
              View Our Services
            </Link>
            <a
              href="tel:860-447-1518"
              className="flex items-center gap-2 bg-charcoal hover:bg-gray-warm text-white font-bold px-8 py-4 rounded-md transition-colors"
            >
              <Phone className="w-5 h-5" />
              860-447-1518
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Work With a Team You Can Trust"
        subtext="Get a free estimate from Southeastern CT's most experienced paving contractor."
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Shield,
  Clock,
  ThumbsUp,
  DollarSign,
  Truck,
  CheckCircle,
  Star,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Why Choose Us — Your Trusted Paving Contractor",
  description:
    "Why choose Northeast Paving? 30+ years experience, CT licensed & insured, W.B.E. certified, and serving 25+ towns in Southeastern Connecticut. Free estimates.",
};

const differentiators = [
  {
    icon: Clock,
    title: "30+ Years of Experience",
    description:
      "We've been paving driveways, parking lots, and roads in Southeastern Connecticut for over three decades. That experience means we've seen and solved every challenge, and we bring that expertise to your project.",
  },
  {
    icon: Award,
    title: "W.B.E. Certified",
    description:
      "Northeast Paving is a State of Connecticut Certified Women-Owned Business Enterprise. Our certification opens doors for municipal and state contracts while reflecting our commitment to excellence and diversity.",
  },
  {
    icon: Shield,
    title: "Licensed & Fully Insured",
    description:
      "We hold CT Dept. of Consumer Protection Registration #571106 and carry comprehensive liability and workers' compensation insurance. You're fully protected when you work with us.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Workmanship",
    description:
      "We never cut corners. From proper base preparation to premium materials and expert finishing, every step meets our high standards. That's why our paving lasts decades.",
  },
  {
    icon: DollarSign,
    title: "Honest, Upfront Pricing",
    description:
      "No hidden fees, no surprise charges, no bait-and-switch. We provide detailed, written estimates so you know exactly what you're getting and what it costs before we start.",
  },
  {
    icon: Truck,
    title: "Full-Service Capability",
    description:
      "We handle every aspect of your project in-house — grading, excavation, paving, sealcoating, and material delivery. One contractor, one point of contact, one standard of quality.",
  },
];

const guarantees = [
  "Free, no-obligation estimates",
  "Written contracts with clear scope",
  "On-time project completion",
  "Thorough site cleanup after every job",
  "Responsive communication throughout",
  "Standing behind our work",
];

export default function WhyChooseUsPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Why Choose Us" }]} />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
              Why Choose <span className="text-blue">Northeast Paving</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              When you choose us, you&apos;re choosing 30+ years of proven
              expertise, honest business practices, and a commitment to quality
              that&apos;s earned us the trust of thousands of customers.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-gray-light rounded-lg p-8">
                <div className="w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-blue" />
                </div>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-warm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Guarantees */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-4">
            Our Commitment to You
          </h2>
          <p className="text-gray-warm text-lg mb-10">
            Every project comes with our promise of professionalism, quality, and
            transparency.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
            {guarantees.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue shrink-0 mt-0.5" />
                <span className="text-gray-warm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Teaser */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-blue text-blue" />
            ))}
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal mb-4">
            Trusted by Our Community
          </h2>
          <p className="text-gray-warm text-lg mb-8 max-w-xl mx-auto">
            Our reputation is built on the satisfaction of our customers.
            Don&apos;t just take our word for it — see what homeowners and
            business owners across Southeastern CT have to say.
          </p>
          <Link
            href="/reviews"
            className="inline-flex items-center bg-blue hover:bg-blue-dark text-white font-bold px-8 py-4 rounded-md transition-colors uppercase tracking-wide"
          >
            Read Customer Reviews
          </Link>
        </div>
      </section>

      <CTABanner
        headline="Experience the Northeast Paving Difference"
        subtext="Get a free, no-obligation estimate and see why we've been Southeastern CT's trusted paving contractor for over 30 years."
      />
    </>
  );
}

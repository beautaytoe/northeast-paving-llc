import type { Metadata } from "next";
import { Phone, CheckCircle } from "lucide-react";
import GHLForm from "@/components/GHLForm";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Get a Free Paving Estimate — Southeastern CT",
  description:
    "Request a free, no-obligation estimate for asphalt paving, sealcoating, grading, or material delivery in Southeastern CT. Call 860-447-1518.",
};

const benefits = [
  "Free, no-obligation quote",
  "On-site assessment included",
  "Response within 1 business day",
  "Transparent, upfront pricing",
  "30+ years of experience",
  "Licensed, insured & W.B.E. certified",
];

export default function FreeEstimatePage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Free Estimate" }]} />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            Get Your <span className="text-blue">Free Estimate</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            Fill out the form below and we&apos;ll provide a detailed,
            no-obligation estimate for your project. Most estimates include a
            free on-site assessment.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* GHL Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-charcoal mb-6">
                Tell Us About Your Project
              </h2>
              <GHLForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-gray-light rounded-lg p-8">
                <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-charcoal mb-6">
                  What to Expect
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue shrink-0 mt-0.5" />
                      <span className="text-gray-warm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-300">
                  <p className="text-sm text-gray-warm mb-4">
                    Prefer to talk? Call us directly:
                  </p>
                  <a
                    href="tel:860-447-1518"
                    className="flex items-center justify-center gap-2 bg-blue hover:bg-blue-dark text-white font-bold px-6 py-4 rounded-md transition-colors text-lg w-full"
                  >
                    <Phone className="w-5 h-5" />
                    860-447-1518
                  </a>
                </div>
              </div>

              <div className="mt-6 bg-blue/5 border border-blue/20 rounded-lg p-6">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-charcoal mb-2">
                  Serving Southeastern CT
                </h3>
                <p className="text-sm text-gray-warm leading-relaxed">
                  New London, Groton, Waterford, Mystic, East Lyme, Old
                  Saybrook, Stonington, Ledyard, Montville, Niantic, Old Lyme,
                  Essex, Salem, North Stonington, and Lyme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

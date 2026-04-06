import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Careers — Join Our Paving Crew",
  description:
    "Join the Northeast Paving LLC team. We're hiring experienced paving operators, laborers, and CDL drivers in Southeastern CT. Competitive pay, year-round work. Call 860-447-1518.",
};

export default function CareersPage() {
  return (
    <>
      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            Join the Northeast Paving{" "}
            <span className="text-blue">Team</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            Build your career with Southeastern Connecticut&rsquo;s trusted
            paving contractor. 30+ years strong and growing.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mb-6">
            Now Hiring Experienced Paving Professionals
          </h2>
          <p className="text-gray-warm leading-relaxed mb-4">
            We&rsquo;re always looking for experienced paving professionals
            &mdash; operators, laborers, and CDL drivers. Northeast Paving
            offers competitive pay, year-round work when available, and a
            team-oriented environment.
          </p>
          <p className="text-gray-warm leading-relaxed mb-4">
            As a company with over 30 years of experience in Southeastern
            Connecticut, we take pride in our reputation for quality work and
            professionalism. We value reliable, hard-working team members who
            share our commitment to doing the job right the first time.
          </p>
          <p className="text-gray-warm leading-relaxed mb-8">
            If you have experience in asphalt paving, sealcoating, excavation,
            grading, or equipment operation, we&rsquo;d like to hear from you.
          </p>

          <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-charcoal mb-4">
            How to Apply
          </h3>
          <p className="text-gray-warm leading-relaxed mb-6">
            Call{" "}
            <a
              href="tel:860-447-1518"
              className="text-blue hover:underline font-semibold"
            >
              860-447-1518
            </a>{" "}
            or stop by our office at 419 Montauk Avenue, New London, CT 06320
            to inquire about current openings.
          </p>

          <div className="bg-gray-light rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <MapPin className="w-6 h-6 text-blue shrink-0 mt-0.5" />
            <div>
              <p className="font-heading font-bold text-charcoal uppercase tracking-wide">
                Northeast Paving, LLC
              </p>
              <p className="text-gray-warm text-sm">
                419 Montauk Avenue, New London, CT 06320
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Give us a call to learn about current openings and join our
            experienced team.
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
              href="/contact"
              className="bg-white hover:bg-gray-100 text-charcoal font-bold px-8 py-4 rounded-md transition-colors text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

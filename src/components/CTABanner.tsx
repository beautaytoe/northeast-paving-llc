import Link from "next/link";
import { Phone } from "lucide-react";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
}

export default function CTABanner({
  headline = "Ready to Get Started?",
  subtext = "Contact us today for a free, no-obligation estimate on your next paving project.",
}: CTABannerProps) {
  return (
    <section className="bg-charcoal text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">
          {headline}
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:860-447-1518"
            className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold px-8 py-4 rounded-md transition-colors text-lg"
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
  );
}

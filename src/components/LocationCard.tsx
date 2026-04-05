import Link from "next/link";
import { MapPin } from "lucide-react";

interface LocationCardProps {
  town: string;
  slug: string;
  description: string;
}

export default function LocationCard({
  town,
  slug,
  description,
}: LocationCardProps) {
  return (
    <Link
      href={`/service-areas/${slug}`}
      className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue/30 transition-all duration-200"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 bg-blue/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue/20 transition-colors">
          <MapPin className="w-5 h-5 text-blue" />
        </div>
        <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-charcoal">
          {town}, CT
        </h3>
      </div>
      <p className="text-sm text-gray-warm leading-relaxed">{description}</p>
      <span className="inline-block mt-4 text-sm font-semibold text-blue group-hover:translate-x-1 transition-transform">
        View Services →
      </span>
    </Link>
  );
}

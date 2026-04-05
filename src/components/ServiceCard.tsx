import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange/30 transition-all duration-200"
    >
      <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange/20 transition-colors">
        <Icon className="w-6 h-6 text-orange" />
      </div>
      <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-charcoal mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-warm leading-relaxed">{description}</p>
      <span className="inline-block mt-4 text-sm font-semibold text-orange group-hover:translate-x-1 transition-transform">
        Learn More →
      </span>
    </Link>
  );
}

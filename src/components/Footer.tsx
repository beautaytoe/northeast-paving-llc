import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { href: "/services/asphalt-paving", label: "Asphalt Paving" },
  { href: "/services/sealcoating-repair", label: "Sealcoating & Repair" },
  { href: "/services/grading-excavation", label: "Grading & Excavation" },
  { href: "/services/material-delivery", label: "Material Delivery" },
  { href: "/services/gravel-stone-installation", label: "Gravel & Stone" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/gallery", label: "Gallery" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const serviceAreas = [
  "New London",
  "Groton",
  "Waterford",
  "Mystic",
  "East Lyme",
  "Old Saybrook",
  "Stonington",
  "Ledyard",
  "Montville",
  "Niantic",
  "Old Lyme",
  "Essex",
  "Salem",
  "North Stonington",
  "Lyme",
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl font-bold uppercase tracking-wide mb-4">
              Northeast Paving, LLC
            </h3>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <a
                href="tel:860-447-1518"
                className="flex items-center gap-2 hover:text-orange transition-colors"
              >
                <Phone className="w-4 h-4 text-orange shrink-0" />
                860-447-1518
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange shrink-0" />
                <span>Fax: 860-447-1535</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                <span>
                  419 Montauk Avenue
                  <br />
                  New London, CT 06320
                </span>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-400 space-y-1">
              <p>CT Dept. of Consumer Protection Reg. #571106</p>
              <p>State of CT Certified W.B.E.</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase tracking-wide mb-4">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-300">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase tracking-wide mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-300">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase tracking-wide mb-4">
              Service Areas
            </h3>
            <div className="text-sm text-gray-300 leading-relaxed">
              {serviceAreas.join(" · ")}
            </div>
            <Link
              href="/service-areas"
              className="inline-block mt-3 text-sm text-orange hover:text-orange-light transition-colors font-medium"
            >
              View All Areas →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} Northeast Paving, LLC. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/free-estimate" className="hover:text-orange transition-colors">
              Free Estimate
            </Link>
            <Link href="/contact" className="hover:text-orange transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

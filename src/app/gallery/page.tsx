import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SchemaMarkup from "@/components/SchemaMarkup";
import GHLForm from "@/components/GHLForm";
import { galleryImages, allGalleryImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Asphalt Paving Project Photos | Driveways & Parking Lots CT",
  description:
    "Browse photos of completed asphalt paving projects by Northeast Paving LLC — driveways, parking lots, sealcoating, and excavation across Southeastern Connecticut. 30+ years experience.",
};

const IMAGE_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw";

const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Asphalt Paving Project Photos in Southeastern CT",
  description:
    "Photos of completed asphalt paving, sealcoating, excavation, and material delivery projects by Northeast Paving LLC across Southeastern Connecticut.",
  publisher: {
    "@type": "Organization",
    name: "Northeast Paving, LLC",
    logo: {
      "@type": "ImageObject",
      url: "https://northeastpavingllc.com/images/brand/northeast-paving-logo.webp",
    },
  },
  image: allGalleryImages.map((img) => ({
    "@type": "ImageObject",
    name: img.alt,
    contentUrl: `https://northeastpavingllc.com${img.src}`,
    description: img.alt,
  })),
};

export default function GalleryPage() {
  return (
    <>
      <SchemaMarkup schema={imageGallerySchema} />
      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            Asphalt Paving Project Photos in{" "}
            <span className="text-blue">Southeastern CT</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            See the quality of our work firsthand. Browse photos from paving,
            sealcoating, excavation, and gravel projects across Southeastern
            Connecticut.
          </p>
        </div>
      </section>

      {/* ── Driveway Paving ─────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mb-4">
            Driveway Paving Projects
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            These residential driveway projects showcase our work across
            Southeastern Connecticut, including jobs in{" "}
            <Link href="/service-areas/asphalt-paving-groton-ct" className="text-blue hover:underline">Groton</Link>,{" "}
            <Link href="/service-areas/asphalt-paving-waterford-ct" className="text-blue hover:underline">Waterford</Link>, and{" "}
            <Link href="/service-areas/asphalt-paving-new-london-ct" className="text-blue hover:underline">New London</Link>.
            From new installations to complete tear-out and repave jobs, we
            deliver smooth, properly graded driveways built to last.{" "}
            <Link href="/services/asphalt-paving" className="text-blue hover:underline font-semibold">
              Learn more about our driveway paving services&nbsp;&rarr;
            </Link>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.drivewayPaving.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={IMAGE_SIZES}
                  priority={i < 4}
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Parking Lot Paving ──────────────────────────────── */}
      <section className="py-12 md:py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mb-4">
            Commercial Parking Lot Paving
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            We pave parking lots for businesses, retail centers, and commercial
            properties throughout{" "}
            <Link href="/service-areas/asphalt-paving-montville-ct" className="text-blue hover:underline">Montville</Link>,{" "}
            <Link href="/service-areas/asphalt-paving-east-lyme-ct" className="text-blue hover:underline">East Lyme</Link>, and{" "}
            <Link href="/service-areas/asphalt-paving-old-saybrook-ct" className="text-blue hover:underline">Old Saybrook</Link>.
            Every project includes proper grading, base preparation, and
            compaction for a long-lasting surface.{" "}
            <Link href="/services/asphalt-paving" className="text-blue hover:underline font-semibold">
              View our parking lot paving services&nbsp;&rarr;
            </Link>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.parkingLotPaving.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={IMAGE_SIZES}
                  loading="lazy"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Road & Specialty Paving ─────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mb-4">
            Road Paving &amp; Specialty Work
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Beyond driveways and parking lots, we handle municipal road
            resurfacing, sidewalk paving, and curb installation across
            Southeastern CT. Our crew and equipment are built for projects of
            any scale.{" "}
            <Link href="/services" className="text-blue hover:underline font-semibold">
              Explore all our paving services&nbsp;&rarr;
            </Link>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[...galleryImages.roadPaving, ...galleryImages.specialtyPaving].map(
              (img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes={IMAGE_SIZES}
                    loading="lazy"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Sealcoating & Repair ────────────────────────────── */}
      <section className="py-12 md:py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mb-4">
            Sealcoating &amp; Asphalt Repair
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Sealcoating protects your asphalt from UV damage, water
            penetration, and everyday wear. These photos show sealcoating and
            patching projects for commercial properties in{" "}
            <Link href="/service-areas/asphalt-paving-mystic-ct" className="text-blue hover:underline">Mystic</Link>,{" "}
            <Link href="/service-areas/asphalt-paving-ledyard-ct" className="text-blue hover:underline">Ledyard</Link>, and{" "}
            <Link href="/service-areas/asphalt-paving-waterford-ct" className="text-blue hover:underline">Waterford</Link>.{" "}
            <Link href="/services/sealcoating-repair" className="text-blue hover:underline font-semibold">
              Learn about our sealcoating services&nbsp;&rarr;
            </Link>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.sealcoating.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={IMAGE_SIZES}
                  loading="lazy"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grading & Excavation ────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mb-4">
            Site Grading &amp; Excavation Work
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Proper excavation, grading, and drainage are the foundation of
            every quality paving job. These photos show site prep, base
            installation, and drainage work in{" "}
            <Link href="/service-areas/asphalt-paving-stonington-ct" className="text-blue hover:underline">Stonington</Link>,{" "}
            <Link href="/service-areas/asphalt-paving-salem-ct" className="text-blue hover:underline">Salem</Link>, and{" "}
            <Link href="/service-areas/asphalt-paving-niantic-ct" className="text-blue hover:underline">Niantic</Link>.{" "}
            <Link href="/services/grading-excavation" className="text-blue hover:underline font-semibold">
              View our grading &amp; excavation services&nbsp;&rarr;
            </Link>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.excavation.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={IMAGE_SIZES}
                  loading="lazy"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Material Delivery ───────────────────────────────── */}
      <section className="py-12 md:py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mb-4">
            Material Delivery &amp; Trucking
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            We deliver mulch, topsoil, gravel, and stone directly to
            residential and commercial sites across Southeastern Connecticut.
            Our fleet handles jobs of every size.{" "}
            <Link href="/services/material-delivery" className="text-blue hover:underline font-semibold">
              Learn about material delivery&nbsp;&rarr;
            </Link>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.trucking.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={IMAGE_SIZES}
                  loading="lazy"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gravel & Stone ──────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mb-4">
            Gravel &amp; Stone Installation
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Gravel driveways, stone bases, and recycled asphalt millings — we
            install it all. These projects span{" "}
            <Link href="/service-areas/asphalt-paving-north-stonington-ct" className="text-blue hover:underline">North Stonington</Link>,{" "}
            <Link href="/service-areas/asphalt-paving-essex-ct" className="text-blue hover:underline">Essex</Link>, and{" "}
            <Link href="/service-areas/asphalt-paving-lyme-ct" className="text-blue hover:underline">Lyme</Link>.{" "}
            <Link href="/services/gravel-stone-installation" className="text-blue hover:underline font-semibold">
              Learn about gravel &amp; stone installation&nbsp;&rarr;
            </Link>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.gravelStone.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={IMAGE_SIZES}
                  loading="lazy"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GHL Form ────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-gray-light">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-charcoal text-center mb-8">
            Ready to Start <span className="text-blue">Your Project?</span>
          </h2>
          <GHLForm />
        </div>
      </section>

      {/* ── Related Pages ───────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mb-8 text-center">
            Explore More
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/services", label: "All Services", desc: "Paving, sealcoating, excavation & more" },
              { href: "/reviews", label: "Customer Reviews", desc: "See what our clients say about us" },
              { href: "/service-areas", label: "Service Areas", desc: "Towns we serve across SE Connecticut" },
              { href: "/free-estimate", label: "Free Estimate", desc: "Get a no-obligation quote today" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group block bg-gray-light hover:bg-blue/5 rounded-lg p-6 transition-colors border border-gray-200"
              >
                <h3 className="font-heading text-lg font-bold text-charcoal group-hover:text-blue transition-colors mb-1">
                  {link.label}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{link.desc}</p>
                <span className="text-blue text-sm font-semibold flex items-center gap-1">
                  View <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="bg-charcoal text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Your driveway or parking lot could be our next success story. Get a
            free estimate today.
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
              href="/free-estimate"
              className="bg-white hover:bg-gray-100 text-charcoal font-bold px-8 py-4 rounded-md transition-colors text-lg"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { galleryImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Project Gallery — Before & After Photos",
  description:
    "View before and after photos of Northeast Paving LLC projects. Driveways, parking lots, sealcoating, and more across Southeastern CT. Call 860-447-1518.",
};

const sections = [
  {
    title: "Driveway Paving",
    images: galleryImages.drivewayPaving,
  },
  {
    title: "Parking Lot Paving",
    images: galleryImages.parkingLotPaving,
  },
  {
    title: "Road Paving & Specialty",
    images: [...galleryImages.roadPaving, ...galleryImages.specialtyPaving],
  },
  {
    title: "Sealcoating & Repair",
    images: galleryImages.sealcoating,
  },
  {
    title: "Grading & Excavation",
    images: galleryImages.excavation,
  },
  {
    title: "Material Delivery",
    images: galleryImages.trucking,
  },
  {
    title: "Gravel & Stone Installation",
    images: galleryImages.gravelStone,
  },
];

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            Project <span className="text-orange">Gallery</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            See the quality of our work firsthand. Browse photos from paving
            projects across Southeastern Connecticut.
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      {sections.map((section) => (
        <section
          key={section.title}
          className="py-12 md:py-16 odd:bg-white even:bg-gray-light"
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mb-8">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {section.images.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
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
    </>
  );
}

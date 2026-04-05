import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import BeforeAfter from "@/components/BeforeAfter";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Project Gallery — Before & After Photos",
  description:
    "View before and after photos of Northeast Paving LLC projects. Driveways, parking lots, sealcoating, and more across Southeastern CT. Call 860-447-1518.",
};

const projects = [
  {
    title: "Residential Driveway — Groton, CT",
    category: "Driveway Paving",
    description:
      "Complete tear-out and repave of a deteriorated asphalt driveway. New gravel base, proper grading for drainage, and fresh hot-mix asphalt.",
    beforeAlt: "Cracked and deteriorated driveway in Groton CT before repaving",
    afterAlt: "Smooth new asphalt driveway in Groton CT after professional paving",
  },
  {
    title: "Commercial Parking Lot — Waterford, CT",
    category: "Commercial Paving",
    description:
      "Full parking lot paving for a retail plaza including grading, base installation, paving, and line striping.",
    beforeAlt: "Gravel lot in Waterford CT before commercial asphalt paving",
    afterAlt: "Finished commercial parking lot in Waterford CT with fresh asphalt",
  },
  {
    title: "Driveway Sealcoating — Mystic, CT",
    category: "Sealcoating",
    description:
      "Professional sealcoat application restoring the rich, dark finish and protecting against UV, water, and oil damage.",
    beforeAlt: "Faded gray asphalt driveway in Mystic CT before sealcoating",
    afterAlt: "Dark rich sealcoated driveway in Mystic CT after professional treatment",
  },
  {
    title: "Gravel Driveway — Ledyard, CT",
    category: "Gravel Installation",
    description:
      "New gravel driveway installation with recycled asphalt millings. Includes grading, geotextile fabric, and compaction.",
    beforeAlt: "Muddy unpaved driveway in Ledyard CT before gravel installation",
    afterAlt: "Compacted gravel driveway in Ledyard CT after professional installation",
  },
  {
    title: "Site Grading — New London, CT",
    category: "Grading & Excavation",
    description:
      "Complete site grading and drainage correction for a residential property with persistent water pooling issues.",
    beforeAlt: "Uneven yard with water pooling in New London CT before grading",
    afterAlt: "Properly graded and drained residential lot in New London CT",
  },
  {
    title: "Driveway Repaving — Old Saybrook, CT",
    category: "Driveway Paving",
    description:
      "Removal of old failing asphalt, re-grading for improved drainage, and installation of new asphalt driveway.",
    beforeAlt: "Broken asphalt driveway with potholes in Old Saybrook CT",
    afterAlt: "Newly paved smooth asphalt driveway in Old Saybrook CT",
  },
];

// Placeholder image generator for before/after pairs
function placeholderImage(label: string, shade: string) {
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect fill="${shade}" width="800" height="600"/><text x="400" y="300" text-anchor="middle" fill="white" font-family="sans-serif" font-size="28" font-weight="bold">${label}</text></svg>`
  )}`;
}

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            Project <span className="text-orange">Gallery</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            See the quality of our work firsthand. Browse before and after
            photos from paving projects across Southeastern Connecticut.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <BeforeAfter
                  beforeSrc={placeholderImage("Before", "#6B7280")}
                  afterSrc={placeholderImage("After", "#1C1C1C")}
                  beforeAlt={project.beforeAlt}
                  afterAlt={project.afterAlt}
                />
                <div className="p-6">
                  <span className="inline-block text-xs bg-orange/10 text-orange px-2 py-0.5 rounded font-medium uppercase tracking-wide mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-charcoal mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-warm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

/** Image manifest — all paths relative to /public */

export interface SiteImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// ── Hero / Promo ──────────────────────────────────────────────
export const heroImages = {
  pavingCrew: {
    src: "/images/hero/asphalt-paving-crew-southeastern-ct.webp",
    alt: "Northeast Paving asphalt paving crew working on a project in Southeastern Connecticut",
  },
  asphaltMaintenance: {
    src: "/images/hero/asphalt-maintenance-waterford-ct.webp",
    alt: "Asphalt driveway maintenance and sealcoating services in Waterford CT",
  },
  whyChooseUs: {
    src: "/images/hero/why-choose-northeast-paving-ct.webp",
    alt: "Why choose Northeast Paving — trusted paving contractor in Connecticut",
  },
  drivewayCheck: {
    src: "/images/hero/driveway-condition-check-ct.webp",
    alt: "Check your driveway condition — free paving estimates in Southeastern CT",
  },
} as const;

// ── About ─────────────────────────────────────────────────────
export const aboutImages = {
  waterfordTeam: {
    src: "/images/about/paving-company-waterford-ct-team.webp",
    alt: "Northeast Paving team and equipment at Waterford CT job site",
  },
  newLondonOffice: {
    src: "/images/about/paving-company-new-london-ct-office.webp",
    alt: "Northeast Paving LLC office and operations in New London CT",
  },
  servicesOverview: {
    src: "/images/about/paving-services-southeastern-ct-overview.webp",
    alt: "Overview of paving services offered across Southeastern Connecticut",
  },
} as const;

// ── Brand ─────────────────────────────────────────────────────
export const brandImages = {
  logo: {
    src: "/images/brand/northeast-paving-logo.webp",
    alt: "Northeast Paving LLC logo — Waterford and New London CT paving contractor",
  },
  favicon: {
    src: "/images/brand/northeast-paving-favicon.webp",
    alt: "Northeast Paving LLC icon",
  },
  tarconiteLogo: {
    src: "/images/brand/tarconite-sealcoat-logo.webp",
    alt: "Tarconite sealcoat products — used by Northeast Paving for professional sealcoating",
  },
} as const;

// ── Gallery ───────────────────────────────────────────────────
export const galleryImages = {
  // Asphalt Paving
  drivewayPaving: [
    {
      src: "/images/gallery/residential-driveway-paving-ct-01.webp",
      alt: "Residential asphalt driveway paving project in Southeastern Connecticut",
    },
    {
      src: "/images/gallery/residential-driveway-paving-ct-02.webp",
      alt: "New asphalt driveway installation by Northeast Paving in CT",
    },
    {
      src: "/images/gallery/residential-driveway-paving-ct-03.webp",
      alt: "Professional driveway paving with hot-mix asphalt in Connecticut",
    },
    {
      src: "/images/gallery/residential-driveway-paving-ct-04.webp",
      alt: "Completed residential driveway repaving in Southeastern CT",
    },
    {
      src: "/images/gallery/residential-driveway-paving-ct-05.webp",
      alt: "Smooth finished asphalt driveway by Northeast Paving LLC",
    },
    {
      src: "/images/gallery/residential-driveway-paving-ct-06.webp",
      alt: "Residential driveway paving in progress in New London County CT",
    },
    {
      src: "/images/gallery/residential-driveway-paving-ct-07.webp",
      alt: "Asphalt driveway paving with proper grading in Connecticut",
    },
    {
      src: "/images/gallery/residential-driveway-paving-ct-08.webp",
      alt: "Finished asphalt driveway installation in Southeastern Connecticut",
    },
  ],
  parkingLotPaving: [
    {
      src: "/images/gallery/commercial-parking-lot-paving-ct-01.webp",
      alt: "Commercial parking lot asphalt paving in Southeastern Connecticut",
    },
    {
      src: "/images/gallery/commercial-parking-lot-paving-ct-02.webp",
      alt: "Parking lot paving project for commercial property in CT",
    },
    {
      src: "/images/gallery/commercial-parking-lot-paving-ct-03.webp",
      alt: "Large commercial parking lot paving by Northeast Paving LLC",
    },
    {
      src: "/images/gallery/commercial-parking-lot-paving-ct-04.webp",
      alt: "Professional parking lot construction in Southeastern Connecticut",
    },
    {
      src: "/images/gallery/commercial-parking-lot-paving-ct-05.webp",
      alt: "Commercial parking lot asphalt installation in CT",
    },
    {
      src: "/images/gallery/commercial-parking-lot-paving-ct-06.webp",
      alt: "Parking lot paving with heavy equipment in Connecticut",
    },
    {
      src: "/images/gallery/commercial-parking-lot-paving-ct-07.webp",
      alt: "Completed commercial parking lot paving in New London County",
    },
  ],
  roadPaving: [
    {
      src: "/images/gallery/road-paving-southeastern-ct-01.webp",
      alt: "Road paving and resurfacing project in Southeastern Connecticut",
    },
    {
      src: "/images/gallery/road-paving-southeastern-ct-02.webp",
      alt: "Municipal road paving by Northeast Paving in CT",
    },
  ],
  specialtyPaving: [
    {
      src: "/images/gallery/sidewalk-asphalt-paving-ct.webp",
      alt: "Sidewalk asphalt paving installation in Connecticut",
    },
    {
      src: "/images/gallery/curb-installation-paving-ct.webp",
      alt: "Curb installation and asphalt paving in Southeastern CT",
    },
  ],
  // Sealcoating
  sealcoating: [
    {
      src: "/images/gallery/parking-lot-sealcoating-ct-01.webp",
      alt: "Parking lot sealcoating application in Southeastern Connecticut",
    },
    {
      src: "/images/gallery/parking-lot-sealcoating-ct-02.webp",
      alt: "Professional sealcoating of commercial parking lot in CT",
    },
    {
      src: "/images/gallery/parking-lot-sealcoating-ct-03.webp",
      alt: "Sealcoat being applied to parking lot surface in Connecticut",
    },
    {
      src: "/images/gallery/parking-lot-sealcoating-ct-04.webp",
      alt: "Commercial parking lot sealcoating project by Northeast Paving",
    },
    {
      src: "/images/gallery/parking-lot-sealcoating-ct-05.webp",
      alt: "Parking lot after professional sealcoating in Southeastern CT",
    },
    {
      src: "/images/gallery/parking-lot-sealcoating-ct-06.webp",
      alt: "Sealcoating equipment and crew working on CT parking lot",
    },
    {
      src: "/images/gallery/parking-lot-sealcoating-ct-07.webp",
      alt: "Completed parking lot sealcoating in New London County CT",
    },
    {
      src: "/images/gallery/asphalt-patching-repair-ct.webp",
      alt: "Asphalt patching and repair work in Southeastern Connecticut",
    },
  ],
  // Grading & Excavation
  excavation: [
    {
      src: "/images/gallery/excavation-site-work-ct-01.webp",
      alt: "Excavation and site work for paving project in Connecticut",
    },
    {
      src: "/images/gallery/excavation-site-work-ct-02.webp",
      alt: "Heavy equipment excavation for driveway preparation in CT",
    },
    {
      src: "/images/gallery/excavation-site-work-ct-03.webp",
      alt: "Site excavation and grading in Southeastern Connecticut",
    },
    {
      src: "/images/gallery/excavation-site-work-ct-04.webp",
      alt: "Excavation work for new construction in New London County",
    },
    {
      src: "/images/gallery/excavation-site-work-ct-05.webp",
      alt: "Professional excavation services by Northeast Paving LLC",
    },
    {
      src: "/images/gallery/excavation-base-installation-ct.webp",
      alt: "Excavation and base installation for asphalt paving in CT",
    },
    {
      src: "/images/gallery/road-excavation-base-installation-ct.webp",
      alt: "Road excavation and base installation in Southeastern Connecticut",
    },
    {
      src: "/images/gallery/base-installation-grading-ct-01.webp",
      alt: "Base installation and grading for paving project in CT",
    },
    {
      src: "/images/gallery/base-installation-grading-ct-02.webp",
      alt: "Grading and base preparation for asphalt in Connecticut",
    },
    {
      src: "/images/gallery/base-installation-grading-ct-03.webp",
      alt: "Site grading and compaction for driveway paving in CT",
    },
    {
      src: "/images/gallery/drainage-installation-ct-01.webp",
      alt: "Drainage installation for proper water management in CT",
    },
    {
      src: "/images/gallery/drainage-installation-ct-02.webp",
      alt: "Storm drainage system installation in Southeastern Connecticut",
    },
  ],
  // Material Delivery
  trucking: [
    {
      src: "/images/gallery/material-delivery-trucking-ct-01.webp",
      alt: "Material delivery and trucking services in Southeastern Connecticut",
    },
    {
      src: "/images/gallery/northeast-paving-delivery-truck-ct.webp",
      alt: "Northeast Paving delivery truck for mulch topsoil and gravel in CT",
    },
  ],
  // Gravel & Stone
  gravelStone: [
    {
      src: "/images/gallery/gravel-stone-base-installation-ct-01.webp",
      alt: "Gravel and stone base installation for driveway in Connecticut",
    },
    {
      src: "/images/gallery/gravel-stone-base-installation-ct-02.webp",
      alt: "Stone base preparation for paving project in Southeastern CT",
    },
    {
      src: "/images/gallery/gravel-stone-base-installation-ct-03.webp",
      alt: "Gravel driveway installation by Northeast Paving in CT",
    },
    {
      src: "/images/gallery/gravel-stone-base-installation-ct-04.webp",
      alt: "Crushed stone base installation for commercial lot in Connecticut",
    },
    {
      src: "/images/gallery/gravel-stone-base-installation-ct-05.webp",
      alt: "Completed gravel and stone installation in Southeastern CT",
    },
  ],
} as const;

/** Flat list of all gallery images for easy iteration */
export const allGalleryImages = [
  ...galleryImages.drivewayPaving,
  ...galleryImages.parkingLotPaving,
  ...galleryImages.roadPaving,
  ...galleryImages.specialtyPaving,
  ...galleryImages.sealcoating,
  ...galleryImages.excavation,
  ...galleryImages.trucking,
  ...galleryImages.gravelStone,
];

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
      alt: "New asphalt driveway installation for residential home in Groton CT",
    },
    {
      src: "/images/gallery/residential-driveway-paving-ct-02.webp",
      alt: "Driveway repaving project with fresh hot-mix asphalt in Waterford CT",
    },
    {
      src: "/images/gallery/residential-driveway-paving-ct-03.webp",
      alt: "Completed two-car asphalt driveway in Old Lyme Connecticut",
    },
    {
      src: "/images/gallery/residential-driveway-paving-ct-04.webp",
      alt: "Residential driveway tear-out and repave in New London CT",
    },
    {
      src: "/images/gallery/residential-driveway-paving-ct-05.webp",
      alt: "Smooth finished asphalt driveway for home in Mystic CT",
    },
    {
      src: "/images/gallery/residential-driveway-paving-ct-06.webp",
      alt: "Driveway paving in progress with roller compaction in Ledyard CT",
    },
    {
      src: "/images/gallery/residential-driveway-paving-ct-07.webp",
      alt: "Properly graded asphalt driveway installation in East Lyme CT",
    },
    {
      src: "/images/gallery/residential-driveway-paving-ct-08.webp",
      alt: "Fresh asphalt driveway with clean edges in Stonington Connecticut",
    },
  ],
  parkingLotPaving: [
    {
      src: "/images/gallery/commercial-parking-lot-paving-ct-01.webp",
      alt: "Commercial parking lot paving for retail property in Waterford CT",
    },
    {
      src: "/images/gallery/commercial-parking-lot-paving-ct-02.webp",
      alt: "Parking lot asphalt installation for office building in Groton CT",
    },
    {
      src: "/images/gallery/commercial-parking-lot-paving-ct-03.webp",
      alt: "Large commercial parking lot paving project in New London Connecticut",
    },
    {
      src: "/images/gallery/commercial-parking-lot-paving-ct-04.webp",
      alt: "Professional parking lot construction for shopping center in Montville CT",
    },
    {
      src: "/images/gallery/commercial-parking-lot-paving-ct-05.webp",
      alt: "Commercial parking lot overlay in East Lyme Connecticut",
    },
    {
      src: "/images/gallery/commercial-parking-lot-paving-ct-06.webp",
      alt: "Heavy equipment paving commercial parking area in Niantic CT",
    },
    {
      src: "/images/gallery/commercial-parking-lot-paving-ct-07.webp",
      alt: "Completed commercial parking lot with fresh asphalt in Old Saybrook CT",
    },
  ],
  roadPaving: [
    {
      src: "/images/gallery/road-paving-southeastern-ct-01.webp",
      alt: "Municipal road resurfacing project in Southeastern Connecticut",
    },
    {
      src: "/images/gallery/road-paving-southeastern-ct-02.webp",
      alt: "Road paving and asphalt overlay work for town of Waterford CT",
    },
  ],
  specialtyPaving: [
    {
      src: "/images/gallery/sidewalk-asphalt-paving-ct.webp",
      alt: "Asphalt sidewalk installation for residential development in Groton CT",
    },
    {
      src: "/images/gallery/curb-installation-paving-ct.webp",
      alt: "Concrete curb and asphalt paving installation in New London CT",
    },
  ],
  // Sealcoating
  sealcoating: [
    {
      src: "/images/gallery/parking-lot-sealcoating-ct-01.webp",
      alt: "Commercial parking lot sealcoating in Waterford Connecticut",
    },
    {
      src: "/images/gallery/parking-lot-sealcoating-ct-02.webp",
      alt: "Professional sealcoat application protecting parking lot in Groton CT",
    },
    {
      src: "/images/gallery/parking-lot-sealcoating-ct-03.webp",
      alt: "Sealcoating crew applying protective coating in East Lyme CT",
    },
    {
      src: "/images/gallery/parking-lot-sealcoating-ct-04.webp",
      alt: "Parking lot sealcoating preserving asphalt surface in Montville CT",
    },
    {
      src: "/images/gallery/parking-lot-sealcoating-ct-05.webp",
      alt: "Freshly sealcoated parking lot with crisp line striping in Mystic CT",
    },
    {
      src: "/images/gallery/parking-lot-sealcoating-ct-06.webp",
      alt: "Sealcoating equipment and crew on job site in New London CT",
    },
    {
      src: "/images/gallery/parking-lot-sealcoating-ct-07.webp",
      alt: "Completed parking lot sealcoating for commercial property in Old Saybrook CT",
    },
    {
      src: "/images/gallery/asphalt-patching-repair-ct.webp",
      alt: "Asphalt patching and pothole repair on parking lot in Ledyard CT",
    },
  ],
  // Grading & Excavation
  excavation: [
    {
      src: "/images/gallery/excavation-site-work-ct-01.webp",
      alt: "Excavation and site clearing for new driveway in Groton CT",
    },
    {
      src: "/images/gallery/excavation-site-work-ct-02.webp",
      alt: "Backhoe excavation for driveway foundation in Waterford CT",
    },
    {
      src: "/images/gallery/excavation-site-work-ct-03.webp",
      alt: "Site grading and excavation for residential project in Stonington CT",
    },
    {
      src: "/images/gallery/excavation-site-work-ct-04.webp",
      alt: "Excavation work for new construction site in New London CT",
    },
    {
      src: "/images/gallery/excavation-site-work-ct-05.webp",
      alt: "Professional excavation and site preparation in Ledyard CT",
    },
    {
      src: "/images/gallery/excavation-base-installation-ct.webp",
      alt: "Excavation and gravel base installation for driveway in Mystic CT",
    },
    {
      src: "/images/gallery/road-excavation-base-installation-ct.webp",
      alt: "Road excavation and base preparation in Montville Connecticut",
    },
    {
      src: "/images/gallery/base-installation-grading-ct-01.webp",
      alt: "Base installation and fine grading for asphalt paving in East Lyme CT",
    },
    {
      src: "/images/gallery/base-installation-grading-ct-02.webp",
      alt: "Grading and sub-base compaction for driveway in Old Lyme CT",
    },
    {
      src: "/images/gallery/base-installation-grading-ct-03.webp",
      alt: "Site grading with laser-guided equipment in Niantic CT",
    },
    {
      src: "/images/gallery/drainage-installation-ct-01.webp",
      alt: "Drainage culvert installation for water management in Salem CT",
    },
    {
      src: "/images/gallery/drainage-installation-ct-02.webp",
      alt: "Storm drainage system and catch basin installation in North Stonington CT",
    },
  ],
  // Material Delivery
  trucking: [
    {
      src: "/images/gallery/material-delivery-trucking-ct-01.webp",
      alt: "Material delivery truck hauling gravel to job site in Southeastern CT",
    },
    {
      src: "/images/gallery/northeast-paving-delivery-truck-ct.webp",
      alt: "Northeast Paving delivery truck for mulch topsoil and stone in New London CT",
    },
  ],
  // Gravel & Stone
  gravelStone: [
    {
      src: "/images/gallery/gravel-stone-base-installation-ct-01.webp",
      alt: "Gravel driveway installation for rural home in North Stonington CT",
    },
    {
      src: "/images/gallery/gravel-stone-base-installation-ct-02.webp",
      alt: "Crushed stone base preparation for paving project in Salem CT",
    },
    {
      src: "/images/gallery/gravel-stone-base-installation-ct-03.webp",
      alt: "Gravel driveway with proper drainage grading in Lyme Connecticut",
    },
    {
      src: "/images/gallery/gravel-stone-base-installation-ct-04.webp",
      alt: "Commercial lot stone base installation in Old Saybrook CT",
    },
    {
      src: "/images/gallery/gravel-stone-base-installation-ct-05.webp",
      alt: "Completed gravel and processed stone driveway in Essex CT",
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

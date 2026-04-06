import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Grading & Excavation Services — Southeastern CT",
  description:
    "Professional site grading, excavation, and drainage solutions in Southeastern CT. Residential & commercial site prep. 30+ years experience. Call 860-447-1518.",
};

export default function GradingExcavationPage() {
  return (
    <ServicePageLayout
      heroTitle="Grading &"
      heroHighlight="Excavation"
      heroDescription="Complete site preparation including grading, drainage solutions, and excavation work for residential and commercial projects of all sizes."
      overviewTitle="Professional Site Preparation"
      overviewText={[
        "Proper site preparation is the foundation of every successful construction and paving project. Northeast Paving provides expert grading and excavation services that ensure your site is properly prepared for whatever comes next — whether it's a new driveway, parking lot, building foundation, or landscaping project.",
        "Our experienced operators use modern equipment to precisely grade your site to the correct elevations, ensuring proper drainage and a stable base. We handle everything from small residential lots to large commercial sites.",
        "With over 30 years of experience in Southeastern Connecticut, we understand the local soil conditions, drainage requirements, and permitting needs that are critical to getting your project right from the ground up.",
      ]}
      processSteps={[
        {
          step: "1",
          title: "Site Survey",
          description:
            "We evaluate the site, review plans, check soil conditions, and identify any drainage or utility concerns.",
        },
        {
          step: "2",
          title: "Clearing & Demo",
          description:
            "Remove existing materials, vegetation, or structures as needed to prepare the work area.",
        },
        {
          step: "3",
          title: "Grading & Excavation",
          description:
            "Precision grading to establish proper elevations, slopes, and drainage patterns across the site.",
        },
        {
          step: "4",
          title: "Base & Compaction",
          description:
            "Install and compact base materials to create a stable foundation ready for the next phase.",
        },
      ]}
      benefits={[
        {
          title: "Prevents Water Problems",
          description:
            "Proper grading directs water away from structures and prevents pooling, erosion, and flooding.",
        },
        {
          title: "Modern Equipment",
          description:
            "Our fleet of excavators, loaders, and graders handles projects efficiently and precisely.",
        },
        {
          title: "Local Expertise",
          description:
            "30+ years of experience with Southeastern CT soil conditions, regulations, and drainage requirements.",
        },
        {
          title: "Complete Service",
          description:
            "From initial clearing to final compaction, we handle every step of site preparation.",
        },
        {
          title: "All Project Sizes",
          description:
            "Residential yards, commercial lots, and municipal projects — we scale to your needs.",
        },
        {
          title: "Proper Drainage",
          description:
            "We design grading plans that solve drainage problems and meet local stormwater requirements.",
        },
      ]}
      faqs={[
        {
          question: "Do I need grading before paving?",
          answer:
            "In most cases, yes. Proper grading ensures your pavement has the correct slope for drainage and a stable, even base. Skipping this step leads to premature pavement failure, water pooling, and costly repairs.",
        },
        {
          question: "Can you solve drainage problems on my property?",
          answer:
            "Yes. We frequently re-grade properties to redirect water flow, install drainage swales, and create solutions that prevent water from pooling near structures or on pavement.",
        },
        {
          question: "Do you handle permitting?",
          answer:
            "We can guide you through the permitting process and work with local authorities as needed. Requirements vary by town in Southeastern CT, and we're familiar with local regulations.",
        },
        {
          question: "What equipment do you use?",
          answer:
            "We operate a full fleet including excavators, backhoes, skid steers, motor graders, and compaction equipment. The right equipment for the right job ensures efficiency and precision.",
        },
        {
          question: "How long does site grading take?",
          answer:
            "A typical residential lot can be graded in 1-2 days. Larger commercial sites may take a week or more depending on scope, soil conditions, and weather. We'll provide a timeline with your estimate.",
        },
      ]}
      decisionContent={{
        title: "What to Expect: Excavation Costs, Timeline & Site Prep",
        paragraphs: [
          "Excavation costs in Connecticut depend heavily on the scope — a simple driveway dig-out runs significantly less than a full commercial site clearing. Key factors include soil conditions (ledge rock in Southeastern CT is common and adds cost), depth of excavation, volume of material to be removed, and whether fill or gravel base needs to be brought in. We provide free on-site assessments because no two sites are the same.",
          "A residential driveway excavation typically takes 1–2 days. Larger commercial site work — grading a parking lot, installing drainage, or preparing a building pad — can take a week or more depending on acreage and complexity. We coordinate with utility locates and local permitting before any digging begins.",
          "Proper drainage is the single most important factor in pavement longevity. We grade every site to direct water away from structures and pavement edges, install catch basins and culverts where needed, and verify slope with laser-guided equipment. Skipping this step is the #1 reason driveways and parking lots fail prematurely.",
          "Excavation work in Connecticut can be done year-round in most conditions, though frozen ground in winter may add time and cost. Spring and fall are ideal. We avoid excavating during heavy rain periods to prevent erosion and ensure proper compaction of sub-base materials.",
        ],
      }}
      warrantyText="We guarantee proper grade and drainage on every excavation project. If water doesn't flow the way we said it would, we'll come back and fix it. Proper site prep is the foundation of everything we do — we don't cut corners underground where it matters most."
      slug="grading-excavation"
      heroImage="/images/gallery/excavation-site-work-ct-01.webp"
      serviceCitySlug="grading-excavation"
    />
  );
}

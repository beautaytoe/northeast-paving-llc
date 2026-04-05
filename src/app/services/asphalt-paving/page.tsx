import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Asphalt Paving Services — Driveways & Parking Lots",
  description:
    "Professional asphalt paving for driveways, parking lots, and roads in Southeastern CT. Residential, commercial & municipal. 30+ years experience. Call 860-447-1518.",
};

export default function AsphaltPavingPage() {
  return (
    <ServicePageLayout
      heroTitle="Asphalt Paving"
      heroHighlight="Services"
      heroDescription="Professional driveway and parking lot paving for residential, commercial, and municipal projects throughout Southeastern Connecticut."
      overviewTitle="Expert Asphalt Paving in Southeastern CT"
      overviewText={[
        "For over 30 years, Northeast Paving has been the go-to asphalt paving contractor in Southeastern Connecticut. Whether you need a new residential driveway, a commercial parking lot, or municipal roadwork, our experienced crew delivers smooth, durable results that stand the test of time.",
        "We use only the highest-quality hot-mix asphalt and state-of-the-art equipment to ensure proper compaction, drainage, and a long-lasting finish. Every project begins with thorough site evaluation and ends with meticulous cleanup.",
        "As a licensed, insured, and W.B.E. certified company, we bring professionalism and accountability to every job — from small residential driveways to large-scale commercial projects.",
      ]}
      processSteps={[
        {
          step: "1",
          title: "Free Estimate",
          description:
            "We visit your site, assess conditions, take measurements, and provide a detailed, no-obligation estimate.",
        },
        {
          step: "2",
          title: "Site Preparation",
          description:
            "Proper grading, excavation, and base installation to create a stable foundation for your new asphalt.",
        },
        {
          step: "3",
          title: "Paving",
          description:
            "Hot-mix asphalt is laid to the proper thickness and compacted with heavy rollers for a smooth, even surface.",
        },
        {
          step: "4",
          title: "Final Inspection",
          description:
            "We inspect every detail, clean up the site, and walk you through proper care for your new pavement.",
        },
      ]}
      benefits={[
        {
          title: "30+ Years Experience",
          description:
            "Three decades of paving expertise means we handle any project with confidence and precision.",
        },
        {
          title: "Quality Materials",
          description:
            "We use premium hot-mix asphalt from trusted local suppliers for maximum durability.",
        },
        {
          title: "Licensed & Insured",
          description:
            "CT Dept. of Consumer Protection Reg. #571106. Fully insured for your peace of mind.",
        },
        {
          title: "All Project Sizes",
          description:
            "From single-car driveways to multi-acre parking lots, no job is too big or too small.",
        },
        {
          title: "W.B.E. Certified",
          description:
            "State of Connecticut Certified Women-Owned Business Enterprise.",
        },
        {
          title: "Free Estimates",
          description:
            "Honest, upfront pricing with no hidden fees. Get a free quote for your project today.",
        },
      ]}
      faqs={[
        {
          question: "How long does asphalt paving take?",
          answer:
            "A typical residential driveway can be completed in 1-2 days, including site preparation. Larger commercial projects may take several days to a few weeks depending on scope. We'll provide a timeline estimate during your free consultation.",
        },
        {
          question: "How long will my new asphalt driveway last?",
          answer:
            "A properly installed and maintained asphalt driveway typically lasts 20-30 years. Regular sealcoating every 2-3 years and prompt crack repair can significantly extend its lifespan.",
        },
        {
          question: "Do you handle the grading and base work?",
          answer:
            "Yes, we provide complete site preparation including grading, excavation, and base installation. A solid foundation is critical for long-lasting pavement, and we never cut corners on prep work.",
        },
        {
          question: "What time of year is best for paving?",
          answer:
            "Asphalt paving is best done from late spring through fall when temperatures are consistently above 50°F. We typically pave from April through November in Connecticut.",
        },
        {
          question: "Do you offer financing or payment plans?",
          answer:
            "We offer competitive pricing and can discuss payment arrangements for larger projects. Contact us for details specific to your project.",
        },
      ]}
      slug="asphalt-paving"
    />
  );
}

import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Driveway & Parking Lot Paving | New London County CT | Free Estimate",
  description:
    "Professional asphalt paving for driveways, parking lots, and roads in Southeastern CT. Residential, commercial & municipal. 30+ years experience. Call 860-447-1518.",
};

export default function AsphaltPavingPage() {
  return (
    <ServicePageLayout
      heroTitle="Driveway & Parking Lot Paving"
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
      decisionContent={{
        title: "What to Expect: Pricing, Timeline & Seasonal Factors",
        paragraphs: [
          "Asphalt paving costs in Connecticut typically range from $3 to $7 per square foot for residential driveways, depending on factors like driveway size, existing surface condition, required excavation depth, and site access. Larger commercial parking lots may see different pricing due to scale. We provide free, detailed estimates so you know exactly what to expect before any work begins.",
          "A standard residential driveway takes 1–2 days to complete, including site prep, base installation, and paving. Larger or more complex projects may take longer. We schedule work to minimize disruption and always communicate timelines upfront.",
          "The best season for asphalt paving in Connecticut runs from April through November, when temperatures stay consistently above 50°F. This ensures proper compaction and curing. We monitor weather closely and will reschedule if rain is expected during your project — asphalt should never be laid on a wet surface. If unexpected rain occurs, we take immediate steps to protect fresh pavement and resume when conditions allow.",
          "We stand behind our workmanship. Every job is completed to industry standards with proper base preparation, material thickness, and compaction. We walk you through maintenance recommendations so your new pavement lasts as long as possible.",
        ],
      }}
      warrantyText="We stand behind every paving job with a workmanship guarantee. If any issues arise from our installation within the first year, we'll return to make it right — no questions asked. We also walk you through a maintenance plan to help your new pavement last 20+ years."
      slug="asphalt-paving"
      heroImage="/images/gallery/residential-driveway-paving-ct-01.webp"
      serviceCitySlug="driveway-paving"
    />
  );
}

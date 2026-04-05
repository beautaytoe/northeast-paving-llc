import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Gravel, Stone & Milling Installation",
  description:
    "Professional gravel driveway, stone base, and recycled asphalt milling installation in Southeastern CT. 30+ years experience. Call 860-447-1518.",
};

export default function GravelStoneInstallationPage() {
  return (
    <ServicePageLayout
      heroTitle="Gravel & Stone"
      heroHighlight="Installation"
      heroDescription="Base materials, recycled asphalt millings, and stone installation for driveways, parking areas, and construction sites."
      overviewTitle="Quality Gravel & Stone Work"
      overviewText={[
        "Not every surface needs asphalt. Gravel and stone driveways, parking areas, and access roads are a durable, cost-effective solution for many residential and commercial properties. Northeast Paving provides professional installation of gravel, crushed stone, processed aggregate, and recycled asphalt millings.",
        "Recycled asphalt millings are an increasingly popular choice — they compact like asphalt, provide excellent drainage, and cost significantly less than new pavement. We install millings for driveways, parking areas, farm roads, and more.",
        "Every gravel or stone installation starts with proper grading and base preparation. We don't just dump and spread — we grade the subsoil, install geotextile fabric when needed, and compact each layer to create a surface that stays firm and drains properly for years.",
      ]}
      processSteps={[
        {
          step: "1",
          title: "Consultation",
          description:
            "We assess your site, discuss material options, and recommend the best solution for your needs and budget.",
        },
        {
          step: "2",
          title: "Preparation",
          description:
            "Existing surface removal, grading, and subbase preparation to ensure proper drainage and stability.",
        },
        {
          step: "3",
          title: "Installation",
          description:
            "Materials are delivered, spread to proper depth, graded for drainage, and compacted with heavy equipment.",
        },
        {
          step: "4",
          title: "Finishing",
          description:
            "Final grading, edge treatment, and compaction passes to create a smooth, firm, finished surface.",
        },
      ]}
      benefits={[
        {
          title: "Cost-Effective",
          description:
            "Gravel and stone surfaces cost significantly less than asphalt, making them ideal for long driveways and large areas.",
        },
        {
          title: "Excellent Drainage",
          description:
            "Permeable surfaces allow water to drain through, reducing runoff and eliminating standing water.",
        },
        {
          title: "Low Maintenance",
          description:
            "With proper installation, gravel surfaces need only occasional grading and top-off to stay in great shape.",
        },
        {
          title: "Eco-Friendly Option",
          description:
            "Recycled asphalt millings keep material out of landfills and provide excellent performance at lower cost.",
        },
        {
          title: "Quick Installation",
          description:
            "Most gravel projects can be completed faster than asphalt, with no curing time required.",
        },
        {
          title: "Versatile",
          description:
            "Perfect for driveways, parking areas, access roads, paths, and construction site staging areas.",
        },
      ]}
      faqs={[
        {
          question: "What's the difference between gravel and millings?",
          answer:
            "Gravel is natural crushed stone, while millings are recycled asphalt pavement that's been ground up. Millings bind together over time and compaction, creating a semi-hard surface similar to asphalt. Both are excellent choices — millings generally cost less and provide a darker, smoother finish.",
        },
        {
          question: "How thick should a gravel driveway be?",
          answer:
            "A properly built gravel driveway typically needs 6-8 inches of total material depth, installed in layers. This includes a coarse base layer and a finer top layer. We'll recommend the right depth based on your soil conditions and expected traffic.",
        },
        {
          question: "How long does a gravel driveway last?",
          answer:
            "A well-installed gravel driveway can last indefinitely with periodic maintenance. You may need to add a thin top layer every few years and re-grade occasionally to maintain proper drainage and a smooth surface.",
        },
        {
          question: "Do gravel driveways get muddy?",
          answer:
            "Not when properly installed. Correct grading, adequate depth, compaction, and proper drainage prevent mud problems. If your existing gravel driveway is muddy, it likely needs re-grading and fresh material — we can fix that.",
        },
        {
          question: "Can I pave over gravel later?",
          answer:
            "In many cases, yes. A well-compacted gravel base can serve as the foundation for future asphalt paving. We install gravel with this potential in mind, so you have the option to pave later without starting from scratch.",
        },
      ]}
      slug="gravel-stone-installation"
      heroImage="/images/gallery/gravel-stone-base-installation-ct-01.webp"
    />
  );
}

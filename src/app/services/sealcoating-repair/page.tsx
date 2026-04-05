import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Sealcoating & Asphalt Repair Services",
  description:
    "Professional sealcoating, crack repair, and asphalt patching in Southeastern CT. Protect your pavement investment. 30+ years experience. Call 860-447-1518.",
};

export default function SealcoatingRepairPage() {
  return (
    <ServicePageLayout
      heroTitle="Sealcoating &"
      heroHighlight="Asphalt Repair"
      heroDescription="Extend the life of your asphalt with expert sealcoating, crack repair, and patching services that protect your investment for years to come."
      overviewTitle="Complete Asphalt Maintenance"
      overviewText={[
        "Your asphalt pavement is a major investment — sealcoating and timely repairs are the most cost-effective ways to protect it. Northeast Paving provides professional asphalt maintenance services that prevent costly damage from water, UV rays, oil, and everyday wear.",
        "Our sealcoating creates a protective barrier that dramatically extends the life of your driveway or parking lot while restoring its rich, black appearance. For existing damage, our crack filling and patching services stop deterioration before it spreads.",
        "With over 30 years of experience, we know exactly how to assess your pavement's condition and recommend the right maintenance plan to keep it looking great and performing well for decades.",
      ]}
      processSteps={[
        {
          step: "1",
          title: "Assessment",
          description:
            "We evaluate your pavement condition, identify problem areas, and recommend the right treatment plan.",
        },
        {
          step: "2",
          title: "Cleaning & Prep",
          description:
            "Thorough cleaning, crack routing, and surface preparation to ensure maximum adhesion.",
        },
        {
          step: "3",
          title: "Repair & Seal",
          description:
            "Cracks are filled, damaged areas patched, and sealcoat is applied evenly across the surface.",
        },
        {
          step: "4",
          title: "Curing",
          description:
            "We barricade the area and provide cure time guidelines so your sealcoat sets properly.",
        },
      ]}
      benefits={[
        {
          title: "Extends Pavement Life",
          description:
            "Regular sealcoating can double the lifespan of your asphalt, saving thousands in replacement costs.",
        },
        {
          title: "UV & Weather Protection",
          description:
            "Shields your asphalt from sun damage, rain, snow, and Connecticut's freeze-thaw cycles.",
        },
        {
          title: "Prevents Water Damage",
          description:
            "Seals cracks and pores that let water penetrate, which causes the most common asphalt failures.",
        },
        {
          title: "Restores Appearance",
          description:
            "Brings back the rich, dark finish that makes your property look well-maintained and professional.",
        },
        {
          title: "Cost-Effective",
          description:
            "Sealcoating costs a fraction of repaving — it's the smartest investment for your pavement.",
        },
        {
          title: "Expert Application",
          description:
            "30+ years of experience means we get the mix, coverage, and technique right every time.",
        },
      ]}
      faqs={[
        {
          question: "How often should I sealcoat my driveway?",
          answer:
            "We recommend sealcoating every 2-3 years for optimal protection. New asphalt should be sealcoated for the first time about 6-12 months after installation to allow proper curing.",
        },
        {
          question: "How long does sealcoating take to dry?",
          answer:
            "Sealcoat typically needs 24-48 hours to fully cure before vehicle traffic. Foot traffic can usually resume in 8-12 hours. Weather conditions affect dry time — we'll give you specific guidance for your project.",
        },
        {
          question: "Can you fix large cracks and potholes?",
          answer:
            "Yes. We handle everything from hairline crack filling to full-depth patching of potholes and failed areas. If the damage is extensive, we'll honestly advise whether repair or repaving is the better investment.",
        },
        {
          question: "What's the best time of year for sealcoating?",
          answer:
            "Sealcoating requires temperatures above 50°F and dry conditions for at least 24 hours. In Connecticut, the ideal season runs from May through October.",
        },
        {
          question: "Do you sealcoat commercial parking lots?",
          answer:
            "Absolutely. We sealcoat parking lots of all sizes and can work around your business schedule, including evenings and weekends, to minimize disruption.",
        },
      ]}
      slug="sealcoating-repair"
      heroImage="/images/gallery/parking-lot-sealcoating-ct-01.webp"
    />
  );
}

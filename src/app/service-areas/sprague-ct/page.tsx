import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "sprague-ct")!;

export const metadata: Metadata = {
  title: "Paving Services in Sprague, CT — Asphalt & Sealcoating",
  description:
    "Affordable asphalt paving, sealcoating, grading & excavation in Sprague, CT. Over 30 years of proven results. Licensed & insured. Call 860-447-1518.",
};

export default function SpraguePage() {
  return <LocationPageLayout location={location} />;
}

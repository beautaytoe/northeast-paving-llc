import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "norwich-ct")!;

export const metadata: Metadata = {
  title: "Paving Services in Norwich, CT — Asphalt & Sealcoating",
  description:
    "Professional asphalt paving, sealcoating, grading & excavation in Norwich, CT. Over 30 years of experience. Licensed & insured. Call 860-447-1518.",
};

export default function NorwichPage() {
  return <LocationPageLayout location={location} />;
}

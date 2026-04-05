import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "griswold-ct")!;

export const metadata: Metadata = {
  title: "Paving Services in Griswold, CT — Asphalt & Sealcoating",
  description:
    "Quality asphalt paving, sealcoating, grading & excavation in Griswold, CT. Serving eastern CT for over 30 years. Licensed & insured. Call 860-447-1518.",
};

export default function GriswoldPage() {
  return <LocationPageLayout location={location} />;
}

import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "colchester-ct")!;

export const metadata: Metadata = {
  title: "Paving in Colchester, CT — Asphalt & Sealcoating",
  description:
    "Skilled asphalt paving, sealcoating, grading & excavation in Colchester, CT. Over 30 years of trusted service. Licensed & insured. Call 860-447-1518.",
};

export default function ColchesterPage() {
  return <LocationPageLayout location={location} />;
}

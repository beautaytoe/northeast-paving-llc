import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "asphalt-paving-lisbon-ct")!;

export const metadata: Metadata = {
  title: "Paving Services in Lisbon, CT — Asphalt & Sealcoating",
  description:
    "Reliable asphalt paving, sealcoating, grading & excavation in Lisbon, CT. Over 30 years of local experience. Licensed & insured. Call 860-447-1518.",
};

export default function LisbonPage() {
  return <LocationPageLayout location={location} />;
}

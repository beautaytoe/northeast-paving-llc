import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "preston-ct")!;

export const metadata: Metadata = {
  title: "Paving Services in Preston, CT — Asphalt & Sealcoating",
  description:
    "Expert asphalt paving, sealcoating, grading & excavation in Preston, CT. Trusted by homeowners for over 30 years. Licensed & insured. Call 860-447-1518.",
};

export default function PrestonPage() {
  return <LocationPageLayout location={location} />;
}

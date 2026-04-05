import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "old-lyme-ct")!;

export const metadata: Metadata = {
  title: `Paving Services in Old Lyme, CT`,
  description: `Professional asphalt paving, sealcoating, grading & excavation in Old Lyme, CT. Over 30 years of experience. Licensed & insured. Call 860-447-1518.`,
};

export default function OldLymePage() {
  return <LocationPageLayout location={location} />;
}

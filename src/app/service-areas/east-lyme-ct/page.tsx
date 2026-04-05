import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "east-lyme-ct")!;

export const metadata: Metadata = {
  title: `Paving Services in East Lyme, CT`,
  description: `Professional asphalt paving, sealcoating, grading & excavation in East Lyme, CT. 30+ years experience. Licensed & insured. Call 860-447-1518.`,
};

export default function EastLymePage() {
  return <LocationPageLayout location={location} />;
}

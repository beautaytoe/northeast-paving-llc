import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "lyme-ct")!;

export const metadata: Metadata = {
  title: `Paving Services in Lyme, CT`,
  description: `Professional asphalt paving, sealcoating, grading & excavation services in Lyme, CT. 30+ years experience. Licensed & insured. Call 860-447-1518.`,
};

export default function LymePage() {
  return <LocationPageLayout location={location} />;
}

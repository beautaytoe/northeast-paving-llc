import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "asphalt-paving-montville-ct")!;

export const metadata: Metadata = {
  title: `Paving Services in Montville, CT`,
  description: `Professional asphalt paving, sealcoating, grading & excavation in Montville, CT. 30+ years of experience. Licensed & insured. Call 860-447-1518.`,
};

export default function MontvillePage() {
  return <LocationPageLayout location={location} />;
}

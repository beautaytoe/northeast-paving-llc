import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "asphalt-paving-ledyard-ct")!;

export const metadata: Metadata = {
  title: `Paving Services in Ledyard, CT`,
  description: `Professional asphalt paving, sealcoating, grading & excavation in Ledyard, CT. 30+ years of experience. Licensed & insured. Call 860-447-1518.`,
};

export default function LedyardPage() {
  return <LocationPageLayout location={location} />;
}

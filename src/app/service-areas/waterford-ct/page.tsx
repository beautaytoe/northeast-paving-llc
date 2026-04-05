import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "waterford-ct")!;

export const metadata: Metadata = {
  title: `Paving Services in Waterford, CT`,
  description: `Professional asphalt paving, sealcoating, grading & excavation in Waterford, CT. Over 30 years experience. Licensed & insured. Call 860-447-1518.`,
};

export default function WaterfordPage() {
  return <LocationPageLayout location={location} />;
}

import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "asphalt-paving-stonington-ct")!;

export const metadata: Metadata = {
  title: `Paving Services in Stonington, CT`,
  description: `Professional asphalt paving, sealcoating, grading & excavation in Stonington, CT. Over 30 years experience. Licensed & insured. Call 860-447-1518.`,
};

export default function StoningtonPage() {
  return <LocationPageLayout location={location} />;
}

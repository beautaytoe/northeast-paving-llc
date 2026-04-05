import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "essex-ct")!;

export const metadata: Metadata = {
  title: `Paving Services in Essex, CT`,
  description: `Professional asphalt paving, sealcoating, grading & excavation services in Essex, CT. 30+ years experience. Licensed & insured. Call 860-447-1518.`,
};

export default function EssexPage() {
  return <LocationPageLayout location={location} />;
}

import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "asphalt-paving-salem-ct")!;

export const metadata: Metadata = {
  title: `Paving Services in Salem, CT`,
  description: `Professional asphalt paving, sealcoating, grading & excavation services in Salem, CT. 30+ years experience. Licensed & insured. Call 860-447-1518.`,
};

export default function SalemPage() {
  return <LocationPageLayout location={location} />;
}

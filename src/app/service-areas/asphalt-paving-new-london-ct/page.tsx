import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "asphalt-paving-new-london-ct")!;

export const metadata: Metadata = {
  title: `Paving Services in New London, CT`,
  description: `Professional asphalt paving, sealcoating, grading & excavation in New London, CT. 30+ years experience. Licensed & insured. Call 860-447-1518.`,
};

export default function NewLondonPage() {
  return <LocationPageLayout location={location} />;
}

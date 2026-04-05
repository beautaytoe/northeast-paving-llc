import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "old-saybrook-ct")!;

export const metadata: Metadata = {
  title: `Paving Services in Old Saybrook, CT`,
  description: `Professional asphalt paving, sealcoating, grading & excavation in Old Saybrook, CT. 30+ years experience. Licensed & insured. Call 860-447-1518.`,
};

export default function OldSaybrookPage() {
  return <LocationPageLayout location={location} />;
}

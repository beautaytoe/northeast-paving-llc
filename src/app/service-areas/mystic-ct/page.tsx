import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "mystic-ct")!;

export const metadata: Metadata = {
  title: `Paving Services in Mystic, CT`,
  description: `Professional asphalt paving, sealcoating, grading & excavation services in Mystic, CT. 30+ years experience. Licensed & insured. Call 860-447-1518.`,
};

export default function MysticPage() {
  return <LocationPageLayout location={location} />;
}

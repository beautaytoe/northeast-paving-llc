import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "asphalt-paving-voluntown-ct")!;

export const metadata: Metadata = {
  title: "Paving in Voluntown, CT — Asphalt & Sealcoating",
  description:
    "Top-rated asphalt paving, sealcoating, grading & excavation in Voluntown, CT. Serving the community for 30+ years. Licensed & insured. Call 860-447-1518.",
};

export default function VoluntownPage() {
  return <LocationPageLayout location={location} />;
}

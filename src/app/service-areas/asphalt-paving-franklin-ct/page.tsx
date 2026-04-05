import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "asphalt-paving-franklin-ct")!;

export const metadata: Metadata = {
  title: "Paving Services in Franklin, CT — Asphalt & Sealcoating",
  description:
    "Trusted asphalt paving, sealcoating, grading & excavation in Franklin, CT. Proudly serving the area for 30+ years. Licensed & insured. Call 860-447-1518.",
};

export default function FranklinPage() {
  return <LocationPageLayout location={location} />;
}

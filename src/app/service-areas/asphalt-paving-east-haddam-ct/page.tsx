import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "asphalt-paving-east-haddam-ct")!;

export const metadata: Metadata = {
  title: "Paving in East Haddam, CT — Asphalt & Sealcoating",
  description:
    "Premier asphalt paving, sealcoating, grading & excavation in East Haddam, CT. 30+ years of local expertise. Licensed & insured. Call 860-447-1518.",
};

export default function EastHaddamPage() {
  return <LocationPageLayout location={location} />;
}

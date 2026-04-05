import type { Metadata } from "next";
import LocationPageLayout from "@/components/LocationPageLayout";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "bozrah-ct")!;

export const metadata: Metadata = {
  title: "Paving Services in Bozrah, CT — Asphalt & Sealcoating",
  description:
    "Dependable asphalt paving, sealcoating, grading & excavation in Bozrah, CT. Over 30 years serving eastern CT. Licensed & insured. Call 860-447-1518.",
};

export default function BozrahPage() {
  return <LocationPageLayout location={location} />;
}

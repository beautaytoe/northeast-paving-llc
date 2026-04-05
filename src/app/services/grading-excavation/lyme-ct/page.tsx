import type { Metadata } from "next";
import ServiceCityLayout from "@/components/ServiceCityLayout";
import { locations } from "@/lib/locations";
import { serviceCityConfigs } from "@/lib/service-city";

const location = locations.find((l) => l.slug === "asphalt-paving-lyme-ct")!;
const service = serviceCityConfigs.find((s) => s.serviceSlug === "grading-excavation")!;

export const metadata: Metadata = {
  title: "Grading & Excavation Lyme CT | Northeast Paving",
  description:
    "Professional grading-excavation in Lyme, CT. 30+ years experience. Licensed & insured. Free estimates — (860) 447-1518.",
};

export default function UgradingUexcavationUlymeUctPage() {
  return <ServiceCityLayout service={service} location={location} />;
}

import type { Metadata } from "next";
import ServiceCityLayout from "@/components/ServiceCityLayout";
import { locations } from "@/lib/locations";
import { serviceCityConfigs } from "@/lib/service-city";

const location = locations.find((l) => l.slug === "asphalt-paving-groton-ct")!;
const service = serviceCityConfigs.find((s) => s.serviceSlug === "gravel-stone")!;

export const metadata: Metadata = {
  title: "Gravel & Stone Installation Groton CT | Northeast Paving",
  description:
    "Professional gravel-stone in Groton, CT. 30+ years experience. Licensed & insured. Free estimates — (860) 447-1518.",
};

export default function UgravelUstoneUgrotonUctPage() {
  return <ServiceCityLayout service={service} location={location} />;
}

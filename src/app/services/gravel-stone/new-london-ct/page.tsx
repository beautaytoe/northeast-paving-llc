import type { Metadata } from "next";
import ServiceCityLayout from "@/components/ServiceCityLayout";
import { locations } from "@/lib/locations";
import { serviceCityConfigs } from "@/lib/service-city";

const location = locations.find((l) => l.slug === "asphalt-paving-new-london-ct")!;
const service = serviceCityConfigs.find((s) => s.serviceSlug === "gravel-stone")!;

export const metadata: Metadata = {
  title: "Gravel & Stone Installation New London CT | Northeast Paving",
  description:
    "Professional gravel-stone in New London, CT. 30+ years experience. Licensed & insured. Free estimates — (860) 447-1518.",
};

export default function UgravelUstoneUnewUlondonUctPage() {
  return <ServiceCityLayout service={service} location={location} />;
}

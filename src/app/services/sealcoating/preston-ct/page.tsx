import type { Metadata } from "next";
import ServiceCityLayout from "@/components/ServiceCityLayout";
import { locations } from "@/lib/locations";
import { serviceCityConfigs } from "@/lib/service-city";

const location = locations.find((l) => l.slug === "asphalt-paving-preston-ct")!;
const service = serviceCityConfigs.find((s) => s.serviceSlug === "sealcoating")!;

export const metadata: Metadata = {
  title: "Sealcoating in Preston CT | Northeast Paving",
  description:
    "Professional sealcoating in Preston, CT. 30+ years experience. Licensed & insured. Free estimates — (860) 447-1518.",
};

export default function UsealcoatingUprestonUctPage() {
  return <ServiceCityLayout service={service} location={location} />;
}

import type { Metadata } from "next";
import ServiceCityLayout from "@/components/ServiceCityLayout";
import { locations } from "@/lib/locations";
import { serviceCityConfigs } from "@/lib/service-city";

const location = locations.find((l) => l.slug === "asphalt-paving-griswold-ct")!;
const service = serviceCityConfigs.find((s) => s.serviceSlug === "sealcoating")!;

export const metadata: Metadata = {
  title: "Sealcoating in Griswold CT | Northeast Paving",
  description:
    "Professional sealcoating in Griswold, CT. 30+ years experience. Licensed & insured. Free estimates — (860) 447-1518.",
};

export default function UsealcoatingUgriswoldUctPage() {
  return <ServiceCityLayout service={service} location={location} />;
}

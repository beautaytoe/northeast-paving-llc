import type { Metadata } from "next";
import ServiceCityLayout from "@/components/ServiceCityLayout";
import { locations } from "@/lib/locations";
import { serviceCityConfigs } from "@/lib/service-city";

const location = locations.find((l) => l.slug === "asphalt-paving-norwich-ct")!;
const service = serviceCityConfigs.find((s) => s.serviceSlug === "driveway-paving")!;

export const metadata: Metadata = {
  title: "Driveway Paving in Norwich CT | Northeast Paving",
  description:
    "Professional driveway-paving in Norwich, CT. 30+ years experience. Licensed & insured. Free estimates — (860) 447-1518.",
};

export default function UdrivewayUpavingUnorwichUctPage() {
  return <ServiceCityLayout service={service} location={location} />;
}

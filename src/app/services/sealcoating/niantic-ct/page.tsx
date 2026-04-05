import type { Metadata } from "next";
import ServiceCityLayout from "@/components/ServiceCityLayout";
import { locations } from "@/lib/locations";
import { serviceCityConfigs } from "@/lib/service-city";

const location = locations.find((l) => l.slug === "asphalt-paving-niantic-ct")!;
const service = serviceCityConfigs.find((s) => s.serviceSlug === "sealcoating")!;

export const metadata: Metadata = {
  title: "Sealcoating in Niantic CT | Northeast Paving",
  description:
    "Professional sealcoating in Niantic, CT. 30+ years experience. Licensed & insured. Free estimates — (860) 447-1518.",
};

export default function UsealcoatingUnianticUctPage() {
  return <ServiceCityLayout service={service} location={location} />;
}

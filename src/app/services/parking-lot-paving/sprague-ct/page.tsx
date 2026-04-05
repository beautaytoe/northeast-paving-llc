import type { Metadata } from "next";
import ServiceCityLayout from "@/components/ServiceCityLayout";
import { locations } from "@/lib/locations";
import { serviceCityConfigs } from "@/lib/service-city";

const location = locations.find((l) => l.slug === "asphalt-paving-sprague-ct")!;
const service = serviceCityConfigs.find((s) => s.serviceSlug === "parking-lot-paving")!;

export const metadata: Metadata = {
  title: "Parking Lot Paving in Sprague CT | Northeast Paving",
  description:
    "Professional parking-lot-paving in Sprague, CT. 30+ years experience. Licensed & insured. Free estimates — (860) 447-1518.",
};

export default function UparkingUlotUpavingUspragueUctPage() {
  return <ServiceCityLayout service={service} location={location} />;
}

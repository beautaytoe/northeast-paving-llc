export interface ServiceCityConfig {
  serviceSlug: string;
  serviceName: string;
  serviceDescription: string;
  mainServicePage: string;
  faqs: (town: string) => { question: string; answer: string }[];
  getContent: (town: string) => string[];
}

export const serviceCityConfigs: ServiceCityConfig[] = [
  {
    serviceSlug: "driveway-paving",
    serviceName: "Driveway Paving",
    serviceDescription: "residential and commercial driveway paving",
    mainServicePage: "/services/asphalt-paving",
    faqs: (town) => [
      {
        question: `How much does driveway paving cost in ${town}, CT?`,
        answer: `Driveway paving costs in ${town} typically range from $3 to $7 per square foot depending on driveway size, base condition, and accessibility. A standard two-car driveway usually costs between $3,000 and $7,000. Contact Northeast Paving at 860-447-1518 for a free on-site estimate specific to your ${town} property.`,
      },
      {
        question: `How long does a new driveway last in ${town}?`,
        answer: `A professionally paved asphalt driveway in ${town} typically lasts 20-30 years with proper maintenance. Regular sealcoating every 2-3 years and prompt crack repair can significantly extend its lifespan. Connecticut's freeze-thaw cycles make maintenance especially important.`,
      },
    ],
    getContent: (town) => [
      `Northeast Paving has been the go-to driveway paving contractor for ${town}, CT homeowners for over 30 years. Whether you need a brand-new driveway installed, an existing one repaved, or an old concrete driveway replaced with smooth asphalt, our experienced crew delivers results that last decades.`,
      `Every driveway paving project in ${town} begins with a thorough site assessment. We evaluate your existing surface, check drainage patterns, and determine the right base preparation for your specific soil conditions. Proper subgrade preparation is the foundation of a long-lasting driveway, and we never cut corners on this critical step.`,
      `Our ${town} driveway paving process includes complete excavation of the old surface (if needed), precision grading for proper water runoff, installation of a compacted gravel base, and application of hot-mix asphalt to the correct depth. We use commercial-grade rollers to achieve maximum compaction and a smooth, professional finish.`,
      `As a licensed, insured, and W.B.E. certified paving contractor, we bring the same level of professionalism to every ${town} driveway project — from small single-car driveways to large circular driveways on estate properties. Call 860-447-1518 for your free estimate.`,
    ],
  },
  {
    serviceSlug: "parking-lot-paving",
    serviceName: "Parking Lot Paving",
    serviceDescription: "commercial parking lot paving and resurfacing",
    mainServicePage: "/services/asphalt-paving",
    faqs: (town) => [
      {
        question: `How much does parking lot paving cost in ${town}, CT?`,
        answer: `Commercial parking lot paving in ${town} typically ranges from $2.50 to $6 per square foot depending on lot size, base requirements, and drainage needs. Larger lots benefit from better per-square-foot rates. Contact us at 860-447-1518 for a detailed estimate for your ${town} commercial property.`,
      },
      {
        question: `Can you pave a parking lot in ${town} without shutting down the business?`,
        answer: `Yes — we regularly phase parking lot paving projects in ${town} to keep businesses operational. We can pave in sections, work evenings or weekends, and coordinate with your schedule to minimize disruption. We'll create a phasing plan that works for your business.`,
      },
    ],
    getContent: (town) => [
      `Northeast Paving provides professional commercial parking lot paving services throughout ${town}, CT. From retail plazas and office complexes to municipal lots and apartment communities, we have the equipment and expertise to handle parking lot projects of any size in ${town}.`,
      `A well-paved parking lot is your business's first impression. Cracked, potholed, or deteriorating pavement sends the wrong message to customers and creates liability risks. Our ${town} parking lot paving services include new construction, complete repaving, overlay installation, and ADA-compliant accessibility improvements.`,
      `Our commercial paving process for ${town} properties includes thorough site evaluation, precise grading for proper stormwater drainage, heavy-duty base installation rated for commercial traffic loads, and multi-layer asphalt application with commercial-grade compaction. We also provide line striping, curb installation, and signage coordination.`,
      `With over 30 years of commercial paving experience in Southeastern Connecticut, we understand the unique needs of ${town} businesses. We work efficiently to minimize disruption and can phase projects to keep your lot partially open during construction. Licensed, insured, and W.B.E. certified.`,
    ],
  },
  {
    serviceSlug: "sealcoating",
    serviceName: "Sealcoating",
    serviceDescription: "professional asphalt sealcoating and maintenance",
    mainServicePage: "/services/sealcoating-repair",
    faqs: (town) => [
      {
        question: `How often should I sealcoat my driveway in ${town}, CT?`,
        answer: `We recommend sealcoating your ${town} driveway every 2-3 years for optimal protection. Connecticut's harsh winters with freeze-thaw cycles, road salt exposure, and UV degradation make regular sealcoating especially important. New driveways should wait 6-12 months before their first sealcoat.`,
      },
      {
        question: `What is the best time of year for sealcoating in ${town}?`,
        answer: `The best time for sealcoating in ${town}, CT is from May through October when temperatures stay consistently above 50°F and there's no rain in the forecast for 24-48 hours. Early fall is ideal — warm enough for proper curing but before winter weather arrives.`,
      },
    ],
    getContent: (town) => [
      `Northeast Paving provides professional sealcoating services for driveways and parking lots throughout ${town}, CT. Sealcoating is the most cost-effective way to protect your asphalt investment from Connecticut's punishing weather, extending the life of your pavement by years and saving thousands in premature repaving costs.`,
      `Our ${town} sealcoating process begins with thorough surface preparation — cleaning, crack filling, and oil spot treatment. We then apply a premium coal-tar or asphalt emulsion sealcoat using commercial spray equipment for even, consistent coverage. The result is a rich, dark finish that protects against UV rays, water penetration, oil spills, and freeze-thaw damage.`,
      `Regular sealcoating is particularly important for ${town} properties due to Connecticut's climate. The combination of summer UV exposure, fall rain, winter freeze-thaw cycles, and road salt creates a year-round assault on unprotected asphalt. Our sealcoating creates a protective barrier that blocks all of these damaging elements.`,
      `We sealcoat residential driveways and commercial parking lots of all sizes in ${town}. Whether you need a single-driveway application or a multi-phase commercial lot project, Northeast Paving delivers professional results with minimal disruption. Call 860-447-1518 for your free sealcoating estimate.`,
    ],
  },
];

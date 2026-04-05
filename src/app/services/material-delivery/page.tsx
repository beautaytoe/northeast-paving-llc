import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Material Delivery & Trucking Services",
  description:
    "Fast delivery of mulch, topsoil, gravel, stone, and more in Southeastern CT. Residential & commercial trucking. 30+ years experience. Call 860-447-1518.",
};

export default function MaterialDeliveryPage() {
  return (
    <ServicePageLayout
      heroTitle="Material Delivery"
      heroHighlight="& Trucking"
      heroDescription="Fast, reliable delivery of mulch, topsoil, gravel, stone, and other materials throughout Southeastern Connecticut."
      overviewTitle="Reliable Material Delivery"
      overviewText={[
        "Need materials delivered to your job site or property? Northeast Paving operates a fleet of trucks that deliver mulch, topsoil, gravel, stone, fill, and other materials throughout Southeastern Connecticut. Whether you're a homeowner working on a landscaping project or a contractor managing a large site, we deliver on time and on budget.",
        "We source our materials from trusted local suppliers, ensuring you get quality products at competitive prices. Our drivers are experienced professionals who take care when delivering to your property — we protect your lawn, driveway, and landscaping.",
        "With over 30 years in the business, we've built a reputation for reliable, on-time delivery. Call us for a quote — we'll get your materials where you need them, when you need them.",
      ]}
      processSteps={[
        {
          step: "1",
          title: "Order",
          description:
            "Tell us what materials you need, how much, and where they're going. We'll provide a quote on the spot.",
        },
        {
          step: "2",
          title: "Schedule",
          description:
            "We'll confirm a delivery date and time window that works with your schedule and project timeline.",
        },
        {
          step: "3",
          title: "Deliver",
          description:
            "Our experienced drivers deliver your materials safely and place them exactly where you need them.",
        },
        {
          step: "4",
          title: "Spread (Optional)",
          description:
            "Need materials spread or installed? We offer full placement services for an additional charge.",
        },
      ]}
      benefits={[
        {
          title: "Wide Selection",
          description:
            "Mulch, topsoil, gravel, crushed stone, fill dirt, sand, and recycled asphalt millings available.",
        },
        {
          title: "Fast Delivery",
          description:
            "Same-day and next-day delivery available for most materials in our service area.",
        },
        {
          title: "Any Quantity",
          description:
            "From a single yard for a garden bed to hundreds of tons for a construction site — no order too big or small.",
        },
        {
          title: "Competitive Pricing",
          description:
            "Direct relationships with local quarries and suppliers mean great prices passed on to you.",
        },
        {
          title: "Professional Drivers",
          description:
            "Our drivers are careful, courteous, and experienced with deliveries to tight residential spaces.",
        },
        {
          title: "Placement Available",
          description:
            "We can spread and install delivered materials, saving you time and labor.",
        },
      ]}
      faqs={[
        {
          question: "What materials do you deliver?",
          answer:
            "We deliver mulch (various types), topsoil, screened loam, gravel, crushed stone, processed aggregate, fill dirt, sand, and recycled asphalt millings. Call us if you need something specific — we likely have a source.",
        },
        {
          question: "How quickly can you deliver?",
          answer:
            "We offer same-day delivery for many materials depending on availability and our schedule. Most orders can be delivered within 1-2 business days. Rush delivery is available for urgent needs.",
        },
        {
          question: "How do I know how much material I need?",
          answer:
            "Call us with your project dimensions and we'll help you calculate the right quantity. We'd rather help you order the right amount than have you come up short or have excess material.",
        },
        {
          question: "Where do you deliver?",
          answer:
            "We deliver throughout Southeastern Connecticut including New London, Groton, Waterford, Mystic, East Lyme, Old Saybrook, Stonington, and surrounding towns.",
        },
        {
          question: "Do you offer bulk pricing?",
          answer:
            "Yes, we offer competitive pricing on bulk orders. The more you need, the better your per-yard or per-ton rate. Contact us for a quote on larger quantities.",
        },
      ]}
      slug="material-delivery"
      heroImage="/images/gallery/northeast-paving-delivery-truck-ct.webp"
    />
  );
}

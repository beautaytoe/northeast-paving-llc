import type { Metadata } from "next";
import Link from "next/link";
import { Star, Phone } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials",
  description:
    "Read reviews from Northeast Paving LLC customers across Southeastern CT. 5-star rated paving contractor. 30+ years experience. Call 860-447-1518.",
};

const reviews = [
  {
    name: "Michael R.",
    location: "Groton, CT",
    text: "Northeast Paving did an outstanding job on our driveway. The crew was professional, efficient, and the finished product looks amazing. Highly recommend them to anyone in the area.",
    rating: 5,
    service: "Driveway Paving",
  },
  {
    name: "Sarah T.",
    location: "Waterford, CT",
    text: "We've used Northeast Paving for our commercial parking lot twice now. They always deliver on time and on budget. The quality of their work is second to none.",
    rating: 5,
    service: "Commercial Paving",
  },
  {
    name: "James L.",
    location: "New London, CT",
    text: "From the initial estimate to the final cleanup, the entire process was smooth and professional. Our new driveway has completely transformed the look of our property.",
    rating: 5,
    service: "Driveway Paving",
  },
  {
    name: "Linda M.",
    location: "Mystic, CT",
    text: "Great experience from start to finish. They were upfront about costs, showed up when they said they would, and the sealcoating looks fantastic. Will definitely use them again.",
    rating: 5,
    service: "Sealcoating",
  },
  {
    name: "Robert K.",
    location: "East Lyme, CT",
    text: "We needed our parking lot repaved on a tight timeline before our grand opening. Northeast Paving made it happen — the lot looked perfect and they finished a day early. Incredible team.",
    rating: 5,
    service: "Parking Lot Paving",
  },
  {
    name: "Patricia H.",
    location: "Old Saybrook, CT",
    text: "After getting three quotes, we went with Northeast Paving and couldn't be happier. Fair price, excellent work, and they left the property cleaner than they found it. Five stars.",
    rating: 5,
    service: "Driveway Paving",
  },
  {
    name: "David S.",
    location: "Stonington, CT",
    text: "The grading and drainage work they did completely solved the water pooling issue we had for years. Very knowledgeable crew — they diagnosed the problem and fixed it right.",
    rating: 5,
    service: "Grading & Drainage",
  },
  {
    name: "Karen W.",
    location: "Ledyard, CT",
    text: "We had a long gravel driveway installed with recycled millings. Looks great, drains perfectly, and the price was very reasonable. Northeast Paving really knows their stuff.",
    rating: 5,
    service: "Gravel & Millings",
  },
  {
    name: "Thomas B.",
    location: "Montville, CT",
    text: "Professional from day one. The estimate was detailed, the timeline was accurate, and the paving is flawless. This is the kind of contractor you want to find and keep.",
    rating: 5,
    service: "Driveway Paving",
  },
  {
    name: "Nancy C.",
    location: "Old Lyme, CT",
    text: "We've been getting our driveway sealcoated by Northeast Paving every few years and it always looks brand new after. Reliable, reasonably priced, and always pleasant to deal with.",
    rating: 5,
    service: "Sealcoating",
  },
  {
    name: "Mark D.",
    location: "Niantic, CT",
    text: "Needed a complete tear-out and repave of our badly damaged driveway. Northeast Paving handled the whole thing — demolition, grading, base work, and paving. Turned out beautiful.",
    rating: 5,
    service: "Driveway Repaving",
  },
  {
    name: "Susan F.",
    location: "Salem, CT",
    text: "They delivered and spread 20 yards of gravel for our farm access road. Fast delivery, fair price, and the driver was careful around our fencing. Very happy with the service.",
    rating: 5,
    service: "Material Delivery",
  },
];

export default function ReviewsPage() {
  const avgRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <>
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Reviews" }]} />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-7 h-7 fill-blue text-blue" />
            ))}
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            Customer <span className="text-blue">Reviews</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {avgRating} out of 5 stars based on {reviews.length} reviews.
            See what homeowners and businesses across Southeastern CT say about
            working with Northeast Paving.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border border-gray-200 flex flex-col"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-blue text-blue"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-warm leading-relaxed text-sm flex-1 mb-4">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-heading font-bold text-charcoal uppercase tracking-wide text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-warm">{review.location}</p>
                  <span className="inline-block mt-2 text-xs bg-blue/10 text-blue px-2 py-0.5 rounded font-medium">
                    {review.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">
            Join Our Satisfied Customers
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Ready to experience the Northeast Paving difference? Get a free
            estimate today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:860-447-1518"
              className="flex items-center gap-2 bg-blue hover:bg-blue-dark text-white font-bold px-8 py-4 rounded-md transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Call 860-447-1518
            </a>
            <Link
              href="/free-estimate"
              className="bg-white hover:bg-gray-100 text-charcoal font-bold px-8 py-4 rounded-md transition-colors text-lg"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

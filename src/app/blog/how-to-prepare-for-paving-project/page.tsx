import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "How to Prepare for Your Paving Project | Tips",
  description:
    "Step-by-step guide to preparing for driveway or parking lot paving. What to do before, during, and after the crew arrives. Expert tips from Northeast Paving.",
};

export default function HowToPrepareForPavingProjectPage() {
  return (
    <>
      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "How to Prepare for Your Paving Project",
        description: "Step-by-step guide to preparing for driveway or parking lot paving. What to do before, during, and after the crew arrives. Expert tips from Northeast Paving.",
        datePublished: "2026-01-05",
        dateModified: "2026-01-05",
        author: { "@type": "Organization", name: "Northeast Paving, LLC" },
        publisher: {
          "@type": "Organization",
          name: "Northeast Paving, LLC",
          logo: { "@type": "ImageObject", url: "https://northeastpavingllc.com/images/brand/northeast-paving-logo.webp" },
        },
      }} />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "How to Prepare for Your Paving Project" }]} />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-gray-300 mb-4">
            <time dateTime="2026-01-05">January 5, 2026</time>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide">
            How to Prepare for Your{" "}
            <span className="text-blue">Paving Project</span>
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Intro */}
            <p className="text-gray-warm leading-relaxed text-lg mb-6">
              Whether you are getting a brand-new driveway installed or
              resurfacing an aging parking lot, a little preparation goes a long
              way toward a smooth, successful paving project. At{" "}
              <Link href="/why-choose-us" className="text-blue hover:underline">
                Northeast Paving LLC
              </Link>
              , we have been serving homeowners and businesses across Southeastern
              Connecticut for over 30 years, and we have seen firsthand how a
              well-prepared property leads to faster timelines, fewer
              complications, and a better finished product.
            </p>
            <p className="text-gray-warm leading-relaxed mb-6">
              This comprehensive guide walks you through everything you need to
              know before, during, and after your paving project so you can feel
              confident and ready when the crew shows up.
            </p>

            {/* Before the Project */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mt-12 mb-6">
              Before the Project
            </h2>

            <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-charcoal mt-8 mb-4">
              Get Multiple Estimates
            </h3>
            <p className="text-gray-warm leading-relaxed mb-6">
              Before committing to any contractor, it is wise to get at least
              two or three estimates. A reputable paving company will visit your
              property, assess the scope of work, and provide a detailed written
              estimate at no charge. Be wary of quotes that seem unusually low —
              they often signal subpar materials, thin asphalt layers, or hidden
              costs that appear later. When you{" "}
              <Link href="/free-estimate" className="text-blue hover:underline">
                request a free estimate from Northeast Paving
              </Link>
              , we walk you through every line item so there are no surprises on
              paving day.
            </p>

            <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-charcoal mt-8 mb-4">
              Check Credentials and References
            </h3>
            <p className="text-gray-warm leading-relaxed mb-6">
              Always verify that the contractor you hire is properly licensed and
              insured. Ask for proof of general liability insurance and workers
              compensation coverage. A trustworthy company will be happy to
              provide references from recent projects in your area. Read online
              reviews, check the Better Business Bureau, and ask neighbors who
              they have used. At Northeast Paving, we are fully licensed,
              insured, and{" "}
              <Link href="/why-choose-us" className="text-blue hover:underline">
                W.B.E. certified
              </Link>
              , giving you peace of mind on every project.
            </p>

            <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-charcoal mt-8 mb-4">
              Clear the Area
            </h3>
            <p className="text-gray-warm leading-relaxed mb-6">
              A few days before the crew arrives, clear the paving area of any
              obstacles. Move vehicles, bikes, planters, basketball hoops,
              garbage cans, and any lawn furniture that sits near the driveway
              or parking lot. Trim back any tree branches or shrubs that hang
              over the work zone. The more room the crew has to operate heavy
              equipment like pavers and rollers, the smoother and more efficient
              the process will be.
            </p>

            <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-charcoal mt-8 mb-4">
              Mark Sprinkler Heads and Utilities
            </h3>
            <p className="text-gray-warm leading-relaxed mb-6">
              If you have an in-ground sprinkler system, mark every head that is
              near the paving area with a flag or stake. Likewise, note the
              location of any shallow utility lines, cable boxes, or drainage
              grates. Sharing this information with your paving contractor
              beforehand helps prevent accidental damage and costly repairs. If
              you are unsure about underground utilities, contact Call Before You
              Dig (CBYD) at 811 — it is a free service in Connecticut.
            </p>

            <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-charcoal mt-8 mb-4">
              Plan for Parking Elsewhere
            </h3>
            <p className="text-gray-warm leading-relaxed mb-6">
              Your driveway or parking area will be completely inaccessible
              during paving and for at least 24 to 48 hours afterward while the
              asphalt cures. Make arrangements to park on the street (check with
              your town for any parking ordinances), at a neighbor&apos;s
              house, or in a nearby lot. If you are a business having a
              commercial parking lot paved, notify your customers and employees
              well in advance and provide directions to alternative parking.
            </p>

            <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-charcoal mt-8 mb-4">
              Discuss Drainage With Your Contractor
            </h3>
            <p className="text-gray-warm leading-relaxed mb-6">
              Proper drainage is one of the most critical factors in a
              long-lasting paving job. Water that pools on asphalt will
              eventually seep through cracks, erode the base, and shorten the
              pavement&apos;s life dramatically. Before work begins, discuss
              drainage plans with your contractor. An experienced company like
              Northeast Paving will evaluate the slope, plan for proper water
              runoff, and may recommend{" "}
              <Link
                href="/services/grading-excavation"
                className="text-blue hover:underline"
              >
                grading and excavation work
              </Link>{" "}
              to ensure a solid, well-drained foundation.
            </p>

            {/* During Paving */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mt-12 mb-6">
              During the Paving Process
            </h2>

            <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-charcoal mt-8 mb-4">
              What to Expect on Paving Day
            </h3>
            <p className="text-gray-warm leading-relaxed mb-6">
              On the day of your{" "}
              <Link
                href="/services/asphalt-paving"
                className="text-blue hover:underline"
              >
                asphalt paving project
              </Link>
              , expect heavy equipment including dump trucks, a paving machine,
              and large steel rollers. The crew will typically arrive in the
              morning and begin by preparing the base — removing old pavement if
              necessary, grading the sub-base, and compacting it thoroughly. Once
              the base is set, hot-mix asphalt is delivered and laid to the
              proper thickness, then compacted with heavy rollers to create a
              smooth, even surface. A typical residential driveway can often be
              completed in a single day, while larger commercial projects may
              take several days.
            </p>

            <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-charcoal mt-8 mb-4">
              Stay Off the Pavement
            </h3>
            <p className="text-gray-warm leading-relaxed mb-6">
              Once the asphalt is laid, it is absolutely critical that no one
              walks or drives on it until the crew gives you the all-clear.
              Fresh asphalt is extremely hot — typically around 300 degrees
              Fahrenheit when it comes off the truck — and it remains soft and
              pliable for hours after being laid. Walking on it can leave
              permanent footprints, and driving on it too soon can create ruts
              and depressions that are expensive to fix. Your contractor will
              tell you exactly when it is safe to use the new surface.
            </p>

            <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-charcoal mt-8 mb-4">
              Keep Kids and Pets Away
            </h3>
            <p className="text-gray-warm leading-relaxed mb-6">
              This cannot be stressed enough. The paving area is a construction
              zone with heavy machinery, hot materials, and limited visibility
              for equipment operators. Keep children and pets indoors or in a
              fenced area well away from the work zone for the entire duration of
              the project. Beyond the safety hazard, curious pets and children
              can also leave tracks in fresh asphalt that will be visible for
              the life of the pavement.
            </p>

            {/* After Paving */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mt-12 mb-6">
              After the Paving Is Complete
            </h2>

            <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-charcoal mt-8 mb-4">
              Curing Time: 24 to 48 Hours Minimum
            </h3>
            <p className="text-gray-warm leading-relaxed mb-6">
              New asphalt needs at least 24 to 48 hours to cure before you can
              drive on it, though full curing can take up to a year depending on
              weather conditions. During the initial curing period, avoid all
              foot and vehicle traffic on the surface. Even after you begin
              driving on it, be gentle for the first few weeks — the asphalt is
              still hardening and is more susceptible to damage than a
              fully-cured surface. Your pavement will continue to harden and
              darken over the following months as it fully oxidizes.
            </p>

            <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-charcoal mt-8 mb-4">
              Avoid Sharp Turns for the First Few Weeks
            </h3>
            <p className="text-gray-warm leading-relaxed mb-6">
              For the first several weeks after paving, avoid turning your
              steering wheel while your vehicle is stationary on the new
              asphalt. This is called &quot;power steering scuffing&quot; and
              it can tear and gouge the surface of fresh pavement. Instead,
              allow your vehicle to roll slightly before turning the wheel.
              Also avoid parking in the same spot every day during the first
              few weeks, as the weight of a vehicle can create depressions in
              asphalt that has not fully hardened. If possible, vary your
              parking position.
            </p>

            <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-charcoal mt-8 mb-4">
              Wait 6 to 12 Months Before Sealcoating
            </h3>
            <p className="text-gray-warm leading-relaxed mb-6">
              Sealcoating is one of the best things you can do to extend the
              life of your asphalt, but timing matters. You should wait at
              least six to twelve months after new paving before applying the
              first coat of sealer. This allows the asphalt to fully cure and
              the oils in the mix to evaporate properly. Applying sealer too
              soon can actually trap moisture and oils, preventing proper curing
              and potentially causing damage. When the time is right, check out
              our guide on{" "}
              <Link
                href="/blog/when-to-sealcoat-driveway"
                className="text-blue hover:underline"
              >
                when to sealcoat your driveway
              </Link>{" "}
              for detailed advice on timing and frequency. A well-maintained
              asphalt driveway can last{" "}
              <Link
                href="/blog/how-long-does-asphalt-driveway-last"
                className="text-blue hover:underline"
              >
                20 to 30 years or more
              </Link>{" "}
              with proper care.
            </p>

            {/* Questions to Ask */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mt-12 mb-6">
              Questions to Ask Your Paving Contractor
            </h2>
            <p className="text-gray-warm leading-relaxed mb-4">
              A good paving contractor will welcome your questions. Before
              signing a contract, make sure you get clear answers to the
              following:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-warm leading-relaxed">
              <li>
                <strong>What type and thickness of asphalt will you use?</strong>{" "}
                Residential driveways typically need at least 2 to 3 inches of
                hot-mix asphalt over a compacted gravel base. Commercial lots
                generally require more.
              </li>
              <li>
                <strong>How will you handle drainage?</strong> The contractor
                should have a clear plan for water runoff, including proper
                grading and any necessary drainage structures.
              </li>
              <li>
                <strong>What base preparation is included?</strong> The base is
                the foundation of your pavement. Ask whether it will be
                excavated, re-graded, and compacted before paving.
              </li>
              <li>
                <strong>Do you provide a warranty?</strong> Reputable companies
                stand behind their work. Ask about the length and terms of the
                warranty.
              </li>
              <li>
                <strong>What is the estimated timeline?</strong> Knowing how
                long the project will take helps you plan parking and daily
                routines.
              </li>
              <li>
                <strong>Are you licensed and insured?</strong> Never hire a
                contractor without verifying proper licensing and insurance
                coverage.
              </li>
              <li>
                <strong>Can you provide references?</strong> A company with a
                strong track record will gladly connect you with previous
                customers in your area.
              </li>
            </ul>

            {/* Best Time of Year */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mt-12 mb-6">
              Choosing the Right Time of Year
            </h2>
            <p className="text-gray-warm leading-relaxed mb-6">
              In Connecticut, the optimal paving season runs from{" "}
              <strong>April through November</strong>. Asphalt must be laid when
              ground and air temperatures are consistently above 50 degrees
              Fahrenheit for proper compaction and curing. Spring and early
              summer are the most popular times to schedule paving projects, so
              booking early is advisable to secure your preferred date.
            </p>
            <p className="text-gray-warm leading-relaxed mb-6">
              Fall paving can be an excellent choice as well. The cooler but
              still-warm temperatures allow for good curing conditions, and many
              contractors have more availability since the summer rush has
              subsided. However, avoid scheduling paving too late in the fall —
              if temperatures drop before the asphalt has a chance to cure
              properly, it can affect the final product&apos;s durability.
            </p>
            <p className="text-gray-warm leading-relaxed mb-6">
              Rain is also a concern. Asphalt cannot be laid on wet surfaces, so
              your contractor will monitor the forecast closely and may need to
              reschedule if rain is expected. A professional company will
              communicate any weather delays promptly and work with you to find
              the next available window.
            </p>

            {/* Final Tips */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal mt-12 mb-6">
              Final Preparation Checklist
            </h2>
            <p className="text-gray-warm leading-relaxed mb-4">
              To make your paving day as smooth as possible, run through this
              quick checklist in the days before the crew arrives:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-warm leading-relaxed">
              <li>Move all vehicles, bikes, and equipment off the driveway</li>
              <li>Trim back overhanging branches and shrubs</li>
              <li>Mark sprinkler heads, utility lines, and cable boxes</li>
              <li>Arrange alternative parking for 24 to 48 hours minimum</li>
              <li>Notify neighbors about expected truck and equipment traffic</li>
              <li>Plan to keep children and pets away from the work zone</li>
              <li>Confirm the project timeline and payment schedule with your contractor</li>
              <li>Check the weather forecast for the scheduled dates</li>
            </ul>
            <p className="text-gray-warm leading-relaxed mb-6">
              Taking these steps will help the project run on time, reduce the
              chance of unexpected issues, and give your paving crew the best
              possible conditions to deliver a beautiful, long-lasting result.
            </p>
          </div>

          {/* Related Articles */}
          <section className="py-12 mt-16 bg-gray-light rounded-2xl">
            <div className="max-w-4xl mx-auto px-4 lg:px-8">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-charcoal mb-6 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/blog/how-long-does-asphalt-driveway-last" className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue/30 transition-all">
                  <span className="font-heading text-sm font-bold uppercase tracking-wide text-charcoal">How Long Does an Asphalt Driveway Last?</span>
                  <span className="block mt-1 text-xs text-blue font-medium">Read Article →</span>
                </Link>
                <Link href="/blog/asphalt-vs-concrete-driveway" className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue/30 transition-all">
                  <span className="font-heading text-sm font-bold uppercase tracking-wide text-charcoal">Asphalt vs. Concrete Driveway</span>
                  <span className="block mt-1 text-xs text-blue font-medium">Read Article →</span>
                </Link>
                <Link href="/blog/signs-you-need-driveway-repaving" className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue/30 transition-all">
                  <span className="font-heading text-sm font-bold uppercase tracking-wide text-charcoal">5 Signs You Need Driveway Repaving</span>
                  <span className="block mt-1 text-xs text-blue font-medium">Read Article →</span>
                </Link>
              </div>
              <p className="text-center text-sm text-gray-warm mt-8">
                Northeast Paving serves{" "}
                <Link href="/service-areas/asphalt-paving-new-london-ct" className="text-blue hover:text-blue-dark">New London</Link>,{" "}
                <Link href="/service-areas/asphalt-paving-groton-ct" className="text-blue hover:text-blue-dark">Groton</Link>,{" "}
                <Link href="/service-areas/asphalt-paving-waterford-ct" className="text-blue hover:text-blue-dark">Waterford</Link>,{" "}
                and{" "}
                <Link href="/service-areas" className="text-blue hover:text-blue-dark">25+ towns across Southeastern CT</Link>.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-16 bg-charcoal rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-white mb-4">
              Ready to Start Your{" "}
              <span className="text-blue">Paving Project</span>?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto">
              Northeast Paving LLC has been delivering quality paving across
              Southeastern Connecticut for over 30 years. Contact us today for a
              free, no-obligation estimate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:860-447-1518"
                className="inline-flex items-center gap-2 bg-blue hover:bg-blue/90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call 860-447-1518
              </a>
              <Link
                href="/free-estimate"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-charcoal font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

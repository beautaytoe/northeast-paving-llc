import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "5 Signs You Need Driveway Repaving | Northeast Paving",
  description:
    "Learn the 5 warning signs your driveway needs repaving: cracking, potholes, drainage issues, fading, and age. Expert advice from CT paving professionals.",
};

export default function SignsYouNeedDrivewayRepavingPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "5 Signs You Need Driveway Repaving" }]} />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-gray-300 mb-4">
            <time dateTime="2026-01-22">January 22, 2026</time>
            <span>·</span>
            <span>6 min read</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide">
            5 Signs You Need{" "}
            <span className="text-orange">Driveway Repaving</span>
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-warm leading-relaxed space-y-6">
            <p>
              Your driveway is one of the first things people notice about your
              home, and it plays a critical role in your property&apos;s curb
              appeal, value, and everyday functionality. Over time, even the
              best-installed asphalt driveways deteriorate due to traffic, weather,
              UV exposure, and the natural aging process. Here in Southeastern
              Connecticut, the combination of harsh winters, freeze-thaw cycles,
              and hot summers accelerates that wear significantly.
            </p>
            <p>
              But how do you know when your driveway has moved past the point of
              simple repairs and actually needs a full repaving? Below, we break
              down the five most common warning signs that it&apos;s time to
              invest in a new driveway — plus guidance on repair vs. repave
              decisions, what to expect during the process, and how to choose the
              right contractor for the job.
            </p>

            {/* Sign 1 */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal !mt-12 !mb-4">
              1. Extensive Cracking (Alligator Cracking)
            </h2>
            <p>
              Small, hairline cracks in asphalt are normal and can usually be
              addressed with{" "}
              <Link
                href="/services/sealcoating-repair"
                className="text-orange hover:underline font-medium"
              >
                crack sealing and sealcoating
              </Link>
              . However, when those cracks multiply, widen, and connect into a
              pattern that resembles the skin of an alligator — often called
              &quot;alligator cracking&quot; or spider-web cracking — you have a
              much more serious problem on your hands.
            </p>
            <p>
              Alligator cracking is a sign of structural failure beneath the
              surface. It means the base layer or subgrade has deteriorated to the
              point where the asphalt above can no longer hold its shape under
              load. Patching over alligator cracks is a temporary fix at best.
              Water will continue to seep through the interconnected cracks,
              further weakening the foundation and accelerating damage with every
              freeze-thaw cycle we experience in Connecticut winters.
            </p>
            <p>
              If alligator cracking covers more than about 30% of your
              driveway&apos;s surface, repaving — with proper base repair — is
              almost always the most cost-effective long-term solution. Continuing
              to patch an extensively cracked driveway is like putting bandages on
              a broken bone: it might look better temporarily, but the underlying
              problem only gets worse.
            </p>

            {/* Sign 2 */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal !mt-12 !mb-4">
              2. Large Potholes That Keep Recurring
            </h2>
            <p>
              A single small pothole can often be patched effectively. But when
              potholes keep reappearing in the same spots — or new ones seem to
              pop up every spring — it indicates a deeper structural issue. In
              Southeastern CT, the freeze-thaw cycle is the number one cause of
              recurring potholes. Water infiltrates small cracks, freezes and
              expands during our cold winters, then thaws and leaves a void. Each
              cycle makes the hole larger and the surrounding pavement weaker.
            </p>
            <p>
              Recurring potholes are more than just an eyesore. They&apos;re a
              hazard for vehicles, posing a risk of tire damage, alignment
              problems, and even tripping hazards for pedestrians. If you&apos;ve
              had the same pothole filled two or three times and it keeps coming
              back, the base beneath your driveway has failed in that area. At
              that point, localized patching is throwing money away. A full repave
              with proper base preparation will address the root cause and give
              you a stable surface for decades to come.
            </p>

            {/* Sign 3 */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal !mt-12 !mb-4">
              3. Drainage Problems and Pooling Water
            </h2>
            <p>
              A properly graded and installed driveway should direct water away
              from your home and off the pavement surface. If you notice puddles
              or standing water on your driveway after rain, it means the grade
              has shifted, the surface has developed low spots due to settling, or
              the original installation lacked proper slope.
            </p>
            <p>
              Pooling water is one of the most damaging things for an asphalt
              driveway. It accelerates oxidation, softens the binder that holds
              the asphalt together, and provides a constant source of moisture
              that penetrates cracks and weakens the base. In Connecticut, pooling
              water that freezes in winter can cause rapid and severe surface
              deterioration — turning a small depression into a major pothole in a
              single season.
            </p>
            <p>
              When drainage issues are widespread, repaving with correct grading
              is the only real fix. Our team at Northeast Paving includes{" "}
              <Link
                href="/services/asphalt-paving"
                className="text-orange hover:underline font-medium"
              >
                proper grading and drainage design
              </Link>{" "}
              as a standard part of every repaving project, ensuring water flows
              where it should and your new driveway stays dry and intact.
            </p>

            {/* Sign 4 */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal !mt-12 !mb-4">
              4. Faded Gray Color and Crumbling Edges
            </h2>
            <p>
              Fresh asphalt is a rich, dark black color. Over time, UV rays from
              the sun oxidize the binder in the asphalt, causing it to fade to a
              dull gray. While{" "}
              <Link
                href="/blog/when-to-sealcoat-driveway"
                className="text-orange hover:underline font-medium"
              >
                regular sealcoating
              </Link>{" "}
              can slow this process dramatically, an asphalt surface that has
              turned uniformly gray and feels rough and brittle to the touch is
              showing its age.
            </p>
            <p>
              Pay close attention to the edges of your driveway as well. Edges
              are the most vulnerable part of any asphalt surface because they
              lack the lateral support of surrounding pavement. Crumbling,
              chipping, or cracking edges are a telltale sign that the asphalt
              has become brittle and lost its flexibility. Once the edges start
              breaking apart, the deterioration tends to work its way inward
              quickly.
            </p>
            <p>
              If your driveway is faded gray throughout, feels gritty when you
              rub your hand on it, and has edges that are crumbling away, no
              amount of sealcoating will restore its structural integrity. These
              are signs that the asphalt has reached the end of its useful life
              and repaving is the right call.
            </p>

            {/* Sign 5 */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal !mt-12 !mb-4">
              5. Your Driveway Is 20+ Years Old
            </h2>
            <p>
              Even well-maintained asphalt driveways have a finite lifespan. Most
              professionals agree that a properly installed and maintained
              residential driveway will last between 20 and 30 years. If your
              driveway is approaching or has passed the 20-year mark, it&apos;s
              time to start evaluating its condition critically — even if it looks
              acceptable on the surface.
            </p>
            <p>
              The binder in asphalt breaks down over time regardless of
              maintenance. After two decades of Connecticut weather, hundreds of
              freeze-thaw cycles, UV exposure, and daily traffic, the material
              simply loses its ability to flex and resist cracking. For a deeper
              look at asphalt longevity, check out our guide on{" "}
              <Link
                href="/blog/how-long-does-asphalt-driveway-last"
                className="text-orange hover:underline font-medium"
              >
                how long an asphalt driveway lasts
              </Link>
              .
            </p>
            <p>
              If your driveway is over 20 years old and showing any combination
              of the signs above, proactive repaving is almost always smarter and
              more cost-effective than continuing to pour money into repairs. A
              new driveway also gives you the opportunity to improve drainage,
              update the layout, or widen the surface to meet your current needs.
            </p>

            {/* Repair vs Repave */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal !mt-12 !mb-4">
              Repair vs. Repave: How to Decide
            </h2>
            <p>
              Not every driveway issue requires a full repave. Here&apos;s a
              general framework for deciding between repair and replacement:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Repair</strong> makes sense when damage is limited to
                isolated cracks, a single pothole, or a small area of
                deterioration — and the rest of the surface and base are in good
                condition. Crack sealing and sealcoating are excellent
                preventative measures for driveways under 15 years old.
              </li>
              <li>
                <strong>Overlay</strong> (adding a new layer of asphalt over the
                existing surface) can work when the base is still solid but the
                surface has worn thin. However, overlays only last as long as the
                foundation beneath them supports it.
              </li>
              <li>
                <strong>Full repave</strong> is the right choice when there is
                widespread cracking, base failure, drainage problems, or when the
                driveway is over 20 years old. A full repave involves removing
                the old asphalt, repairing or replacing the base, and installing
                fresh pavement from the ground up.
              </li>
            </ul>
            <p>
              If you&apos;re spending more than a few hundred dollars each year
              patching your driveway, a full repave will likely save you money
              over the next five to ten years — and you&apos;ll have a driveway
              that looks great and performs well from day one.
            </p>

            {/* What to Expect */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal !mt-12 !mb-4">
              What to Expect During Driveway Repaving
            </h2>
            <p>
              Understanding the repaving process can help you prepare and set
              realistic expectations. Here&apos;s what a typical residential
              driveway repaving project looks like with Northeast Paving:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Site evaluation and free estimate:</strong> We assess
                your current driveway, measure the area, evaluate drainage and
                base conditions, and provide a detailed written estimate with no
                obligation.
              </li>
              <li>
                <strong>Demolition and removal:</strong> The old asphalt is
                removed using heavy equipment and hauled away for recycling. We
                then inspect the subgrade and base material underneath.
              </li>
              <li>
                <strong>Base repair and grading:</strong> Any soft spots in the
                subgrade are addressed. The base is regraded for proper drainage
                and compacted to create a stable foundation.
              </li>
              <li>
                <strong>Asphalt installation:</strong> Fresh hot-mix asphalt is
                applied to the proper thickness (typically 2-3 inches for
                residential driveways) and compacted with heavy rollers.
              </li>
              <li>
                <strong>Cleanup and curing:</strong> We clean the site
                thoroughly. Your new driveway will need 24-48 hours before
                vehicle traffic and a few weeks to fully cure.
              </li>
            </ol>
            <p>
              Most residential driveways can be completed in one to two days,
              weather permitting. We schedule work during the paving season —
              typically April through November in Connecticut — when temperatures
              are warm enough for proper asphalt compaction.
            </p>

            {/* Choosing a Contractor */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal !mt-12 !mb-4">
              How to Choose a Paving Contractor
            </h2>
            <p>
              Choosing the right paving contractor is just as important as
              deciding to repave. A poorly installed driveway can fail in just a
              few years, wasting your investment. Here are key factors to look
              for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Experience and local reputation:</strong> Look for a
                contractor with decades of experience in your area. Local
                companies understand regional soil conditions, climate challenges,
                and permitting requirements.
              </li>
              <li>
                <strong>Licensing and insurance:</strong> In Connecticut, paving
                contractors should be registered with the Department of Consumer
                Protection. Always verify insurance coverage before any work
                begins.
              </li>
              <li>
                <strong>Written estimates:</strong> A reputable contractor
                provides a detailed written estimate that spells out scope of
                work, materials, timeline, and cost. Beware of vague verbal
                quotes.
              </li>
              <li>
                <strong>References and reviews:</strong> Ask for references from
                recent local projects and check online reviews. Quality
                contractors are proud to show their work.
              </li>
              <li>
                <strong>No high-pressure tactics:</strong> Legitimate paving
                companies never pressure you to sign on the spot or offer
                &quot;today only&quot; deals from leftover material. These are
                common red flags for paving scams.
              </li>
            </ul>
            <p>
              Northeast Paving has served Southeastern Connecticut for over 30
              years. We&apos;re licensed (CT DCP Reg. #571106), fully insured,
              and W.B.E. certified. Learn more about{" "}
              <Link
                href="/why-choose-us"
                className="text-orange hover:underline font-medium"
              >
                why homeowners and businesses choose us
              </Link>
              .
            </p>

            {/* CT Considerations */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-charcoal !mt-12 !mb-4">
              Connecticut-Specific Considerations
            </h2>
            <p>
              Living in Southeastern Connecticut means your driveway faces unique
              challenges that homeowners in milder climates don&apos;t deal with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Freeze-thaw cycles:</strong> Connecticut typically
                experiences 80-100 freeze-thaw cycles per winter. Each one puts
                stress on asphalt and accelerates cracking and pothole formation.
              </li>
              <li>
                <strong>Road salt and deicers:</strong> Chemical deicers are
                necessary for winter safety, but they can break down asphalt
                binder over time. Sealcoating provides a protective barrier.
              </li>
              <li>
                <strong>Coastal proximity:</strong> Properties closer to the Long
                Island Sound may deal with higher moisture levels and salt air,
                both of which can accelerate pavement deterioration.
              </li>
              <li>
                <strong>Paving season:</strong> Our paving season runs roughly
                from April through November. Planning your project in late winter
                or early spring ensures you get on the schedule early and
                avoid delays.
              </li>
              <li>
                <strong>Local permitting:</strong> Some Connecticut towns require
                permits for driveway work, especially if it changes the size or
                location of the apron. We handle permitting coordination as part
                of our service.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-charcoal rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-white mb-4">
              Ready to Repave Your <span className="text-orange">Driveway</span>?
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-xl mx-auto mb-8">
              If your driveway is showing any of these warning signs, don&apos;t
              wait for the damage to get worse. Contact Northeast Paving for a
              free, no-obligation estimate. We&apos;ll assess your driveway and
              give you an honest recommendation — whether that&apos;s a simple
              repair or a full repave.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:860-447-1518"
                className="inline-flex items-center gap-2 bg-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                Call 860-447-1518
              </a>
              <Link
                href="/free-estimate"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-charcoal font-bold py-3 px-8 rounded-lg transition-colors text-lg"
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

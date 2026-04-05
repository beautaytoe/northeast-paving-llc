import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Paving Blog — Tips, Guides & Expert Advice",
  description:
    "Expert paving tips and guides from Northeast Paving LLC. Learn about driveway maintenance, sealcoating, asphalt vs concrete, and more. Call 860-447-1518.",
};

const posts = [
  {
    slug: "how-long-does-asphalt-driveway-last",
    title: "How Long Does an Asphalt Driveway Last?",
    excerpt:
      "Learn the expected lifespan of an asphalt driveway, what factors affect durability, and how proper maintenance can extend your pavement's life by decades.",
    date: "March 15, 2026",
    readTime: "8 min read",
  },
  {
    slug: "asphalt-vs-concrete-driveway",
    title: "Asphalt vs. Concrete Driveway: Which Is Right for You?",
    excerpt:
      "Comparing cost, durability, maintenance, climate performance, and appearance of asphalt and concrete driveways to help you make the best choice for your CT home.",
    date: "February 28, 2026",
    readTime: "10 min read",
  },
  {
    slug: "when-to-sealcoat-driveway",
    title: "When to Sealcoat Your Driveway: A Complete Guide",
    excerpt:
      "Everything you need to know about sealcoating timing, frequency, weather conditions, and why it's the best investment for your asphalt driveway.",
    date: "February 10, 2026",
    readTime: "7 min read",
  },
  {
    slug: "signs-you-need-driveway-repaving",
    title: "5 Signs You Need Driveway Repaving",
    excerpt:
      "How to tell when your driveway has moved beyond repair and needs full repaving. Recognize the warning signs before damage gets worse and costs more.",
    date: "January 22, 2026",
    readTime: "6 min read",
  },
  {
    slug: "how-to-prepare-for-paving-project",
    title: "How to Prepare for Your Paving Project",
    excerpt:
      "A homeowner's step-by-step guide to getting ready for driveway or parking lot paving. What to do before, during, and after the paving crew arrives.",
    date: "January 5, 2026",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            Paving <span className="text-orange">Blog</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            Expert tips, guides, and advice from our team of paving
            professionals with over 30 years of experience.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-gray-200 pb-8 last:border-0"
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="flex items-center gap-3 text-sm text-gray-warm mb-2">
                    <time>{post.date}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-charcoal group-hover:text-orange transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-warm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-3 text-sm font-semibold text-orange group-hover:translate-x-1 transition-transform">
                    Read More →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

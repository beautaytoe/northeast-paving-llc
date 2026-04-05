# Northeast Paving LLC — Website Rebuild

## Project Overview
Full website rebuild for Northeast Paving LLC, a 30+ year asphalt paving company in Southeastern Connecticut. The goal is a modern, SEO-optimized, high-converting website that dominates local search for paving-related keywords in the SE CT market.

## Business Info
- **Company:** Northeast Paving, LLC
- **Phone:** 860-447-1518
- **Fax:** 860-447-1535
- **Address:** 419 Montauk Avenue, New London, CT 06320
- **License:** CT Dept. of Consumer Protection (Reg. #571106)
- **Certification:** State of CT Certified W.B.E. (Women-Owned Business Enterprise)
- **Service Area:** East Lyme, Essex, Groton, Ledyard, Lyme, Montville, Mystic, New London, Niantic, North Stonington, Old Lyme, Old Saybrook, Salem, Stonington, Waterford CT
- **Experience:** 30+ years

## Services Offered
1. **Asphalt Paving** — Driveways, parking lots (residential, commercial, municipal)
2. **Complete Asphalt Maintenance** — Sealcoating, crack repair, patching
3. **Grading & Excavation** — Site prep, drainage solutions
4. **Material Delivery & Trucking** — Mulch, topsoil, gravel, stone delivery
5. **Gravel, Stone & Milling Installation** — Base materials, recycled asphalt

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Animations:** Framer Motion
- **SEO:** next-seo, next-sitemap, JSON-LD structured data
- **Deployment:** Vercel (planned)

## Site Architecture (SEO-Optimized URL Structure)

### Core Pages
- `/` — Homepage (hero, services overview, testimonials, CTA)
- `/about` — Company story, 30+ years experience, W.B.E. certification
- `/why-choose-us` — Differentiators, guarantees, credentials
- `/contact` — Contact form, phone, map embed, service area
- `/free-estimate` — Lead generation form (primary conversion page)
- `/reviews` — Customer testimonials & review links
- `/careers` — Employment opportunities

### Service Pages (each is a standalone SEO landing page)
- `/services` — Services overview hub
- `/services/asphalt-paving` — Driveway & parking lot paving
- `/services/sealcoating-repair` — Asphalt maintenance & sealcoating
- `/services/grading-excavation` — Site grading & excavation
- `/services/material-delivery` — Trucking & material delivery
- `/services/gravel-stone-installation` — Gravel, milling, stone base

### Location Pages (local SEO)
- `/service-areas` — Overview with interactive map
- `/service-areas/new-london-ct` — Location-specific landing page
- `/service-areas/groton-ct`
- `/service-areas/waterford-ct`
- `/service-areas/mystic-ct`
- `/service-areas/east-lyme-ct`
- `/service-areas/old-saybrook-ct`
- `/service-areas/stonington-ct`
- `/service-areas/ledyard-ct`
- `/service-areas/montville-ct`
- `/service-areas/niantic-ct`
- `/service-areas/old-lyme-ct`
- `/service-areas/essex-ct`
- `/service-areas/salem-ct`
- `/service-areas/north-stonington-ct`
- `/service-areas/lyme-ct`

### Blog / Resource Pages (content marketing for SEO)
- `/blog` — Blog index
- `/blog/how-long-does-asphalt-driveway-last`
- `/blog/asphalt-vs-concrete-driveway`
- `/blog/when-to-sealcoat-driveway`
- `/blog/signs-you-need-driveway-repaving`
- `/blog/how-to-prepare-for-paving-project`

### Project Gallery
- `/gallery` — Before/after photos organized by project type

## SEO Strategy

### On-Page SEO Requirements
- Unique title tags (50-60 chars) and meta descriptions (150-160 chars) per page
- H1 → H2 → H3 hierarchy on every page
- Schema.org JSON-LD on every page:
  - `LocalBusiness` on homepage
  - `Service` on service pages
  - `FAQPage` on pages with FAQs
  - `BreadcrumbList` on all inner pages
  - `Review`/`AggregateRating` on reviews page
- Internal linking between related services and location pages
- Image alt tags with location + service keywords
- Open Graph & Twitter Card meta tags on every page
- Canonical URLs on every page
- XML Sitemap via next-sitemap
- robots.txt

### Target Keywords (Primary)
- "paving company near me CT"
- "driveway paving new london CT"
- "asphalt paving groton CT"
- "sealcoating waterford CT"
- "parking lot paving southeastern CT"
- "driveway repair [town name] CT"
- "[town name] CT paving contractor"

### Technical SEO
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Mobile-first responsive design
- Lazy loading images with next/image
- Semantic HTML5 landmarks
- Accessible (WCAG 2.1 AA)

## Design Direction
- **Tone:** Professional, trustworthy, rugged/industrial
- **Primary Color:** Deep charcoal/asphalt (#1C1C1C) with safety orange (#FF6B00) accent
- **Secondary Colors:** Warm gray (#4A4A4A), light gray (#F5F5F5), white (#FFFFFF)
- **Typography:** Bold condensed headings (e.g., Oswald or Barlow Condensed), clean body text (e.g., Source Sans 3)
- **Imagery:** Large hero images of paving work, before/after comparisons, equipment shots
- **Key Trust Signals:** 30+ years, licensed & insured, W.B.E. certified, free estimates, 860-447-1518 prominent everywhere

## Component Architecture
- `Header` — Sticky nav with phone number CTA, mobile hamburger menu
- `Footer` — Full footer with sitemap links, contact info, license info, service area list
- `Hero` — Full-width hero with headline, subheadline, dual CTA buttons
- `ServiceCard` — Reusable card for service overview grids
- `TestimonialSlider` — Customer review carousel
- `CTABanner` — Reusable call-to-action strip (phone + estimate form)
- `LocationCard` — For service area pages
- `BeforeAfter` — Image comparison slider for gallery
- `FAQAccordion` — Expandable FAQ sections for SEO
- `ContactForm` — Lead capture form
- `BreadcrumbNav` — Breadcrumb navigation component
- `SchemaMarkup` — Reusable JSON-LD injection component

## Content Guidelines
- Write in a confident, professional but approachable tone
- Emphasize: 30+ years experience, locally owned, women-owned (W.B.E.), licensed & insured
- Every service page should have: overview, process, benefits, FAQ section, CTA
- Every location page should mention: the town name 3-5 times naturally, nearby landmarks, specific services offered there
- Always include a clear CTA: "Call 860-447-1518" or "Get Your Free Estimate"

## Priority Order for Development
1. Layout (Header, Footer, base styles)
2. Homepage
3. Service pages (start with Asphalt Paving)
4. Contact / Free Estimate pages
5. About / Why Choose Us
6. Location pages (template, then generate all)
7. Reviews page
8. Blog (template + first 2 posts)
9. Gallery page
10. SEO audit & schema markup pass
11. Sitemap, robots.txt, meta tags final pass

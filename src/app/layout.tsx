import type { Metadata } from "next";
import Script from "next/script";
import { Oswald, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://northeastpavingllc.com"),
  title: {
    default: "Asphalt Paving Contractor New London County CT | 30+ Yrs | Northeast Paving",
    template: "%s | Northeast Paving LLC",
  },
  description:
    "Southeastern CT's trusted paving contractor for 30+ years. Asphalt paving, sealcoating, grading & excavation. Licensed, insured & W.B.E. certified. Call 860-447-1518.",
  keywords: [
    "paving company near me CT",
    "driveway paving new london CT",
    "asphalt paving groton CT",
    "sealcoating waterford CT",
    "parking lot paving southeastern CT",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Northeast Paving LLC",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Northeast Paving LLC — Asphalt Paving in Southeastern Connecticut",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    /* Replace VERIFICATION_CODE_HERE with the real Google Search Console code */
    google: "VERIFICATION_CODE_HERE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MLVSRT3Z');
        `}</Script>
      </head>
      <body className="min-h-full flex flex-col font-body text-charcoal bg-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MLVSRT3Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

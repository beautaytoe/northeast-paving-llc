import type { Metadata } from "next";
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
  title: {
    default: "Northeast Paving LLC | Asphalt Paving in Southeastern CT",
    template: "%s | Northeast Paving LLC",
  },
  description:
    "Southeast Connecticut's trusted paving contractor for 30+ years. Asphalt paving, sealcoating, grading & excavation. Licensed, insured & W.B.E. certified. Call 860-447-1518.",
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
      <body className="min-h-full flex flex-col font-body text-charcoal bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

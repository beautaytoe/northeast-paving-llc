import type { NextConfig } from "next";

const towns = [
  "east-lyme-ct", "essex-ct", "groton-ct", "ledyard-ct", "lyme-ct",
  "montville-ct", "mystic-ct", "new-london-ct", "niantic-ct",
  "north-stonington-ct", "old-lyme-ct", "old-saybrook-ct", "salem-ct",
  "stonington-ct", "waterford-ct", "norwich-ct", "preston-ct",
  "griswold-ct", "lisbon-ct", "bozrah-ct", "franklin-ct", "sprague-ct",
  "voluntown-ct", "colchester-ct", "east-haddam-ct",
];

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://link.msgsndr.com https://api.leadconnectorhq.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "frame-src https://api.leadconnectorhq.com https://www.google.com https://maps.google.com",
      "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://api.leadconnectorhq.com",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return towns.map((town) => ({
      source: `/service-areas/${town}`,
      destination: `/service-areas/asphalt-paving-${town}`,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

import sharp from "sharp";

const width = 1200, height = 630;
const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="#1C1C1C"/>
  <rect x="0" y="0" width="${width}" height="8" fill="#0055A6"/>
  <text x="600" y="260" text-anchor="middle" fill="white" font-family="sans-serif" font-size="64" font-weight="bold">NORTHEAST PAVING</text>
  <text x="600" y="320" text-anchor="middle" fill="#0055A6" font-family="sans-serif" font-size="28" font-weight="bold">LLC</text>
  <text x="600" y="400" text-anchor="middle" fill="#999999" font-family="sans-serif" font-size="24">Asphalt Paving - Sealcoating - Grading</text>
  <text x="600" y="450" text-anchor="middle" fill="#999999" font-family="sans-serif" font-size="22">Southeastern Connecticut - 30+ Years</text>
  <text x="600" y="520" text-anchor="middle" fill="#0055A6" font-family="sans-serif" font-size="32" font-weight="bold">860-447-1518</text>
  <text x="600" y="570" text-anchor="middle" fill="#666666" font-family="sans-serif" font-size="18">Licensed - Insured - W.B.E. Certified</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/images/og-default.png");

await sharp("public/images/brand/northeast-paving-logo.webp")
  .resize(180, 180, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png()
  .toFile("public/apple-touch-icon.png");

await sharp("public/images/brand/northeast-paving-favicon.webp")
  .resize(32, 32)
  .png()
  .toFile("public/favicon-32x32.png");

console.log("Generated: og-default.png, apple-touch-icon.png, favicon-32x32.png");

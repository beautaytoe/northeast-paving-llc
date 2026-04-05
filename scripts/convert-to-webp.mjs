import sharp from "sharp";
import { readdirSync, statSync, mkdirSync, existsSync } from "fs";
import { join, parse } from "path";

const TMPDIR = "scripts/tmp-images";
const OUTDIR = "public/images";

// Map source filenames to SEO-friendly names and folders
const imageMap = {
  // Brand
  "northeast-paving-waterford-new-london-ct-logo.png": { folder: "brand", name: "northeast-paving-logo", quality: 95 },
  "favicon-300x300.jpg": { folder: "brand", name: "northeast-paving-favicon", quality: 90 },
  "tarconite-logo.jpg": { folder: "brand", name: "tarconite-sealcoat-logo", quality: 85 },

  // Hero / promo
  "panel-01.jpg": { folder: "hero", name: "asphalt-paving-crew-southeastern-ct" },
  "how-does-your-driveway-look.png": { folder: "hero", name: "driveway-condition-check-ct", quality: 90 },
  "asphalt-maintenance-waterford-ct.jpg": { folder: "hero", name: "asphalt-maintenance-waterford-ct" },
  "why-choose-northeast-paving-of-waterford-ct.jpg": { folder: "hero", name: "why-choose-northeast-paving-ct" },

  // About
  "paving-company-waterford-ct.png": { folder: "about", name: "paving-company-waterford-ct-team" },
  "paving-company-new-london-ct.png": { folder: "about", name: "paving-company-new-london-ct-office" },
  "waterford-new-london-ct-paving-services.png": { folder: "about", name: "paving-services-southeastern-ct-overview" },

  // Gallery - Asphalt Paving
  "parking-lot-paving-11.jpg": { folder: "gallery", name: "commercial-parking-lot-paving-ct-01" },
  "driveway-paving-23.jpg": { folder: "gallery", name: "residential-driveway-paving-ct-01" },
  "parking-lot-paving-02.jpg": { folder: "gallery", name: "commercial-parking-lot-paving-ct-02" },
  "parking-lot-paving-10.jpg": { folder: "gallery", name: "commercial-parking-lot-paving-ct-03" },
  "sidewalk-paving-01.jpg": { folder: "gallery", name: "sidewalk-asphalt-paving-ct" },
  "driveway-paving-15.jpg": { folder: "gallery", name: "residential-driveway-paving-ct-02" },
  "driveway-paving-13.jpg": { folder: "gallery", name: "residential-driveway-paving-ct-03" },
  "driveway-paving-12.jpg": { folder: "gallery", name: "residential-driveway-paving-ct-04" },
  "driveway-paving-21.jpg": { folder: "gallery", name: "residential-driveway-paving-ct-05" },
  "road-paving-02.jpg": { folder: "gallery", name: "road-paving-southeastern-ct-01" },
  "parking-lot-paving-03.jpg": { folder: "gallery", name: "commercial-parking-lot-paving-ct-04" },
  "curb-installation-01.jpg": { folder: "gallery", name: "curb-installation-paving-ct" },
  "parking-lot-paving-12.jpg": { folder: "gallery", name: "commercial-parking-lot-paving-ct-05" },
  "driveway-paving-05.jpg": { folder: "gallery", name: "residential-driveway-paving-ct-06" },
  "driveway-paving-04.jpg": { folder: "gallery", name: "residential-driveway-paving-ct-07" },
  "driveway-paving-02.jpg": { folder: "gallery", name: "residential-driveway-paving-ct-08" },
  "road-paving-01.jpg": { folder: "gallery", name: "road-paving-southeastern-ct-02" },
  "parking-lot-paving-04.jpg": { folder: "gallery", name: "commercial-parking-lot-paving-ct-06" },
  "parking-lot-paving-13.jpg": { folder: "gallery", name: "commercial-parking-lot-paving-ct-07" },

  // Gallery - Sealcoating
  "parking-lot-seal-coating-01.jpg": { folder: "gallery", name: "parking-lot-sealcoating-ct-01" },
  "parking-lot-seal-coating-02.jpg": { folder: "gallery", name: "parking-lot-sealcoating-ct-02" },
  "parking-lot-seal-coating-03.jpg": { folder: "gallery", name: "parking-lot-sealcoating-ct-03" },
  "parking-lot-seal-coating-04.jpg": { folder: "gallery", name: "parking-lot-sealcoating-ct-04" },
  "parking-lot-seal-coating-05.jpg": { folder: "gallery", name: "parking-lot-sealcoating-ct-05" },
  "parking-lot-seal-coating-06.jpg": { folder: "gallery", name: "parking-lot-sealcoating-ct-06" },
  "parking-lot-seal-coating-07.jpg": { folder: "gallery", name: "parking-lot-sealcoating-ct-07" },
  "patching-01.jpg": { folder: "gallery", name: "asphalt-patching-repair-ct" },

  // Gallery - Grading/Excavation
  "excavation-05.jpg": { folder: "gallery", name: "excavation-site-work-ct-01" },
  "excavation-03.jpg": { folder: "gallery", name: "excavation-site-work-ct-02" },
  "road-work-excavation-base-installation-04.jpg": { folder: "gallery", name: "road-excavation-base-installation-ct" },
  "excavation-base-installation-01.jpg": { folder: "gallery", name: "excavation-base-installation-ct" },
  "excavation-08.jpg": { folder: "gallery", name: "excavation-site-work-ct-03" },
  "excavation-06.jpg": { folder: "gallery", name: "excavation-site-work-ct-04" },
  "base-installation-grading-03.jpg": { folder: "gallery", name: "base-installation-grading-ct-01" },
  "excavation-04.jpg": { folder: "gallery", name: "excavation-site-work-ct-05" },
  "drainage-installation-02.jpg": { folder: "gallery", name: "drainage-installation-ct-01" },
  "drainage-installation-01.jpg": { folder: "gallery", name: "drainage-installation-ct-02" },
  "base-installation-grading-06.jpg": { folder: "gallery", name: "base-installation-grading-ct-02" },
  "base-installation-grading-05.jpg": { folder: "gallery", name: "base-installation-grading-ct-03" },

  // Gallery - Trucking
  "trucking-hauling-fill-loom-back-filled-pool.jpg": { folder: "gallery", name: "material-delivery-trucking-ct-01" },
  "truck-edit.jpg": { folder: "gallery", name: "northeast-paving-delivery-truck-ct" },

  // Gallery - Gravel/Stone
  "base-installation-01.JPG": { folder: "gallery", name: "gravel-stone-base-installation-ct-01" },
  "base-installation-02.JPG": { folder: "gallery", name: "gravel-stone-base-installation-ct-02" },
  "base-installation-03.JPG": { folder: "gallery", name: "gravel-stone-base-installation-ct-03" },
  "base-installation-04.JPG": { folder: "gallery", name: "gravel-stone-base-installation-ct-04" },
  "base-installation-05.JPG": { folder: "gallery", name: "gravel-stone-base-installation-ct-05" },
};

async function convert() {
  const files = readdirSync(TMPDIR);
  let converted = 0;
  let skipped = 0;

  for (const file of files) {
    const mapping = imageMap[file];
    if (!mapping) {
      console.log(`  Skipping unmapped: ${file}`);
      skipped++;
      continue;
    }

    const outFolder = join(OUTDIR, mapping.folder);
    if (!existsSync(outFolder)) mkdirSync(outFolder, { recursive: true });

    const outPath = join(outFolder, `${mapping.name}.webp`);
    const inPath = join(TMPDIR, file);

    // Check file is valid (> 1KB)
    const stat = statSync(inPath);
    if (stat.size < 1024) {
      console.log(`  Skipping too small (${stat.size}B): ${file}`);
      skipped++;
      continue;
    }

    try {
      await sharp(inPath)
        .webp({ quality: mapping.quality || 80 })
        .resize({ width: 1920, height: 1080, fit: "inside", withoutEnlargement: true })
        .toFile(outPath);
      converted++;
      console.log(`  ✓ ${file} → ${mapping.folder}/${mapping.name}.webp`);
    } catch (err) {
      console.log(`  ✗ Failed: ${file} — ${err.message}`);
      skipped++;
    }
  }

  console.log(`\nDone: ${converted} converted, ${skipped} skipped.`);
}

convert();

#!/bin/bash
# Download all images from the live site
set -e
cd "$(dirname "$0")/.."
TMPDIR="scripts/tmp-images"
mkdir -p "$TMPDIR"

# Unique content images (not UI elements like search-btn, ajax_loader)
URLS=(
  # Homepage / hero
  "https://northeastpavingllc.com/wp-content/uploads/2015/03/panel-01.jpg"
  # Sidebar / promo images
  "https://northeastpavingllc.com/wp-content/uploads/2015/03/asphalt-maintenance-waterford-ct.jpg"
  "https://northeastpavingllc.com/wp-content/uploads/2015/03/why-choose-northeast-paving-of-waterford-ct.jpg"
  "https://northeastpavingllc.com/wp-content/themes/notheasthpaving/images/how-does-your-driveway-look.png"
  # About page
  "https://northeastpavingllc.com/wp-content/uploads/2015/02/paving-company-waterford-ct.png"
  "https://northeastpavingllc.com/wp-content/uploads/2015/02/paving-company-new-london-ct.png"
  "https://northeastpavingllc.com/wp-content/uploads/2015/02/waterford-new-london-ct-paving-services.png"
  # Brand
  "https://northeastpavingllc.com/wp-content/themes/notheasthpaving/images/northeast-paving-waterford-new-london-ct-logo.png"
  "https://northeastpavingllc.com/wp-content/uploads/2020/06/favicon-300x300.jpg"
  "https://northeastpavingllc.com/wp-content/uploads/2015/03/tarconite-logo.jpg"
  # Asphalt paving gallery (full-size)
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/parking-lot-paving-11.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/driveway-paving-23.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/parking-lot-paving-02.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/parking-lot-paving-10.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/sidewalk-paving-01.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/driveway-paving-15.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/driveway-paving-13.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/driveway-paving-12.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/driveway-paving-21.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/road-paving-02.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/parking-lot-paving-03.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/curb-installation-01.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/parking-lot-paving-12.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/driveway-paving-05.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/driveway-paving-04.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/driveway-paving-02.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/driveway-paving-22.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/road-paving-01.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/parking-lot-paving-04.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/asphalt-paving/parking-lot-paving-13.jpg"
  # Sealcoating gallery
  "https://northeastpavingllc.com/wp-content/gallery/complete-asphalt-maintenance/parking-lot-seal-coating-01.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/complete-asphalt-maintenance/parking-lot-seal-coating-02.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/complete-asphalt-maintenance/parking-lot-seal-coating-03.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/complete-asphalt-maintenance/parking-lot-seal-coating-04.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/complete-asphalt-maintenance/parking-lot-seal-coating-05.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/complete-asphalt-maintenance/parking-lot-seal-coating-06.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/complete-asphalt-maintenance/parking-lot-seal-coating-07.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/complete-asphalt-maintenance/patching-01.jpg"
  # Grading/excavation gallery
  "https://northeastpavingllc.com/wp-content/gallery/grading-excavation/excavation-05.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/grading-excavation/excavation-03.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/grading-excavation/road-work-excavation-base-installation-04.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/grading-excavation/road-work-excavation-base-installation-03.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/grading-excavation/excavation-base-installation-01.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/grading-excavation/excavation-08.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/grading-excavation/excavation-07.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/grading-excavation/excavation-06.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/grading-excavation/base-installation-grading-03.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/grading-excavation/excavation-04.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/grading-excavation/drainage-installation-02.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/grading-excavation/drainage-installation-01.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/grading-excavation/base-installation-grading-06.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/grading-excavation/base-installation-grading-05.jpg"
  # Trucking
  "https://northeastpavingllc.com/wp-content/gallery/material-delivery-trucking/trucking-hauling-fill-loom-back-filled-pool.jpg"
  "https://northeastpavingllc.com/wp-content/gallery/material-delivery-trucking/truck-edit.jpg"
  # Gravel/stone
  "https://northeastpavingllc.com/wp-content/gallery/gravel-stone-milling-installation/base-installation-01.JPG"
  "https://northeastpavingllc.com/wp-content/gallery/gravel-stone-milling-installation/base-installation-02.JPG"
  "https://northeastpavingllc.com/wp-content/gallery/gravel-stone-milling-installation/base-installation-03.JPG"
  "https://northeastpavingllc.com/wp-content/gallery/gravel-stone-milling-installation/base-installation-04.JPG"
  "https://northeastpavingllc.com/wp-content/gallery/gravel-stone-milling-installation/base-installation-05.JPG"
)

echo "Downloading ${#URLS[@]} images..."
for url in "${URLS[@]}"; do
  filename=$(basename "$url")
  if [ ! -f "$TMPDIR/$filename" ]; then
    echo "  Downloading: $filename"
    curl -sL -o "$TMPDIR/$filename" "$url" || echo "  FAILED: $url"
  else
    echo "  Exists: $filename"
  fi
done

echo ""
echo "Downloaded $(ls "$TMPDIR" | wc -l | tr -d ' ') files."
ls -la "$TMPDIR" | head -20

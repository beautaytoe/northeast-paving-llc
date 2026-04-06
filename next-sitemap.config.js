/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://northeastpavingllc.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Set higher priority for key pages
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path === "/services" || (path.startsWith("/services/") && path.split("/").length === 3)) {
      // Service hub and individual service pages (e.g. /services/asphalt-paving)
      priority = 0.9;
    } else if (path.startsWith("/service-areas/")) {
      // Location pages (e.g. /service-areas/asphalt-paving-groton-ct)
      priority = 0.8;
    } else if (path.startsWith("/services/") && path.split("/").length === 4) {
      // Service+city pages (e.g. /services/driveway-paving/new-london-ct)
      priority = 0.7;
    } else if (path.startsWith("/blog/") && path !== "/blog") {
      priority = 0.6;
      changefreq = "monthly";
    } else if (["/about", "/why-choose-us", "/contact", "/free-estimate", "/reviews", "/careers", "/gallery", "/blog", "/service-areas"].includes(path)) {
      // Utility pages
      priority = 0.5;
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};

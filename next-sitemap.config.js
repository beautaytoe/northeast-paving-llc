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
    } else if (path === "/free-estimate" || path === "/contact") {
      priority = 0.9;
    } else if (path.startsWith("/services/") && path !== "/services") {
      priority = 0.8;
    } else if (path === "/services") {
      priority = 0.8;
    } else if (path.startsWith("/service-areas/")) {
      priority = 0.7;
    } else if (path.startsWith("/blog/") && path !== "/blog") {
      priority = 0.6;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};

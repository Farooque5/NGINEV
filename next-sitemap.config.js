module.exports = {
  siteUrl: 'https://www.nginev.com', // Your website URL
  generateRobotsTxt: true, // Generate robots.txt
  changefreq: 'daily', // Change frequency for all pages
  priority: 0.7, // Default priority for all pages

  // Exclude specific paths from the sitemap
  exclude: ['/admin', '/login', '/signup'], // Example: paths you don't want to include

  // Generate robots.txt with custom settings
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.nginev.com/sitemap-0.xml', // If you have multiple sitemaps, you can add them here
    ],
    policies: [
      {
        userAgent: '*', // Apply to all user agents (crawlers)
        disallow: ['/private', '/restricted'], // Disallow crawling certain paths
      },
      {
        userAgent: 'Googlebot',
        allow: ['/'], // Allow Googlebot to crawl everything
      },
    ],
  },

  // Custom transformation for the URLs in the sitemap
  transform: async (config, { loc }) => {
    return {
      loc, // URL of the page
      priority: 0.7, // Default priority
      changefreq: 'daily', // Default change frequency
      lastmod: null, // Explicitly remove lastmod (date field)
    };
  },

  // Include all pages in the sitemap
  additionalPaths: async (config) => {
    return [
      { loc: '/' },
      { loc: '/software' },
      { loc: '/hardware' },
      { loc: '/marketing' },
      { loc: '/printing' },
      { loc: '/contact' },
      { loc: '/about' },
      // Add additional static or dynamic paths as required
    ];
  },

  // Sitemap output options
  sitemapSize: 5000, // Split sitemap into smaller files if more than 5000 URLs
};

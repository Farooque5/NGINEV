module.exports = {
  siteUrl: 'https://www.nginev.com', // Your website URL
  generateRobotsTxt: true, // Generate robots.txt
  changefreq: 'daily', // Change frequency for all pages (can be customized per page if needed)
  priority: 0.7, // Default priority for all pages (can be customized per page)
  
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
        disallow: ['/private', '/restricted'], // Example: disallow crawling certain paths
      },
      {
        userAgent: 'Googlebot',
        allow: ['/'], // Example: allow Googlebot to crawl everything
      },
    ],
  },

  // Custom transformation for the URLs in the sitemap
  transform: async (url, { pathname, query }) => {
    // Custom transformations based on the pathname or query
    if (pathname === '/blog') {
      return {
        loc: `${url}?sort=latest`, // Adding query parameters to certain pages, e.g., blog page
        priority: 0.8, // Custom priority
        changefreq: 'weekly', // Custom change frequency for blog
      };
    }
    return {
      loc: url, // Default behavior
      priority: 0.7, // Default priority
      changefreq: 'daily', // Default change frequency
    };
  },

  // Set up multiple languages if your website is multilingual (for SEO)
  i18n: {
    locales: ['en', 'fr', 'es'], // List of supported languages
    defaultLocale: 'en', // Default language
  },

  // Sitemap options for dynamic routes (e.g., product pages)
  dynamicRoutes: async () => {
    // Generate dynamic routes, e.g., for blog posts or product pages
    const dynamicPages = await getDynamicPagesFromDatabase(); // Example function to fetch dynamic URLs
    return dynamicPages.map(page => `/products/${page.id}`); // Return dynamic paths based on data
  },

  // Sitemap output options
  sitemapSize: 5000, // Split sitemap into smaller files if more than 5000 URLs
};

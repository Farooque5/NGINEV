// layout.js

import Head from 'next/head';
import Nav from '../components/navbar';
import Footer from '../components/footer';

export default function Layout({
  children,
  title = 'NGINEV - From Tech to Trends',
  description = 'NGINEV: Your trusted partner for custom software, hardware, marketing, and printing solutions. Empowering businesses worldwide.',
  keywords = 'NGINEV Business Solutions, Business Solutions, Tech Solutions, Custom Software Development, Software Development Services, IT Hardware Solutions, Business Support Services, Professional Tech Services, Tech Services Dhanbad, IT Solutions for Businesses, Enterprise Software Solutions, Digital Transformation Services, Cloud Solutions for Businesses, Innovative Business Solutions, End-to-End Technology Solutions, Software Development Company, Custom Software Solutions, Web and Mobile App Development, Cloud-based Software Development, AI Software Solutions, AI Development Services, IT Support and Maintenance Services, Enterprise Resource Planning (ERP) Software, Software as a Service (SaaS) Solutions, Business Software Solutions, IT Solutions for SMEs, Software Consultancy Services, Hardware Services, IT Hardware Solutions, Computer Hardware Services, IT Infrastructure Solutions, Hardware Maintenance Services, Networking Hardware Solutions, IT Equipment Support, Hardware Installation Services, Custom Hardware Solutions, Hardware Consultancy Services, Data Center Solutions, Marketing Services, Digital Marketing Agency, SEO Services, Social Media Marketing Services, Online Branding Services, Content Marketing Services, Digital Advertising Solutions, Branding and Advertising, Social Media Advertising, Influencer Marketing Solutions, PPC Marketing Campaigns, Website Traffic Growth Solutions, E-commerce Marketing Solutions, Conversion Rate Optimization, Marketing Automation Services, SEO Services, SEO Experts for Businesses, SEO Optimization Services, Local SEO Services Dhanbad, Digital Marketing Solutions, SEO and Content Marketing, Search Engine Marketing, Local Business SEO Dhanbad, SEO Services for E-commerce, Online Reputation Management Services, Link Building Services, Search Engine Optimization (SEO) Services, Social Media SEO Strategies, SEM and PPC Advertising Services, Printing Solutions, Professional Printing Services, Commercial Printing Services, Custom Printing Solutions, High-quality Printing Services, Offset Printing Services, Digital Printing Services, Business Printing Services, Printing and Packaging Solutions, Printing for Marketing Materials, Custom Business Stationery Printing, Large Format Printing Services, Professional Brochure Printing, Business Card Printing Solutions, Corporate Printing Solutions, Printing Services Dhanbad, Digital Marketing Dhanbad, Software and Hardware Solutions Dhanbad, SEO Services Dhanbad',
  image = '/images/nginev.png', // Default fallback image
  url = 'https://www.nginev.com/', // Default website URL
  author = 'NGINEV',
  robots = 'index, follow',
  twitterCard = 'summary_large_image',
  openGraphType = 'website',
  openGraphTitle = 'NGINEV - From Tech to Trends',
  openGraphDescription = 'NGINEV offers innovative software, hardware, marketing, and printing solutions to businesses globally.',
  openGraphImage = '/images/nginev.png',
  openGraphUrl = 'https://www.nginev.com/',
  additionalMeta = [],
  canonicalUrl = 'https://www.nginev.com/',
}) {
  return (
    <>
      <Head>
        {/* Dynamic Title */}
        <title>{title}</title>

        {/* Meta Tags for SEO */}
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="robots" content={robots} />
        <link rel="icon" href="/favicon.ico" />

        {/* Canonical Link */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content={openGraphTitle} />
        <meta property="og:description" content={openGraphDescription} />
        <meta property="og:image" content={openGraphImage} />
        <meta property="og:type" content={openGraphType} />
        <meta property="og:url" content={openGraphUrl} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={openGraphTitle} />
        <meta name="twitter:description" content={openGraphDescription} />
        <meta name="twitter:image" content={openGraphImage} />

        {/* Additional Meta Tags */}
        {additionalMeta && additionalMeta.map((tag, index) => (
          <meta key={index} name={tag.name} content={tag.content} />
        ))}
      </Head>

      {/* Page content */}
      <div>
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

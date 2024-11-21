// layout.js

import Head from 'next/head';
import Nav from '../components/navbar';
import Footer from '../components/footer';

export default function Layout({
  children,
  title = 'NGINEV - From Tech to Trends',
  description = 'NGINEV: Your trusted partner for custom software, hardware, marketing, and printing solutions. Empowering businesses worldwide.',
  keywords = 'software solutions, hardware solutions, marketing strategies, printing services, NGINEV, business solutions',
  image = '/images/nginev.png', // Default fallback image
  url = 'https://www.nginev.com', // Default website URL
  author = 'NGINEV',
  robots = 'index, follow',
  twitterCard = 'summary_large_image',
  openGraphType = 'website',
  openGraphTitle = 'NGINEV - From Tech to Trends',
  openGraphDescription = 'NGINEV offers innovative software, hardware, marketing, and printing solutions to businesses globally.',
  openGraphImage = '/images/nginev.png',
  openGraphUrl = 'https://www.nginev.com',
  additionalMeta = [],
  canonicalUrl = 'https://www.nginev.com',
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

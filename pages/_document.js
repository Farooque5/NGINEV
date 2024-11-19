import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head>
        {/* SEO and Performance Improvements */}
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="NGINEV offers software, hardware, marketing, and printing solutions tailored to empower businesses worldwide."
        />
        <meta
          name="keywords"
          content="business solutions, software development, hardware support, marketing strategies, printing services, NGINEV"
        />
        <meta name="author" content="NGINEV" />
        <meta name="robots" content="index, follow" />

        {/* Preconnect for External Resources */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://www.google.com" />
        
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="NGINEV | From Tech to Trends" />
        <meta
          property="og:description"
          content="NGINEV offers software, hardware, marketing, and printing solutions tailored to empower businesses worldwide."
        />
        <meta property="og:image" content="/images/nginev.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nginev.com" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NGINEV | From Tech to Trends" />
        <meta
          name="twitter:description"
          content="NGINEV offers software, hardware, marketing, and printing solutions tailored to empower businesses worldwide."
        />
        <meta name="twitter:image" content="/images/nginev.png" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.nginev.com",
              "name": "NGINEV",
              "description":
                "NGINEV offers software, hardware, marketing, and printing solutions tailored to empower businesses worldwide.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.nginev.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>
      
      {/* Main Content and Accessibility */}
      <body className="antialiased bg-gray-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

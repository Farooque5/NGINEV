// Import global CSS
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Global Metadata */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <title>NGINEV | From Tech to Trends</title>

        {/* Favicon Links */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
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

        {/* Preconnect for External Resources (Improves Performance) */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://www.google.com" />
      </Head>

      {/* Main App Component */}
      <main role="main">
        <Component {...pageProps} />
      </main>
    </>
  );
}

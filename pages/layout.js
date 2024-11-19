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
}) {
    const siteTitle = `${title}`;
    const canonicalUrl = url; // Canonical link to avoid duplicate content issues

    return (
        <>
            <Head>
                {/* Dynamic Title */}
                <title>{siteTitle}</title>

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                
                {/* Meta Tags for SEO */}
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content="NGINEV" />
                <meta name="robots" content="index, follow" />
                
                {/* Canonical Link */}
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph Meta Tags for Social Sharing */}
                <meta property="og:title" content={siteTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={siteTitle} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />

                {/* Structured Data for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "url": canonicalUrl,
                            "name": "NGINEV",
                            "description": description,
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": `${canonicalUrl}/search?q={search_term_string}`,
                                "query-input": "required name=search_term_string"
                            }
                        })
                    }}
                />

                {/* Language Attribute */}
                <html lang="en" />
            </Head>

            {/* Navigation */}
            <header>
                <Nav />
            </header>

            {/* Main Content Area */}
            <main role="main">
                {children}
            </main>

            {/* Footer */}
            <footer role="contentinfo">
                <Footer />
            </footer>
        </>
    );
}

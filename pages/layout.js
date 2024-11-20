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

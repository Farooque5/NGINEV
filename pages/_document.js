import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head>
        {/* SEO and Performance Improvements */}
        <meta charSet="UTF-8" />
        <meta
          name="title"
          content="NGINEV"
        />
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
      </Head>
      
      {/* Main Content and Accessibility */}
      <body className="antialiased bg-gray-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

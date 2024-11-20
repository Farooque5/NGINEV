// Import global CSS
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>

      {/* Main App Component */}
      <main role="main">
        <Component {...pageProps} />
      </main>
    </>
  );
}

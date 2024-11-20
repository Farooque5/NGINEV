// pages/about.js
import Layout from "./layout"; // Adjust the import path if necessary
import Nav from "../components/navbar"; // Import the Nav component if you have a navigation bar
import Footer from "../components/footer";
import CardSection from "../components/cardSection";
import InfoSecContent from "../components/infoSecContent";
import ImageCard from "../components/imageCards";
import Head from "next/head";

const AboutSectionData = [
  {
    title: "Our Vision",
    description:
      "At NGINEV, our vision is to empower businesses through innovative technology solutions. We strive to lead the way in software, hardware, marketing, and printing services.",
  },
  {
    title: "Our Team",
    description:
      "Our team comprises skilled professionals who are passionate about creating impactful solutions that drive business growth. From developers to marketers, we bring diverse expertise to the table.",
  },
  {
    title: "Our Commitment",
    description:
      "We are committed to providing reliable and sustainable solutions, ensuring our clients' success and long-term growth. We believe in innovation, collaboration, and customer-centricity.",
  },
];

export default function AboutPage() {
  return (
    <Layout>

      {/* Hero Section */}
      <section
        className="relative text-white flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/about us/aerial-view-business-team.jpg')", // Update the image path
        }}
      >
        {/* Overlay with opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Adjust opacity */}
        {/* Content Section */}
        <div className="relative text-center p-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-6xl mx-auto z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" id="about-title">
            NGINEV | Novawave Global Innovation and New Endeavors Ventures
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mx-auto px-4 md:px-6" aria-labelledby="about-title">
            At NGINEV, we believe in the transformative power of technology. Our mission is to empower businesses with cutting-edge software, hardware, and marketing solutions that drive progress and innovation. Learn about our journey, values, and the dedicated team behind our vision.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <InfoSecContent sections={AboutSectionData} aria-labelledby="info-section" />

      {/* Card Section */}
      <section className="bg-black text-white min-h-screen px-4 sm:px-8 py-12">
        <CardSection
          sectionTitle="Why Choose NGINEV?"
          sectionDescription="At NGINEV, we not only provide exceptional technology solutions but also ensure continuous support, flexible payment options, and a commitment to long-term business growth."
          cardsData={AboutSectionData} // Use the About section data for cards, adjust if necessary
          aria-labelledby="card-section"
        />
      </section>

      {/* Footer */}
      <Footer />
    </Layout>
  );
}

// pages/about.js
import Layout from "./layout";
import Nav from "../components/navbar";
import CardSection from "../components/cardSection";
import InfoSecContent from "../components/infoSecContent";
import ContactButton from "@/components/contactButton";
import HeroSection from "@/components/heroSection";


// team content
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

// Service content
const ServiceSectionData = [
  {
    title: "Software Solutions",
    description:
      "We provide custom software solutions that address unique business challenges. Our team crafts scalable, secure, and efficient software tailored to your needs, boosting productivity and innovation.",
  },
  {
    title: "Hardware Solutions",
    description:
      "We offer cutting-edge hardware solutions to enhance your business operations. From the latest technology to reliable hardware components, we ensure your systems run smoothly and efficiently.",
  },
  {
    title: "Marketing Strategies",
    description:
      "Our marketing strategies are designed to help businesses grow by reaching the right audience. We create data-driven campaigns, optimize digital presence, and ensure your brand stands out in a crowded market.",
  },
  {
    title: "Printing Services",
    description:
      "Our printing services provide high-quality printing solutions for all your business needs, from promotional materials to office stationery. We ensure your printed materials reflect your brand's quality and professionalism.",
  },
];

// Hero Section Content
const heroSectionProps = {
  title: "NGINEV | Novawave Global Innovation and New Endeavors Ventures",
  description:
    "At NGINEV, we believe in the transformative power of technology. Our mission is to empower businesses with cutting-edge software, hardware, and marketing solutions that drive progress and innovation. Learn about our journey, values, and the dedicated team behind our vision.",
  imagePlaceholder: "/images/about us/aerial-view-business-team.jpg",
};

export default function AboutPage() {
  return (
    <Layout
      title="About NGINEV | Empowering Businesses with Innovation"
      description="Learn about NGINEV's mission to provide cutting-edge software, hardware, marketing, and printing solutions. Discover our commitment to innovation."
      keywords="about NGINEV, business innovation, software services, hardware support, marketing solutions, printing services"
      image="/images/nginev.png"
      url="https://www.nginev.com/about"
      author="NGINEV"
      robots="index, follow"
      twitterCard="summary_large_image"
      openGraphType="website"
      openGraphTitle="About NGINEV | Empowering Businesses with Innovation"
      openGraphDescription="NGINEV offers cutting-edge software, hardware, marketing, and printing solutions to help businesses grow and innovate."
      openGraphImage="/images/nginev.png"
      openGraphUrl="https://www.nginev.com/about"
      additionalMeta={[
        {
          name: "keywords",
          content:
            "about NGINEV, business innovation, technology solutions, software services, hardware support, marketing, printing",
        },
      ]}
      canonicalUrl="https://www.nginev.com"
    >
       
      {/* Page Content */}
      <Nav aria-label="Primary navigation" />{" "}
      {/* Improved accessibility with ARIA label */}

      {/* Hero Section */}
      <HeroSection {...heroSectionProps} />

      {/* Card Team Section */}
      <section className="bg-black text-white min-h-screen px-4 sm:px-8 py-12">
        <CardSection
          sectionTitle="Why Choose NGINEV?"
          sectionDescription="At NGINEV, we not only provide exceptional technology solutions but also ensure continuous support, flexible payment options, and a commitment to long-term business growth."
          cardsData={AboutSectionData} // Use the About section data for cards, adjust if necessary
          aria-labelledby="card-team-section"
        />
      </section>
      {/* Card Service Section */}
      <section className="bg-black text-white min-h-screen px-4 sm:px-8 py-12">
        <CardSection
          sectionTitle="Our Services"
          sectionDescription="Explore NGINEV's comprehensive range of services, including custom software, hardware solutions, marketing strategies, and high-quality printing services."
          cardsData={ServiceSectionData} // Use the About section data for cards, adjust if necessary
          aria-labelledby="card-service-section"
        />
      </section>
      {/* Contact Button */}
      <ContactButton buttonText="Contact Us Now!" buttonLink="/contact" />
    </Layout>
  );
}

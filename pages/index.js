import React from "react";
import dynamic from "next/dynamic";
import Layout from "./layout";

// Dynamically import other components for performance optimization
const Navbar = dynamic(() => import("../components/navbar"));
const HeroSection = dynamic(() => import("../components/heroSection"));
const InfoSecContent = dynamic(() => import("../components/infoSecContent"));
const CardSection = dynamic(() => import("../components/cardSection"));
const Contact = dynamic(() => import("../components/contact"));
const Footer = dynamic(() => import("../components/footer"));

// Define reusable data for SEO and component structure
const softwareSolutionsData = [
  {
    title: "Innovative Custom Solutions",
    description:
      "At NGINEV, we tailor our technology solutions to fit your unique business needs. Whether it's software development, mobile apps, or IT infrastructure, we provide innovative solutions that enhance your efficiency and productivity.",
  },
  {
    title: "End-to-End Support",
    description:
      "From ideation to implementation, NGINEV offers full-cycle support. We help you with everything from design to deployment, ensuring that your business receives seamless and ongoing technical support.",
  },
  {
    title: "Scalability & Future-Proofing",
    description:
      "Our solutions are built to grow with your business. NGINEV ensures that your technology is scalable, adaptable, and ready to evolve with changing market demands, keeping you ahead of the curve.",
  },
  {
    title: "Proven Track Record",
    description:
      "With a solid history of successful projects, NGINEV has helped numerous businesses streamline their operations and achieve sustainable growth. Our commitment to excellence ensures that we deliver results you can count on.",
  },
];

// Define section data for the website layout
const sections = [
  {
    mainImages: ["/images/software/webpage.png"],
    title: "Tailored Software Solutions for a Digital World",
    description:
      "In today’s fast-paced digital landscape, having the right software solutions is crucial for success. At NGINEV, we specialize in developing custom software that aligns with your business goals. Embrace the digital transformation with us and watch your ideas come to life!",
    buttonText: "Explore software solutions",
    buttonLink: "/software",
    imageOnLeft: false,
  },
  {
    mainImages: ["/images/hardware/N.png"],
    title: "Cutting-Edge Hardware Solutions for Every Need",
    description:
      "The backbone of any successful tech initiative is reliable hardware. Let us help you build a solid foundation for your operations with our state-of-the-art hardware solutions tailored to your specific requirements.",
    buttonText: "Explore hardware solutions",
    buttonLink: "/hardware",
    imageOnLeft: true,
  },
  {
    mainImages: ["/images/marketing/Dark-Marketing.jpg"],
    title: "Comprehensive Marketing Solutions to Amplify Your Brand",
    description:
      "From digital campaigns to traditional advertising, NGINEV specializes in all forms of marketing to help you connect with your audience. Drive growth and engagement with strategies tailored to your brand's unique needs.",
    buttonText: "Explore marketing strategies",
    buttonLink: "/marketing",
    imageOnLeft: false,
  },
  {
    mainImages: ["/images/printing/print.png"],
    title: "High-Quality Printing Services for Every Need",
    description:
      "NGINEV provides a full spectrum of high-quality printing services, from business cards and branded bags to custom tapes and everything in between. With top-tier materials and meticulous attention to detail, our printing solutions enhance your brand's visibility and make a lasting impression.",
    buttonText: "Discover printing services",
    buttonLink: "/printing",
    imageOnLeft: true,
  },
];

// Define contact paragraph for Call-to-Action (CTA)
const contactParagraph =
  "Your success is our priority. We're here to help bring your ideas to life. Have a question or ready to get started? Reach out, and let’s make something amazing happen together!";

// Define HeroSection props
const heroSectionProps = {
  title: "NGINEV: Innovation Crafted for You",
  description:
    "At NGINEV, we turn technology into tools for your growth. Our custom software, hardware, design, and marketing solutions simplify and elevate your work. With us, you’re not just adopting tech—you’re gaining a partner dedicated to your success. Let’s bring your vision to life together.",
  videoSources: [
    { src: "/videos/world-1920.mp4", media: "(min-width: 1200px)" },
    { src: "/videos/world-720.mp4", media: "(min-width: 768px)" },
    { src: "/videos/world-565.mp4", media: "(max-width: 767px)" },
  ],
  imageSrc: "/images/world pic.png",
};

const Home = () => {
  return (
    <Layout
      title="NGINEV"
      description="NGINEV empowers businesses with innovative software, hardware, marketing, and printing solutions. Transform ideas into success with our expertise."
      keywords="NGINEV, Business Solutions, Tech Solutions, Software Development, Custom Software, Hardware Services, IT Hardware Solutions, Marketing Services, Digital Marketing, Printing Solutions, Professional Printing, SEO Services, Branding and Advertising, Cloud Solutions, AI Software, Computer Networking, Business Support, Tech Services Dhanbad, Printing Services Dhanbad, Digital Marketing Dhanbad,Software and Hardware Solutions Dhanbad"
      image="/images/nginev.png"
      url="https://www.nginev.com"
      author="NGINEV"
      robots="index, follow"
      twitterCard="summary_large_image"
      openGraphType="website"
      openGraphTitle="NGINEV | Home"
      openGraphDescription="Discover NGINEV's innovative solutions in software, hardware, marketing, and printing services."
      openGraphImage="/images/nginev.png"
      openGraphUrl="https://www.nginev.com"
      additionalMeta={[
        {
          name: "keywords",
          content: "business solutions, tech services, software, hardware, marketing, printing, NGINEV",
        },
      ]}
      canonicalUrl="https://www.nginev.com"
    >
      {/* Page Components */}
      <Navbar />
      <HeroSection {...heroSectionProps} />

      {/* Main Content Section */}
      <InfoSecContent sections={sections} />

      {/* Why Choose NGINEV Section */}
      <CardSection
        sectionTitle="Why Choose NGINEV as Your Business Partner?"
        sectionDescription="Discover the compelling reasons why businesses trust NGINEV for their technology solutions. We bring innovation, reliability, and expertise to every project, ensuring your business stays ahead in a competitive market."
        cardsData={softwareSolutionsData}
      />

      {/* Contact Section */}
      <Contact paragraph={contactParagraph} />
    </Layout>
  );
};

export default Home;

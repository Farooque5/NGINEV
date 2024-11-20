// pages/hardwareSolution.js
import Layout from "./layout";
import Nav from "../components/navbar";
import CardSection from "../components/cardSection";
import InfoSecContent from "../components/infoSecContent";
import ContactButton from "../components/contactButton";
import HeroSection from "@/components/heroSection";

const hardwareSolutionsData = [
  {
    title: "#1 Unmatched Performance and Reliability",
    description:
      "We offer hardware solutions built to withstand the demands of modern business operations. Whether it’s powerful servers or high-quality security systems, you can count on our products for lasting performance and reliability.",
  },
  {
    title: "#2 Tailored to Your Unique Needs",
    description:
      "Our hardware can be fully customized to suit your specific business requirements. Whether you're expanding your network, securing your premises, or upgrading your systems, we provide scalable solutions that grow with your business.",
  },
  {
    title: "#3 Hassle-Free Integration and Setup",
    description:
      "Our products are designed for easy integration into your existing infrastructure, ensuring a smooth installation process. With our expert setup services, you can start utilizing your hardware quickly and without complications.",
  },
  {
    title: "#4 Ongoing Support and Service",
    description:
      "We offer round-the-clock support for all hardware purchases, providing peace of mind and ensuring that your systems operate optimally. With regular maintenance and after-sales services, we ensure your hardware continues to meet your business needs.",
  },
];

const sections = [
  {
    mainImages: ["/images/hardware/computer/computer-home.jpg"],
    additionalImages: [
      "/images/hardware/computer/laptop3.png",
      "/images/hardware/computer/desktop.webp",
      "/images/hardware/computer/imac.jpg",
      "/images/hardware/computer/server.jpg",
    ],
    title: "Cutting-Edge Computers & Networking Solutions",
    description:
      "From powerful desktops and laptops to high-performance servers, we provide the ideal computing solutions for any business. Our networking products—routers, switches, and firewalls—ensure seamless connectivity and secure data flow across your organization.",
    buttonText: "Contact now for Computing & Networking",
    buttonLink: "/contact",
    imageOnLeft: true,
  },
  {
    mainImages: ["/images/hardware/security/cctv-home.jpg"],
    additionalImages: [
      "/images/hardware/security/cctv.webp",
      "/images/hardware/security/biometric.jpg",
      "/images/hardware/security/alarm.avif",
    ],
    title: "Reliable Security & POS Equipment",
    description:
      "Safeguard your business with our advanced security hardware, including CCTV cameras, access control systems, and alarm systems. We also offer robust point-of-sale systems, including terminals, barcode scanners, and receipt printers for smooth transaction processes.",
    buttonText: "Contact us for Security & POS Solutions",
    buttonLink: "/contact",
    imageOnLeft: false,
  },
  {
    mainImages: ["/images/hardware/storage/projector.jpg"],
    additionalImages: [
      "/images/hardware/storage/camcoders.jpeg",
      "/images/hardware/storage/speaker.jpeg",
      "/images/hardware/storage/project.avif",
    ],
    title: "Comprehensive Storage & AV Equipment",
    description:
      "Whether you need fast and reliable storage solutions or high-quality audio/visual setups, we’ve got you covered. From HDDs, SSDs, and NAS devices to home theater systems and conference equipment, we provide versatile solutions for all your needs.",
    buttonText: "Contact us for Storage & AV Solutions",
    buttonLink: "/contact",
    imageOnLeft: true,
  },
];

// Define HeroSection props
const heroSectionProps = {
  title: "NGINEV: Innovation Crafted for You",
  description:
    "At NGINEV, we turn technology into tools for your growth. Our custom software, hardware, design, and marketing solutions simplify and elevate your work. With us, you’re not just adopting tech—you’re gaining a partner dedicated to your success. Let’s bring your vision to life together.",
  imagePlaceholder: "/images/hardware/hardware-home.jpg",
};

export default function Hardware() {
  return (
    <Layout
      title="Hardware Solutions | NGINEV"
      description="Discover NGINEV's hardware solutions, from IT infrastructure to custom devices and technical support, tailored to empower your business."
      keywords="hardware solutions, IT infrastructure, custom hardware, technical support, enterprise technology, NGINEV hardware services"
      image="/images/nginev.png"
      url="https://www.nginev.com/hardware"
      author="NGINEV"
      robots="index, follow"
      twitterCard="summary_large_image"
      openGraphType="website"
      openGraphTitle="Hardware Solutions | NGINEV"
      openGraphDescription="Explore NGINEV's advanced hardware solutions, including IT infrastructure and custom technology devices, for seamless business operations."
      openGraphImage="/images/nginev.png"
      openGraphUrl="https://www.nginev.com/hardware"
      additionalMeta={[
        {
          name: "keywords",
          content:
            "hardware solutions, IT infrastructure, technology devices, custom hardware, enterprise support, NGINEV services",
        },
      ]}
      canonicalUrl="https://www.nginev.com"
    >
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <HeroSection {...heroSectionProps} />

      {/* Info Sections */}
      <InfoSecContent sections={sections} />

      {/* Card Section */}
      <CardSection
        sectionTitle="Why Choose Our Hardware Solutions"
        sectionDescription="Our hardware solutions are designed to optimize your business operations and enhance productivity. With top-tier products, reliable support, and tailored solutions, we ensure you have everything you need to succeed in the digital age."
        cardsData={hardwareSolutionsData}
      />

      {/* Contact Button */}
      <ContactButton buttonText="Contact Us Now!" buttonLink="/contact" />
    </Layout>
  );
}

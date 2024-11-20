// pages/printingSolution.js
import Head from "next/head";
import Layout from "./layout";
import CardSection from "../components/cardSection";
import InfoSecContent from "../components/infoSecContent";
import ContactButton from "../components/contactButton";
import HeroSection from "@/components/heroSection";

const printingSolutionsData = [
  {
    title: "#1 High-Quality Print Materials",
    description:
      "We use only the best materials to produce high-quality prints, ensuring that every product, from business cards to large-format banners, delivers exceptional clarity, color accuracy, and durability.",
  },
  {
    title: "#2 Custom Printing Solutions",
    description:
      "NGINEV offers tailored printing solutions to match your exact needs. Whether you require custom branding, unique sizes, or specialized finishes, we work with you to bring your vision to life.",
  },
  {
    title: "#3 Fast Turnaround Times",
    description:
      "Time is money, and we understand the urgency of getting your printed materials quickly. With our streamlined printing process, we offer quick turnaround times without compromising on quality.",
  },
  {
    title: "#4 Affordable and Cost-Effective",
    description:
      "Our competitive pricing makes professional printing accessible to businesses of all sizes. We provide affordable options that help you achieve great results within your budget, ensuring excellent value for your investment.",
  },
];

const sections = [
  {
    mainImages: ["/images/printing/custom/first.jpg!sw800"],
    additionalImages: [
      "/images/printing/custom/tshirt front.png",
      "/images/printing/custom/tshirt back.png",
      "/images/printing/custom/tshirt.png",
      "/images/printing/custom/cup.png",
      "/images/printing/custom/bag.avif",
      "/images/printing/custom/bag2.avif",
      "/images/printing/custom/bottle.png",
    ],
    title: "High-Quality Custom Printing for Every Need",
    description:
      "At NGINEV, we offer a wide range of custom printing solutions to bring your ideas to life. Whether you're looking for personalized business stationery, promotional materials, or custom merchandise, our high-quality printing ensures vibrant colors and sharp details. Let us help you make a lasting impression.",
    buttonText: "Get Custom Printing",
    buttonLink: "/contactus",
    imageOnLeft: true,
  },
  {
    mainImages: ["/images/printing/professional/second.jpg"],
    additionalImages: [
      "/images/printing/professional/broucher.jpg",
      "/images/printing/professional/food broucher.jpg",
      "/images/printing/professional/card.jpg",
      "/images/printing/professional/card2.jpg",
      "/images/printing/professional/broucher2.png",
    ],
    title: "Professional Prints for Your Business Growth",
    description:
      "From brochures and flyers to banners and posters, NGINEV offers professional printing services to elevate your business marketing. Our team ensures that every piece meets your exact specifications, helping you reach your audience effectively and drive results.",
    buttonText: "Order Marketing Prints",
    buttonLink: "/contactus",
    imageOnLeft: false,
  },
  {
    mainImages: ["/images/printing/premium/third home.png"],
    additionalImages: [
      "/images/printing/premium/badge.jpg",
      "/images/printing/premium/package.avif",
      "/images/printing/premium/package 2.avif",
      "/images/printing/premium/package 3.avif",
      "/images/printing/premium/set.png",
      "/images/printing/premium/set 2.jpg",
      "/images/printing/premium/set 3.avif",
      "/images/printing/premium/set 4.avif",
    ],
    title: "Premium Packaging and Label Printing",
    description:
      "NGINEV provides custom packaging and label printing solutions designed to enhance your product’s presentation. Whether you need product labels, packaging for retail, or unique designs, we deliver packaging that stands out and aligns with your brand identity.",
    buttonText: "Explore Packaging Solutions",
    buttonLink: "/contactus",
    imageOnLeft: true,
  },
];

const heroSectionProps = {
  title: "Why Choose NGINEV for Your Printing Needs?",
  description:
    "NGINEV offers high-quality printing services tailored to your business needs, with fast turnaround times, premium materials, and customizable options to enhance your brand’s visibility and impact.",
  imagePlaceholder: "/images/printing/print home.jpg",
};

export default function Printing() {
  return (
    <Layout
      title="Printing Services | NGINEV"
      description="Discover NGINEV's premium printing services, offering customized designs, packaging, labels, and promotional materials to enhance your brand presence."
      keywords="printing services, custom printing, packaging design, labels printing, promotional materials, marketing prints, business branding"
      image="/images/nginev.png"
      url="https://www.nginev.com/printing"
      author="NGINEV"
      robots="index, follow"
      twitterCard="summary_large_image"
      openGraphType="website"
      openGraphTitle="Printing Services | NGINEV"
      openGraphDescription="Elevate your brand with NGINEV's high-quality printing solutions, from customized packaging and labels to creative promotional materials."
      openGraphImage="/images/nginev.png"
      openGraphUrl="https://www.nginev.com/printing"
      additionalMeta={[
        {
          name: "keywords",
          content:
            "custom printing, business branding, packaging solutions, promotional prints, marketing materials, label printing, NGINEV services",
        },
      ]}
      canonicalUrl="https://www.nginev.com"
    >

      {/* Hero Section */}
      <HeroSection {...heroSectionProps} />

      {/* Info Section */}
      <InfoSecContent sections={sections} />

      {/* Card Section */}
      <section className="bg-black text-white min-h-screen px-4 sm:px-8 py-12">
        <CardSection
          sectionTitle="Why Choose Our Printing Solutions"
          sectionDescription="Our printing solutions are designed to make your brand stand out with superior quality, vibrant colors, and customizable designs. Let NGINEV handle your printing needs, so you can focus on growing your business."
          cardsData={printingSolutionsData}
        />
      </section>

      {/* Contact Button */}
      <ContactButton buttonText="Contact Us Now!" buttonLink="/contact" />
    </Layout>
  );
}

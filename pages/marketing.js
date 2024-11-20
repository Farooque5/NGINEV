// pages/marketing.js
import Head from "next/head";
import Layout from "./layout";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import CardSection from "../components/cardSection";
import InfoSecContent from "../components/infoSecContent";
import ContactButton from "../components/contactButton";
import HeroSection from "@/components/heroSection";

const marketingSolutionsData = [
  {
    title: "#1 Get Noticed and Stand Out",
    description:
      "With our tailored marketing strategies, we increase your brand's visibility through SEO, paid campaigns, and content marketing. We ensure your brand reaches the right audience and stands out in a competitive market.",
  },
  {
    title: "#2 Reach Your Ideal Customers with Precision",
    description:
      "We use data-driven marketing strategies to target your ideal customers. By analyzing audience behavior, we create customized campaigns that drive engagement, build trust, and convert leads into loyal customers.",
  },
  {
    title: "#3 Track, Analyze, and Optimize Your Campaigns",
    description:
      "We provide in-depth analytics and reports that give you complete transparency. By tracking key metrics, we continuously optimize marketing campaigns for maximum effectiveness and smarter decision-making.",
  },
  {
    title: "#4 Maximize Your Marketing Budget",
    description:
      "We offer cost-effective marketing solutions that maximize your ROI. Whether you're a startup or an established business, we help you make the most of your marketing budget to ensure long-term growth and success.",
  },
];

const sections = [
  {
    mainImages: ["/images/marketing/first-section.png"],
    title: "Boost Your Brand with Tailored Digital Strategies",
    description:
      "Embrace the power of digital marketing with NGINEV. From SEO and social media marketing to PPC and email campaigns, our experts create strategies that drive traffic, increase engagement, and convert leads into loyal customers. We focus on measurable results, ensuring your brand stays relevant in the competitive digital world.",
    buttonText: "Start Your Digital Journey",
    buttonLink: "/contactus",
    imageOnLeft: true,
  },
  {
    mainImages: ["/images/marketing/second-section.webp"],
    title: "Strengthen Your Brand with Classic Marketing Techniques",
    description:
      "NGINEV blends the best of traditional marketing with modern strategies to provide a well-rounded approach. Whether it’s print, TV, radio, or outdoor advertising, our proven tactics build lasting brand recognition and expand your reach to a wider audience.",
    buttonText: "Explore Traditional Marketing",
    buttonLink: "/contactus",
    imageOnLeft: false,
  },
  {
    mainImages: ["/images/marketing/third-section.jpg"],
    title: "Engage Your Audience with Compelling Content",
    description:
      "Content is king, and NGINEV’s content creation experts craft engaging, informative, and shareable content that resonates with your target audience. From blogs and videos to infographics and whitepapers, we ensure your message is seen and heard, creating strong brand affinity.",
    buttonText: "Enhance Your Content Strategy",
    buttonLink: "/contactus",
    imageOnLeft: true,
  },
];

const heroSectionProps = {
    title: "Elevate Your Brand with NGINEV’s Marketing Solutions",
    description:
      "At NGINEV, we specialize in transforming brands through cutting-edge marketing strategies. From digital campaigns to traditional advertising, our tailored solutions help businesses grow, engage their target audience, and drive long-term success. Let us take your marketing to the next level with results-driven strategies designed to make your brand stand out.</p>",
    imageSrc: '/images/marketing/marketing-home.jpg',
  };

export default function Marketing() {
  return (
    <Layout
      title="Marketing Solutions | NGINEV"
      description="Elevate your brand with NGINEV's digital marketing, SEO, social media management, and branding solutions tailored to your business."
      keywords="digital marketing, SEO strategies, social media management, branding, online advertising, marketing services, business growth"
      image="/images/nginev.png"
      url="https://www.nginev.com/marketing"
    >
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.nginev.com/marketing" />
        <meta property="og:title" content="Marketing Solutions | NGINEV" />
        <meta property="og:description" content="Elevate your brand with NGINEV's marketing strategies" />
        <meta property="og:image" content="/images/nginev.png" />
        <meta property="og:url" content="https://www.nginev.com/marketing" />
      </Head>

      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <HeroSection {...heroSectionProps} />

      {/* Info Section */}
      <InfoSecContent sections={sections} />

      {/* Card Section */}
      <section className="bg-black text-white min-h-screen px-4 sm:px-8 py-12">
        <CardSection
          sectionTitle="Unlock the Power of Exceptional Marketing"
          sectionDescription="With our innovative marketing solutions, your brand will thrive in a competitive world. We help you connect with your audience, drive growth, and build lasting relationships, all while delivering measurable results that elevate your business to new heights."
          cardsData={marketingSolutionsData}
        />
      </section>

      {/* Contact Button */}
      <ContactButton buttonText="Contact Us Now!" buttonLink="/contactus" />

      {/* Footer */}
      <Footer />
    </Layout>
  );
}

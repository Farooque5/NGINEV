import React from "react";
import dynamic from "next/dynamic";
import Layout from "./layout";

// Dynamically import other components for performance optimization
const Navbar = dynamic(() => import("../components/navbar"));
// const HeroSection = /));
// const HeroSection = dynamic(() => import("../components/heroSection"));
const InfoSecContent = dynamic(() => import("../components/infoSecContent"));
const CardSection = dynamic(() => import("../components/cardSection"));
const Contact = dynamic(() => import("../components/contact"));
const Footer = dynamic(() => import("../components/footer"));
const NewYearHeroSection = dynamic(() => import("../components/newThemeHeroSection"));
// const HeroSection = dynamic(() => import("../components/newYearHeroSection"));
// const Globe = dynamic(() => import("../components/3dglobe"));




  const citiesList = [
    { city: "Sydney", country: "Australia", timeZone: "Australia/Sydney" },
    { city: "Tokyo", country: "Japan", timeZone: "Asia/Tokyo" },
    { city: "Moscow", country: "Russia", timeZone: "Europe/Moscow" },
    { city: "London", country: "UK", timeZone: "Europe/London" },
    { city: "New York", country: "USA", timeZone: "America/New_York" },
  ]; 
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
      keywords="NGINEV Business Solutions, Business Solutions, Tech Solutions, Custom Software Development, Software Development Services, IT Hardware Solutions, Business Support Services, Professional Tech Services, Tech Services Dhanbad, IT Solutions for Businesses, Enterprise Software Solutions, Digital Transformation Services, Cloud Solutions for Businesses, Innovative Business Solutions, End-to-End Technology Solutions, Software Development Company, Custom Software Solutions, Web and Mobile App Development, Cloud-based Software Development, AI Software Solutions, AI Development Services, IT Support and Maintenance Services, Enterprise Resource Planning (ERP) Software, Software as a Service (SaaS) Solutions, Business Software Solutions, IT Solutions for SMEs, Software Consultancy Services, Hardware Services, IT Hardware Solutions, Computer Hardware Services, IT Infrastructure Solutions, Hardware Maintenance Services, Networking Hardware Solutions, IT Equipment Support, Hardware Installation Services, Custom Hardware Solutions, Hardware Consultancy Services, Data Center Solutions, Marketing Services, Digital Marketing Agency, SEO Services, Social Media Marketing Services, Online Branding Services, Content Marketing Services, Digital Advertising Solutions, Branding and Advertising, Social Media Advertising, Influencer Marketing Solutions, PPC Marketing Campaigns, Website Traffic Growth Solutions, E-commerce Marketing Solutions, Conversion Rate Optimization, Marketing Automation Services, SEO Services, SEO Experts for Businesses, SEO Optimization Services, Local SEO Services Dhanbad, Digital Marketing Solutions, SEO and Content Marketing, Search Engine Marketing, Local Business SEO Dhanbad, SEO Services for E-commerce, Online Reputation Management Services, Link Building Services, Search Engine Optimization (SEO) Services, Social Media SEO Strategies
SEM and PPC Advertising Services, Printing Solutions, Professional Printing Services, Commercial Printing Services, Custom Printing Solutions, High-quality Printing Services, Offset Printing Services, Digital Printing Services, Business Printing Services, Printing and Packaging Solutions, Printing for Marketing Materials, Custom Business Stationery Printing, Large Format Printing Services, Professional Brochure Printing, Business Card Printing Solutions, Corporate Printing Solutions, Printing Services Dhanbad, Digital Marketing Dhanbad, Software and Hardware Solutions Dhanbad, SEO Services Dhanbad, Tech Services Dhanbad, Business Solutions Dhanbad, IT Services Dhanbad, Custom Software Dhanbad, IT Hardware Solutions Dhanbad, Marketing Services Dhanbad, AI Software Development, Cloud Software Solutions, Custom Mobile App Development, Blockchain Software Solutions, IT Infrastructure Management, Networking Solutions for Business, Business Automation Solutions, Virtualization Solutions, Custom Branding Services, Print Marketing Solutions, Global Business Solutions, Digital Innovation Solutions, Scalable Software Solutions, Business Automation Services, Customized Marketing Plans, Global IT Services, Enterprise Digital Transformation, Full-Service Printing Solutions, New Year Countdown, New Year 2024 Countdown, Countdown to New Year, New Year Party Countdown, Countdown Timer for New Year, Best New Year Countdown Event, Live New Year Countdown, Celebrate New Year 2024, Countdown to 2024, New Year's Eve Countdown, Live Stream New Year Countdown, New Year 2024 Celebration, Watch New Year Countdown Online, New Year Eve Countdown Timer, Global New Year Countdown, Virtual New Year Countdown Party, New Year Countdown with Friends, Countdown to New Year’s Party, New Year Countdown Dhanbad, New Year's Eve Celebration Dhanbad, New Year Party Dhanbad, Dhanbad New Year Countdown, Countdown Party in Dhanbad, Celebrate New Year in Dhanbad, New Year 2024 Dhanbad Events, Live New Year Countdown Dhanbad"
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
      canonicalUrl="https://www.nginev.com/"
    >
      {/* Page Components */}
      <Navbar />
      {/* <HeroSection
  videoSources={heroSectionProps.videoSources}
  imageSrc={heroSectionProps.imageSrc}
  title={heroSectionProps.title}
  description={heroSectionProps.description}
/> */}
      {/* <Globe /> */}
      
      {/* <newYearHeroSection citiesList={citiesList} /> */}
      <NewYearHeroSection videoSources={heroSectionProps.videoSources}
  imageSrc={heroSectionProps.imageSrc}
  title={heroSectionProps.title}
  description={heroSectionProps.description}/>

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

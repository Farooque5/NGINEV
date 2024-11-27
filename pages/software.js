import Nav from '../components/navbar';
import CardSection from '../components/cardSection';
import InfoSecContent from '../components/infoSecContent';
import ContactButton from '../components/contactButton';
import Layout from './layout';

import HeroSection from '@/components/heroSection';

// Data for the Highlights Section
const softwareSolutionsData = [
  {
    title: "Affordable Solutions with Flexible Plans",
    description:
      "Access top-tier software and tech solutions without financial strain. Our EMI payment options help you start your digital transformation journey without compromising cash flow.",
  },
  {
    title: "24/7 Management and Reliable Support",
    description:
      "Beyond project delivery, we provide 24/7 management and support to keep your software and systems running smoothly. Focus on growth without tech interruptions.",
  },
  {
    title: "Tailored Solutions for Your Business",
    description:
      "Whether you're starting or scaling, we craft customized solutions to fit your goals and grow with your business.",
  },
  {
    title: "End-to-End IT Solutions for All Needs",
    description:
      "From software and app development to hardware and digital marketing, NGINEV is your one-stop tech partner. We offer comprehensive services for lasting success.",
  },
];

// Data for the Info Section
const sections = [
  {
    mainImages: ['/images/software/software/software-home.png'],
    additionalImages: [
      '/images/software/software/soft 1.png',
      '/images/software/software/soft 2.png',
      '/images/software/software/soft 3.png',
      '/images/software/software/soft 4.png',
      '/images/software/software/soft 5.png',
      '/images/software/software/soft 6.png',
      '/images/software/software/soft 7.png',
      '/images/software/software/soft 8.png',
    ],
    title: 'Comprehensive Software Solutions from Concept to Enterprise',
    description:
      "At NGINEV, we deliver end-to-end software solutions tailored to your business needs. From innovative startups to established enterprises, our solutions drive growth and digital transformation.",
    buttonText: 'Contact Now for Software Solutions',
    buttonLink: '/contact',
    imageOnLeft: true,
  },
  {
    mainImages: ['/images/software/apps/apps-home.webp'],
    additionalImages: [
      '/images/software/apps/apps 1.png',
      '/images/software/apps/apps 2.avif',
      '/images/software/apps/apps 3.jpg',
      '/images/software/apps/apps 4.png',
      '/images/software/apps/apps 5.png',
      '/images/software/apps/apps 6.png',
      '/images/software/apps/apps 7.jpg',
      '/images/software/apps/apps 8.png',
    ],
    title: 'Tailored App Solutions for Every Stage of Development',
    description:
      "We specialize in building apps that cater to your unique needs. Whether you're starting from scratch or enhancing an existing app, we ensure they align with your business goals.",
    buttonText: 'Contact Us for App Solutions',
    buttonLink: '/contact',
    imageOnLeft: false,
  },
  {
    mainImages: ['/images/software/website/website-home.png'],
    additionalImages: [
      '/images/software/website/web 1.png',
      '/images/software/website/web 2.webp',
      '/images/software/website/web 3.avif',
      '/images/software/website/web 4.png',
      '/images/software/website/web 5.png',
      '/images/software/website/web 6.png',
      '/images/software/website/web 7.webp',
      '/images/software/website/web 8.webp',
      '/images/software/website/web 9.png',
      '/images/software/website/web 10.png',
      '/images/software/website/web 11.avif',
    ],
    title: 'Custom Websites for Every Purpose and Platform',
    description:
      "Whether building your first website or scaling an established one, NGINEV ensures seamless performance and tailored designs for your business.",
    buttonText: 'Contact Us for Website Solutions',
    buttonLink: '/contact',
    imageOnLeft: true,
  },
];

// Hero Section Content
const heroSectionProps = {
    title: "Innovative Software Solutions for Every Business",
    description:
      "Unlock your business potential with NGINEV’s tailored software solutions. We create innovative, scalable, and efficient technologies to streamline your operations and drive success. From development to support, we’re here to ensure your digital journey is seamless and impactful.",
    imagePlaceholder: '/images/software/software-code.avif',
  };

export default function Software() {
  return (
    <Layout
      title="Software Solutions | NGINEV"
      description="Empower your business with NGINEV's cutting-edge software solutions tailored for growth."
      keywords="software, custom software, web development, NGINEV software solutions"
      image="/images/nginev.png"
      url="https://www.nginev.com/software"
      author="NGINEV"
      robots="index, follow"
      twitterCard="summary_large_image"
      openGraphType="website"
      openGraphTitle="Software Solutions | NGINEV"
      openGraphDescription="NGINEV offers innovative and scalable software solutions designed to meet your business needs and drive growth."
      openGraphImage="/images/nginev.png"
      openGraphUrl="https://www.nginev.com/software"
      additionalMeta={[
        {
          name: "keywords",
          content: "custom software, NGINEV, software solutions, web development, enterprise applications",
        },
      ]}
      canonicalUrl="https://www.nginev.com/software"
    >
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <HeroSection {...heroSectionProps} />

      {/* Info Section */}
      <InfoSecContent sections={sections} />

      {/* Highlights Section */}
      <CardSection 
      sectionTitle='Why Choose NGINEV for Software Solutions?'
      sectionDescription='Experience the NGINEV advantage with our affordable, tailored, and comprehensive software solutions. From flexible payment options to 24/7 support, we ensure your business thrives with innovative and reliable technology.'
      cardsData={softwareSolutionsData} />

      {/* contact button */}
      <ContactButton buttonText="Contact Us Now!" buttonLink="/contact" />
    </Layout>
  );
}

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
    buttonLink: '/contactus',
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
    buttonLink: '/contactus',
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
    buttonLink: '/contactus',
    imageOnLeft: true,
  },
];

const heroSectionProps = {
    title: "Software Solutions",
    description:
      "Tailored software solutions for your business growth and success.",
    imageSrc: '/images/software/software-code.avif',
  };

export default function SoftwareSolution() {
  return (
    <Layout>
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <HeroSection {...heroSectionProps} />

      {/* Info Section */}
      <InfoSecContent sections={sections} />

      {/* Highlights Section */}
      <CardSection data={softwareSolutionsData} />
    </Layout>
  );
}

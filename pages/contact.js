// ContactPage.js 
import Contact from "../components/contact"; // Adjust the import path if necessary
import Nav from "../components/navbar"; // Import the Nav component if you have a navigation bar
import JoinUs from "../components/job";
import Layout from "./layout";
import Head from "next/head";

const ContactPage = () => {
  const contactParagraph =
    "We’re here to be more than just a service – we’re your partners in making your vision a reality. Every message and question matters because your success is our inspiration. Reach out to us, and let’s create something amazing together!";

  return (
    <Layout
      title="Contact NGINEV | Let’s Collaborate"
      description="Get in touch with NGINEV for software, hardware, marketing, and printing solutions. We’re here to bring your vision to life."
      keywords="contact NGINEV, software inquiries, hardware solutions contact, marketing consultation, printing services, business collaboration"
      image="/images/nginev.png"
      url="https://www.nginev.com/contactus"
    >
      <Head>
        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Contact NGINEV for all your business needs. We offer software, hardware, marketing, and printing solutions to elevate your brand." />
        <meta property="og:title" content="Contact NGINEV | Let’s Collaborate" />
        <meta property="og:description" content="Reach out to NGINEV for personalized software, hardware, marketing, and printing services tailored to your business." />
        <meta property="og:image" content="/images/nginev.png" />
        <meta property="og:url" content="https://www.nginev.com/contactus" />
        <meta name="keywords" content="contact, NGINEV, collaboration, software, hardware, marketing, printing, business inquiries" />
      </Head>

      {/* Page Content */}
      <Nav aria-label="Primary navigation" /> {/* Improved accessibility by providing ARIA label */}

      {/* Contact Section */}
      <section className="px-4 sm:px-8 py-12">
        <Contact paragraph={contactParagraph} aria-labelledby="contact-section" />
      </section>

      {/* Join Us Section */}
      <section className="bg-gray-100 px-4 sm:px-8 py-12">
        <JoinUs
          title="Join Us for New Opportunities"
          description="Are you passionate about what we do? Do you have a great project or idea? We'd love to hear from you! Fill out the form below to get in touch."
          aria-labelledby="join-us-section"
        />
      </section>
    </Layout>
  );
};

export default ContactPage;

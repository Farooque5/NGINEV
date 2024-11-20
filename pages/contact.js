// ContactPage.js 
import Contact from "../components/contact"; 
import Nav from "../components/navbar"; 
import JoinUs from "../components/job";
import Layout from "./layout";

export default function ContactPage() {
  const contactParagraph =
    "We’re here to be more than just a service – we’re your partners in making your vision a reality. Every message and question matters because your success is our inspiration. Reach out to us, and let’s create something amazing together!";

  return (
    <Layout
      title="Contact NGINEV | Let’s Collaborate"
      description="Get in touch with NGINEV for software, hardware, marketing, and printing solutions. We’re here to bring your vision to life."
      keywords="contact NGINEV, software inquiries, hardware solutions contact, marketing consultation, printing services, business collaboration"
      image="/images/nginev.png"
      url="https://www.nginev.com/contact"
      author="NGINEV"
      robots="index, follow"
      twitterCard="summary_large_image"
      openGraphType="website"
      openGraphTitle="Contact NGINEV | Let’s Collaborate"
      openGraphDescription="Reach out to NGINEV for personalized software, hardware, marketing, and printing services tailored to your business."
      openGraphImage="/images/nginev.png"
      openGraphUrl="https://www.nginev.com/contact"
      additionalMeta={[
        {
          name: "keywords",
          content:
            "contact, NGINEV, collaboration, software, hardware, marketing, printing, business inquiries",
        },
      ]}
      canonicalUrl="https://www.nginev.com"
    >

      {/* Page Content */}
      <Nav aria-label="Primary navigation" /> {/* Improved accessibility by providing ARIA label */}

      {/* Contact Section */}
      <section className="px-4 sm:px-8 py-12">
        <Contact paragraph={contactParagraph} aria-labelledby="contact-section" />
      </section>

      {/* Join Us Section */}
      <section className="bg-black px-4 sm:px-8 py-12">
        <JoinUs
          title="Join Us for New Opportunities"
          description="Are you passionate about what we do? Do you have a great project or idea? We'd love to hear from you! Fill out the form below to get in touch."
          aria-labelledby="join-us-section"
        />
      </section>
    </Layout>
  );
};


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
    <Layout>

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

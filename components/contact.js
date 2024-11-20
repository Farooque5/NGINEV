import { useState } from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = ({ paragraph }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',  // New phone field
    query: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', query: '' });
  };

  return (
    <section
      className="flex flex-col items-center min-h-screen bg-black text-gray-300 px-6 py-12"
      aria-labelledby="contact-us"
    >
      <div className="text-center mb-16">
        <h2 id="contact-us" className="text-3xl font-bold text-white mb-4">
          Contact Us
        </h2>
        <p className="text-gray-400 max-w-4xl" aria-describedby="contact-paragraph">
          {paragraph}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:space-x-8 w-full max-w-5xl">
        {/* Left Side: Contact Info (Visible above 1024px) */}
        <div className="hidden lg:flex flex-col items-start space-y-6 lg:w-1/2 mb-8 lg:mb-0">
          {[
            { icon: FaPhone, label: 'Phone', value: '+7970307692', link: 'tel:+7970307692', color: 'bg-red-600' },
            { icon: FaWhatsapp, label: 'WhatsApp', value: '+7970307692', link: 'https://wa.me/7970307692', color: 'bg-green-500' },
            { icon: FaEnvelope, label: 'Email', value: 'contact.nginev@gmail.com', link: 'mailto:contact.nginev@gmail.com', color: 'bg-blue-500' },
            { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/nginev', link: 'https://www.linkedin.com/company/nginev', color: 'bg-blue-700' },
            { icon: FaFacebook, label: 'Facebook', value: 'facebook.com/yourbusinesspage', link: 'https://facebook.com/yourbusinesspage', color: 'bg-blue-600' },
            { icon: FaTwitter, label: 'Twitter', value: 'x.com/NGINEV144376', link: 'https://x.com/NGINEV144376', color: 'bg-blue-400' },
            { icon: FaInstagram, label: 'Instagram', value: 'instagram.com/f.nginev', link: 'https://instagram.com/f.nginev', color: 'bg-pink-500' }
          ].map(({ icon: Icon, label, value, link, color }, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <div className={`p-3 rounded-full text-white ${color}`} aria-hidden="true">
                <Icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{label}</h3>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={`Contact us via ${label}`}
                >
                  {value}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:w-1/2 w-full md:w-4/5">
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-950 p-10 rounded-lg shadow-lg w-full"
            aria-labelledby="contact-form"
          >
            <h3 id="contact-form" className="text-xl text-white mb-4">Reach Out to Us</h3>
            <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 mb-6 rounded-md bg-zinc-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-red-600 outline-none transition duration-300 ease-in-out"
              required
              aria-label="Your Name"
            />

            <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 mb-6 rounded-md bg-zinc-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-red-600 outline-none transition duration-300 ease-in-out"
              required
              aria-label="Your Email"
            />

            {/* Phone Field */}
            <label htmlFor="phone" className="block text-gray-400 text-sm mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full p-3 mb-6 rounded-md bg-zinc-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-red-600 outline-none transition duration-300 ease-in-out"
              aria-label="Your Phone Number"
            />

            <label htmlFor="query" className="block text-gray-400 text-sm mb-2">
              Your Query
            </label>
            <textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="Type your message here"
              rows="5"
              className="w-full p-3 mb-6 rounded-md bg-zinc-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-red-600 outline-none transition duration-300 ease-in-out resize-none"
              required
              aria-label="Your Query"
            />

            <button
              type="submit"
              className="relative w-full p-3 mt-4 font-semibold text-white rounded-md border border-red-600 bg-zinc-950 overflow-hidden group transition duration-300 ease-in-out"
              aria-label="Send Your Message"
            >
              <span className="relative z-10 text-gray-200 group-hover:text-red-600">Send Message</span>
              <span className="absolute inset-0 bg-black bg-opacity-75 rounded-md transform scale-y-0 group-hover:scale-y-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span>
            </button>
          </form>
        </div>
      </div>

      {/* Mobile View (Hidden on large screens) */}
      <div className="lg:hidden mt-8 flex space-x-4">
        {[
          { Icon: FaPhone, link: 'tel:+7970307692', color: 'bg-red-600', label: 'Phone' },
          { Icon: FaWhatsapp, link: 'https://wa.me/7970307692', color: 'bg-green-500', label: 'WhatsApp' },
          { Icon: FaEnvelope, link: 'mailto:contact.nginev@gmail.com', color: 'bg-blue-500', label: 'Email' },
          { Icon: FaLinkedin, link: 'https://linkedin.com/in/md-farooque-756', color: 'bg-blue-700', label: 'LinkedIn' },
          { Icon: FaFacebook, link: 'https://facebook.com/yourbusinesspage', color: 'bg-blue-600', label: 'Facebook' },
          { Icon: FaTwitter, link: 'https://twitter.com/yourbusinesspage', color: 'bg-blue-400', label: 'Twitter' },
          { Icon: FaInstagram, link: 'https://instagram.com/yourbusinesspage', color: 'bg-pink-500', label: 'Instagram' }
        ].map(({ Icon, link, color, label }, idx) => (
          <a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full text-white ${color}`}
            aria-label={label}
          >
            <Icon size={24} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;

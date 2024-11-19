import React from "react";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaPhone, 
  FaWhatsapp, 
  FaEnvelope 
} from "react-icons/fa";
import Link from "next/link"; // Import Link from next/link

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10" aria-label="Footer">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6">
        {/* Left Section: Company Info */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold text-red-600" aria-label="Company Name">NGINEV</h2>
          <p className="text-sm mt-2" aria-label="Company Motto">Innovating with Purpose and Passion.</p>
        </div>

        {/* Middle Section: Navigation Links */}
        <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center lg:justify-center space-x-5 text-sm mb-6 lg:mb-0">
          <Link href="/">
            <a className="hover:text-red-600 transition duration-300" aria-label="Go to Home">Home</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-red-600 transition duration-300" aria-label="Learn About Us">About</a>
          </Link>
          <Link href="/software">
            <a className="hover:text-red-600 transition duration-300" aria-label="View Software Services">Software</a>
          </Link>
          <Link href="/hardware">
            <a className="hover:text-red-600 transition duration-300" aria-label="View Hardware Services">Hardware</a>
          </Link>
          <Link href="/marketing">
            <a className="hover:text-red-600 transition duration-300" aria-label="View Marketing Services">Marketing</a>
          </Link>
          <Link href="/printing">
            <a className="hover:text-red-600 transition duration-300" aria-label="View Printing Services">Printing</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-red-600 transition duration-300" aria-label="Contact Us">Contact Us</a>
          </Link>
        </nav>

        {/* Right Section: Social Media Links and Contact Info */}
        <div className="flex flex-col items-center space-y-3" aria-label="Social Media and Contact Info">
          {/* Social Media Icons */}
          <div className="flex space-x-6" aria-label="Follow us on social media">
            <a href="https://facebook.com/YourBusinessPage" 
               aria-label="Visit our Facebook" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-gray-300 hover:text-red-600 transition duration-300">
              <FaFacebookF size={18} />
            </a>
            <a href="https://twitter.com/YourBusinessPage" 
               aria-label="Visit our Twitter" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-gray-300 hover:text-red-600 transition duration-300">
              <FaTwitter size={18} />
            </a>
            <a href="https://instagram.com/YourBusinessPage" 
               aria-label="Visit our Instagram" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-gray-300 hover:text-red-600 transition duration-300">
              <FaInstagram size={18} />
            </a>
            <a href="https://linkedin.com/YourBusinessPage" 
               aria-label="Visit our LinkedIn" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-gray-300 hover:text-red-600 transition duration-300">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://wa.me/7970307692" 
               aria-label="Contact us on WhatsApp" 
               className="text-gray-300 hover:text-red-600 transition duration-300">
              <FaWhatsapp size={18} />
            </a>
            <a href="mailto:contact.nginev@gmail.com" 
               aria-label="Send us an Email" 
               className="text-gray-300 hover:text-red-600 transition duration-300">
              <FaEnvelope size={18} />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-4 group" aria-label="Call us">
            <FaPhone size={18} className="group-hover:text-red-600 transition duration-300" />
            <a href="tel:7970307692" className="group-hover:text-red-600 transition duration-300">
              79703 07692
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright Text */}
      <div className="mt-6 text-center text-sm text-gray-500" aria-label="Copyright Information">
        &copy; {new Date().getFullYear()} NGINEV. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

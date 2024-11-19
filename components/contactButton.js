// components/ContactButton.js

import React from 'react';
import Link from 'next/link';

const ContactButton = ({ buttonText, buttonLink }) => {
  return (
    <div className="flex justify-center bg-black pb-36 mt-[-6rem]" aria-live="polite">
      <Link href={buttonLink} passHref>
        <button
          className="text-xl px-0.5 py-[1.60rem] text-white font-semibold rounded-full border-2 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
            bg-clip-padding p-[2px] transition duration-300 hover:bg-[#121212] hover:text-red-600 active:scale-95 focus:ring-4 focus:ring-indigo-500 focus:outline-none"
          aria-label="Navigate to Contact Us page"
        >
          <span className="bg-black py-6 px-20 rounded-full" aria-hidden="true">
            {buttonText}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ContactButton;

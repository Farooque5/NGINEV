import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'; // Import Next.js Image component

// Use React.memo for improved performance if Card re-renders frequently
const Card = React.memo(({ title, description, imageSrc }) => {
  return (
    <div
      role="article" // Improve accessibility for screen readers
      className="bg-zinc-950 rounded-lg p-4 m-4 flex-1 shadow-lg 
                 transition duration-300 ease-in-out transform 
                 hover:scale-105 hover:shadow-[0_0_30px_15px_rgba(220,38,38,0.6)]"
      style={{
        boxShadow: "0 4px 6px rgba(220, 38, 38, 0.5)", // base shadow with red-600
        minHeight: '286px', // Set a minimum height
      }}
      aria-labelledby={`card-title-${title}`} // Provide accessible label for card title
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          className="w-full object-cover rounded-t-lg mb-4" // Style the image
          height={200} // Set a fixed height for the image
          width={400}  // Set a fixed width for the image
          layout="intrinsic" // Ensures the image keeps its aspect ratio
          loading="lazy" // Lazy load image to improve performance
        />
      )}
      <h2
        id={`card-title-${title}`} // Accessible title ID for screen readers
        className="text-lg font-bold text-white mb-4"
      >
        {title}
      </h2>
      {description && <p className="text-gray-300 mt-2">{description}</p>}
    </div>
  );
});

// Add displayName for debugging purposes
Card.displayName = 'Card';

// PropTypes for validation
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default Card;

import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';

// CardSection component with improved SEO, accessibility, performance, and maintainability
const CardSection = ({ sectionTitle, sectionDescription, cardsData = [] }) => {
  return (
    <section className="bg-black text-white min-h-screen px-4 sm:px-8 py-12">
      <div className="text-center mb-12">
        {sectionTitle && (
          <h2 className="text-3xl font-bold mb-10" aria-labelledby="section-title">
            {sectionTitle}
          </h2>
        )}
        {sectionDescription && (
          <p
            className="text-gray-300 mx-10 mb-8 text-justify sm:text-center"
            aria-describedby="section-description"
          >
            {sectionDescription}
          </p>
        )}

        {/* Card grid */}
        <div
          className="flex flex-wrap justify-center gap-2"
          aria-live="polite" // Announce changes to the section dynamically
        >
          {cardsData.length > 0 ? (
            cardsData.map((card, index) => (
              <div
                className="w-full sm:w-70 md:w-[45%] xl:w-[22%] h-[350px] sm:h-[380px] md:h-[420px]"
                key={card.title || index} // Use card title for key when available
                role="article" // For improved semantics and screen reader support
                aria-labelledby={`card-title-${index}`} // Accessible title for each card
                aria-describedby={`card-description-${index}`} // Accessible description for each card
              >
                <Card
                  title={card.title}
                  description={card.description}
                  imageSrc={card.imageSrc}
                />
              </div>
            ))
          ) : (
            <p>No cards available</p> // Optional message when cardsData is empty
          )}
        </div>
      </div>
    </section>
  );
};

// PropTypes for validation
CardSection.propTypes = {
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ),
};

export default CardSection;

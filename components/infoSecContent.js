// components/InfoSecContent.js
import React from 'react';
import PropTypes from 'prop-types';
import InfoSection from './infoSection';
import ImageCard from './imageCards';

const InfoSecContent = ({ sections }) => {
  return (
    <div className="info-sec-content">
      {sections.map(
        (
          { mainImages, additionalImages, title, description, buttonText, buttonLink, imageOnLeft },
          index
        ) => (
          <section
            key={title}
            className="bg-black py-8"
            aria-labelledby={`section-title-${index}`}
            aria-describedby={`section-desc-${index}`}
          >
            <article className="container mx-auto px-6">
              {/* Render InfoSection with mainImages */}
              <InfoSection
                images={mainImages} // main images for InfoSection
                title={title}
                description={description}
                buttonText={buttonText}
                buttonLink={buttonLink}
                imageOnLeft={imageOnLeft}
                ariaLabel={`Section about ${title}`} // Added aria-label for the section
              />

              {/* Conditionally render ImageCard with additionalImages below InfoSection */}
              {additionalImages && additionalImages.length > 0 && (
                <div className="mt-8">
                  <ImageCard images={additionalImages} />
                </div>
              )}
            </article>
          </section>
        )
      )}
    </div>
  );
};

// PropTypes for validation
InfoSecContent.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      mainImages: PropTypes.arrayOf(PropTypes.string), // Images within the InfoSection component
      additionalImages: PropTypes.arrayOf(PropTypes.string), // Images for the ImageCard below InfoSection
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
      buttonLink: PropTypes.string.isRequired,
      imageOnLeft: PropTypes.bool,
    })
  ).isRequired,
};

export default InfoSecContent;

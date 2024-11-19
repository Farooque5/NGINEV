import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

const InfoSection = ({
  images = [],
  title,
  description,
  imageOnLeft = true,
  buttonText,
  buttonLink = "#",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const openImageModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNextImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section
      className={`flex flex-col ${
        imageOnLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center justify-center w-full min-h-screen p-8 md:p-12 bg-black`}
      role="region"
      aria-labelledby="info-section-title"
    >
      {/* Image Section */}
      <div
        className="w-full lg:w-1/2 flex justify-center items-center flex-wrap gap-2"
        aria-labelledby="info-section-images"
      >
        {images.length > 0 ? (
          images.map((imageSrc, index) => (
            <figure
              key={index}
              className={`relative p-1 bg-black rounded-lg shadow-lg transform transition-transform duration-300 ${
                images.length === 1
                  ? "w-full"
                  : images.length <= 2
                  ? "w-1/2"
                  : "w-1/4"
              } cursor-pointer hover:scale-105`}
              onClick={() => openImageModal(index)}
              role="button"
              aria-label={`View image ${index + 1} in modal`}
              style={{ height: "350px" }}
            >
              <Image
                src={imageSrc}
                alt={`${title} - Image ${index + 1}`}
                className="rounded-md object-cover"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <figcaption className="sr-only">{`${title} - Image ${index + 1}`}</figcaption>
            </figure>
          ))
        ) : (
          <p className="text-gray-300">No images available.</p>
        )}
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-start text-left px-6">
        <h1
          id="info-section-title"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-100 mb-6"
        >
          {title}
        </h1>
        <p
          id="info-section-description"
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed"
        >
          {description}
        </p>
        <Link href={buttonLink} passHref>
          <button
            className="mt-20 px-6 py-3 border-2 border-zinc-800 text-white font-semibold rounded transition duration-300 hover:bg-[#121212] hover:text-red-600 active:scale-95"
            aria-label={`Learn more about ${title}`}
          >
            {buttonText}
          </button>
        </Link>
      </div>

      {/* Full-Screen Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className="relative w-11/12 lg:w-4/5 xl:w-2/3 max-w-6xl p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-5 text-white text-2xl font-bold hover:text-red-600 transition duration-300"
              aria-label="Close image modal"
            >
              &times;
            </button>
            <Image
              src={images[modalImageIndex]}
              alt={`Full-Screen Image ${modalImageIndex + 1}`}
              width={1200}
              height={800}
              style={{ objectFit: "contain" }}
              className="rounded-lg"
              sizes="100vw"
              loading="lazy"
            />
            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPreviousImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full hover:text-red-600 transition duration-300"
              aria-label="Previous Image"
            >
              &larr;
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full hover:text-red-600 transition duration-300"
              aria-label="Next Image"
            >
              &rarr;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

// PropTypes for validation
InfoSection.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageOnLeft: PropTypes.bool,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string,
};

export default InfoSection;

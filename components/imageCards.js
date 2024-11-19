// components/ImageCard.js

import React, { useState, useRef } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const ImageCard = ({ images = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reference for the image row container
  const imageRowRef = useRef(null);

  // Open modal and set the selected image
  const openImageModal = (imageSrc, index) => {
    setModalImage(imageSrc);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  // Scroll the image row container to the next set of images
  const scrollNext = () => {
    if (imageRowRef.current) {
      imageRowRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Scroll the image row container to the previous set of images
  const scrollPrevious = () => {
    if (imageRowRef.current) {
      imageRowRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Go to the next image in the modal
  const goToNextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setModalImage(images[newIndex]);
  };

  // Go to the previous image in the modal
  const goToPreviousImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setModalImage(images[newIndex]);
  };

  return (
    <div className="flex justify-center items-center px-2 -mt-20 md:mt-0 lg:-mt-4 pb-28 lg:px-4 max-w-screen-2xl mx-auto bg-black rounded-lg">
      {/* Previous Button */}
      <button
        onClick={scrollPrevious}
        aria-label="Scroll to previous images"
        className="flex items-center justify-center w-24 h-12 rounded-full bg-zinc-950 hover:border-red-950 hover:border-2 text-white text-2xl font-bold hover:bg-zinc-800 transition duration-300 mx-2"
      >
        &lt;
      </button>

      {/* Image Row with Multiple Images */}
      <div
        ref={imageRowRef}
        className="flex gap-2 overflow-x-auto p-2 scrollbar-custom"
        aria-live="polite"
        role="list"
      >
        {images.length > 0 ? (
          images.map((image, index) => (
            <div
              key={index}
              role="listitem"
              className="flex-shrink-0 w-96 h-56 relative bg-black hover:border-black hover:border-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition-transform duration-300"
              onClick={() => openImageModal(image, index)}
              style={{ overflow: "hidden" }}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
                priority
              />
            </div>
          ))
        ) : (
          <p className="text-gray-300">No images available.</p>
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        aria-label="Scroll to next images"
        className="flex items-center justify-center w-24 h-12 rounded-full hover:border-red-950 hover:border-2 bg-zinc-950 text-white text-2xl font-bold hover:bg-zinc-800 transition duration-300 mx-2"
      >
        &gt;
      </button>

      {/* Full-Screen Image Modal */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal} // Modal will close if the overlay area is clicked
          role="dialog"
          aria-labelledby="modal-title"
          aria-hidden={!isModalOpen}
        >
          <div className="relative w-11/12 lg:w-4/5 xl:w-2/3 max-w-6xl p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-6 text-white text-xl font-bold hover:text-red-600 transition duration-300"
              aria-label="Close modal"
            >
              &times;
            </button>
            <Image
              src={modalImage}
              alt={`Full-Screen Image ${currentIndex + 1}`}
              layout="responsive"
              width={1500}
              height={1200}
              objectFit="contain"
              className="rounded-lg"
            />

            {/* Modal Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPreviousImage();
              }}
              aria-label="Go to previous image"
              className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
            >
              &lt;
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNextImage();
              }}
              aria-label="Go to next image"
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// PropTypes for validation
ImageCard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageCard;

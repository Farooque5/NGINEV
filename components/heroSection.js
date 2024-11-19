import { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection = ({ 
  videoSources = [], 
  imagePlaceholder = null, 
  title = "Default Title", 
  description = "Default Description" 
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Conditional rendering for the placeholder image */}
      {imagePlaceholder && !isVideoLoaded && (
        <Image
          src={imagePlaceholder}
          alt="Background Placeholder"
          fill
          style={{ objectFit: "cover" }}
          className="absolute top-0 left-0 z-0 opacity-70"
          priority
        />
      )}

      {/* Conditional rendering for the video background */}
      {videoSources.length > 0 && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
            isVideoLoaded ? "opacity-70" : "opacity-0"
          }`}
          onLoadedData={() => setIsVideoLoaded(true)}
          preload="metadata"
          aria-label="Background video"
        >
          {videoSources.map((source, index) => (
            <source key={index} src={source.src} type={source.type} media={source.media} />
          ))}
          Your browser does not support the video tag.
        </video>
      )}

      {/* Content Section */}
      <div className="relative z-10 flex items-center justify-center bg-black bg-opacity-30 rounded-lg p-6 max-w-3xl mx-auto h-screen shadow-lg">
        <div className="text-center">
          <h1 className="text-white font-bold mb-4 text-3xl sm:text-4xl leading-tight">
            {title}
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

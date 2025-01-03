"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import ParticlesBackground from "./newyear/ParticlesBackground";
import launchFireworks from "./fireworks";

const NewYearHeroSection = ({
  title = "Welcome to NGINEV",
  description = "Join with us!",
  videoSources = [],
  imagePlaceholder = null,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const router = useRouter();

  const handleJoinNow = () => {
    router.push("/contact");
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Particle Background */}
      <ParticlesBackground />

      <launchFireworks />

      {/* Placeholder Image */}
      {imagePlaceholder && !isVideoLoaded && (
        <Image
          src={imagePlaceholder}
          alt="Background Placeholder"
          fill
          style={{ objectFit: "cover" }}
          className="absolute top-0 left-0 z-0 opacity-80"
          priority
        />
      )}

      {/* Video Background */}
      {videoSources.length > 0 && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
            isVideoLoaded ? "opacity-30" : "opacity-0"
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-black/70" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl sm:text-6xl font-bold text-white mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl"
        >
          {description}
        </motion.p>

        

        <button
          onClick={handleJoinNow}
          className="px-6 py-3 bg-black text-lg font-semibold hover:text-red-600 hover:bg-transparent transition-all max-w-full p-3 border-[1px] border-gray-300 rounded-lg shadow-md text-white placeholder-gray-40 bg-white/10 backdrop-blur-sm"
        >
          Join Now
        </button>
        
      </div>
      {/* Fireworks */}
      
    </div>
  );
};

export default NewYearHeroSection;

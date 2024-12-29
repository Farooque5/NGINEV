"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Particles from "react-tsparticles";
import emailjs from "@emailjs/browser";

const NewYearHeroSection = ({
  title = "Countdown to the New Year: Celebrate in Style!",
  description = "Join the world's most exciting celebration! Get ready to welcome the New Year with unforgettable moments, endless joy, and global cheer.",
  targetDate = "January 1, 2025 00:00:00",
}) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ username: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const targetTime = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetTime - now;

      if (timeRemaining <= 0) {
        clearInterval(interval);
        setIsTimeUp(true);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        launchFireworks();
      } else {
        setCountdown({
          days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeRemaining % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const handleBookNow = () => {
    if (showForm) {
      // Send the email only if formData contains both username and email
      if (formData.username && formData.email) {
        const templateParams = {
          from_username: formData.username,
          from_email: formData.email,
          to_name: 'Farooque',
          message: 'Happy New Year! Best of luck 🎉',
        };
        console.log("Sending email:", formData);
        emailjs
          .send(
            "service_gbfd598", // Replace with your EmailJS service ID
            "template_kpyer3g", // Replace with your EmailJS template ID
            templateParams,           // Make sure this object contains username and email
            "35aXHuFaOg3N9ACYM" // Replace with your EmailJS user ID
          )
          .then(
            (response) => {
              console.log("Email sent successfully:", response.status, response.text);
              setIsSubmitted(true); // Show success message
              launchFireworks(); // Launch fireworks after successful submission
              resetForm(); // Reset form for the user to submit again
            },
            (error) => {
              console.error("Error sending email:", error.text);
              alert("Failed to send email. Please try again later.");
            }
          );
      } else {
        alert("Please fill out both fields!");
      }
    } else {
      setShowForm(true);
    }
  };

  const launchFireworks = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  };

  const resetForm = () => {
    // Reset the form state and hide the form after submission
    setFormData({ username: "", email: "" });
    setShowForm(false);
    setIsSubmitted(false);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden mt-4">
      <Particles
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: false,
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-black/70" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl"
        >
          {description}
        </motion.p>

        <div className="grid grid-cols-4 gap-4 mb-12">
          {Object.entries(countdown).map(([unit, value]) => (
            <AnimatePresence key={unit} mode="popLayout">
              <motion.div
                key={value}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <motion.span
                  key={value}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-4xl md:text-6xl font-bold text-yellow-400"
                >
                  {value}
                </motion.span>
                <span className="text-sm md:text-base text-gray-300 capitalize">
                  {unit}
                </span>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>

        {showForm && !isSubmitted ? (
          <div className="flex flex-col items-center space-y-4 max-w-md w-full mb-6">
            <input
              type="text"
              placeholder="Enter your username"
              value={formData.username}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, username: e.target.value }))
              }
              className="px-6 py-3 border border-gray-400 rounded-lg text-lg text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-300 transition-all duration-300 w-full"
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="px-6 py-3 border border-gray-400 rounded-lg text-lg text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-300 transition-all duration-300 w-full"
            />
            <button
              onClick={handleBookNow}
              className="px-6 py-3 bg-yellow-400 text-black rounded-full text-lg font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all duration-300 w-full"
            >
              Submit & Celebrate
            </button>
          </div>
        ) : (
          <button
            onClick={handleBookNow}
            className="px-6 py-3 bg-yellow-400 text-black rounded-full text-lg font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all duration-300"
          >
            Book Now!
          </button>
        )}
      </div>
    </div>
  );
};

export default NewYearHeroSection;

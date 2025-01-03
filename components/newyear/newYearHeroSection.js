// "use client";

// import { useCallback, useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import confetti from "canvas-confetti";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";

// // import Countdown from "./newyear/Countdown";
// import Title from "./newyear/Title";
// import Description from "./newyear/Description";
// // import CitySlider from "./newyear/CitySlider";
// // import SongPlayer from "./newyear/SongPlayer";
// import Fireworks from "./newyear/Fireworks";
// // import CityCountryDropdown from "./newyear/Dropdown";

// const NewYearHeroSection = () => {
//   const citiesList = [
//     { city: "Sydney", country: "Australia", timeZone: "Australia/Sydney" },
//     { city: "Tokyo", country: "Japan", timeZone: "Asia/Tokyo" },
//     { city: "Moscow", country: "Russia", timeZone: "Europe/Moscow" },
//     { city: "London", country: "UK", timeZone: "Europe/London" },
//     { city: "New York", country: "USA", timeZone: "America/New_York" },
//   ];

//   const [selectedCity, setSelectedCity] = useState(citiesList[0]);
//   const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//   const [isTimeUp, setIsTimeUp] = useState(false);
//   const [currentCityIndex, setCurrentCityIndex] = useState(0);
//   const [showCelebration, setShowCelebration] = useState(false);

//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date();
//       const targetDate = new Date(now.getFullYear() + 1, 0, 1);
//       targetDate.toLocaleString("en-US", { timeZone: selectedCity.timeZone });
//       const timeRemaining = targetDate.getTime() - now.getTime();

//       if (timeRemaining <= 0) {
//         clearInterval(interval);
//         setIsTimeUp(true);
//         setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//         launchFireworks();
//         setShowCelebration(true);
//       } else {
//         setCountdown({
//           days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((timeRemaining % (1000 * 60)) / 1000),
//         });
//       }

//       const nextCityIndex = getNextCityIndex(now);
//       setCurrentCityIndex(nextCityIndex);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [selectedCity]);

//   const getNextCityIndex = (currentTime) => {
//     for (let i = 0; i < citiesList.length; i++) {
//       const city = citiesList[i];
//       const cityTime = new Date(currentTime.toLocaleString("en-US", { timeZone: city.timeZone }));
//       if (cityTime.getHours() === 0 && cityTime.getMinutes() === 0) {
//         return i;
//       }
//     }
//     return currentCityIndex;
//   };

//   const launchFireworks = () => {
//     const duration = 15 * 1000;
//     const animationEnd = Date.now() + duration;
//     const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

//     function randomInRange(min, max) {
//       return Math.random() * (max - min) + min;
//     }

//     const interval = setInterval(function () {
//       const timeLeft = animationEnd - Date.now();

//       if (timeLeft <= 0) {
//         return clearInterval(interval);
//       }

//       const particleCount = 50 * (timeLeft / duration);

//       confetti(
//         Object.assign({}, defaults, {
//           particleCount,
//           origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
//         })
//       );
//       confetti(
//         Object.assign({}, defaults, {
//           particleCount,
//           origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
//         })
//       );
//     }, 250);
//   };

//   const handleCitySelect = (city) => {
//     setSelectedCity(city);
//     setIsTimeUp(false);
//     setShowCelebration(false);
//   };

//   return (
//     <div className="relative w-full h-screen bg-black overflow-hidden">
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           background: {
//             color: {
//               value: "transparent",
//             },
//           },
//           fpsLimit: 120,
//           interactivity: {
//             events: {
//               onClick: {
//                 enable: true,
//                 mode: "push",
//               },
//               onHover: {
//                 enable: true,
//                 mode: "repulse",
//               },
//               resize: true,
//             },
//             modes: {
//               push: {
//                 quantity: 4,
//               },
//               repulse: {
//                 distance: 200,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             color: {
//               value: "#ffffff",
//             },
//             links: {
//               color: "#ffffff",
//               distance: 150,
//               enable: true,
//               opacity: 0.5,
//               width: 1,
//             },
//             move: {
//               direction: "none",
//               enable: true,
//               outModes: {
//                 default: "bounce",
//               },
//               random: false,
//               speed: 2,
//               straight: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 area: 800,
//               },
//               value: 80,
//             },
//             opacity: {
//               value: 0.5,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               value: { min: 1, max: 5 },
//             },
//           },
//           detectRetina: true,
//         }}
//       />
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-black/70" />

//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
//         {/* <CityCountryDropdown citiesList={citiesList} onSelect={handleCitySelect} /> */}
//         <Title city={selectedCity.city} />
//         <Description city={selectedCity.city} country={selectedCity.country} />
//         {/* <CitySlider citiesList={citiesList} currentCity={citiesList[currentCityIndex]} /> */}
//         <AnimatePresence>
//           {!isTimeUp && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Countdown countdown={countdown} />
//             </motion.div>
//           )}
//         </AnimatePresence>
//         <AnimatePresence>
//           {showCelebration && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Fireworks city={selectedCity.city} />
//             </motion.div>
//           )}
//         </AnimatePresence>
//         {/* <SongPlayer isTimeUp={isTimeUp} /> */}
//       </div>
//     </div>
//   );
// };

// export default NewYearHeroSection;

// import { motion } from "framer-motion";

// const CitySlider = ({ citiesList, currentCity }) => {
//   const currentIndex = citiesList.findIndex(city => city.city === currentCity.city);
//   const prevCity = citiesList[(currentIndex - 1 + citiesList.length) % citiesList.length];
//   const nextCity = citiesList[(currentIndex + 1) % citiesList.length];

//   return (
//     <div className="relative flex items-center justify-center w-full overflow-hidden mb-8">
//       <motion.div
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-lg md:text-xl text-yellow-400 font-bold absolute left-0"
//       >
//         {prevCity.city}, {prevCity.country}
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="text-lg md:text-xl text-yellow-400 font-bold z-10"
//       >
//         Celebrating Now: {currentCity.city}, {currentCity.country}
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: 100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-lg md:text-xl text-yellow-400 font-bold absolute right-0"
//       >
//         {nextCity.city}, {nextCity.country}
//       </motion.div>
//     </div>
//   );
// };

// export default CitySlider;

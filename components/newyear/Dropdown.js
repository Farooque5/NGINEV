// // import { motion } from "framer-motion";

// // const CityCountryDropdown = ({ citiesList, onSelect }) => {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: -20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.5 }}
// //       className="relative md:bottom-16 bottom-10 md:flex-col space-y-4 max-w-xs mx-0 sm:ml-4 md:mt-20 items-start"
// //     >
// //       <select
// //         onChange={(e) => {
// //           const selectedCity = citiesList.find(city => city.city === e.target.value);
// //           if (selectedCity) onSelect(selectedCity);
// //         }}
// //         className="w-full p-3 border-[1px] border-gray-300 rounded-lg shadow-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 bg-white/10 backdrop-blur-sm"
// //       >
// //         <option value="" disabled className="text-gray-400">
// //           Enter City
// //         </option>
// //         {citiesList.map((city, index) => (
// //           <option key={index} value={city.city} className="text-gray-700">
// //             {city.city}, {city.country}
// //           </option>
// //         ))}
// //       </select>
// //     </motion.div>
// //   );
// // };

// // export default CityCountryDropdown;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

// const CityCountryDropdown = ({ onSelect }) => {
//   const [cityInput, setCityInput] = useState(""); // User input for city name
//   const [citiesList, setCitiesList] = useState([]); // List of cities fetched from OpenCage API
//   const [loading, setLoading] = useState(false); // Loading state to show loading spinner

//   const openCageAPIKey = "d1084ddcb5d5484b865bd9b0cb774a78"; // Your OpenCage API Key

//   // Function to handle city input change
//   const handleCityInputChange = async (e) => {
//     const value = e.target.value;
//     setCityInput(value); // Update input value

//     if (value.length > 2) {
//       setLoading(true); // Start loading when user types
//       try {
//         // Fetch cities based on the user input from OpenCage API
//         const response = await axios.get(
//           `https://api.opencagedata.com/geocode/v1/json?q=${value}&key=${openCageAPIKey}`
//         );
//         const cities = response.data.results.map((result) => ({
//           city: result.formatted, // Full city name with country
//           lat: result.geometry.lat,
//           lng: result.geometry.lng,
//         }));
//         setCitiesList(cities); // Update cities list
//       } catch (error) {
//         console.error("Error fetching cities:", error);
//       } finally {
//         setLoading(false); // End loading
//       }
//     } else {
//       setCitiesList([]); // Clear cities if input length is less than 3
//     }
//   };

//   // Function to handle city selection
//   const handleCitySelect = (city) => {
//     onSelect(city); // Pass the selected city to parent component
//     setCityInput(city.city); // Set the selected city as input value
//     setCitiesList([]); // Clear suggestions after selection
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="relative md:bottom-16 bottom-10 md:flex-col space-y-4 max-w-xs mx-0 sm:ml-4 md:mt-20 items-start"
//     >
//       <input
//         type="text"
//         value={cityInput}
//         onChange={handleCityInputChange}
//         placeholder="Search for a city..."
//         className="w-full p-3 border-[1px] border-gray-300 rounded-lg shadow-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 bg-white/10 backdrop-blur-sm"
//       />

//       {/* Show loading spinner while fetching data */}
//       {loading && (
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="spinner-border animate-spin border-4 border-t-4 border-blue-500 rounded-full w-8 h-8"></div>
//         </div>
//       )}

//       {/* Show list of city suggestions */}
//       {citiesList.length > 0 && (
//         <ul className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-lg max-h-60 overflow-auto z-10">
//           {citiesList.map((city, index) => (
//             <li
//               key={index}
//               onClick={() => handleCitySelect(city)}
//               className="p-3 cursor-pointer hover:bg-gray-100 text-gray-700"
//             >
//               {city.city}
//             </li>
//           ))}
//         </ul>
//       )}
//     </motion.div>
//   );
// };

// export default CityCountryDropdown;

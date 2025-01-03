// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Header({ setLocation }) {
//   const [selectedCountry, setSelectedCountry] = useState('');

//   const handleChange = (event) => {
//     const country = event.target.value;
//     setSelectedCountry(country);
//     setLocation(country); // Passing the selected country to the Globe component
//   };

//   return (
//     <div className="relative z-10 flex flex-col items-center justify-center pt-4 pb-8 px-4 text-center h-[10%]">
//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-4xl md:text-5xl font-bold text-white mb-6"
//       >
//         Select Your Country
//       </motion.h1>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
//       >
//         <label htmlFor="countrySelect" className="text-lg text-white mb-2 block">
//           Choose a country to explore
//         </label>

//         <select
//           id="countrySelect"
//           value={selectedCountry}
//           onChange={handleChange}
//           className="px-4 py-2 border border-gray-400 rounded-lg text-lg text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
//         >
//           <option value="">--Select--</option>
//           <option value="USA">USA</option>
//           <option value="India">India</option>
//           <option value="Brazil">Brazil</option>
//           <option value="China">China</option>
//           {/* Add more options as needed */}
//         </select>
//       </motion.div>
//     </div>
//   );
// }

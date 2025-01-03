// import { motion } from "framer-motion";

// const Countdown = ({ countdown }) => (
//   <div className="grid grid-cols-4 gap-4 mb-12">
//     {Object.entries(countdown).map(([unit, value]) => (
//       <motion.div
//         key={unit}
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4"
//       >
//         <motion.span
//           key={value}
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: -20, opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           className="text-4xl md:text-6xl font-bold text-yellow-400"
//         >
//           {value}
//         </motion.span>
//         <span className="text-sm md:text-base text-gray-300 capitalize">{unit}</span>
//       </motion.div>
//     ))}
//   </div>
// );

// export default Countdown;

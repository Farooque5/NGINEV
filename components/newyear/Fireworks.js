import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Fireworks = ({ city }) => {
  const [fireworks, setFireworks] = useState([]);

  useEffect(() => {
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
    const newFireworks = [];

    for (let i = 0; i < 20; i++) {
      const delay = Math.random() * 2;
      const duration = 0.5 + Math.random() * 0.5;
      const size = 10 + Math.random() * 20;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;

      newFireworks.push(
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [0, 1, 1.2, 1],
            opacity: [1, 1, 0.8, 0],
          }}
          transition={{
            duration: duration,
            delay: delay,
            ease: "easeOut",
            times: [0, 0.2, 0.8, 1],
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
          style={{
            position: "absolute",
            left: left,
            top: top,
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: color,
          }}
        />
      );
    }

    setFireworks(newFireworks);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 overflow-hidden"
    >
      {fireworks}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-5xl md:text-7xl font-bold text-yellow-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        Happy New Year in {city}! 🎆
      </motion.div>
    </motion.div>
  );
};

export default Fireworks;

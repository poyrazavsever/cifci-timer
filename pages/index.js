import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-01T00:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const numberVariants = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.1, 1],
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-b from-white to-gray-300 flex flex-col items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.3
        }}
        className="mb-8 w-[120px] sm:w-[150px] md:w-[180px]"
      >
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={180} 
          height={180} 
          className="rounded-lg w-full h-auto" 
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center w-full max-w-7xl px-4"
      >
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center">
          {[
            { value: timeLeft.days, label: "Gün" },
            { value: timeLeft.hours, label: "Saat" },
            { value: timeLeft.minutes, label: "Dakika" },
            { value: timeLeft.seconds, label: "Saniye" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-50 p-4 sm:p-8 md:p-12 lg:p-16 rounded-lg shadow-md"
            >
              <motion.div
                key={item.value}
                variants={numberVariants}
                initial="initial"
                animate="animate"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700"
              >
                {item.value}
              </motion.div>
              <motion.div className="text-sm sm:text-base md:text-lg text-gray-600 mt-1">
                {item.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

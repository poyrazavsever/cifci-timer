import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const Designs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    threshold: 0.1, // Bileşenin %10'u görünür olduğunda tetiklenecek
    margin: "0px 0px -200px 0px" // Viewport'un 200px öncesinde tetiklenecek
  })
  const [currentDesignIndex, setCurrentDesignIndex] = useState(0)

  const designs = [
    '/designs/Login - Deneme.png',
    '/designs/Register - Deneme.png',
    '/designs/Menü.png',
    '/designs/Mesajlar.png',
    '/designs/Fotograflar.png',
    '/designs/Detail.png',
    '/designs/Detay.png',
    '/designs/Sorular.png',
    '/designs/Zirai İlaç Dükkanları.png',
  ]

  const slogans = [
    { text: "Modern Tasarım", position: "md:top-20 md:left-10 top-4 left-4" },
    { text: "Kolay Kullanım", position: "md:bottom-20 md:right-10 bottom-24 right-4" },
    { text: "Çiftçi Dostu Arayüz", position: "md:top-20 md:right-10 top-4 right-4" },
    { text: "Hızlı Erişim", position: "md:bottom-20 md:left-10 bottom-24 left-4" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDesignIndex((prev) => (prev + 1) % designs.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="h-full min-h-screen relative overflow-hidden bg-gradient-to-br" ref={ref}>
      {/* Merkezdeki mockup */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto z-20 
                   w-[95%] md:w-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img 
          src="/designs/mockap.png" 
          alt="Mockup" 
          className="w-full h-auto max-w-[600px] mx-auto"
        />

        {/* Değişen tasarımlar */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-[70%] md:w-[280px] overflow-hidden -z-10">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentDesignIndex}
              src={designs[currentDesignIndex]}
              alt="UI Design"
              className="w-full h-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Sloganlar */}
      {slogans.map((slogan, index) => (
        <motion.div
          key={index}
          className={`absolute ${slogan.position} text-green-950`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          transition={{ duration: 0.6, delay: 0.2 * index }}
        >
          <h3 className="hidden sm:block md:text-2xl font-bold">{slogan.text}</h3>
        </motion.div>
      ))}
    </div>
  )
}

export default Designs
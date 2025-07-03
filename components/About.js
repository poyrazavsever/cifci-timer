import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  }

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center sm:p-8 bg-white">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 0.6 }}
        >
          {/* Logo Bölümü */}
          <motion.div 
            className="w-24 md:w-64 flex-shrink-0"
            variants={logoVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-auto"
            />
          </motion.div>

          {/* İçerik Bölümü */}
          <motion.div 
            className="flex-1 space-y-2 sm:space-y-6 text-center md:text-left"
            variants={contentVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.h2 
              className="text-xl sm:text-3xl md:text-4xl font-bold text-green-950"
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Hakkımızda
            </motion.h2>
            <motion.p 
              className="text-sm sm:text-lg text-gray-700 leading-relaxed px-4 sm:px-0"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              OTTOQUA Teknoloji Takımının ürünü olan Çifçi, Türkiye'de çiftçilerin günlük hayatlarını kolaylaştıracak bir mobil uygulamadır. 
            </motion.p>
            <motion.p 
              className="text-sm sm:text-lg text-gray-700 leading-relaxed px-4 sm:px-0"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Amacımız, çiftçilerimizin verimliliğini artırırken doğal kaynakları korumak ve gelecek nesillere daha iyi bir tarım mirası bırakmaktır. 
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
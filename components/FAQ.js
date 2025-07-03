import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    threshold: 0.1,
    margin: "0px 0px -200px 0px" // Viewport'un 200px öncesinde tetiklenecek
  });

  const faqData = [
    {
      question: "Uygulamanızı nasıl kullanmaya başlayabilirim?",
      answer: "Ücretsiz hesap oluşturarak hemen kullanmaya başlayabilirsiniz. Kayıt işlemi sadece 2 dakika sürmektedir."
    },
    {
      question: "Hangi bölgelerde hizmet veriyorsunuz?",
      answer: "Mobil uygulamamız ile Türkiye'nin her yerinde faaliyet göstermeye çalışıyoruz."
    },
    {
      question: "Teknik destek alabilir miyim?",
      answer: "7/24 teknik destek ekibimiz her zaman yanınızda. Uygulama içi chat veya telefon ile bize ulaşabilirsiniz."
    },
    {
      question: "Ücretlendirme politikanız nasıl?",
      answer: "Temel özellikler ücretsiz olarak sunulmaktadır. Premium özellikler için aylık ve yıllık avantajlı paketlerimiz mevcuttur."
    },
    {
      question: "Verilerimizin güvenliği nasıl sağlanıyor?",
      answer: "En son güvenlik protokolleri ve şifreleme teknolojileri ile verileriniz tamamen güvende tutulmaktadır."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Y değerini artırdım
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Süreyi artırdım
        staggerChildren: 0.15 // Stagger süresini artırdım
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 }, // X değerini artırdım
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" ref={ref}>
      <motion.div 
        className="w-full max-w-3xl space-y-4"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-green-950 text-center mb-8"
          variants={itemVariants}
        >
          Sıkça Sorulan Sorular
        </motion.h2>

        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            variants={itemVariants}
          >
            <motion.button
              className={`w-full p-4 text-left flex justify-between items-center text-sm md:text-base font-medium cursor-pointer
                         hover:bg-gray-50 transition-colors ${activeIndex === index ? 'bg-gray-50' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              <motion.span
                className="ml-4 flex-shrink-0 text-green-950"
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={contentVariants}
                >
                  <div className="p-4 text-sm md:text-base text-gray-600 bg-gray-50">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQ;

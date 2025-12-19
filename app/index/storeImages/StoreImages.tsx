"use client"
import { motion } from 'framer-motion';
const StoreImages = () => {

    const images = [
    "/images/img10.jpg",
    "/images/img2.jpg",
    "/images/img20.jpg",
    "/images/img8.PNG",
    "/images/img5.jpg",
    "/images/img19.PNG",
  ];

  return (
    <div>
        <section className="mt-20 mb-20 px-6 bg-[#F3F5FB] min-h-120">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl font-bold text-[#4C5AA3] mb-10 pt-10"
      >
        Where WhatsApp Becomes Your Store..
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-wrap justify-center gap-6"
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="rounded-lg overflow-hidden shadow-md border border-white/10"
          >
            <img
              src={src}
              alt={`Store item ${index + 1}`}
              className="w-64 h-64 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
    </div>
  )
}

export default StoreImages
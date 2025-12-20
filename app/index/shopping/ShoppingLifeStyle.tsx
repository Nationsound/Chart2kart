"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const shoppingImages = [
  "/images/img14.PNG",
  "/images/img15.PNG",
  "/images/img19.PNG",
];

export default function ShoppingLifestyle() {
  return (
    <section className="w-full py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Experience the Joy of Shopping
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Our platform brings the shopping experience to your fingertips, just like visiting a mall.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {shoppingImages.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="relative w-full md:w-1/3 h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={img}
              alt={`Shopping image ${i + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

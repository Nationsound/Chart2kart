"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Fast Food", price: 25, img: "/images/store12.jpg" },
  { id: 2, name: "Fabrics", price: 50, img: "/images/store13.PNG" },
  { id: 3, name: "Curtains", price: 80, img: "/images/store14.jpg" },
  { id: 4, name: "Cakes", price: 70, img: "/images/store20.jpg" },
  { id: 5, name: "Reservation", price: 120, img: "/images/store17.jpg" },
  { id: 6, name: "Interior Decor", price: 45, img: "/images/store18.jpg" },
];

export default function StoreGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          whileHover={{ scale: 1.03 }}
          className="border rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800"
        >
          {/* Product Image */}
          <div className="relative h-56">
            <Image
              src={product.img}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                {product.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">${product.price}</p>
            </div>

            {/* Add to Cart Button */}
            <button className="mt-3 w-full bg-[#4C5AA3] text-white py-2 rounded-md font-medium hover:bg-[#3a487f] transition">
              Add to Cart
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

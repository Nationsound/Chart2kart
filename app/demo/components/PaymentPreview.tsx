"use client";

import { motion } from "framer-motion";

const sampleItems = [
  { id: 1, name: "Blue T-Shirt", price: 25 },
  { id: 2, name: "Headphones", price: 50 },
  { id: 3, name: "Leather Bag", price: 80 },
];

export default function PaymentPreview() {
  const total = sampleItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Payment Preview
      </h2>

      {/* Items */}
      <div className="space-y-3 mb-4">
        {sampleItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-700 rounded"
          >
            <span className="text-gray-800 dark:text-gray-200">{item.name}</span>
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              ${item.price.toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center font-bold text-gray-900 dark:text-gray-100 mb-4">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      {/* Pay Now Button */}
      <button className="w-full bg-[#4C5AA3] text-white py-3 rounded-md font-semibold hover:bg-[#3a487f] transition">
        Pay Now
      </button>
    </motion.div>
  );
}

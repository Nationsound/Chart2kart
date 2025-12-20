"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function CartDrawer() {
  const [open, setOpen] = useState(false);

  const cartItems = [
    { id: 1, name: "Blue T-Shirt", price: "$25" },
    { id: 2, name: "Headphones", price: "$50" },
    { id: 3, name: "Leather Bag", price: "$80" },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-[#4C5AA3] text-white px-6 py-3 rounded-md hover:bg-[#3a487f] transition"
      >
        Open Cart Drawer
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-2xl p-6 z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Your Cart
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-600 dark:text-gray-300 font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-700 rounded"
                  >
                    <span className="text-gray-800 dark:text-gray-200">
                      {item.name}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Checkout Button */}
              <button className="mt-6 bg-[#4C5AA3] text-white py-3 rounded-md hover:bg-[#3a487f] transition">
                Checkout
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Step2Products({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-xl shadow"
    >
      <h2 className="text-2xl font-bold mb-6">Add Products</h2>

      <div className="border-dashed border-2 p-6 text-center rounded mb-6">
        Upload product images and details
      </div>

      <div className="flex justify-between">
        <button onClick={onBack} className="text-gray-500">
          Back
        </button>
        <button
          onClick={onNext}
          className="bg-[#4C5AA3] text-white px-6 py-3 rounded-lg"
        >
          Continue
        </button>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Step3Design({
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
      <h2 className="text-2xl font-bold mb-6">Design Your Store</h2>

      <p className="mb-6 text-gray-600">
        Choose layout, colors, and dark mode
      </p>

      <div className="flex justify-between">
        <button onClick={onBack} className="text-gray-500">
          Back
        </button>
        <button
          onClick={onNext}
          className="bg-[#4C5AA3] text-white px-6 py-3 rounded-lg"
        >
          Preview Store
        </button>
      </div>
    </motion.div>
  );
}

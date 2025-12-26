"use client";

import { motion } from "framer-motion";

export default function Step4Preview({ onBack }: { onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white p-8 rounded-xl shadow"
    >
      <h2 className="text-2xl font-bold mb-6">Preview Your Store</h2>

      <div className="h-64 border rounded mb-6 flex items-center justify-center">
        Store preview here
      </div>

      <div className="flex justify-between">
        <button onClick={onBack} className="text-gray-500">
          Back
        </button>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
          Publish Store
        </button>
      </div>
    </motion.div>
  );
}

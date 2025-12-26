"use client";

import { motion } from "framer-motion";

export default function Step1StoreInfo({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-xl shadow"
    >
      <h2 className="text-2xl font-bold mb-6">Store Information</h2>

      <input
        placeholder="Store Name"
        className="w-full mb-4 px-4 py-3 border rounded"
      />

      <input
        placeholder="WhatsApp Number"
        className="w-full mb-6 px-4 py-3 border rounded"
      />

      <button
        onClick={onNext}
        className="bg-[#4C5AA3] text-white px-6 py-3 rounded-lg"
      >
        Continue
      </button>
    </motion.div>
  );
}

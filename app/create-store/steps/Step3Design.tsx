"use client";

import { useStore } from "../../context/StoreContext";
import { motion } from "framer-motion";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function Step3Design({ onNext, onBack }: Props) {
  const { store, toggleTheme } = useStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow p-6 space-y-6"
    >
      <h2 className="text-2xl font-bold">Design & Theme</h2>
      <p className="text-gray-500">
        Choose your store theme. Toggle between light and dark modes.
      </p>

      <div className="flex items-center gap-4">
        <span className="font-medium">Current Theme: </span>
        <span className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
          {store.theme}
        </span>

        <button
          onClick={toggleTheme}
          className="ml-4 px-4 py-2 bg-[#4C5AA3] text-white rounded hover:bg-[#3a487f] transition"
        >
          Toggle Theme
        </button>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <button onClick={onBack} className="text-gray-500">
          ← Back
        </button>
        <button
          onClick={onNext}
          className="bg-[#4C5AA3] text-white px-6 py-2 rounded"
        >
          Continue →
        </button>
      </div>
    </motion.div>
  );
}

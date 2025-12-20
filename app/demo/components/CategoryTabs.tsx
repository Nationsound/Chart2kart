"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Clothing", "Electronics", "Accessories", "Music"];

export default function CategoryTabs() {
  const [selected, setSelected] = useState("All");

  return (
    <div className="flex justify-center gap-6 mb-8 relative">
      {categories.map((cat) => (
        <div
          key={cat}
          className="relative cursor-pointer px-3 py-1 text-gray-700 dark:text-gray-200 font-medium"
          onClick={() => setSelected(cat)}
        >
          {cat}

          {/* Animated underline */}
          {selected === cat && (
            <motion.div
              layoutId="underline"
              className="absolute bottom-0 left-0 right-0 h-1 bg-[#4C5AA3] rounded"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

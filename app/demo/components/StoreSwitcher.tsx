"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stores = [
  { id: 1, name: "Fashion Hub" },
  { id: 2, name: "Tech World" },
  { id: 3, name: "Home Essentials" },
  { id: 4, name: "Music Store" },
];

export default function StoreSwitcher() {
  const [selected, setSelected] = useState(stores[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="inline-flex justify-between items-center w-48 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {selected.name}
        <span className="ml-2">▼</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 z-50"
          >
            {stores.map((store) => (
              <motion.div
                key={store.id}
                whileHover={{ scale: 1.05, backgroundColor: "#eef0fb" }}
                className="px-4 py-2 cursor-pointer text-gray-700 dark:text-gray-100"
                onClick={() => {
                  setSelected(store);
                  setOpen(false);
                }}
              >
                {store.name}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

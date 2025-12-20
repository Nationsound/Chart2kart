"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);

    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md border border-gray-400 dark:border-gray-500 
                 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </motion.button>
  );
}

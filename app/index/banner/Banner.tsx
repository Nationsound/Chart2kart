"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();

  return (
    <div className="py-10">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-lg px-4 md:px-10"
        >
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center text-3xl md:text-5xl font-bold text-[#4C5AA3] mb-10 pt-10"
          >
            Launch a Store That Converts and Scales With Ease
          </motion.h2>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <div className="w-full max-w-5xl">
              <Image
                src="/images/store11.PNG"
                alt="banner"
                width={1800}
                height={1000}
                className="w-full rounded-lg object-cover shadow-md"
                priority
              />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 justify-center py-10"
          >
            <button
            onClick={() => router.push("/signup")} 
            className="bg-[#4C5AA3] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a487f] transition">
              Get Started
            </button>

            <button
              onClick={() => router.push("/demo")}
              className="border border-[#4C5AA3] text-[#4C5AA3] px-8 py-3 rounded-lg font-semibold hover:bg-[#eef0fb] transition"
            >
              See Demo
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Banner;

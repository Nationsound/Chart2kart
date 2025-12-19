"use client"
import React from 'react'
import { motion } from "framer-motion";
import { FaLightbulb, FaTools } from "react-icons/fa";

const Mission = () => {
  return (
    <div>
        <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 shadow-lg max-w-3xl mx-auto text-center mt-12 mb-12"
    >
      <h2 className="text-3xl font-bold text-[#8f9dc7] mb-6 tracking-wide">
        || Our Unified Mission
      </h2>

      <div className="flex justify-center gap-6 mb-4 text-4xl text-[#5E6FB8]">
        <FaTools />
        <FaLightbulb />
      </div>

      <p className="text-gray-600 leading-relaxed text-justify tracking-wider">
        Our mission is to simplify online selling by transforming WhatsApp conversations 
        into fully functional digital storefronts. We empower entrepreneurs, vendors, and 
        small businesses to create, manage, and share their stores effortlessly, turning 
        chats into sales with clarity and confidence.
      </p>
    </motion.div>
    </div>
  )
}

export default Mission
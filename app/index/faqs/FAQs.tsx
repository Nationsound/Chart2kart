"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How does Chart2Kart convert WhatsApp chats into carts?",
    answer:
      "Chart2Kart integrates with your WhatsApp account to track customer messages and automatically create product carts based on their requests, making sales seamless.",
  },
  {
    question: "Can I create my store in minutes?",
    answer:
      "Absolutely! Our platform is designed for speed. Set up your store with a few clicks and start sharing your products instantly.",
  },
  {
    question: "Is customer data secure?",
    answer:
      "Yes. We prioritize security and use industry-standard protocols to protect your customers' data and your business information.",
  },
  {
    question: "Can I track orders and sales?",
    answer:
      "Yes. Chart2Kart provides an easy-to-use dashboard where you can track orders, monitor sales, and manage your store efficiently.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 px-6 bg-[white]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <p className="text-gray-600 mt-4">
          We’ve answered some of the most common questions about Chart2Kart.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center text-left text-gray-800 font-medium focus:outline-none"
              onClick={() => toggleIndex(index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-6 pb-4 text-gray-600 text-sm"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  { id: 1, name: "Blue T-Shirt" },
  { id: 2, name: "Headphones" },
  { id: 3, name: "Leather Bag" },
];

export default function WhatsappSim() {
  const [messages, setMessages] = useState<{ id: number; text: string }[]>([]);
  const [cart, setCart] = useState<{ id: number; name: string }[]>([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = (text: string) => {
    const id = Date.now();
    setMessages([...messages, { id, text }]);
    const product = products.find((p) =>
      text.toLowerCase().includes(p.name.toLowerCase())
    );
    if (product) {
      setCart([...cart, product]);
    }
    setInput("");
  };

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="max-w-md mx-auto p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4"
      >
        Simulate WhatsApp to Cart
      </motion.h2>

      {/* Chat Messages */}
      <div className="space-y-2 h-64 overflow-y-auto mb-4 p-2 border border-gray-300 dark:border-gray-700 rounded">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="p-2 bg-green-100 dark:bg-green-700 rounded"
          >
            {msg.text}
          </motion.div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Box */}
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a product..."
          className="flex-1 px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
        <button
          onClick={() => input && sendMessage(input)}
          className="px-4 py-2 bg-[#4C5AA3] text-white rounded hover:bg-[#3a487f] transition"
        >
          Send
        </button>
      </div>

      {/* Cart Drawer Preview */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 p-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded shadow-lg"
          >
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Cart Preview
            </h3>
            <ul className="space-y-1">
              {cart.map((p) => (
                <li key={p.id} className="text-gray-700 dark:text-gray-200">
                  {p.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

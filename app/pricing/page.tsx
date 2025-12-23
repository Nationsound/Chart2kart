"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for individuals testing the waters",
    features: [
      "1 WhatsApp Store",
      "Up to 3 products",
      "Basic store link",
      "Chat-to-cart",
    ],
  },
  {
    name: "Pro",
    price: "₦5,000 / mo",
    description: "Best for growing online sellers",
    popular: true,
    features: [
      "3 WhatsApp Stores",
      "Unlimited products",
      "Cart automation",
      "Order tracking",
      "Analytics dashboard",
    ],
  },
  {
    name: "Business",
    price: "₦15,000 / mo",
    description: "For brands & high-volume sellers",
    features: [
      "Unlimited stores",
      "Team access",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Simple Pricing for Every Seller
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Start free. Upgrade when you’re ready to scale.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative bg-white rounded-2xl shadow-lg p-8 text-left ${
                plan.popular
                  ? "border-2 border-[#8f9dc7] scale-105"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-[#8f9dc7] text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-semibold text-gray-900">
                {plan.name}
              </h3>
              <p className="text-gray-500 mt-2">{plan.description}</p>

              <div className="text-4xl font-bold text-[#5e6fb8] mt-6">
                {plan.price}
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <FaCheck className="text-[#8f9dc7]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className={`block text-center mt-8 px-6 py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? "bg-[#8f9dc7] text-white hover:bg-[#5e6fb8]"
                    : "border border-[#8f9dc7] text-[#8f9dc7] hover:bg-[#eef0fb]"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

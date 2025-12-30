"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { demoStores, Product } from "../../context/demoStores";

interface Props {
  storeId: string;
}

export default function PublicStoreClient({ storeId }: Props) {
  const [store, setStore] = useState<any>(null);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const foundStore = demoStores.find((s) => s.id === storeId);
    console.log("storeId:", storeId);
    console.log("foundStore:", foundStore);
    setStore(foundStore);
  }, [storeId]);

  const handleAddToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    setDrawerOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  if (!store) return <p className="p-6">Store not found.</p>;

  return (
    <div className={`min-h-screen p-6 ${store.theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      
      {/* Header with cart icon */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">{store.storeName}</h2>
        <div className="flex items-center gap-2">
          <FaShoppingCart className="w-6 h-6 text-green-500" />
          <span className="font-semibold">{cartItems.length}</span>
        </div>
      </div>

      {/* Description */}
      <p className="mb-6 text-gray-600 dark:text-gray-300">{store.description}</p>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {store.products.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400">No products available.</p>
        ) : (
          store.products.map((product: Product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.03 }}
              className={`border rounded-lg overflow-hidden shadow-lg flex flex-col ${store.theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white"}`}
            >
              {product.image && (
                <div className="relative h-48 w-full">
                  <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                </div>
              )}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-gray-500 dark:text-gray-300">₦{product.price.toLocaleString()}</p>
                  {product.category && <p className="text-sm text-gray-400">{product.category}</p>}
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition flex items-center justify-center gap-2"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Cart Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-80 h-full bg-white dark:bg-gray-800 shadow-2xl p-6 z-50"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <FaShoppingCart /> Cart
              </h3>
              <button onClick={() => setDrawerOpen(false)} className="text-red-500 font-semibold">Close</button>
            </div>
            <div className="space-y-3">
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-2">
                    <span>{item.name}</span>
                    <div className="flex gap-2 items-center">
                      <span>₦{item.price.toLocaleString()}</span>
                      <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500 hover:underline">
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <button className="mt-6 w-full bg-[#4C5AA3] text-white py-2 rounded hover:bg-[#3a487f] transition">
              Checkout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

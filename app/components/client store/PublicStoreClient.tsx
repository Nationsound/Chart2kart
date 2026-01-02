"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { demoStores, Product, StoreData } from "../../context/demoStores";

interface Props {
  storeId: string;
}

export default function PublicStoreClient({ storeId }: Props) {
  const router = useRouter();
  const [store, setStore] = useState<StoreData | null>(null);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const found = demoStores.find((s) => s.id === storeId);
    setStore(found || null);
  }, [storeId]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
    setDrawerOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  const handleCheckout = () => {
    if (!cartItems.length) return;
    router.push(`/checkout?storeId=${storeId}`);
  };

  if (!store) return <p className="p-6">Store not found.</p>;

  return (
    <div
      className={`min-h-screen p-6 ${
        store.theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Store Branding */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <Image src={store.logo} alt={store.storeName} width={48} height={48} />
          <h2 className="text-3xl font-bold">{store.storeName}</h2>
        </div>
        <div className="flex items-center gap-2">
          <FaShoppingCart style={{ color: store.brandColor }} />
          <span className="font-semibold">{cartItems.length}</span>
        </div>
      </div>

      <p className="mb-8 opacity-80">{store.description}</p>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {store.products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.03 }}
            className={`rounded-xl shadow-lg flex flex-col min-h-130 overflow-hidden
              ${store.theme === "dark" ? "bg-gray-800" : "bg-white"}`}
          >
            <div className="relative h-102">
              <Image
                src={product.image!}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="opacity-70">₦{product.price.toLocaleString()}</p>
                <p className="text-sm opacity-50">{product.category}</p>
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                style={{ backgroundColor: store.brandColor }}
                className="mt-4 py-2.5 rounded-lg text-white font-medium"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cart Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-0 right-0 w-80 h-full bg-white dark:bg-gray-800 shadow-xl p-6 z-50"
          >
            <div className="flex justify-between mb-4">
              <h3 className="font-bold text-xl">Cart</h3>
              <button onClick={() => setDrawerOpen(false)}>Close</button>
            </div>

            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name}</span>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={handleCheckout}
              className="mt-6 w-full py-3 rounded-lg text-white font-semibold"
              style={{ backgroundColor: store.brandColor }}
            >
              Checkout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

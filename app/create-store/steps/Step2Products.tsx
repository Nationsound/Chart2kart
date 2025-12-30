"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useStore, Product } from "../../context/StoreContext";
import { v4 as uuidv4 } from "uuid";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function Step2Products({ onNext, onBack }: Props) {
  const { store, addProduct, removeProduct } = useStore();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleAddProduct = () => {
    if (!name || !price) return;

    let imageUrl: string | undefined = undefined;
    if (image) {
      imageUrl = URL.createObjectURL(image); // Convert file to a temporary URL
    }

    const newProduct: Product = {
      id: uuidv4(),
      name,
      price: Number(price),
      category,
      image: imageUrl,
    };

    addProduct(newProduct);

    setName("");
    setPrice("");
    setCategory("");
    setImage(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow p-6 space-y-6"
    >
      <h2 className="text-2xl font-bold">Add Products</h2>
      <p className="text-gray-500">
        Add items customers can buy from your WhatsApp store.
      </p>

      {/* Form */}
      <div className="grid md:grid-cols-4 gap-4">
        <input
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          placeholder="Category (optional)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => e.target.files && setImage(e.target.files[0])}
          className="border px-3 py-2 rounded"
        />
      </div>

      <button
        onClick={handleAddProduct}
        className="bg-[#4C5AA3] text-white px-6 py-2 rounded hover:bg-[#3a487f]"
      >
        Add Product
      </button>

      {/* Product List */}
      {store.products.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold">Products</h3>

          {store.products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border rounded p-3"
            >
              <div className="flex items-center gap-4">
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                )}
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">
                    ₦{product.price.toLocaleString()}{" "}
                    {product.category && `• ${product.category}`}
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeProduct(product.id)}
                className="text-red-500 hover:underline text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <button onClick={onBack} className="text-gray-500">
          ← Back
        </button>
        <button
          onClick={onNext}
          className="bg-[#4C5AA3] text-white px-6 py-2 rounded"
        >
          Continue →
        </button>
      </div>
    </motion.div>
  );
}

"use client";

import { useStore } from "../context/StoreContext";

export default function DebugStore() {
  const { store, setStoreName, toggleTheme } = useStore();

  return (
    <div className="p-6 border rounded-lg space-y-4 max-w-md bg-white shadow">
      <h3 className="font-bold text-lg">🧪 Store Context Debug</h3>

      {/* Store Name */}
      <div>
        <p className="text-sm text-gray-500">Store Name</p>
        <p className="font-semibold text-blue-600">
          {store.storeName || "—"}
        </p>
      </div>

      {/* Theme */}
      <div>
        <p className="text-sm text-gray-500">Theme</p>
        <p className="font-semibold text-green-600">{store.theme}</p>
      </div>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-[#4C5AA3] text-white rounded"
      >
        Toggle Theme
      </button>

      {/* Products */}
      <div className="pt-4 border-t">
        <p className="font-semibold mb-2">
          Products ({store.products.length})
        </p>

        {store.products.length === 0 ? (
          <p className="text-sm text-gray-400">No products added yet</p>
        ) : (
          <ul className="space-y-2">
            {store.products.map((product) => (
              <li
                key={product.id}
                className="text-sm bg-gray-50 p-2 rounded"
              >
                <p className="font-medium">{product.name}</p>
                <p className="text-gray-500">₦{product.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

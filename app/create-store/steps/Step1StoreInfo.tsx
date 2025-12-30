"use client";
import { useStore } from "../../context/StoreContext";

export default function Step1StoreInfo({ onNext }: { onNext: () => void }) {
  const { store, setStoreName, setStoreDescription } = useStore();

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      <h2 className="text-2xl font-bold">Store Information</h2>

      <input
        value={store.storeName}
        onChange={(e) => setStoreName(e.target.value)}
        placeholder="Store name"
        className="w-full border px-3 py-2 rounded"
      />

      <textarea
        value={store.description}
        onChange={(e) => setStoreDescription(e.target.value)}
        placeholder="Store description"
        className="w-full border px-3 py-2 rounded"
      />

      <button
        disabled={!store.storeName}
        onClick={onNext}
        className="bg-[#4C5AA3] text-white px-6 py-2 rounded disabled:opacity-50"
      >
        Continue
      </button>
    </div>
  );
}

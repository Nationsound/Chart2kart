"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { demoStores, StoreData } from "../context/demoStores";

interface Props {
  storeId: string;
}

export default function CheckoutClient({ storeId }: Props) {
  const [store, setStore] = useState<StoreData | null>(null);

  useEffect(() => {
    const foundStore = demoStores.find((s) => s.id === storeId);
    setStore(foundStore || null);
  }, [storeId]);

  if (!store) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg opacity-70">Loading store...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full">
        
        {/* Store branding */}
        <div className="flex items-center gap-3 mb-6">
          <Image
            src={store.logo}
            alt={store.storeName}
            width={50}
            height={50}
            className="rounded"
          />
          <h2 className="text-2xl font-bold">{store.storeName}</h2>
        </div>

        <p className="mb-6 opacity-70">
          You’re checking out from <strong>{store.storeName}</strong>.
          <br />
          Secure payments coming next.
        </p>

        <button
          className="w-full py-3 rounded-lg text-white font-semibold transition"
          style={{ backgroundColor: store.brandColor }}
        >
          Pay Now (Coming Soon)
        </button>
      </div>
    </div>
  );
}

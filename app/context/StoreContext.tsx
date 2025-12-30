"use client";

import React, { createContext, useContext, useState } from "react";

/* ================= TYPES ================= */

export type Store = {
  storeName: string;
  description: string;
  products: any[];
  theme: string;
};

export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  category?: string;
}

interface StoreState {
  storeName: string;
  description: string;
  products: Product[];
  theme: "light" | "dark";
}

interface StoreContextType {
  store: StoreState;
  setStoreName: (name: string) => void;
//   setDescription: (desc: string) => void;
  setStoreDescription: (desc: string) => void;
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
  toggleTheme: () => void;
  resetStore: () => void;
}

/* ================= DEFAULT STATE ================= */

const initialStoreState: StoreState = {
  storeName: "",
  description: "",
  products: [],
  theme: "light",
};

/* ================= CONTEXT ================= */

const StoreContext = createContext<StoreContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [store, setStore] = useState<StoreState>(initialStoreState);

  const setStoreName = (name: string) =>
    setStore((prev) => ({ ...prev, storeName: name }));

  const setStoreDescription = (desc: string) =>
    setStore((prev) => ({ ...prev, description: desc }));

  const addProduct = (product: Product) =>
    setStore((prev) => ({
      ...prev,
      products: [...prev.products, product],
    }));

  const removeProduct = (id: string) =>
    setStore((prev) => ({
      ...prev,
      products: prev.products.filter((p) => p.id !== id),
    }));

  const toggleTheme = () =>
    setStore((prev) => ({
      ...prev,
      theme: prev.theme === "light" ? "dark" : "light",
    }));

  const resetStore = () => setStore(initialStoreState);

  return (
    <StoreContext.Provider
      value={{
        store,
        setStoreName,
        setStoreDescription,
        addProduct,
        removeProduct,
        toggleTheme,
        resetStore,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

/* ================= HOOK ================= */

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}

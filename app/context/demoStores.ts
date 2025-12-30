// demoStores.ts

// Define Product type
export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  category?: string;
}

// Define StoreData type
export type StoreData = {
  id: string;
  storeName: string;
  description: string;
  products: Product[];
  theme: "light" | "dark";
};

// Sample demo stores
export const demoStores: StoreData[] = [
  {
    id: "store1",
    storeName: "Olusola's Store",
    description: "Awesome gadgets and apparel.",
    products: [
      {
        id: "p1",
        name: "Blue T-Shirt",
        price: 2000,
        image: "/images/blue-tshirt.jpg",
        category: "Apparel",
      },
      {
        id: "p2",
        name: "Headphones",
        price: 5000,
        image: "/images/headphones.jpg",
        category: "Electronics",
      },
      {
        id: "p5",
        name: "Smart Watch",
        price: 12000,
        image: "/images/smartwatch.jpg",
        category: "Electronics",
      },
    ],
    theme: "light",
  },
  {
    id: "store2",
    storeName: "Adebayo's Store",
    description: "Exclusive fashion items.",
    products: [
      {
        id: "p3",
        name: "Leather Bag",
        price: 15000,
        image: "/images/leather-bag.jpg",
        category: "Accessories",
      },
      {
        id: "p4",
        name: "Sneakers",
        price: 8000,
        image: "/images/sneakers.jpg",
        category: "Footwear",
      },
      {
        id: "p6",
        name: "Designer Hat",
        price: 4500,
        image: "/images/hat.jpg",
        category: "Accessories",
      },
    ],
    theme: "dark",
  },
];

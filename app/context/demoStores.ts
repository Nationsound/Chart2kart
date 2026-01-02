// app/context/demoStores.ts

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
  brandColor: string;
  logo: string;
};

// Sample demo stores
export const demoStores: StoreData[] = [
  {
    id: "store1",
    storeName: "Workaholic's Apparel",
    description: "Awesome gadgets and apparel.",
    theme: "dark",
    brandColor: "#16a34a", // green accent
    logo: "/images/workaholic.png",
    products: [
      {
        id: "p1",
        name: "Blue T-Shirt",
        price: 2000,
        image: "/images/blue t-shirt.jpeg",
        category: "Apparel",
      },
      {
        id: "p2",
        name: "Headphones",
        price: 5000,
        image: "/images/headphones.jpeg",
        category: "Electronics",
      },
      {
        id: "p5",
        name: "Smart Watch",
        price: 12000,
        image: "/images/smart watch.jpeg",
        category: "Electronics",
      },
    ],
  },
  {
    id: "store2",
    storeName: "Costco Wholesale",
    description: "Exclusive fashion items.",
    theme: "dark",
    brandColor: "#7c3aed", // violet accent
    logo: "/images/costco.png",
    products: [
      {
        id: "p3",
        name: "Leather Bag",
        price: 15000,
        image: "/images/leather-bag.jpeg",
        category: "Accessories",
      },
      {
        id: "p4",
        name: "Sneakers",
        price: 8000,
        image: "/images/sneakers.jpeg",
        category: "Footwear",
      },
      {
        id: "p6",
        name: "Designer Hat",
        price: 4500,
        image: "/images/hat.jpeg",
        category: "Accessories",
      },
    ],
  },
];

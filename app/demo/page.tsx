"use client";

import DarkModeToggle from "../demo/components/DarkModeToggle";
import StoreGrid from "../demo/components/StoreGrid";
import CartDrawer from "../demo/components/CartDrawer";
import CategoryTabs from "../demo/components/CategoryTabs";
import PaymentPreview from "../demo/components/PaymentPreview";
import WhatsappSim from "../demo/components/WhatsappSim";
import StoreSwitcher from "../demo/components/StoreSwitcher";

const DemoPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition">

      {/* Toolbar */}
      <div className="flex justify-between items-center px-6 py-4 border-b dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Demo Preview
        </h1>

        <div className="flex gap-4">
          <StoreSwitcher />
          <DarkModeToggle />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-16">

        <CategoryTabs />

        <StoreGrid />

        <CartDrawer />

        <WhatsappSim />

        <PaymentPreview />
      </div>
    </div>
  );
};

export default DemoPage;

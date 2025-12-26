"use client";

import { useState } from "react";

import Step1StoreInfo from "../create-store/steps/Step1StoreInfo";
import Step2Products from "../create-store/steps/Step2Products";
import Step3Design from "../create-store/steps/Step3Design";
import Step4Preview from "../create-store/steps/Step4Preview";

export default function CreateStorePage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-6">

        {/* Progress Header */}
        <p className="text-sm text-gray-500 mb-6">
          Step {step} of 4
        </p>

        {step === 1 && <Step1StoreInfo onNext={() => setStep(2)} />}
        {step === 2 && (
          <Step2Products
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <Step3Design
            onNext={() => setStep(4)}
            onBack={() => setStep(2)}
          />
        )}
        {step === 4 && <Step4Preview onBack={() => setStep(3)} />}
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface RazorpayButtonProps {
  planName: string;
  amount: number; // in paise
  ctaText?: string;
}

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function RazorpayButton({
  planName,
  amount,
  ctaText = "Buy Now",
}: RazorpayButtonProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadRazorpayScript();
  }, []);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planName, amount }),
      });
      const data = await res.json();

      if (!data.orderId) {
        alert("Payment service not configured. Please set up Razorpay keys.");
        setLoading(false);
        return;
      }

      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: "Optimax Studio",
        description: planName,
        order_id: data.orderId,
        handler: (response: Record<string, string>) => {
          window.location.href = `/payment/success?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}`;
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#2563EB",
        },
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Razorpay = (window as any).Razorpay as new (
        options: Record<string, unknown>
      ) => { open: () => void };

      if (!Razorpay) {
        alert("Razorpay SDK not loaded. Please try again.");
        setLoading(false);
        return;
      }

      const rzp = new Razorpay(options);
      rzp.open();
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow disabled:opacity-60 w-full"
    >
      {loading ? "Loading..." : ctaText}
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}

"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

function SuccessContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("payment_id");
  const orderId = searchParams.get("order_id");

  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-4">
      <FadeIn className="max-w-lg w-full text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
          <CheckCircle className="h-10 w-10 text-green-400" />
        </div>

        <h1 className="text-3xl font-bold text-text font-display mb-3">
          Payment Successful!
        </h1>
        <p className="text-muted mb-6">
          Thank you for your purchase. Our team will reach out within 24 hours to
          onboard you.
        </p>

        {paymentId && (
          <div className="rounded-xl border border-white/5 bg-navy-800/40 p-4 mb-6 text-left">
            <div className="text-sm text-muted mb-1">
              Payment ID: <span className="text-text font-mono">{paymentId}</span>
            </div>
            <div className="text-sm text-muted">
              Order ID: <span className="text-text font-mono">{orderId}</span>
            </div>
          </div>
        )}

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow"
        >
          Back to Home
          <ArrowRight className="h-5 w-5" />
        </Link>
      </FadeIn>
    </section>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <section className="flex min-h-[80vh] flex-col items-center justify-center px-4">
          <div className="max-w-lg w-full text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 animate-pulse" />
            <h1 className="text-3xl font-bold text-text font-display mb-3">
              Loading...
            </h1>
          </div>
        </section>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}

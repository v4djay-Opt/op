import { NextRequest, NextResponse } from "next/server";

const VALID_AMOUNTS = new Set([
  299900,   // School Starter — Rs. 2,999/mo
  599900,   // School Professional / Interior Studio — Rs. 5,999/mo
  499900,   // Hospital Clinic / Gym Growth — Rs. 4,999/mo
  1499900,  // Hospital Pro — Rs. 14,999/mo
  249900,   // Gym Starter — Rs. 2,499/mo
  199900,   // Real Estate Agent — Rs. 1,999/mo
  799900,   // Real Estate Team — Rs. 7,999/mo
  149900,   // Interior Freelancer — Rs. 1,499/mo
]);

const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const { planName, amount } = await request.json();

    if (!planName || typeof amount !== "number" || amount < 100) {
      return NextResponse.json(
        { error: "Invalid payment request." },
        { status: 400 }
      );
    }

    if (!VALID_AMOUNTS.has(amount)) {
      return NextResponse.json(
        { error: "Invalid payment amount." },
        { status: 400 }
      );
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { error: "Razorpay not configured" },
        { status: 503 }
      );
    }

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

    const orderRes = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
        notes: { planName },
      }),
    });

    const orderData = await orderRes.json();

    if (!orderRes.ok) {
      return NextResponse.json(
        { error: orderData.error?.description || "Failed to create order" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        orderId: orderData.id,
        amount: orderData.amount,
        currency: orderData.currency,
        keyId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Payment error:", error);
    return NextResponse.json(
      { error: "Failed to initiate payment" },
      { status: 500 }
    );
  }
}

"use client";

import { useState, useRef, useEffect } from "react";
import { Plus, X } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in Real Estate, Education, Healthcare, Fitness, E-commerce, and Service-based businesses. Our deep domain expertise allows us to build solutions that fit your industry's unique workflows.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most websites are delivered in 4–6 weeks. Custom CRMs and portals typically take 8–12 weeks depending on complexity. We maintain transparent timelines and weekly progress updates.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. All our plans include post-launch support. Starter plans get 1 month, Growth plans get 3 months, and Enterprise clients receive SLA-backed support with dedicated account management.",
  },
  {
    question: "Can you integrate with our existing tools?",
    answer:
      "Absolutely. We integrate with Razorpay, WhatsApp Business API, Google Workspace, CRMs like Salesforce and HubSpot, and any API-based service your business uses.",
  },
  {
    question: "What makes Optimax different from other agencies?",
    answer:
      "We don't just build websites — we build revenue machines. Every project starts with a business audit. We track KPIs, optimize for conversions, and provide transparent reporting. Your growth is our success metric.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "We offer a 100% satisfaction guarantee on the first milestone. If you're not happy with the initial design concept, we'll revise it or refund your deposit — no questions asked.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const answerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (answerRef.current) {
      setHeight(answerRef.current.scrollHeight);
    }
  }, []);

  return (
    <div
      className={`rounded-xl border transition-all duration-300 ${
        isOpen
          ? "bg-white border-accent/20 shadow-card"
          : "bg-white/60 border-border hover:border-accent/10"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
        aria-expanded={isOpen}
      >
        <span
          className={`text-base font-semibold transition-colors ${
            isOpen ? "text-accent" : "text-text"
          }`}
        >
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-accent text-white rotate-0"
              : "bg-accent-light text-accent"
          }`}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: isOpen ? height : 0 }}
      >
        <div ref={answerRef} className="px-6 pb-5">
          <div
            className={`h-[3px] w-12 rounded-full mb-3 ${
              isOpen ? "bg-accent" : "bg-transparent"
            }`}
          />
          <p className="text-sm text-text-secondary leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-12 lg:py-20 px-4">
      <div className="mx-auto max-w-[700px]">
        <SectionHeading
          label="FAQ"
          title={<>Frequently Asked <em className="italic text-accent">Questions</em></>}
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

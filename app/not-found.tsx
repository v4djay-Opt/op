import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mx-auto mb-6 text-8xl font-bold text-accent/20 font-display">
          404
        </div>

        <h1 className="text-3xl font-bold text-text font-display mb-3">
          Page Not Found
        </h1>
        <p className="text-muted mb-8">
          The page you are looking for does not exist or has been moved. Let us
          get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-base font-medium text-text transition-all hover:bg-white/5 hover:border-white/20"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

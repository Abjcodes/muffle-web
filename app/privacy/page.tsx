import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Muffle",
  description: "Muffle privacy policy. Muffle does not collect, store, or share any personal data.",
  alternates: {
    canonical: "/privacy",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-[family-name:var(--font-jakarta)]">
      <div className="max-w-4xl mx-auto px-10 md:px-20 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-12 transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: March 7, 2026</p>

        <div className="space-y-6 text-white/70 leading-relaxed">
          <p>Muffle respects your privacy.</p>
          <p>Muffle does not collect, store, or share any personal data.</p>
          <p>
            The app runs entirely locally on your device. Any preferences or settings are stored
            only on your computer and are never sent to any server.
          </p>
          <p>
            The website does not use analytics, tracking tools, or advertising cookies. The license
            validation is through Lemon Squeezy, which is the only third party service used.
          </p>
          <p>If this ever changes, this privacy policy will be updated.</p>
        </div>
      </div>
    </div>
  );
}

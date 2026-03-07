"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Muffle",
  operatingSystem: "macOS 14.0+",
  applicationCategory: "ProductivityApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "7 day free trial",
  },
  description:
    "Muffle blurs everything except the active window, so that you can focus.",
};

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const interacted = useRef(false);

  const handleEnter = () => { interacted.current = true; setHovered(true); };
  const handleLeave = () => { setHovered(false); };

  const B = ({ children }: { children: string }) => (
    <span className={
      !interacted.current ? "blur-static" :
      hovered ? "blur-out" : "blur-in"
    }>
      {children}
    </span>
  );

  return (
    <>
      <style>{`
        .blur-static { filter: blur(3px); opacity: 0.7; }
        @keyframes blurOut {
          0%   { filter: blur(3px); opacity: 0.7; }
          40%  { opacity: 1; }
          100% { filter: blur(0px); opacity: 1; }
        }
        @keyframes blurIn {
          0%   { filter: blur(0px); opacity: 1; }
          60%  { opacity: 0.7; }
          100% { filter: blur(3px); opacity: 0.7; }
        }
        .blur-out { animation: blurOut 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .blur-in  { animation: blurIn  0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#1a1a1a] text-white font-[family-name:var(--font-jakarta)]">
        <div className="max-w-4xl mx-auto px-10 md:px-20">
        {/* Nav */}
        <nav className="pt-8 mb-0">
          <span className="text-base text-white font-semibold tracking-wide">
            Muffle
          </span>
        </nav>

        {/* Hero */}
        <main className="pt-10 pb-0">
          {/* App icon */}
          <div className="mb-10">
            <Image
              src="/icon.png"
              alt="Muffle app icon"
              width={80}
              height={80}
              priority
              className="rounded-[18px]"
            />
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[1.05] tracking-tight mb-6">
            Let the{" "}
            <span className="inline-block" style={{ filter: "blur(3px)" }}>distractions</span>{" "}
            <em className="not-italic italic font-extrabold">fade</em>
          </h1>

          {/* Subtitle */}
          <p className="text-[clamp(1rem,2.5vw,1.35rem)] text-white/50 font-semibold max-w-xl leading-relaxed mb-10">
            Muffle blurs everything except the active window, helping you stay focused and distraction-free.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="https://github.com/Abjcodes/Muffle-releases/releases/download/dmg/Muffle.1.0.dmg"
              download
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-base hover:bg-white/15 transition-all duration-200 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_4px_24px_rgba(0,0,0,0.3)]"
            >
              <svg className="w-4 h-4 mr-2 flex-shrink-0" viewBox="0 0 814 1000" fill="currentColor" aria-hidden="true">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.2-150.3-107.4C46.8 790.7 0 663 0 541.8c0-194.3 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
              </svg>
              Download for MacOS
            </a>
            <span className="text-sm text-white/40">
              7 day free trial&nbsp;·&nbsp;Supported from MacOS 14.0
            </span>
          </div>
        </main>

        {/* Video demo */}
        <div className="relative mt-16">
          <video
            src="/demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-xl border border-white/10 shadow-2xl shadow-black/60"
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #1a1a1a 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Copy section */}
        <div
          className="mt-16 mb-24"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <p className="text-[clamp(1.25rem,3vw,1.75rem)] text-white/80 font-semibold leading-loose">
            <B>You</B> <B>work</B> <B>best</B> <B>when</B> <B>your</B> <B>mind</B> <B>stays</B> <B>on</B> <B>one</B> <B>thing.</B>
            <br />
            <B>But</B> <B>modern</B> <B>desktops</B> <B>constantly</B> <B>compete</B> <B>for</B> your <B>attention.</B>
            <br />
            <B>Every</B> <B>distraction</B> <B>pulls</B> <B>you</B> <B>away.</B>
            <br />
            Attention is <B>precious.</B>
            <br />
            <B>And</B> <B>it&apos;s</B> limited<B>.</B>
            <br />
            <B>Muffle</B> <B>gently</B> <B>fades</B> <B>everything</B> <B>except</B> <B>the</B> <B>window</B> <B>you&apos;re</B> <B>working</B> <B>on.</B>
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-0 mb-24 grid grid-cols-2 gap-3">

          {/* Card 1: Shake to toggle — tall (row-span-2) */}
          <div className="row-span-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-6 flex flex-col justify-between overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_1px_0_0_rgba(255,255,255,0.05),inset_-1px_0_0_rgba(255,255,255,0.03),0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4l6.5 18 3-7 7-3z" />
                </svg>
              </div>
              <p className="text-white font-semibold text-base leading-snug mb-1">Shake to toggle</p>
              <p className="text-white/40 text-sm leading-relaxed">Shake your cursor to instantly blur or unblur everything.</p>
            </div>

            {/* Visual: overlapping windows */}
            <div className="mt-8 flex items-center justify-center" aria-hidden="true">
              <svg width="100%" height="160" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="win-blur" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" />
                  </filter>
                </defs>

                {/* Background window — blurred & dimmed */}
                <g filter="url(#win-blur)" opacity="0.45">
                  <rect x="6" y="10" width="128" height="96" rx="8" fill="white" fillOpacity="0.08" />
                  <rect x="6" y="10" width="128" height="96" rx="8" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
                  {/* Title bar */}
                  <rect x="6" y="10" width="128" height="22" rx="8" fill="white" fillOpacity="0.06" />
                  <rect x="6" y="28" width="128" height="4" fill="white" fillOpacity="0.04" />
                  {/* Traffic lights */}
                  <circle cx="21" cy="21" r="4" fill="white" fillOpacity="0.25" />
                  <circle cx="33" cy="21" r="4" fill="white" fillOpacity="0.25" />
                  <circle cx="45" cy="21" r="4" fill="white" fillOpacity="0.25" />
                  {/* Content lines */}
                  <rect x="18" y="44" width="80" height="5" rx="2.5" fill="white" fillOpacity="0.3" />
                  <rect x="18" y="57" width="64" height="5" rx="2.5" fill="white" fillOpacity="0.2" />
                  <rect x="18" y="70" width="72" height="5" rx="2.5" fill="white" fillOpacity="0.2" />
                  <rect x="18" y="83" width="48" height="5" rx="2.5" fill="white" fillOpacity="0.15" />
                </g>

                {/* Foreground window — sharp & clear */}
                <g>
                  <rect x="66" y="54" width="128" height="96" rx="8" fill="white" fillOpacity="0.1" />
                  <rect x="66" y="54" width="128" height="96" rx="8" stroke="white" strokeOpacity="0.35" strokeWidth="1" />
                  {/* Title bar */}
                  <rect x="66" y="54" width="128" height="22" rx="8" fill="white" fillOpacity="0.08" />
                  <rect x="66" y="72" width="128" height="4" fill="white" fillOpacity="0.05" />
                  {/* Traffic lights */}
                  <circle cx="81" cy="65" r="4" fill="white" fillOpacity="0.5" />
                  <circle cx="93" cy="65" r="4" fill="white" fillOpacity="0.5" />
                  <circle cx="105" cy="65" r="4" fill="white" fillOpacity="0.5" />
                  {/* Content lines */}
                  <rect x="78" y="88" width="88" height="5" rx="2.5" fill="white" fillOpacity="0.5" />
                  <rect x="78" y="101" width="68" height="5" rx="2.5" fill="white" fillOpacity="0.35" />
                  <rect x="78" y="114" width="76" height="5" rx="2.5" fill="white" fillOpacity="0.35" />
                  <rect x="78" y="127" width="52" height="5" rx="2.5" fill="white" fillOpacity="0.25" />
                </g>
              </svg>
            </div>
          </div>

          {/* Card 2: Blur & dim controls */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-6 flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_1px_0_0_rgba(255,255,255,0.05),inset_-1px_0_0_rgba(255,255,255,0.03),0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <circle cx="9" cy="8" r="2.5" fill="currentColor" stroke="none" className="text-white/60" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                  <circle cx="15" cy="16" r="2.5" fill="currentColor" stroke="none" className="text-white/60" />
                </svg>
              </div>
              <p className="text-white font-semibold text-base leading-snug mb-1">Blur &amp; dim controls</p>
              <p className="text-white/40 text-sm leading-relaxed">Tune blur intensity and window dim to your taste.</p>
            </div>

            {/* Visual: slider bars */}
            <div className="mt-6 flex flex-col gap-3">
              {[
                { label: "Blur", pct: 68 },
                { label: "Dim", pct: 45 },
              ].map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/30 text-xs font-mono">{label}</span>
                    <span className="text-white/20 text-xs font-mono">{pct}%</span>
                  </div>
                  <div className="relative h-1 rounded-full bg-white/10">
                    <div className="absolute inset-y-0 left-0 rounded-full bg-white/40" style={{ width: `${pct}%` }} />
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/80 border border-white/20 shadow-sm" style={{ left: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Performance */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-6 flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_1px_0_0_rgba(255,255,255,0.05),inset_-1px_0_0_rgba(255,255,255,0.03),0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <p className="text-white font-semibold text-base leading-snug mb-1">Optimized for performance</p>
              <p className="text-white/40 text-sm leading-relaxed">Built with native swift. Negligible overhead.</p>
            </div>

            {/* Visual: stat */}
            <div className="mt-6">
              <p className="text-white font-extrabold text-4xl tracking-tight leading-none">~0<span className="text-2xl">%</span></p>
              <p className="text-white/30 text-xs font-mono mt-1 tracking-wide">CPU at idle</p>
            </div>
          </div>

        </div>

        </div>{/* end constrained container */}
      </div>
    </>
  );
}

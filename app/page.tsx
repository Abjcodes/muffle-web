import Image from "next/image";

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
  return (
    <>
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
        </div>{/* end constrained container */}
      </div>
    </>
  );
}

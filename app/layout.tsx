import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muffle — Focus on what matters",
  description:
    "Muffle blurs everything except the active window, so that you can focus. 7 day free trial. Supported from macOS 14.0.",
  keywords: ["macos app", "focus", "productivity", "window blur", "distraction free", "muffle"],
  authors: [{ name: "Muffle" }],
  metadataBase: new URL("https://getmuffle.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://getmuffle.app",
    title: "Muffle — Focus on what matters",
    description:
      "Muffle blurs everything except the active window, so that you can focus.",
    siteName: "Muffle",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muffle — Focus on what matters",
    description:
      "Muffle blurs everything except the active window, so that you can focus.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}

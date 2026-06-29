import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/effects/smooth-scroll";
import { Cursor } from "@/components/effects/cursor";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} · ${site.role}`,
  description: site.positioning,
  keywords: [
    "Matthew Wolf",
    "robotics software",
    "VEX robotics",
    "C++",
    "automation",
    "AI workflows",
    "high school developer",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} · ${site.role}`,
    description: site.positioning,
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.role}`,
    description: site.positioning,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} dark`}>
      <body className="font-sans">
        <Cursor />
        <SmoothScroll>{children}</SmoothScroll>
        {/* Fine film grain over everything — premium texture, kills banding. */}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}

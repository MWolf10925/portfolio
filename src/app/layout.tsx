import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/effects/smooth-scroll";
import { Cursor } from "@/components/effects/cursor";
import { PageTransitionProvider } from "@/components/effects/page-transition";
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

// Resolved deploy origin (Vercel sets VERCEL_URL). Override with
// NEXT_PUBLIC_SITE_URL once a custom domain is connected.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const description =
  "High school developer and Worlds-qualified VEX robotics lead programmer. I build robotics autonomy, automation, and AI tools that actually ship.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Matthew Wolf — Robotics and software developer who ships",
    template: "%s · Matthew Wolf",
  },
  description,
  keywords: [
    "Matthew Wolf",
    "robotics software developer",
    "VEX robotics programmer",
    "VEX Worlds",
    "C++ developer",
    "Chrome extension developer",
    "automation",
    "AI tools",
    "high school developer",
    "Union KY",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Matthew Wolf — Robotics and software developer who ships",
    description,
    type: "website",
    url: "/",
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Wolf — Robotics and software developer who ships",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// Person structured data — helps a named individual show up correctly in search.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  description: site.positioning,
  url: siteUrl,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Union", addressRegion: "KY", addressCountry: "US" },
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Randall K. Cooper High School" },
    { "@type": "EducationalOrganization", name: "Northern Kentucky University" },
  ],
  knowsAbout: ["Robotics", "VEX V5", "C++", "Automation", "Artificial Intelligence", "Web Development"],
  sameAs: [site.links.github, site.links.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} dark`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Cursor />
        <PageTransitionProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </PageTransitionProvider>
        {/* Fine film grain over everything — premium texture, kills banding. */}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}

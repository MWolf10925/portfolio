import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/work/instant-quote`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/work/robotics`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}

import type { Metadata } from "next";
import { InstantQuoteContent } from "@/components/sections/instant-quote-content";

export const metadata: Metadata = {
  title: "Instant Quote — product automation internship",
  description:
    "Case study: the mobile field experience and native iOS/Android work I shipped for Instant Quote, a CRM and quoting platform live on the Chrome Web Store, App Store, and Google Play.",
  alternates: { canonical: "/work/instant-quote" },
  openGraph: {
    title: "Instant Quote — product automation internship",
    description:
      "Field Mode, a role-aware mobile home, the IQ AI chat, and native iOS/Android work shipped to real stores.",
    url: "/work/instant-quote",
    type: "article",
  },
};

export default function InstantQuotePage() {
  return <InstantQuoteContent />;
}

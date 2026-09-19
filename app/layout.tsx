import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading-family",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const lora = Lora({
  variable: "--font-body-family",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const description =
  "Tabassamu Logistics Ltd moves cargo from Nairobi to Tanzania across multiple border crossings, backed by our team in Mombasa. Cross-border freight, real-time tracking, reliable timelines.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tabassamu Logistics Ltd — Nairobi to Tanzania Freight",
    template: "%s — Tabassamu Logistics Ltd",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Tabassamu Logistics Ltd — Nairobi to Tanzania Freight",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tabassamu Logistics Ltd — Nairobi to Tanzania Freight",
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}

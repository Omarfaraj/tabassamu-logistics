import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "Tabassamu Logistics Ltd — Nairobi to Tanzania Freight",
    template: "%s — Tabassamu Logistics Ltd",
  },
  description:
    "Tabassamu Logistics Ltd moves cargo from Nairobi to Tanzania through Taveta, backed by our team in Mombasa. Cross-border freight, real-time tracking, reliable timelines.",
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

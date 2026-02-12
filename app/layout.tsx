import type { Metadata } from "next";
import { Urbanist, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "JMJ Solutions | Customized Gifts in Gurugram — Mugs, Cushions, T-Shirts & Corporate Gifting",
  description:
    "Customized gifts in Gurugram: personalised mugs, cushions, t-shirts, keychains & bulk corporate gifts. Budget-friendly, quality prints, fast delivery. Order your gift today.",
  keywords: [
    "customized gifts Gurugram",
    "personalised mugs",
    "custom cushions",
    "printed t-shirts",
    "corporate gifts Gurugram",
    "bulk gifting",
    "JMJ Solutions",
  ],
  openGraph: {
    title: "JMJ Solutions — Customized Gifts | Gurugram",
    description:
      "Personalised mugs, cushions, t-shirts & corporate gifts in Gurugram. Affordable, quality-checked, fast delivery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${urbanist.variable} ${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

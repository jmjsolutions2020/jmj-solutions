import type { Metadata } from "next";
import { websiteLd, organizationLd } from "@/lib/seo";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jmj-solutions.vercel.app";

export const metadata: Metadata = {
  title: "JMJ Solutions | Customized Gifts in Gurugram — Mugs, Cushions, T-Shirts & Corporate Gifting",
  description:
    "Customized gifts in Gurugram: personalised mugs, cushions, t-shirts, keychains & bulk corporate gifts. Budget-friendly, quality prints, fast delivery. Order your gift today.",
  keywords: [
    "gift shop",
    "gift shop in gurugram",
    "mugs",
    "cushions",
    "printed t-shirts",
    "corporate gifts Gurugram",
    "gifts",
    "JMJ Solutions",
  ],
  verification:{
    google: "t8LnGKCX6OCsQUaKQYIMnGrkixa0HOh_gVvo8Qs523M",
  },
  openGraph: {
    title: "JMJ Solutions — Customized Gifts | Gurugram",
    description:
      "Personalised mugs, cushions, t-shirts & corporate gifts in Gurugram. Affordable, quality-checked, fast delivery.",
      siteName: "JMJ Solutions",
      url: siteUrl,
      type: "website",
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "JMJ Solutions - Customized Gifts in Gurugram",
        },
      ],
  },
  twitter:{
    card: "summary_large_image",
    title: "JMJ Solutions — Customized Gifts | Gurugram",
    description:
      "Personalised mugs, cushions, t-shirts & corporate gifts in Gurugram. Affordable, quality-checked, fast delivery.",
    images: [`${siteUrl}/og-image.png`],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jmj-solutions.vercel.app";
  const orgJson = organizationLd({
    name: "JMJ Solutions",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: ["https://www.facebook.com/", "https://www.instagram.com/"],
  });

  const siteJson = websiteLd({ name: "JMJ Solutions", url: siteUrl });
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJson) }}
        />
      </head>
      <body
        className={`${urbanist.variable} ${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
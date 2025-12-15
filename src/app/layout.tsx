import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Convertiko - Smart Tools for Smarter Shopify Stores",
  description: "AI-powered Shopify apps that help merchants increase conversions, reduce support load, and grow revenue — with clear ROI tracking.",
  keywords: ["Shopify", "FAQ", "AI", "conversion", "ecommerce", "Shopify app"],
  authors: [{ name: "Convertiko Labs" }],
  openGraph: {
    title: "Convertiko - Smart Tools for Smarter Shopify Stores",
    description: "AI-powered Shopify apps that help merchants increase conversions, reduce support load, and grow revenue.",
    url: "https://convertikolabs.com",
    siteName: "Convertiko",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertiko - Smart Tools for Smarter Shopify Stores",
    description: "AI-powered Shopify apps that help merchants increase conversions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

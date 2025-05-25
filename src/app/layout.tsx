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
  title: "Ocean - IRCTC Ticket Booking Extension",
  description: "IRCTC ticket booking ke liye sabse fast aur easy Chrome extension. Tatkal tickets book karna ab hua aur bhi simple!",
  keywords: ["IRCTC", "ticket booking", "Chrome extension", "tatkal", "Indian Railways", "train tickets", "booking automation"],
  authors: [{ name: "Ocean Team" }],
  openGraph: {
    title: "Ocean - IRCTC Ticket Booking Extension",
    description: "IRCTC ticket booking ke liye sabse fast aur easy Chrome extension",
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ocean - IRCTC Ticket Booking Extension",
    description: "IRCTC ticket booking ke liye sabse fast aur easy Chrome extension",
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/apple-icon.png',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}

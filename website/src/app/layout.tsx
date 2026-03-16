import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Focus IB — Mastering the IB Through Deep Work, Not Busy Work",
  description:
    "The only productivity platform built exclusively for IB students. Block distractions. Ace your deadlines. Own your results.",
  keywords: [
    "IB",
    "International Baccalaureate",
    "study app",
    "focus",
    "productivity",
    "IB students",
    "Extended Essay",
    "Internal Assessment",
  ],
  openGraph: {
    title: "Focus IB — Deep Work, Not Busy Work",
    description:
      "Block distractions. Ace your deadlines. Own your results. Built exclusively for IB students.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}

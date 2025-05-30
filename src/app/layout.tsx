import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        {/* Global navigation bar */}
        <nav className="bg-gray-800 text-white sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3 flex items-center gap-6">
            <Link href="/" className="font-bold text-lg hover:text-gray-200">
              x402&nbsp;Marketplace
            </Link>
            <Link href="/marketplace" className="hover:text-gray-300">
              Marketplace
            </Link>
            <Link href="/add-api" className="hover:text-gray-300">
              Add&nbsp;API
            </Link>
            <Link href="/wallet" className="hover:text-gray-300">
              Wallet
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

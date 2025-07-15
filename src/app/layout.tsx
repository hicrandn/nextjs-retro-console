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

// Press Start 2P fontu için
const pressStart2P = {
  variable: "--font-press-start-2p",
  className: "font-press-start-2p",
  style: {
    fontFamily: "'Press Start 2P', cursive",
  },
};

export const metadata: Metadata = {
  title: "Hire Me - Full Stack Developer",
  description:
    "Professional portfolio showcasing React, Next.js, TypeScript, and more",
  keywords: [
    "React",
    "Next.js",
    "TypeScript",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Hicran Apaydin" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

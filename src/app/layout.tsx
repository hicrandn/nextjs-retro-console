import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Hicran Apaydin - Front-end Developer",
  description:
    "Professional portfolio showcasing React, Next.js, TypeScript, and more",
  keywords: [
    "React",
    "Next.js",
    "TypeScript",
    "Front-end Developer",
    "Portfolio",
  ],
  authors: [{ name: "Hicran Apaydin" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

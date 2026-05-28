import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OZE Learning — Ancient Narrative. Tomorrow's EdTech.",
  description:
    "We architect digital learning experiences for the modern workforce, fusing the timeless power of human storytelling with cutting-edge learning technology. Built proudly in Australia, deployed globally.",
  keywords: ["eLearning", "EdTech", "digital learning", "SCORM", "LMS", "Australia", "instructional design"],
  openGraph: {
    title: "OZE Learning",
    description: "Digital learning experiences that actually stick.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

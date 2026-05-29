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

const BASE_URL = "https://www.ozelearning.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "OZE Learning — Ancient Narrative. Tomorrow's EdTech.",
    template: "%s | OZE Learning",
  },
  description:
    "We architect digital learning experiences for the modern workforce — fusing human storytelling with cutting-edge learning technology. Built proudly in Australia, deployed globally.",
  keywords: ["eLearning", "EdTech", "digital learning", "SCORM", "LMS", "Australia", "instructional design"],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "OZE Learning — Ancient Narrative. Tomorrow's EdTech.",
    description: "We architect digital learning experiences for the modern workforce. Built in Australia, deployed globally.",
    type: "website",
    url: BASE_URL,
    siteName: "OZE Learning",
    images: [
      {
        url: "/ozelearning.svg",
        width: 1200,
        height: 630,
        alt: "OZE Learning — Australian EdTech Agency",
      },
    ],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "OZE Learning — Ancient Narrative. Tomorrow's EdTech.",
    description: "We architect digital learning experiences for the modern workforce. Built in Australia, deployed globally.",
    images: ["/ozelearning.svg"],
  },
};

const GA_ID = "G-YP4S46LP75";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${syne.variable} ${jakarta.variable} h-full`}>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

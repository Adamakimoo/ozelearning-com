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
    default: "OZE Learning — eLearning & EdTech Agency Australia",
    template: "%s | OZE Learning",
  },
  description:
    "OZE Learning is an Australian EdTech agency that builds bespoke eLearning, compliance training, immersive simulations, and LMS solutions for enterprise workforces. Built in Australia, deployed globally.",
  keywords: [
    "eLearning agency Australia",
    "EdTech agency",
    "bespoke eLearning development",
    "compliance training Australia",
    "SCORM xAPI development",
    "LMS implementation",
    "instructional design agency",
    "corporate eLearning",
    "digital learning solutions",
    "microlearning development",
    "employee onboarding eLearning",
    "immersive simulations training",
    "learning management system",
    "workforce training Australia",
  ],
  authors: [{ name: "OZE Learning", url: BASE_URL }],
  creator: "OZE Learning",
  publisher: "OZE Learning",
  category: "Education Technology",
  classification: "EdTech Agency",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "OZE Learning — eLearning & EdTech Agency Australia",
    description:
      "Bespoke eLearning, compliance training, immersive simulations, and LMS solutions for Australia's most complex workforces. Built in Australia, deployed globally.",
    type: "website",
    url: BASE_URL,
    siteName: "OZE Learning",
    images: [
      {
        url: "/OG-image.png",
        width: 1200,
        height: 630,
        alt: "OZE Learning — Australian eLearning & EdTech Agency",
      },
    ],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "OZE Learning — eLearning & EdTech Agency Australia",
    description:
      "Bespoke eLearning, compliance training, immersive simulations, and LMS solutions for Australia's most complex workforces.",
    images: ["/OG-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

const GA_ID = "G-STHBMHV3P6";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${syne.variable} ${jakarta.variable} h-full`}>
      <head>
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{page_path:window.location.pathname});`,
          }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

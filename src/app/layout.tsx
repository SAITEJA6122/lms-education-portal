import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FloatingAdmissionButton } from "@/components/ui/FloatingAdmissionButton";


import LayoutWrapper from "@/components/layout/LayoutWrapper";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improves font loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {

  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://ghss.edu' : 'http://localhost:3000'),
  title: {
    default: "LMS Girls Higher Secondary School | Official Website",
    template: "%s | LMS Girls Higher Secondary School",
  },
  description: "Official Website of LMS Girls Higher Secondary School. Empowering the next generation of leaders with quality education and character development since 1995.",
  keywords: [
    "girls school",
    "higher secondary school",
    "education",
    "CBSE school",
    "girls education",
    "best school in district",
    "GHSS",
    "LMS girls higher secondary school"
  ],
  authors: [{ name: "GHSS" }],
  creator: "LMS Girls Higher Secondary School",
  publisher: "LMS Girls Higher Secondary School",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
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
  openGraph: {
    title: "LMS Girls Higher Secondary School",
    description: "Official Website of LMS Girls Higher Secondary School - Empowering young women through excellence in education since 1995.",
    type: "website",
    locale: "en_US",
    url: "https://ghss.edu",
    siteName: "LMS Girls Higher Secondary School",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LMS Girls Higher Secondary School Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LMS Girls Higher Secondary School",
    description: "Official Website of LMS Girls Higher Secondary School",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#1a56db" />
        <meta name="color-scheme" content="light" />

        <link
          rel="preconnect"
          href="https://images.unsplash.com"
          crossOrigin="anonymous"
        />

        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="GHSS"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
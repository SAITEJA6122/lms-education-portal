import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FloatingAdmissionButton } from "@/components/ui/FloatingAdmissionButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improves font loading performance
});

<<<<<<< HEAD
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://ghss.edu' : 'http://localhost:3000'),
  title: {
    default: "Girls Higher Secondary School | Official Website",
    template: "%s | Girls Higher Secondary School",
  },
  description: "Official Website of Girls Higher Secondary School. Empowering the next generation of leaders with quality education and character development since 1995.",
  keywords: [
    "girls school",
    "higher secondary school",
    "education",
    "CBSE school",
    "girls education",
    "best school in district",
    "GHSS",
    "girls higher secondary school"
  ],
  authors: [{ name: "GHSS" }],
  creator: "Girls Higher Secondary School",
  publisher: "Girls Higher Secondary School",
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
    title: "Girls Higher Secondary School",
    description: "Official Website of Girls Higher Secondary School - Empowering young women through excellence in education since 1995.",
    type: "website",
    locale: "en_US",
    url: "https://ghss.edu",
    siteName: "Girls Higher Secondary School",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Girls Higher Secondary School Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Girls Higher Secondary School",
    description: "Official Website of Girls Higher Secondary School",
    images: ["/og-image.jpg"],
=======
export const metadata: Metadata = {
  title: "LMS Girls Higher Secondary School | Official Website",
  description: "Official Website of LMS Girls Higher Secondary School. Empowering the next generation of leaders with quality education and character development.",
  openGraph: {
    title: "LMS Girls Higher Secondary School",
    description: "Official Website of LMS Girls Higher Secondary School",
    type: "website",
    locale: "en_US",
    url: "https://ghss.edu",
    siteName: "LMS Girls Higher Secondary School",
  },
  twitter: {
    card: "summary_large_image",
    title: "LMS Girls Higher Secondary School",
    description: "Official Website of LMS Girls Higher Secondary School",
>>>>>>> 38930c0e946a16627b65f554171b49edd5686fb5
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Viewport settings for better mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1a56db" />
        <meta name="color-scheme" content="light" />
        
        {/* Performance hints */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        
        {/* Additional SEO */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GHSS" />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
=======
    <html lang="en">
      <body className={`${geistSans.variable} antialiased min-h-screen flex flex-col`}>
>>>>>>> 38930c0e946a16627b65f554171b49edd5686fb5
        <Navbar />
        <Breadcrumbs />
        <main id="main-content" className="flex-grow pt-20" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppWidget />
        <FloatingAdmissionButton />
      </body>
    </html>
  );
}
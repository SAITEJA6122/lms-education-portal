import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Girls Higher Secondary School | Official Website",
  description: "Official Website of Girls Higher Secondary School. Empowering the next generation of leaders with quality education and character development.",
  openGraph: {
    title: "Girls Higher Secondary School",
    description: "Official Website of Girls Higher Secondary School",
    type: "website",
    locale: "en_US",
    url: "https://ghss.edu",
    siteName: "Girls Higher Secondary School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Girls Higher Secondary School",
    description: "Official Website of Girls Higher Secondary School",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Noto_Nastaliq_Urdu, Vazirmatn } from "next/font/google";
import "./globals.css";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const nastaliq = Noto_Nastaliq_Urdu({
  variable: "--font-nastaliq",
  subsets: ["arabic"],
});
const vazir = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Aidin Cafe",
  description: "کافه رستوران آیدین در قلب شیراز",
  keywords: [
    "کافه",
    "رستوران",
    "آیدین",
    "شیراز",
    "cafe",
    "restaurant",
    "Aidin",
    "Shiraz",
  ],
  authors: [{ name: "Aidin Cafe" }],
  creator: "Aidin Cafe",
  publisher: "Aidin Cafe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aidincafe.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aidin Cafe - کافه رستوران آیدین",
    description: "کافه رستوران آیدین در قلب شیراز",
    url: "https://aidincafe.com", // Replace with your actual domain
    siteName: "Aidin Cafe",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Aidin Cafe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aidin Cafe - کافه رستوران آیدین",
    description: "کافه رستوران آیدین در قلب شیراز",
    images: ["/og-image.jpg"], // Same image as OpenGraph
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#E3D0B2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${nastaliq.variable} ${vazir.variable} antialiased relative min-h-screen overflow-x-hidden`}
      >
        {/* Left side decoration */}
        <div
          className="fixed top-0 left-0 h-full w-[150px] hidden md:block z-0 animate-fade-in-left"
          style={{
            backgroundImage: "url(/left-decoration.png)",
            backgroundRepeat: "repeat-y",
            backgroundPosition: "left center",
            backgroundSize: "contain",
          }}
          aria-hidden="true"
        ></div>
        {/* Right side decoration */}
        <div
          className="fixed top-0 right-0 h-full w-[150px] hidden md:block z-0 animate-fade-in-right"
          style={{
            backgroundImage: "url(/right-decoration.png)",
            backgroundRepeat: "repeat-y",
            backgroundPosition: "right center",
            backgroundSize: "contain",
          }}
          aria-hidden="true"
        ></div>
        <main className="relative z-10">
          <ScrollAnimationProvider />
          {children}
        </main>
      </body>
    </html>
  );
}

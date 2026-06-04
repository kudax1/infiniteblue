import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-family" });

export const metadata: Metadata = {
  metadataBase: new URL('https://infinitebluelabs.com'),
  title: "InfiniteBlue | Elite Software Development",
  description: "Software architecture for ambitious enterprises. We co-create exceptional web, iOS, Android, and Harmony OS applications.",
  openGraph: {
    images: [{
      url: '/opengraph-image.png',
      width: 1200,
      height: 630,
    }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "InfiniteBlue",
    "url": "https://infinitebluelabs.com",
    "logo": "https://infinitebluelabs.com/logo.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@infinitebluelabs.com",
      "contactType": "customer service"
    }
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Script 
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || 'dummy_key'}`} 
          strategy="afterInteractive"
        />
        <div className="app-container">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-family" });

export const metadata: Metadata = {
  metadataBase: new URL('https://infiniteblue.africa'),
  title: {
    default: "InfiniteBlue | Elite Software Development",
    template: "%s | InfiniteBlue",
  },
  description: "Software architecture for ambitious enterprises. We co-create exceptional web, iOS, Android, and Harmony OS applications.",
  alternates: {
    canonical: 'https://infiniteblue.africa',
  },
  openGraph: {
    type: 'website',
    siteName: 'InfiniteBlue',
    locale: 'en_ZA',
    url: 'https://infiniteblue.africa',
    title: 'InfiniteBlue | Elite Software Development',
    description: 'Software architecture for ambitious enterprises. We co-create exceptional web, iOS, Android, and Harmony OS applications.',
    images: [{
      url: '/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'InfiniteBlue – Elite Software Development',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfiniteBlue | Elite Software Development',
    description: 'Software architecture for ambitious enterprises. We co-create exceptional web, iOS, Android, and Harmony OS applications.',
    images: ['/opengraph-image.png'],
  },
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
    "url": "https://infiniteblue.africa",
    "logo": "https://infiniteblue.africa/logo.webp",
    "sameAs": [
      "https://www.linkedin.com/company/infinitebluelabs"
    ],
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
        <AnalyticsTracker />
        <Script 
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || 'dummy_key'}`} 
          strategy="afterInteractive"
        />
        <div className="app-container">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}

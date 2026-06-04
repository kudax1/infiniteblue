import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
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
  return (
    <html lang="en">
      <body>
        <script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || 'dummy_key'}`} async defer></script>
        <div className="app-container">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D5C3D",
};

export const metadata: Metadata = {
  title: {
    default: "AfriThrift - Premium Used Clothing for Africa",
    template: "%s | AfriThrift",
  },
  description:
    "Your trusted partner for high-quality used clothing export to Africa. Direct sourcing from USA & Europe, quality inspection, and reliable logistics to Nigeria, Ghana, Kenya and 50+ countries.",
  keywords: [
    "used clothing Africa",
    "wholesale used clothes",
    "bales for sale",
    "second hand clothes Nigeria",
    "Ghana wholesale clothing",
    "Kenya used clothes",
    "Africa clothing export",
  ],
  authors: [{ name: "AfriThrift" }],
  creator: "AfriThrift",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AfriThrift",
    title: "AfriThrift - Premium Used Clothing for Africa",
    description: "Your trusted partner for high-quality used clothing export to Africa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AfriThrift - Premium Used Clothing for Africa",
    description: "Your trusted partner for high-quality used clothing export to Africa.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

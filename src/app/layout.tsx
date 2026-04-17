import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AfriThrift - Premium Used Clothing for Africa",
    template: "%s | AfriThrift",
  },
  description:
    "Your trusted partner for high-quality used clothing export to Africa. Direct sourcing, quality inspection, and reliable logistics.",
  keywords: [
    "used clothing Africa",
    "wholesale used clothes",
    "balanga for sale",
    "second hand clothes Nigeria",
    "Ghana wholesale clothing",
    "Kenya used clothes",
  ],
  authors: [{ name: "AfriThrift" }],
  creator: "AfriThrift",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AfriThrift",
  },
  twitter: {
    card: "summary_large_image",
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
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

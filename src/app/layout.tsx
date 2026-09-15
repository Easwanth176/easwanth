import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://easwanth.vercel.app"),
  title: {
    default: "Easwanth — MuleSoft Integration Engineer",
    template: "%s | Easwanth",
  },
  description:
    "Portfolio of Easwanth Naga Narasimha, a MuleSoft developer building enterprise integrations across Salesforce, databases, files, and B2B systems.",
  keywords: [
    "Easwanth",
    "MuleSoft Developer",
    "Integration Engineer",
    "Salesforce Integration",
    "DataWeave",
  ],
  authors: [{ name: "Easwanth Naga Narasimha" }],
  creator: "Easwanth Naga Narasimha",
  openGraph: {
    title: "Easwanth — MuleSoft Integration Engineer",
    description:
      "Enterprise integrations engineered for reliable, maintainable data movement.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easwanth — MuleSoft Integration Engineer",
    description:
      "Enterprise integrations engineered for reliable, maintainable data movement.",
  },
  icons: {
    icon: "/mark.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080a0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

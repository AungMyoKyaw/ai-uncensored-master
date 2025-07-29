import type { Metadata } from "next";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-uncensored-master.pages.dev"),
  title: "AI Uncensored - Unlock Beast Mode AI",
  description:
    "Transform your AI assistant with unrestricted capabilities, advanced sequential thinking, and autonomous completion. Experience the power of AI without boundaries.",
  keywords: [
    "AI",
    "artificial intelligence",
    "AI prompts",
    "VS Code",
    "GitHub copilot",
    "sequential thinking",
    "AI assistant",
    "unrestricted AI",
    "beast mode AI"
  ],
  authors: [{ name: "AungMyoKyaw" }],
  creator: "AungMyoKyaw",
  publisher: "AI Uncensored",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai-uncensored-master.pages.dev",
    title: "AI Uncensored - Unlock Beast Mode AI",
    description:
      "Transform your AI assistant with unrestricted capabilities, advanced sequential thinking, and autonomous completion. Experience the power of AI without boundaries.",
    siteName: "AI Uncensored",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Uncensored - Beast Mode AI Framework"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Uncensored - Unlock Beast Mode AI",
    description:
      "Transform your AI assistant with unrestricted capabilities, advanced sequential thinking, and autonomous completion.",
    images: ["/og-image.png"],
    creator: "@AungMyoKyaw"
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code"
  },
  alternates: {
    canonical: "https://ai-uncensored-master.pages.dev"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>AI Uncensored</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

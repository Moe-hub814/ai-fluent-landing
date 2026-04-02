import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Fluent – Speak Any Language Fluently with AI",
  description: "AI Fluent uses cutting-edge artificial intelligence to personalize your language learning journey. Learn 30+ languages faster than ever with AI-powered conversations, pronunciation coaching, and adaptive lessons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

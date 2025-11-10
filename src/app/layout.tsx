import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NoCry Anti-Cheat | Next-Gen Game Security Platform",
  description: "Professional anti-cheat solution with AI-powered detection, real-time monitoring, and advanced proxy infrastructure for game servers.",
  keywords: ["anti-cheat", "game security", "cheat detection", "server protection", "gaming", "UDP proxy"],
  authors: [{ name: "NoCry Team" }],
  openGraph: {
    title: "NoCry Anti-Cheat",
    description: "Next-generation anti-cheat platform for game servers",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from './theme-provider';

export const metadata: Metadata = {
  title: "Marouane Ben Haddou | Data Engineering & AI",
  description: "Data Engineering student at ENSAH. Explore projects in real-time data, big data, and applied AI. Open to opportunities and internships.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased"><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}

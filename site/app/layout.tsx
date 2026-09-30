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
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E",
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

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhagyashri | Portfolio",
  description: "Modern full-stack portfolio built with Next.js, Tailwind, and FastAPI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
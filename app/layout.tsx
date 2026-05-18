import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "The House of Dentistry | Trusted Dental Clinic in Chennai – Perambur & Ayanavaram",
  description:
    "Expert dental care in Chennai for over 8 years. Root canals, implants, braces, whitening & more. Open 7 days. Call +91 80729 82811.",
  keywords: [
    "dentist in Chennai",
    "dental clinic Perambur",
    "dental clinic Ayanavaram",
    "root canal Chennai",
    "dental implants Chennai",
    "best dentist Chennai",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

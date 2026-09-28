import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { InquiryModalProvider } from "@/app/context/InquiryModalContext";
import InquiryModal from "@/app/components/InquiryModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "devlopperstudio | Premium Freelancing & Web Development Studio",
  description:
    "High-end bespoke web development, design, and software engineering for modern startups and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <InquiryModalProvider>
          {children}
          <InquiryModal />
        </InquiryModalProvider>
      </body>
    </html>
  );
}

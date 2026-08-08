import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CursorProvider } from "@/context/CursorContext";
import { BlobCursor } from "@/components/BlobCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaishali Negi — Full-Stack Developer & AI Engineer",
  description:
    "Personal portfolio of Vaishali Negi, Computer Science & Engineering student at VIT Bhopal. Full-stack web development, AI platforms, real-time communication, and creative frontend design.",
  keywords: [
    "Vaishali Negi",
    "Full-Stack Developer",
    "Portfolio",
    "VIT Bhopal",
    "Computer Science Student",
    "React",
    "Next.js",
    "Node.js",
    "AI Developer",
    "VOXA",
  ],
  authors: [{ name: "Vaishali Negi" }],
  openGraph: {
    title: "Vaishali Negi — Full-Stack Developer & AI Engineer",
    description:
      "Awwwards-inspired personal portfolio of Vaishali Negi. Full-stack development, AI platforms, and creative interactive experiences.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[#67B7FF] selection:text-[#080808]`}
    >
      <body className="min-h-screen bg-[#080808] text-[#F5F5F5] font-sans">
        <CursorProvider>
          <BlobCursor />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}

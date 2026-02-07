import type { Metadata } from "next";
import { Podkova, Space_Grotesk, Didact_Gothic } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import "./globals.css";

// Display font — hero text, big statements, case study titles
const podkova = Podkova({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Heading font — section headings, nav, buttons, labels
const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Body font — body text, descriptions, prose
const didactGothic = Didact_Gothic({
  variable: "--font-body",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Justin Hernandez — Product Designer",
  description:
    "Lead product designer specializing in AI-powered enterprise product design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${podkova.variable} ${spaceGrotesk.variable} ${didactGothic.variable} antialiased`}
      >
        <GrainOverlay />
        <Header />
        <main id="main" tabIndex={-1} className="min-h-screen outline-none">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

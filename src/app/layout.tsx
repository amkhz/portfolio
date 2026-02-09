import type { Metadata } from "next";
import { Podkova, Space_Grotesk, Didact_Gothic } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { getMetadataBase } from "@/lib/site-metadata";
import "./globals.css";

const podkova = Podkova({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const didactGothic = Didact_Gothic({
  variable: "--font-body",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Justin Hernandez | Product Designer",
    template: "%s | Justin Hernandez",
  },
  description:
    "Lead product designer specializing in AI-powered enterprise product design.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Justin Hernandez | Product Designer",
    description:
      "Lead product designer specializing in AI-powered enterprise product design.",
    siteName: "Justin Hernandez Portfolio",
    images: [
      {
        url: "/images/meta.png",
        width: 1200,
        height: 630,
        alt: "Justin Hernandez portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Hernandez | Product Designer",
    description:
      "Lead product designer specializing in AI-powered enterprise product design.",
    images: ["/images/meta.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <main id="main" tabIndex={-1} className="min-h-screen outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

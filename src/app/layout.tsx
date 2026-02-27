import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Podkova, Space_Grotesk, Didact_Gothic } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { themeScript } from "@/lib/theme-script";
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Hernandez | Product Designer",
    description:
      "Lead product designer specializing in AI-powered enterprise product design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme")?.value;
  const initialTheme =
    themeCookie === "light" ? "light" : themeCookie === "dark" ? "dark" : undefined;

  return (
    <html
      lang="en"
      data-theme={initialTheme ?? "dark"}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${podkova.variable} ${spaceGrotesk.variable} ${didactGothic.variable} antialiased`}
      >
        <ThemeProvider initialTheme={initialTheme}>
          <GrainOverlay />
          <Header />
          <main id="main" tabIndex={-1} className="min-h-screen outline-none">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CIO Mar de Cortés | Centro de Investigaciones Oceánicas",
  description: "Dedicados a la conservación, investigación y educación marina del Mar de Cortés. Protegemos especies en peligro, realizamos investigaciones científicas y educamos a la comunidad sobre la importancia de nuestros océanos.",
  keywords: [
    "conservación marina",
    "Mar de Cortés",
    "investigación oceánica",
    "educación ambiental",
    "protección de especies",
    "Mazatlán",
    "biodiversidad marina",
    "rehabilitación de animales marinos"
  ],
  authors: [{ name: "CIO Mar de Cortés" }],
  creator: "CIO Mar de Cortés",
  publisher: "Centro de Investigaciones Oceánicas del Mar de Cortés",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://ciomardecortes.org",
    siteName: "CIO Mar de Cortés",
    title: "CIO Mar de Cortés | Centro de Investigaciones Oceánicas",
    description: "Dedicados a la conservación, investigación y educación marina del Mar de Cortés",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CIO Mar de Cortés",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CIO Mar de Cortés | Centro de Investigaciones Oceánicas",
    description: "Dedicados a la conservación, investigación y educación marina del Mar de Cortés",
    images: ["/img/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

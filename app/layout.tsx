import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { FB_PIXEL_ID } from "@/lib/fpixel";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://ciomardecortes.org'),
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
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="overscroll-none">
      <body className="antialiased overscroll-none">
        {children}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FB_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
      </body>
      <GoogleAnalytics gaId="G-QJDQPY9W1K" />
    </html>
  );
}

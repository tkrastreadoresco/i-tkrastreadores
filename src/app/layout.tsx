import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";
import EmotionRegistry from "@/lib/emotion/EmotionRegistry";
import { AppShell } from "@/app/AppShell";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const siteConfig = {
  name: "TK Rastreadores",
  description:
    "Soluções tecnológicas em geoposicionamento via satélite para gestão e monitoramento de frotas. Rastreamento veicular, telemetria avançada e videotelemetria com 14 anos de experiência.",
  url: "https://tkrastreadores.com.br",
  keywords: [
    "rastreamento veicular",
    "monitoramento de frota",
    "telemetria",
    "videotelemetria",
    "gestão de frota",
    "rastreador veicular",
    "GPS veicular",
    "TK Rastreadores",
    "controle de frota",
    "segurança veicular",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  // ─── BASIC ─────────────────────────────────────────────────
  title: {
    default: "TK Rastreadores | Rastreamento e Monitoramento de Frotas",
    template: "%s | TK Rastreadores",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "TK Rastreadores", url: siteConfig.url }],
  creator: "TK Rastreadores",
  publisher: "TK Rastreadores",

  // ─── METADATA BASE ─────────────────────────────────────────
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },

  // ─── ICONS ─────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo/icon-red.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/apple-touch-icon.svg", type: "image/svg+xml" },
    ],
  },

  // ─── MANIFEST ──────────────────────────────────────────────
  manifest: "/manifest.json",

  // ─── OPEN GRAPH (Facebook, WhatsApp, LinkedIn) ─────────────
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "TK Rastreadores | Rastreamento e Monitoramento de Frotas",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "TK Rastreadores - Soluções em rastreamento e monitoramento de frotas",
      },
    ],
  },

  // ─── TWITTER CARD ──────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "TK Rastreadores | Rastreamento e Monitoramento de Frotas",
    description: siteConfig.description,
    images: ["/og-image.svg"],
    creator: "@tkrastreadores",
  },

  // ─── ROBOTS ────────────────────────────────────────────────
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

  // ─── VERIFICATION ──────────────────────────────────────────
  // verification: {
  //   google: "your-google-verification-code",
  // },

  // ─── APP LINKS ─────────────────────────────────────────────
  appLinks: {
    ios: {
      url: "https://apps.apple.com/app/tk-fleet",
      app_store_id: "app_store_id",
    },
    android: {
      package: "com.tkrastreadores.fleet",
      url: "https://play.google.com/store/apps/details?id=com.tkrastreadores.fleet",
    },
  },

  // ─── CATEGORY ──────────────────────────────────────────────
  category: "technology",

  // ─── OTHER ─────────────────────────────────────────────────
  other: {
    "msapplication-TileColor": "#e10600",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TK Rastreadores",
              url: siteConfig.url,
              logo: `${siteConfig.url}/logo/logo-v1.svg`,
              description: siteConfig.description,
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-24-98129-2932",
                contactType: "customer service",
                areaServed: "BR",
                availableLanguage: "Portuguese",
              },
              sameAs: [
                "https://www.instagram.com/tkrastreadores",
                "https://www.facebook.com/tkrastreadores",
              ],
            }),
          }}
        />

        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "TK Rastreadores",
              image: `${siteConfig.url}/logo/logo-v1.svg`,
              telephone: "0800 2423-231",
              url: siteConfig.url,
              priceRange: "$$",
              openingHours: "Mo-Fr 08:00-18:00",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "3000",
              },
            }),
          }}
        />
      </head>
      <body className={urbanist.variable}>
        <EmotionRegistry>
          <AppShell>{children}</AppShell>
        </EmotionRegistry>
      </body>
    </html>
  );
}

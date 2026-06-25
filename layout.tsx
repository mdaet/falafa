import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig, faqItems } from "@/lib/data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Gîte Falafa Normand | Maison à colombages entre Honfleur et Deauville",
    template: "%s | Gîte Falafa Normand",
  },
  description:
    "Gîte de charme à colombages pour 4 personnes à Pont-l'Évêque, entre Honfleur et Deauville. Jardin, terrasse, calme et nature au cœur du Pays d'Auge, Normandie.",
  keywords: [
    "gîte normandie",
    "gîte honfleur",
    "gîte deauville",
    "location vacances calvados",
    "gîte falafa normand",
    "maison colombages normandie",
    "gîte pays d'auge",
  ],
  authors: [{ name: "Gîte Falafa Normand" }],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: "Gîte Falafa Normand",
    title: "Gîte Falafa Normand | Votre parenthèse normande",
    description:
      "Un gîte authentique à colombages niché au cœur du Pays d'Auge, entre mer, nature et patrimoine. Entre Honfleur et Deauville.",
    images: [
      {
        url: "/images/gite/exterieur-1.jpg",
        width: 1200,
        height: 630,
        alt: "Façade à colombages du Gîte Falafa Normand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gîte Falafa Normand | Votre parenthèse normande",
    description:
      "Un gîte authentique à colombages entre Honfleur et Deauville, au cœur du Pays d'Auge.",
    images: ["/images/gite/exterieur-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lodgingSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/gite/exterieur-1.jpg`,
    telephone: siteConfig.phone,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      postalCode: siteConfig.address.postalCode,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: "5",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Wifi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parking privé", value: true },
      { "@type": "LocationFeatureSpecification", name: "Jardin", value: true },
      { "@type": "LocationFeatureSpecification", name: "Terrasse", value: true },
    ],
    petsAllowed: false,
    numberOfRooms: 2,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: 4,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

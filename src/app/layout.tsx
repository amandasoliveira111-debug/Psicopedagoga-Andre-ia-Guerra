import type { Metadata } from "next";
import { Baloo_2, Inter } from "next/font/google";
import "./globals.css";
import { brand, siteSeo } from "@/lib/site-config";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteSeo.siteUrl),
  title: {
    default: siteSeo.title,
    template: `%s | ${brand.professional}`,
  },
  description: siteSeo.description,
  keywords: [...siteSeo.keywords],
  authors: [{ name: brand.professional }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteSeo.siteUrl,
    siteName: brand.professional,
    title: siteSeo.title,
    description: siteSeo.description,
    images: ["/media/images/andreia-mesa.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteSeo.title,
    description: siteSeo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: brand.professional,
    jobTitle: brand.role,
    description: siteSeo.description,
    url: siteSeo.siteUrl,
    image: `${siteSeo.siteUrl}/media/images/andreia-mesa.jpg`,
    telephone: `+${brand.whatsappNumber}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.address.street,
      addressLocality: brand.address.city,
      addressRegion: brand.address.state,
      addressCountry: "BR",
    },
    affiliation: {
      "@type": "MedicalOrganization",
      name: `${brand.name} — ${brand.tagline}`,
    },
    sameAs: [brand.instagramUrl, brand.clinicInstagramUrl],
  };

  return (
    <html
      lang="pt-BR"
      className={`${baloo.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

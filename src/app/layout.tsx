import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  verification: {
    google: "5ZamG0aKMx_3KL345YUWCm_GrHDuLLWK2n_FqBJm4OY",
  },
  metadataBase: new URL("https://extaticaa.com"),
  title: {
    default: "Extaticaa - Ecstatic Dance in Da Nang & Hoi An",
    template: "%s | Extaticaa",
  },
  description:
    "Ecstatic dance events in the jungles of Da Nang and Hoi An, Vietnam. Free movement in nature. Tribal rhythms. Deep connection.",
  keywords: [
    "ecstatic dance",
    "ecstatic dance da nang",
    "ecstatic dance hoi an",
    "ecstatic dance vietnam",
    "cacao ceremony da nang",
    "conscious dance vietnam",
    "dance events da nang",
    "free movement",
    "outdoor dance events",
    "tribal dance vietnam",
  ],
  authors: [{ name: "Extaticaa" }],
  creator: "Extaticaa",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "vi_VN",
    url: "https://extaticaa.com",
    siteName: "Extaticaa",
    title: "Extaticaa - Ecstatic Dance in Da Nang & Hoi An",
    description:
      "Free movement in nature. Tribal rhythms. Deep connection. Come dance with us in the jungles of Central Vietnam.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Ecstatic dance gathering in the jungle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Extaticaa - Ecstatic Dance in Da Nang & Hoi An",
    description:
      "Free movement in nature. Tribal rhythms. Deep connection. Come dance with us in the jungles of Central Vietnam.",
    images: ["/images/og-default.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://extaticaa.com/en",
    languages: {
      "en": "https://extaticaa.com/en",
      "vi": "https://extaticaa.com/vi",
      "x-default": "https://extaticaa.com/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Extaticaa - Ecstatic Dance in Da Nang & Hoi An",
  description:
    "Ecstatic dance experiences in the jungles of Da Nang and Hoi An. Move freely. Feel deeply. Connect with nature and community.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

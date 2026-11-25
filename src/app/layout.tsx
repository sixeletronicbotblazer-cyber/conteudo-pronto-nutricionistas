import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Conteúdo Pronto para Nutricionistas",
  description:
    "Conteúdo Pronto e Stories Prontos para Nutricionistas: artes, legendas, roteiros, carrosséis, Reels e bônus. Veja por dentro e escolha seu pacote.",
  keywords: [
    "conteúdo pronto para nutricionistas",
    "stories prontos",
    "artes para nutricionistas",
    "pacote de conteúdo",
    "instagram para nutricionistas",
  ],
  openGraph: {
    title: "Conteúdo Pronto para Nutricionistas",
    description:
      "Artes, legendas, roteiros, carrosséis, Reels e bônus. Veja por dentro e escolha seu pacote.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090c0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}

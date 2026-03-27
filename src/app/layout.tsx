import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darocagastronomia.com.br"),
  title: "Da Roça Gastronomia | Sabor da roça, feito com amor e tradição",
  description:
    "Landing page da Da Roça Gastronomia Brasil em Jundiaí. Gastronomia brasileira de raiz, ambiente acolhedor, cardápio afetivo, reservas para grupos e eventos.",
  keywords: [
    "Da Roça Gastronomia",
    "restaurante em Jundiaí",
    "comida brasileira",
    "gastronomia de raiz",
    "restaurante rústico chique",
    "eventos em Jundiaí",
  ],
  openGraph: {
    title: "Da Roça Gastronomia",
    description: "Sabor da roça, feito com amor e tradição.",
    url: "https://darocagastronomia.com.br",
    siteName: "Da Roça Gastronomia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Da-Roca_Jul2024_23-scaled.jpg",
        width: 1600,
        height: 1067,
        alt: "Mesa com pratos da Da Roça Gastronomia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Da Roça Gastronomia",
    description: "Sabor da roça, feito com amor e tradição.",
    images: [
      "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Da-Roca_Jul2024_23-scaled.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${lora.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

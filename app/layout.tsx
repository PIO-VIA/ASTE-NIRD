import type { Metadata } from "next";
import { Carter_One, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-carter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Aste-NIRD",
  description: "Le village numérique qui résiste encore et toujours aux Big Tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${carterOne.variable} ${outfit.variable} antialiased font-outfit bg-nird-night text-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

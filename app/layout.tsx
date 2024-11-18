import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portifolio",
  applicationName: "Portifolio",
  description: "Sistema web de Portifolio para Linked",
  generator: "Next.js",
  keywords: ["Next.js", "React", "JavaScript", "Portifolio"],
  authors: [{ name: "Adélson Júnior", url: "" }],
  publisher: "UFSJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ptBR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

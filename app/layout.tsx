import type { Metadata } from "next";
import "./globals.css";
import "./motion.css";

export const metadata: Metadata = {
  title: "Vimi — Seu site. Sempre evoluindo.",
  description: "Sites conectados ao marketing, dados e vendas. Criação, gestão, integrações e evolução contínua em uma única operação.",
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

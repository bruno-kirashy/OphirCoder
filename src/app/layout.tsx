import type { Metadata } from "next";
import { Poppins, Roboto, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "OphirCoder | %s",
    default: "OphirCoder | Construtores de Legado Digital",
  },
  description:
    "Criamos sites para empresas focados em solucionar problemas reais dos seus consumidores. Transformamos desafios em presença online eficaz e duradoura.",
  keywords: [
    "desenvolvimento web",
    "automação",
    "programação",
    "tecnologia",
    "ophircoder",
    "ophircode",
    "sites para empresas",
    "soluções digitais",
    "presença online",
    "desenvolvedores web",
    "coders",
    "web development",
    "digital solutions",
    "online presence",
    "software development",
    "ophir",
    "o que é ophir",
  ],
  openGraph: {
    title: "OphirCoder | Desenvolvimento Web e Tecnologia",
    description: "Soluções digitais modernas para empresas e criadores.",
    url: "https://ophircoder.com.br",
    siteName: "OphirCoder",
    images: [
      {
        url: "https://ophircoder.com.br/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${roboto.variable} ${inter.variable} antialiased overflow-x-hidden`}
      >
        <div className="flex flex-col relative isolate overflow-x-hidden overflow-y-hidden min-h-dvh">
          <div className="absolute top-0 left-0 -z-10 w-1/2 h-[90vh] -translate-x-1/3 -translate-y-1/5 bg-[radial-gradient(ellipse_at_center,rgba(249,123,6,0.2)_0%,rgba(0,0,0,0)_70%)] opacity-80"></div>
          <div className="absolute bottom-0 right-0 -z-10 w-1/2 h-screen translate-x-1/3 translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,rgba(0,0,0,0)_70%)] opacity-90"></div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "OphirCoder",
            url: "https://ophircoder.com.br",
            logo: "https://ophircoder.com.br/logo.png",
            sameAs: [
              "https://github.com/ophircoder",
              "https://linkedin.com/company/ophircoder",
            ],
          }),
        }}
      />
    </html>
  );
}

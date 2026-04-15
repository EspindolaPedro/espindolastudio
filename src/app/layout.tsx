import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Espindola Studio - Agência Digital em Campo Grande MS | Soluções Tech, IA e Performance",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  verification: {
    google: 'D2xqzCGLdPFI6dSUYokldo58DyYLAtvxw_2NGAPw_d4',
  },
  description:
    "Agência digital em Campo Grande, MS especializada em soluções tech, IA, sites, e-commerce e tráfego estratégico. Estruturamos presença digital para empresas que querem crescer com inteligência.",
  keywords: [
    "gestor de tráfego Campo Grande MS",
    "gestor de tráfego pago Campo Grande",
    "empresa de tecnologia Campo Grande MS",
    "tecnologia Campo Grande MS",
    "tráfego pago Campo Grande MS",
    "tráfego pago Campo Grande",
    "programador de sites Campo Grande MS",
    "programador de sites Campo Grande",
    "desenvolvedor de sites Campo Grande MS",
    "desenvolvedor de sites Campo Grande",
    "desenvolvimento de sites Campo Grande",
    "agência digital Campo Grande MS",
    "agência de marketing digital Campo Grande",
    "desenvolvimento web Campo Grande",
    "marketing digital Campo Grande",
    "agência de publicidade Campo Grande",
    "IA e automação Campo Grande MS",
    "inteligência artificial Campo Grande",
    "e-commerce Campo Grande MS",
    "loja virtual Campo Grande MS",
    "tráfego estratégico Campo Grande",
    "campanhas digitais Campo Grande MS",
    "ads Campo Grande MS",
    "google ads Campo Grande",
    "facebook ads Campo Grande",
    "integrações e APIs Campo Grande",
    "sites profissionais Campo Grande",
    "agência de tecnologia Campo Grande MS",
    "consultoria em tecnologia Campo Grande",
    "solução tech Campo Grande",
  ].join(", "),
  authors: [{ name: "Espindola Studio" }],
  creator: "Espindola Studio",
  publisher: "Espindola Studio",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://espindolastudio.com",
    siteName: "Espindola Studio",
    title: "Espindola Studio - Agência Digital em Campo Grande MS | Gestor de Tráfego e Desenvolvedor de Sites",
    description:
      "Gestor de tráfego pago, desenvolvedor de sites e empresa de tecnologia em Campo Grande MS. Soluções digitais completas com IA para crescimento empresarial.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Espindola Studio - Agência Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Espindola Studio - Gestor de Tráfego e Desenvolvedor de Sites em Campo Grande MS",
    description:
      "Gestor de tráfego pago, desenvolvedor de sites, programador web e empresa de tecnologia. Agência digital especializada em Campo Grande MS.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://espindolastudio.com",
  },
  verification: {
    google: "seu-codigo-verificacao-google", // Adicionar depois de gerar
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://espindolastudio.com",
    name: "Espindola Studio",
    image: "https://espindolastudio.com/logo.svg",
    description:
      "Agência digital especializada em soluções tech, IA, sites e tráfego estratégico em Campo Grande, MS",
    url: "https://espindolastudio.com",
    telephone: "+55 67 99159-3756",
    email: "studioespindola@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Campo Grande",
      addressLocality: "Campo Grande",
      addressRegion: "MS",
      postalCode: "79000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-20.4428",
      longitude: "-55.4915",
    },
    areaServed: {
      "@type": "City",
      name: "Campo Grande",
      containedInPlace: {
        "@type": "State",
        name: "Mato Grosso do Sul",
        containedInPlace: {
          "@type": "Country",
          name: "Brazil",
        },
      },
    },
    serviceScopeArea: [
      {
        "@type": "Place",
        name: "Campo Grande",
        geo: {
          "@type": "GeoCoordinates",
          latitude: "-20.4428",
          longitude: "-55.4915",
        },
      },
    ],
    priceRange: "R$$ - R$$$",
    sameAs: [
      "https://www.instagram.com/espindolastudio",
      "https://www.linkedin.com/company/espindolastudio",
      "https://www.facebook.com/espindolastudio",
    ],
    foundingDate: "2024",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+55 67 99159-3756",
      areaServed: ["BR"],
      availableLanguage: ["pt-BR"],
    },
    service: [
      {
        "@type": "Service",
        name: "Desenvolvimento Web",
        description: "Sites profissionais e e-commerce",
        areaServed: "Campo Grande, MS",
      },
      {
        "@type": "Service",
        name: "Agentes de IA",
        description: "Automação com inteligência artificial",
        areaServed: "Campo Grande, MS",
      },
      {
        "@type": "Service",
        name: "Tráfego Pago",
        description: "Campanhas de marketing digital",
        areaServed: "Campo Grande, MS",
      },
      {
        "@type": "Service",
        name: "Integrações e APIs",
        description: "Conectar ferramentas e sistemas",
        areaServed: "Campo Grande, MS",
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

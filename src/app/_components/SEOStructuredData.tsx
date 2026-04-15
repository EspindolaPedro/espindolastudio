/**
 * Componente que injeta dados estruturados (JSON-LD) para SEO
 * Inclui FAQ schema e dados de ofertas agregadas
 */

export function SEOStructuredData() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qual é o valor do projeto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O valor depende do escopo e complexidade. Realizamos uma diagnóstico inicial gratuito para entender suas necessidades e apresentar uma proposta personalizada.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona o processo de trabalho?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Começamos com um diagnóstico real do seu negócio, mapeamos a solução ideal, implementamos de forma estratégica e continuamos com ajustes contínuos.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês atendem empresas fora de Campo Grande?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim, atendemos empresas em todo o Brasil. Nossa equipe trabalha remotamente e se adapta aos fusos horários dos clientes.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo leva um projeto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O timeline varia conforme o escopo. Projetos simples podem levar 2-4 semanas, enquanto soluções complexas com IA e integrações podem levar 2-3 meses.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês oferecem suporte após a entrega?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim, oferecemos suporte contínuo, manutenção técnica e otimizações após a implementação para garantir que sua solução continua performando.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Espindola Studio",
        item: "https://espindolastudio.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Serviços",
        item: "https://espindolastudio.com#servicos",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Arquitetura",
        item: "https://espindolastudio.com#arquitetura",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contato",
        item: "https://espindolastudio.com#contato",
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Espindola Studio",
    url: "https://espindolastudio.com",
    logo: "https://espindolastudio.com/logo.svg",
    description:
      "Agência digital especializada em soluções tech, IA, sites e tráfego estratégico em Campo Grande, MS",
    sameAs: [
      "https://www.instagram.com/espindolastudio",
      "https://www.linkedin.com/company/espindolastudio",
      "https://www.facebook.com/espindolastudio",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      telephone: "+55 67 99159-3756",
      areaServed: "BR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
        suppressHydrationWarning
      />
    </>
  );
}

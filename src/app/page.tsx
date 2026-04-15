"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useScroll, useTransform, easeOut } from "framer-motion";
import Galaxy from "./_components/Galaxy";
import { SEOStructuredData } from "./_components/SEOStructuredData";
import { MobileMenu } from "./_components/MobileMenu";

const navItems = [
  { label: "Servicos", href: "#servicos" },
  { label: "Arquitetura", href: "#arquitetura" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

const serviceCards = [
  {
    title: "Construímos o motor invisível da sua operação.",
    text: "Sites, automações, tráfego pago e agentes de IA desenhados para dar mais velocidade, clareza e continuidade ao seu processo comercial.",
  },
  {
    title: "Web Design & Branding",
    text: "Estruturas visuais mais sólidas para comunicar valor, sustentar autoridade e transformar acessos em oportunidades reais.",
  },
];

const metrics = [
  { value: "Tecnologia", label: "base digital pensada para operar melhor" },
  { value: "IA", label: "atendimento e fluxos com mais agilidade" },
  { value: "Integração", label: "ferramentas conectadas sem retrabalho" },
  { value: "Performance", label: "Estratégias de marketing para te ajudar a vender mais" },

];

const architecture = [
  {
    title: "Diagnóstico Real",
    text: "Leitura do momento do negócio, gargalos, ferramentas e pontos de atrito na operação.",
    icon: <PulseIcon />,
  },
  {
    title: "Mapa de Solução",
    text: "Definição da arquitetura ideal entre site, automação, integrações, IA e tráfego pago.",
    icon: <GridIcon />,
  },
  {
    title: "Implementação Estratégica",
    text: "Execução com foco em experiência, performance e conexão entre as partes do projeto.",
    icon: <SparkIcon />,
  },
  {
    title: "Ajuste Contínuo",
    text: "Refinamento técnico e operacional para a estrutura continuar fazendo sentido no crescimento.",
    icon: <CheckIcon />,
  },
];

const processCards = [
  {
    title: "Mais previsibilidade operacional",
    text: "Atendimento, processos e aquisição passam a funcionar sobre uma base mais organizada, com menos ruído e menos retrabalho.",
    icon: <ChartIcon />,
  },
  {
    title: "Integrações e automações",
    text: "CRM, agenda, APIs, formulários e fluxos internos conectados para reduzir fricção e dar continuidade ao processo comercial.",
    icon: <PlugIcon />,
  },
  {
    title: "Sites e páginas",
    text: "Presença digital com mais clareza de proposta, melhor leitura de valor e uma experiência mais consistente para o usuário.",
    icon: <BrowserIcon />,
  },
  {
    title: "Tráfego com estrutura",
    text: "Campanhas deixam de apontar para uma operação desconectada e passam a trabalhar sobre uma estrutura preparada para converter.",
    icon: <ArrowFlowIcon />,
  },
];

const galleryCards = [
  { image: "/projetos-realizados/menuagora.png", title: "Menu Agora - Gestão de Cardápios" },
  { image: "/projetos-realizados/ecomm-goldenlife.png", title: "E-commerce Golden Life" },
  { image: "/projetos-realizados/ecomm-rarimodas.png", title: "E-commerce Rari Modas" },
  { image: "/projetos-realizados/gymturbo.png", title: "Gym Turbo - Academia Digital" },
  { image: "/projetos-realizados/elvist-tatto.png", title: "Elvist Tattoo Studio" },
  { image: "/projetos-realizados/kfstudio.png", title: "KF Studio - Criações" },
  { image: "/projetos-realizados/kitsalgados.png", title: "Kits Salgados - E-commerce" },
  { image: "/projetos-realizados/infg.png", title: "INFG - Empresa Tech" },
  { image: "/projetos-realizados/site-imobiliaria.png", title: "Site Imobiliária" },
  { image: "/projetos-realizados/vitoriahumana.png", title: "Vitória Humana" },
  { image: "/projetos-realizados/Site institucional.png", title: "Site Institucional Profissional" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: easeOut },
};

export default function Home() {
  const architectureRef = useRef<HTMLElement | null>(null);
  const galleryRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: architectureRef,
    offset: ["start 0.8", "end 0.25"],
  });
  const timelineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const { scrollYProgress: galleryProgress } = useScroll({
    target: galleryRef,
    offset: ["start center", "center center"],
  });
  const dramaticGalleryProgress = useTransform(
    galleryProgress,
    [0, 0.42, 0.58, 1],
    [0, 0, 1, 1],
  );
  const galleryBg = useTransform(dramaticGalleryProgress, [0, 1], ["#f2efe9", "#000000"]);
  const galleryText = useTransform(dramaticGalleryProgress, [0, 1], ["#090b10", "#f5f7fb"]);
  const galleryMuted = useMotionTemplate`rgba(158, 166, 179, ${dramaticGalleryProgress})`;
  const galleryOverlay = useMotionTemplate`linear-gradient(90deg, ${galleryBg} 0%, rgba(0, 0, 0, 0) 100%)`;
  const galleryOverlayReverse = useMotionTemplate`linear-gradient(270deg, ${galleryBg} 0%, rgba(0, 0, 0, 0) 100%)`;

  return (
    <main className="page-shell">
      <SEOStructuredData />
      <header className="site-header">
        <div className="shell site-header__inner">
          <Link href="#top" className="brand-mark" aria-label="Espindola Studio">
            <Image src="/svg/logo.svg" alt="Espindola Studio" width={118} height={29} />
          </Link>

          <nav className="nav-links" aria-label="Navegacao principal">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="#contato" className="button button--ghost">
            Solicitar projeto
          </Link>
          <MobileMenu />
        </div>
      </header>

      <section id="top" className="hero hero--reference">
        <div className="hero__galaxy">
          <Galaxy
            starSpeed={2.1}
            density={2.1}
            hueShift={140}
            speed={0}
            glowIntensity={0.15}
            saturation={0}
            mouseRepulsion={false}
            repulsionStrength={2}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            transparent
          />
        </div>
        <div className="hero__bg hero__bg--left" />
        <div className="hero__bg hero__bg--right" />

        <div className="shell hero__grid">
          <motion.div className="hero__content hero__content--centered" {...fadeUp}>
            <h1>
              Soluções tech para empresas que querem vender, automatizar e crescer
              <span> com mais inteligencia.</span>
            </h1>

            <p className="hero__lead">
              Estruturo operações digitais que unem técnologia, IA, sites
              e tráfego pago para negocios que precisam de uma base mais eficiente e
              profissional para escalar.
            </p>

            <div className="hero__actions">
              <Link href="#contato" className="button">
                Solicitar projeto estrategico
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section section--compact">
        <div className="shell manifesto-block">
          <motion.div className="manifesto-block__heading" {...fadeUp}>
            <span className="section-kicker">Automação com estrutura</span>
            <h2>Somos arquitetos de soluções.</h2>
          </motion.div>
        </div>
      </section>

      <section id="servicos" className="section section--compact">
        <div className="shell service-statements">
          <div className="service-statements__divider" />
          {serviceCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="service-statement"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span className="service-statement__index">0{index + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section section--compact">
        <div className="shell metrics-row">
          {metrics.map((item, index) => (
            <motion.article
              key={item.label}
              className="metric-box"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="arquitetura" ref={architectureRef} className="section architecture-section">
        <div className="shell architecture-layout">
          <motion.div className="architecture-intro architecture-intro--centered" {...fadeUp}>
            <span className="section-kicker">Arquitetura do Sistema</span>
            <h2>A evolução do negócio acontece quando a estrutura para de brigar com a operação.</h2>
            <p>
              O projeto precisa ligar diagnóstico, implementação e melhoria contínua.
              Essa é a lógica por trás de cada entrega.
            </p>
          </motion.div>

          <div className="architecture-timeline">
            <motion.div
              className="architecture-timeline__progress"
              style={{ scaleY: timelineScaleY }}
            />
            {architecture.map((item, index) => (
              <motion.article
                key={item.title}
                className={`timeline-step ${index % 2 === 0 ? "timeline-step--left" : "timeline-step--right"}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="timeline-step__content">
                  <div className="timeline-step__icon">{item.icon}</div>
                  <span className="timeline-step__phase">{`Fase 0${index + 1}`}</span>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
                <motion.span
                  className="timeline-step__node"
                  initial={{ scale: 0.9, opacity: 0.55 }}
                  whileInView={{ scale: 1.15, opacity: 1 }}
                  viewport={{ once: true, amount: 0.55 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section evolution-banner">
        <div className="shell">
          <motion.div className="evolution-banner__content" {...fadeUp}>
            <p>A evolução é</p>
            <h2>inevitável.</h2>
            <span>O que muda é se o seu negócio cresce com estrutura ou improviso.</span>
          </motion.div>
        </div>
      </section>

      <section id="processo" className="light-panel-section">
        <div className="shell light-panel">
          <div className="light-panel__header">
            <div className="light-panel__heading">
              <span>O que os clientes obtêm</span>
              <h2>Uma base mais inteligente para operar, vender e crescer.</h2>
            </div>

            <p className="light-panel__intro">
              Quando tecnologia, atendimento e aquisição passam a trabalhar juntos,
              o negócio ganha mais clareza, continuidade e consistência operacional.
            </p>
          </div>

          <div className="light-panel__grid">
            {processCards.map((item, index) => (
              <motion.article
                key={item.title}
                className={`light-card ${index === 0 ? "light-card--featured" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="light-card__icon">{item.icon}</div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        ref={galleryRef}
        className="section dark-transition-section"
        style={
          {
            backgroundColor: galleryBg,
            color: galleryText,
            "--gallery-bg": galleryBg,
            "--gallery-fg": galleryText,
            "--gallery-muted": galleryMuted,
            "--gallery-overlay-left": galleryOverlay,
            "--gallery-overlay-right": galleryOverlayReverse,
          } as unknown as React.CSSProperties
        }
      >
        <div className="shell gallery-section gallery-section--overlay">
          <motion.div className="gallery-section__heading" {...fadeUp}>
            <span className="section-kicker">Projetos selecionados</span>
            <h2>Interfaces, estruturas e experiências que mostram como essa direção ganha forma.</h2>
          </motion.div>

          <div className="projects-carousel">
            <div className="projects-carousel__track">
              {[...galleryCards, ...galleryCards].map((item, index) => (
                <motion.article
                  key={`${item.image}-${index}`}
                  className="carousel-project"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: (index % galleryCards.length) * 0.05 }}
                >
                  <div className="carousel-project__media">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 70vw, 28vw"
                    />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <section id="contato" className="section contact-section">
        <div className="shell contact-block">
          <motion.article className="contact-block__lead" {...fadeUp}>
            <span className="section-kicker">Contato</span>
            <h2>Se a operação precisa de mais clareza, o próximo passo é conversar sobre a estrutura certa.</h2>
            <p className="contact-block__text">
              O ponto de partida é entender o contexto, os gargalos e o que precisa
              ser conectado para o negócio operar melhor.
            </p>
          </motion.article>

          <motion.aside className="contact-actions" {...fadeUp}>
            <p className="contact-actions__label">Iniciar conversa</p>
            <div className="contact-actions__links ">
              <Link
                href="https://wa.me/67991593756?text=Olá, venho do site e gostaria de realizar um orçamento."
                className="contact-link flex gap-4 items-center justify-cente my-4"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp

                 <svg className="footer-arrow" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </Link>
              <Link
                href="mailto:studioespindola@gmail.com"
                className="contact-link flex gap-4 items-center justify-center"
              >
                studioespindola@gmail.com

                <svg className="footer-arrow" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </Link>
            </div>
            <address className="contact-actions__meta">
              <span>Campo Grande, MS</span>
              <span>Sites, automacoes, IA e Tráfego Pago</span>
            </address>
          </motion.aside>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell site-footer__inner">
          <section className="site-footer__top">
            <article className="site-footer__brand">
              <Link href="#top" className="brand-mark" aria-label="Espindola Studio">
                <Image src="/svg/logo.svg" alt="Espindola Studio" width={118} height={29} />
              </Link>
              <p>
                Estrutura digital para negócios que precisam vender com mais clareza,
                conectar processos e operar com menos fricção.
              </p>
            </article>

            <nav className="footer-column" aria-label="Navegacao do rodape">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <address className="footer-column ">

              <div className="footer-contact-group flex flex-column">
               

                <div className="footer-divider" />
                <Link href="https://www.instagram.com/eupedroespindola_/" target="_blank" rel="noreferrer" className="footer-contact-link">
                  <span>Instagram</span>
                  <svg className="footer-arrow" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <p>Campo Grande, MS</p>
            </address>
          </section>

          <div className="site-footer__bottom">
            <span>Espindola Studio</span>
            <span>Sites, automações, tráfego pago e IA aplicada ao comercial</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function PulseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 12h4l2.2-4 3.6 8 2.4-4H21"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m12 2 2.3 6.2L20.5 10l-6.2 2.3L12 18.5l-2.3-6.2L3.5 10l6.2-1.8L12 2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="6" height="6" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="14" y="4" width="6" height="6" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="4" y="14" width="6" height="6" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="14" y="14" width="6" height="6" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m5 12.5 4.2 4.2L19 7.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 20v-8M3 8V3M11 20v-5M11 12V3M19 20v-3M19 14V3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlugIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 9v6M18 9v6M10 3v4M14 3v4M4 15h16v3c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrowserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="3" width="20" height="18" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M2 9h20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ArrowFlowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 12h14M17 9l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

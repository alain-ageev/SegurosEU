import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { PartnersGrid } from "@/components/partners-grid";
import { ServiceGrid } from "@/components/service-grid";
import { corporateHighlights, siteConfig } from "@/lib/site";

export default function HomePage() {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "InsuranceAgency", "LocalBusiness"],
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-edias.png`,
    email: siteConfig.email,
    telephone: ["+55-81-3105-7588", "+55-11-97715-7588"],
    taxID: siteConfig.cnpj,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -8.1315,
      longitude: -34.9015,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
    sameAs: [siteConfig.instagram, siteConfig.linkedin],
    areaServed: {
      "@type": "City",
      name: "Recife",
    },
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "pt-BR",
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <JsonLd data={[organizationLd, websiteLd]} />
      <Hero
        title="Consultoria em seguros que protege o negócio e a família"
        description="Diagnóstico de riscos, escolha de coberturas e acompanhamento próximo — em Recife e para clientes em todo o Brasil."
        primaryCta={{ label: "Falar com especialista", href: "/contato" }}
        secondaryCta={{ label: "Explorar soluções", href: "#solucoes" }}
        imageSrc="/images/home/hero.jpg"
        imageAlt="Reunião de negócios com equipe Edias e clientes"
      />

      <PartnersGrid />

      <ServiceGrid />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative min-h-[280px] overflow-hidden lg:min-h-[360px]">
            <Image
              src="/images/home/meeting.jpg"
              alt="Reunião de negócios e consultoria de riscos"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--edias-gold-deep)] uppercase">
              Nossa visão
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-[var(--edias-navy)] sm:text-4xl">
              Dissolver entraves de seguro antes do sinistro
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-[var(--edias-ink-muted)]">
              <p>
                A rotina das empresas arrasta sócios a decisões operacionais
                exaustivas. Erros de declaração e cálculos incorretos viram
                lacunas de cobertura, perda proporcional e rateios — riscos que
                poderiam ser evitados.
              </p>
              <p>
                A experiência mostra que mais de 60% das demandas envolvendo o
                negócio nascem de inconformidade corporativa. Nossa consultoria
                confere exatidão nos cálculos de risco e aumenta a assertividade
                para preservar a saúde financeira da empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--edias-line)] bg-[var(--edias-canvas)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-[var(--edias-navy)]">
            Proteção com método consultivo
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {corporateHighlights.map((item, index) => {
              const images = [
                "/images/home/finance.jpg",
                "/images/home/truck.jpg",
                "/images/home/clients.jpg",
              ];
              return (
                <li key={item.title} className="overflow-hidden bg-white">
                  <div className="relative h-40">
                    <Image
                      src={images[index] ?? images[0]}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-xl font-semibold text-[var(--edias-navy)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--edias-ink-muted)]">
                      {item.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Pronto para revisar suas coberturas?"
        description="Converse com a equipe Edias e receba orientação objetiva para consórcio, vida, viagem, saúde e riscos empresariais."
      />
    </>
  );
}

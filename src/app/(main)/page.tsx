import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon, CheckIcon } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { PartnersCarousel } from "@/components/v2/partners-carousel";
import { V2LeadForm } from "@/components/v2/lead-form";
import {
  institutionalPartners,
  services,
  siteConfig,
} from "@/lib/site";
import {
  v2Authority,
  v2Cases,
  v2Comparison,
  v2Credentials,
  v2Hero,
  v2Process,
  v2Scenarios,
  v2TrustIndicators,
} from "@/lib/v2-content";

export default function ConversionHomePage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": ["InsuranceAgency", "LocalBusiness"],
    name: siteConfig.name,
    url: siteConfig.url,
    description: v2Hero.subtitle,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: "BR",
    },
  };

  return (
    <>
      <JsonLd data={ld} />

      {/* Hero — fachadas da marca (vidro + placa) */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/home/brand-facade-glass.jpg"
            alt="Fachada com a marca E DIAS Corretora de Seguros"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-[var(--v2-abyss)] via-[var(--v2-abyss)]/88 to-[var(--v2-abyss)]/40"
          />
        </div>

        <div className="v2-container relative grid items-center gap-8 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="v2-eyebrow text-[var(--v2-ember)]">{v2Hero.eyebrow}</p>
            <h1 className="v2-display mt-2 text-[clamp(30px,4.5vw,44px)] text-white">
              {v2Hero.title}
            </h1>
            <p className="mt-3 max-w-xl text-[18px] leading-snug text-white/92">
              {v2Hero.subtitle}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link href={v2Hero.primaryCta.href} className="v2-btn v2-btn-accent">
                {v2Hero.primaryCta.label}
                <ArrowRightIcon className="size-4" />
              </Link>
              <a
                href={v2Hero.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="v2-btn border border-white/45 bg-white/10 text-white hover:bg-white/18"
              >
                {v2Hero.secondaryCta.label}
              </a>
            </div>
            <p className="mt-6 text-[14px] font-medium text-white/75">
              {v2Hero.trustLine}
            </p>
          </div>

          <div className="v2-media aspect-square max-w-[420px] justify-self-center shadow-[0_24px_60px_rgba(6,40,70,0.45)] lg:justify-self-end">
            <Image
              src="/images/home/brand-facade-dark.jpg"
              alt="Identidade visual E DIAS em fachada institucional"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 420px"
              className="object-cover object-[18%_45%]"
            />
          </div>
        </div>
      </section>

      {/* Números de confiança — sem título INDICADORES */}
      <section
        className="v2-section v2-section-compact bg-[var(--v2-abyss)]"
        aria-label="Indicadores de confiança"
      >
        <div className="v2-container grid gap-3 sm:grid-cols-3">
          {v2TrustIndicators.map((item) => (
            <div
              key={item.label}
              className="v2-indicator-item px-2 text-center sm:px-4"
            >
              <p className="v2-indicator-value text-[40px] font-bold sm:text-[44px]">
                {item.value}
              </p>
              <p className="v2-indicator-label mt-1 text-[16px] font-semibold">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Soluções */}
      <section id="solucoes" className="v2-section bg-white">
        <div className="v2-container">
          <p className="v2-eyebrow">Soluções</p>
          <h2 className="v2-h2 mt-2">Um produto para cada necessidade</h2>
          <p className="v2-body mt-3 max-w-[640px]">
            Consórcio, vida, viagem e saúde com a mesma lógica: diagnóstico claro,
            parceiros confiáveis e acompanhamento próximo.
          </p>

          <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {v2Scenarios.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="rounded-[16px] bg-[#f4f4f4] px-4 py-3.5 transition hover:bg-[#ebebeb]"
              >
                <h3 className="v2-h3 text-[18px]">{item.title}</h3>
                <p className="v2-caption mt-1.5">{item.audience}</p>
              </Link>
            ))}
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {services.map((service, index) => (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="group relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-[16px] bg-[var(--v2-abyss)] text-white"
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-[var(--v2-abyss)] via-[var(--v2-abyss)]/80 to-transparent"
                  />
                  <div className="relative z-10 flex flex-col gap-2 p-5 sm:p-6">
                    <span className="text-sm font-bold tracking-[0.16em] text-[var(--v2-ember)]">
                      0{index + 1}
                    </span>
                    <h3 className="text-[26px] font-bold leading-tight">{service.title}</h3>
                    <p className="text-[16px] leading-relaxed text-white">
                      {service.summary}
                    </p>
                    <div className="mt-1 flex items-center justify-between text-[15px] font-bold text-[var(--v2-ember)]">
                      <span>{service.accent}</span>
                      <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Nossa atuação */}
      <section
        id="atuacao"
        className="v2-section v2-section-compact bg-[var(--v2-abyss)] text-white"
      >
        <div className="v2-container">
          <p className="v2-eyebrow text-[var(--v2-ember)]">Como trabalhamos</p>
          <h2 className="v2-h2 v2-h2-on-blue mt-1">Nossa atuação</h2>
          <ol className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {v2Process.map((item) => (
              <li key={item.step} className="rounded-[14px] bg-white/15 p-3.5 sm:p-4">
                <p className="text-[14px] font-bold text-[var(--v2-ember)]">
                  {item.step}
                </p>
                <h3 className="mt-1 text-[20px] font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-[16px] leading-snug text-white">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="v2-section bg-white">
        <div className="v2-container">
          <p className="v2-eyebrow">Por que a E DIAS</p>
          <h2 className="v2-h2 mt-1.5">{v2Comparison.title}</h2>
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            <div className="rounded-[16px] bg-[#f4f4f4] p-5">
              <h3 className="v2-h3 text-[var(--v2-ink)]">Abordagem tradicional</h3>
              <ul className="mt-3 space-y-2.5">
                {v2Comparison.traditional.map((line) => (
                  <li key={line} className="v2-body-sm flex gap-2 text-[var(--v2-ink)]">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--v2-abyss)]" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[16px] bg-[var(--v2-abyss)] p-5 text-white">
              <h3 className="text-[20px] font-bold text-[var(--v2-ember)]">
                Abordagem consultiva E DIAS
              </h3>
              <ul className="mt-3 space-y-2.5">
                {v2Comparison.consultive.map((line) => (
                  <li key={line} className="flex gap-2 text-[16px] leading-snug text-white">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-[var(--v2-ember)]" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {v2Credentials.map((item) => (
              <article
                key={item.title}
                className="rounded-[16px] bg-[#f4f4f4] p-5"
              >
                <h3 className="v2-h3">{item.title}</h3>
                <p className="v2-body-sm mt-1.5 text-[var(--v2-ink)]">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid items-center gap-5 rounded-[20px] bg-[var(--v2-abyss)] p-4 sm:grid-cols-[0.9fr_1.1fr] sm:p-5">
            <div className="v2-media aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src="/images/home/brand-facade-dark.jpg"
                alt="Marca E DIAS Corretora de Seguros em fachada"
                fill
                loading="lazy"
                sizes="(max-width: 640px) 90vw, 360px"
                className="object-cover object-[20%_40%]"
              />
            </div>
            <div className="px-1 pb-1 sm:px-2">
              <p className="v2-eyebrow text-[var(--v2-ember)]">Institucional</p>
              <h3 className="mt-1 text-[22px] font-bold text-white">
                Uma corretora com presença e identidade próprias
              </h3>
              <p className="mt-2 text-[16px] leading-snug text-white/90">
                Conheça a missão, a base em Recife e os canais de atendimento da
                E DIAS.
              </p>
              <Link
                href="/sobre"
                className="mt-4 inline-flex items-center gap-2 text-[16px] font-bold text-[var(--v2-ember)] underline-offset-4 hover:underline"
              >
                Conheça a E DIAS — missão e contatos
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section
        id="cases"
        className="v2-section v2-section-compact bg-[var(--v2-abyss)] text-white"
      >
        <div className="v2-container">
          <p className="v2-eyebrow text-white">Cases</p>
          <h2 className="v2-h2 v2-h2-on-blue mt-1">
            Resultados relevantes para o público corporativo
          </h2>
          <p className="mt-1.5 max-w-[640px] text-[17px] font-medium text-white">
            Exemplos ilustrativos. Substituímos por cases nominados assim que houver
            autorização do cliente.
          </p>
          <div className="mt-3 grid gap-2.5 lg:grid-cols-3">
            {v2Cases.map((item) => (
              <article
                key={item.context}
                className="flex flex-col rounded-[14px] bg-white p-4 text-[var(--v2-ink)] sm:p-5"
              >
                <p className="v2-tag w-fit">{item.context}</p>
                <dl className="mt-3 space-y-2">
                  <div>
                    <dt className="text-[15px] font-bold text-[var(--v2-ink)]">Problema</dt>
                    <dd className="v2-body-sm text-[var(--v2-ink)]">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-[15px] font-bold text-[var(--v2-ink)]">Solução</dt>
                    <dd className="v2-body-sm text-[var(--v2-ink)]">{item.solution}</dd>
                  </div>
                  <div>
                    <dt className="text-[15px] font-bold text-[var(--v2-ink)]">Resultado</dt>
                    <dd className="v2-body-sm text-[var(--v2-ink)]">{item.result}</dd>
                  </div>
                </dl>
                <blockquote className="mt-auto pt-3 text-[16px] font-bold text-[var(--v2-ink)]">
                  “{item.quote}”
                  <footer className="v2-caption mt-1.5 text-[var(--v2-abyss)]">
                    {item.person} · {item.role}
                  </footer>
                </blockquote>
              </article>
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-btn v2-btn-primary"
            >
              Quero esse Atendimento
              <ArrowRightIcon className="size-4" />
            </a>
          </div>

          <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {v2Authority.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-start justify-between gap-3 rounded-[14px] bg-white/15 p-3.5 text-white transition hover:bg-white/20 sm:p-4"
              >
                <div>
                  <p className="v2-tag w-fit bg-white/20 text-white">{item.type}</p>
                  <h3 className="mt-1.5 text-[18px] font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-[16px] text-white">{item.body}</p>
                </div>
                <ArrowRightIcon className="mt-1 size-4 shrink-0 text-[var(--v2-ember)]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Parceiros — marquee estilo Belz, sem links */}
      <section id="parceiros" className="v2-section bg-white px-0">
        <div className="v2-partners-panel">
          <p className="v2-partners-label">
            Principais seguradoras e operadoras
          </p>
          <PartnersCarousel />
        </div>
      </section>

      {/* Apoio institucional — tom executivo */}
      <section
        id="apoio"
        className="v2-section v2-section-compact bg-[var(--v2-abyss)]"
      >
        <div className="v2-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="v2-eyebrow text-white/90">Institucional</p>
            <h2 className="v2-h2 v2-h2-on-blue mt-1">Apoio institucional</h2>
            <p className="mt-2 text-[16px] leading-snug text-white/90">
              Referências de mercado que sustentam nossa atuação consultiva e a
              credibilidade junto a clientes e parceiros.
            </p>
          </div>

          <ul className="mx-auto mt-5 grid max-w-4xl gap-3 sm:grid-cols-3 sm:gap-4">
            {institutionalPartners.map((partner) => (
              <li
                key={partner.name}
                className="flex flex-col gap-3 rounded-[14px] border border-white/15 bg-white/10 px-5 py-5"
              >
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={partner.name}
                  aria-label={`${partner.name} — abrir site oficial`}
                  className="v2-apoio-logo-frame"
                >
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    fill
                    className="v2-apoio-logo"
                    loading="lazy"
                    sizes="(max-width: 640px) 80vw, 280px"
                  />
                </a>
                <div className="text-center">
                  <p className="text-[14px] font-bold tracking-[0.06em] text-white uppercase">
                    {partner.name}
                  </p>
                  <p className="mt-1 text-[13px] font-medium text-white/75">
                    {partner.role}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Próximo passo — último bloco antes do rodapé */}
      <section id="contato" className="v2-section bg-white">
        <div className="v2-container grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="v2-eyebrow">Próximo passo</p>
            <h2 className="v2-h2 mt-1">Receba uma análise objetiva</h2>
            <p className="v2-body mt-2 max-w-[640px]">
              Formulário curto para o primeiro contato.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Retorno em até 1 dia útil",
                "Sem compromisso de contratação",
                "Dados usados só para atendimento",
              ].map((line) => (
                <li key={line} className="flex gap-2 text-[14px] font-semibold text-[var(--v2-ink)]">
                  <CheckIcon className="size-4 text-[var(--v2-ember)]" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="v2-btn v2-btn-outline"
              >
                WhatsApp direto
              </a>
              <a href={siteConfig.phoneHref} className="v2-btn v2-btn-ghost">
                {siteConfig.phone}
              </a>
            </div>
          </div>
          <V2LeadForm />
        </div>
      </section>
    </>
  );
}

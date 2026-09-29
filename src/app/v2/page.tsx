import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { V2LeadForm } from "@/components/v2/lead-form";
import { siteConfig } from "@/lib/site";
import {
  v2About,
  v2Authority,
  v2Cases,
  v2Comparison,
  v2Hero,
  v2PartnerLogos,
  v2Process,
  v2Scenarios,
  v2Solutions,
  v2TrustIndicators,
} from "@/lib/v2-content";

export default function ConversionHomePage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": ["InsuranceAgency", "LocalBusiness"],
    name: siteConfig.name,
    url: `${siteConfig.url}/v2`,
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

      {/* 2. Hero */}
      <section className="relative overflow-hidden bg-[var(--edias-navy)] text-white">
        <Image
          src="/images/home/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-[var(--edias-deep)] via-[var(--edias-navy)]/90 to-[var(--edias-navy)]/70"
        />
        <div aria-hidden className="absolute inset-0 brand-pattern opacity-30 mix-blend-soft-light" />

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24">
          <p className="animate-rise font-heading text-xs tracking-[0.22em] text-[var(--edias-gold)] uppercase">
            {v2Hero.eyebrow}
          </p>
          <h1 className="animate-rise-delay mt-4 max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-[0.02em] sm:text-4xl lg:text-5xl">
            {v2Hero.title}
          </h1>
          <p className="animate-rise-delay-2 font-description mt-5 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            {v2Hero.subtitle}
          </p>
          <div className="animate-rise-delay-3 mt-8 flex flex-wrap gap-3">
            <Link
              href={v2Hero.primaryCta.href}
              className="inline-flex h-12 items-center justify-center bg-[var(--edias-gold)] px-5 text-sm font-extrabold text-[var(--edias-navy)] transition hover:bg-[var(--edias-gold-soft)]"
            >
              {v2Hero.primaryCta.label}
              <ArrowRightIcon className="ml-2 size-4" />
            </Link>
            <a
              href={v2Hero.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center border border-white/35 px-5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              {v2Hero.secondaryCta.label}
            </a>
          </div>
          <p className="mt-8 text-xs tracking-[0.14em] text-white/55 uppercase">
            {v2Hero.trustLine}
          </p>
        </div>
      </section>

      {/* 3. Prova social imediata */}
      <section className="border-b border-[var(--edias-line)] bg-white py-10 sm:py-12" aria-labelledby="prova-social">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="prova-social" className="sr-only">
            Prova social e parceiros
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {v2TrustIndicators.map((item) => (
              <div key={item.label} className="text-center sm:text-left">
                <p className="font-heading text-3xl text-[var(--edias-navy)]">{item.value}</p>
                <p className="mt-1 text-sm font-medium text-[var(--edias-ink-muted)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <ul className="mt-10 grid grid-cols-2 items-center gap-x-6 gap-y-5 sm:grid-cols-5">
            {v2PartnerLogos.map((partner) => (
              <li key={partner.name} className="flex justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={48}
                  className="h-9 w-auto max-w-[120px] object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-10"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Escolha pelo cenário */}
      <section id="segmentos" className="bg-[var(--edias-canvas)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-xs tracking-[0.2em] text-[var(--edias-gold-deep)] uppercase">
            Por cenário
          </p>
          <h2 className="mt-2 font-heading text-3xl text-[var(--edias-navy)] sm:text-4xl">
            Por onde você quer começar?
          </h2>
          <p className="font-description mt-3 max-w-2xl text-lg text-[var(--edias-ink-muted)]">
            Escolha a intenção — montamos a conversa em cima do seu problema, não de um catálogo.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {v2Scenarios.map((item) => (
              <article
                key={item.id}
                className="flex flex-col border border-[var(--edias-navy)]/10 bg-white p-5 transition hover:border-[var(--edias-gold)]"
              >
                <h3 className="font-heading text-xl text-[var(--edias-navy)]">{item.title}</h3>
                <p className="mt-1 text-xs font-bold tracking-wide text-[var(--edias-gold-deep)] uppercase">
                  {item.audience}
                </p>
                <p className="mt-3 text-sm text-[var(--edias-ink-muted)]">
                  <span className="font-semibold text-[var(--edias-navy)]">Dor: </span>
                  {item.pain}
                </p>
                <p className="mt-2 text-sm text-[var(--edias-ink-muted)]">
                  <span className="font-semibold text-[var(--edias-navy)]">Resultado: </span>
                  {item.outcome}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--edias-navy)] underline-offset-4 hover:underline"
                >
                  {item.cta}
                  <ArrowRightIcon className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Soluções prioritárias */}
      <section id="solucoes" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-xs tracking-[0.2em] text-[var(--edias-gold-deep)] uppercase">
            Soluções
          </p>
          <h2 className="mt-2 font-heading text-3xl text-[var(--edias-navy)] sm:text-4xl">
            O que priorizamos para gerar resultado
          </h2>
          <p className="font-description mt-3 max-w-2xl text-lg text-[var(--edias-ink-muted)]">
            Cada solução responde para quem é, qual dor resolve e como iniciar.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {v2Solutions.map((item) => (
              <article
                key={item.title}
                className="flex flex-col border border-[var(--edias-line)] bg-[var(--edias-canvas)] p-5"
              >
                <h3 className="font-heading text-lg text-[var(--edias-navy)]">{item.title}</h3>
                <p className="mt-2 text-sm font-medium text-[var(--edias-ink-muted)]">
                  {item.benefit}
                </p>
                <p className="mt-3 text-xs font-bold tracking-wide text-[var(--edias-gold-deep)] uppercase">
                  Para: {item.forWho}
                </p>
                <Link
                  href={item.href}
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-extrabold text-[var(--edias-navy)]"
                >
                  {item.cta}
                  <ArrowRightIcon className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Como funciona */}
      <section className="bg-[var(--edias-navy)] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-xs tracking-[0.2em] text-[var(--edias-gold)] uppercase">
            Método
          </p>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl">
            Como a consultoria funciona
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {v2Process.map((item) => (
              <li key={item.step} className="border border-white/15 p-5">
                <p className="font-heading text-sm tracking-[0.2em] text-[var(--edias-gold)]">
                  {item.step}
                </p>
                <h3 className="mt-2 font-heading text-xl">{item.title}</h3>
                <p className="font-description mt-2 text-base text-white/75">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. Diferenciais */}
      <section id="sobre" className="bg-[var(--edias-canvas)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-xs tracking-[0.2em] text-[var(--edias-gold-deep)] uppercase">
            Diferenciais
          </p>
          <h2 className="mt-2 font-heading text-3xl text-[var(--edias-navy)] sm:text-4xl">
            {v2Comparison.title}
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="border border-[var(--edias-line)] bg-white p-6">
              <h3 className="font-heading text-lg text-[var(--edias-ink-muted)]">
                Abordagem tradicional
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-[var(--edias-ink-muted)]">
                {v2Comparison.traditional.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="mt-1 size-1.5 shrink-0 bg-[var(--edias-line)]" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[var(--edias-navy)] bg-[var(--edias-navy)] p-6 text-white">
              <h3 className="font-heading text-lg text-[var(--edias-gold)]">
                Abordagem consultiva E DIAS
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                {v2Comparison.consultive.map((line) => (
                  <li key={line} className="flex gap-2">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-[var(--edias-gold)]" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 max-w-3xl">
            <h3 className="font-heading text-2xl text-[var(--edias-navy)]">{v2About.title}</h3>
            <p className="font-description mt-3 text-lg text-[var(--edias-ink-muted)]">
              {v2About.body}
            </p>
            <ul className="mt-4 space-y-2 text-sm font-medium text-[var(--edias-navy)]">
              {v2About.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <CheckIcon className="mt-0.5 size-4 text-[var(--edias-gold-deep)]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Cases e depoimentos */}
      <section id="cases" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-xs tracking-[0.2em] text-[var(--edias-gold-deep)] uppercase">
            Cases
          </p>
          <h2 className="mt-2 font-heading text-3xl text-[var(--edias-navy)] sm:text-4xl">
            Contexto, problema, solução e resultado
          </h2>
          <p className="font-description mt-3 max-w-2xl text-lg text-[var(--edias-ink-muted)]">
            Exemplos ilustrativos do tipo de trabalho consultivo. Substitua por cases nominados com autorização do cliente quando disponíveis.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {v2Cases.map((item) => (
              <article
                key={item.context}
                className="flex flex-col border border-[var(--edias-line)] p-5"
              >
                <p className="text-xs font-extrabold tracking-wide text-[var(--edias-gold-deep)] uppercase">
                  {item.context}
                </p>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-bold text-[var(--edias-navy)]">Problema</dt>
                    <dd className="text-[var(--edias-ink-muted)]">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[var(--edias-navy)]">Solução</dt>
                    <dd className="text-[var(--edias-ink-muted)]">{item.solution}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[var(--edias-navy)]">Resultado</dt>
                    <dd className="text-[var(--edias-ink-muted)]">{item.result}</dd>
                  </div>
                </dl>
                <blockquote className="font-description mt-auto border-t border-[var(--edias-line)] pt-4 text-base text-[var(--edias-navy)]">
                  “{item.quote}”
                  <footer className="mt-2 text-xs font-bold tracking-wide text-[var(--edias-ink-muted)] uppercase">
                    {item.person} · {item.role}
                  </footer>
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Conteúdo de autoridade */}
      <section className="bg-[var(--edias-canvas)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-xs tracking-[0.2em] text-[var(--edias-gold-deep)] uppercase">
            Conteúdos
          </p>
          <h2 className="mt-2 font-heading text-3xl text-[var(--edias-navy)] sm:text-4xl">
            Materiais para decidir com segurança
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {v2Authority.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border border-[var(--edias-navy)]/10 bg-white p-5 transition hover:border-[var(--edias-gold)]"
              >
                <p className="text-xs font-extrabold tracking-wide text-[var(--edias-gold-deep)] uppercase">
                  {item.type}
                </p>
                <h3 className="mt-2 font-heading text-xl text-[var(--edias-navy)] group-hover:underline">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--edias-ink-muted)]">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA final */}
      <section id="contato" className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <p className="font-heading text-xs tracking-[0.2em] text-[var(--edias-gold-deep)] uppercase">
              Próximo passo
            </p>
            <h2 className="mt-2 font-heading text-3xl text-[var(--edias-navy)] sm:text-4xl">
              Receba uma análise objetiva
            </h2>
            <p className="font-description mt-3 text-lg text-[var(--edias-ink-muted)]">
              Formulário curto: só o necessário para o primeiro contato. Preferir WhatsApp ou telefone também funciona.
            </p>
            <ul className="mt-6 space-y-2 text-sm font-medium text-[var(--edias-navy)]">
              <li className="flex gap-2">
                <CheckIcon className="size-4 text-[var(--edias-gold-deep)]" />
                Retorno em até 1 dia útil
              </li>
              <li className="flex gap-2">
                <CheckIcon className="size-4 text-[var(--edias-gold-deep)]" />
                Sem compromisso de contratação
              </li>
              <li className="flex gap-2">
                <CheckIcon className="size-4 text-[var(--edias-gold-deep)]" />
                Dados usados só para atendimento
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center bg-[#25D366] px-4 text-sm font-bold text-white"
              >
                WhatsApp direto
              </a>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex h-11 items-center border border-[var(--edias-navy)] px-4 text-sm font-bold text-[var(--edias-navy)]"
              >
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

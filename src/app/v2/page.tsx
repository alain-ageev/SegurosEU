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
  v2Credentials,
  v2Hero,
  v2PartnerLogos,
  v2Process,
  v2Scenarios,
  v2Solutions,
  v2TrustIndicators,
} from "@/lib/v2-content";

const solutionGroups = [
  {
    id: "empresarial",
    title: "Empresa e patrimônio",
    items: v2Solutions.filter((s) =>
      ["Seguros empresariais", "Consultoria de riscos", "Consórcio Porto"].includes(s.title)
    ),
  },
  {
    id: "rh",
    title: "RH e benefícios",
    items: v2Solutions.filter((s) => s.title.includes("saúde") || s.title.includes("benefícios")),
  },
  {
    id: "pessoal",
    title: "Pessoas e família",
    items: v2Solutions.filter((s) =>
      ["Seguro de vida", "Seguro viagem"].includes(s.title)
    ),
  },
] as const;

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

      <section className="border-b border-[var(--v2-mist)] bg-[var(--v2-paper)]">
        <div className="v2-container grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="v2-eyebrow">{v2Hero.eyebrow}</p>
            <h1 className="v2-display mt-3 text-[clamp(32px,5vw,48px)]">
              {v2Hero.title}
            </h1>
            <p className="v2-body mt-4 max-w-xl text-[18px]">
              {v2Hero.subtitle}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href={v2Hero.primaryCta.href} className="v2-btn v2-btn-primary">
                {v2Hero.primaryCta.label}
                <ArrowRightIcon className="size-4" />
              </Link>
              <a
                href={v2Hero.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="v2-btn v2-btn-outline"
              >
                {v2Hero.secondaryCta.label}
              </a>
            </div>
            <p className="v2-caption mt-6">{v2Hero.trustLine}</p>
          </div>

          <div className="v2-media aspect-[4/3]">
            <Image
              src="/images/home/meeting.jpg"
              alt="Consultoria E DIAS em reunião com clientes"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Prova social + logos */}
      <section className="v2-section bg-[var(--v2-fog)]" aria-labelledby="prova-social">
        <div className="v2-container">
          <h2 id="prova-social" className="v2-h2 text-center">
            Organização e parceiros para avaliação corporativa
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {v2TrustIndicators.map((item) => (
              <div key={item.label} className="v2-card text-center">
                <p className="text-[32px] font-bold text-[var(--v2-ink)]">{item.value}</p>
                <p className="v2-body-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
          <ul className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-5">
            {v2PartnerLogos.map((partner) => (
              <li key={partner.name} className="flex justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={40}
                  className="h-8 w-auto max-w-[110px] object-contain opacity-70 grayscale"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Soluções unificadas: cenários + grupos */}
      <section id="solucoes" className="v2-section bg-[var(--v2-paper)]">
        <div className="v2-container">
          <p className="v2-eyebrow">Soluções por necessidade</p>
          <h2 className="v2-h2 mt-2">Empresa, RH e proteção pessoal — sem catálogo confuso</h2>
          <p className="v2-body mt-3 max-w-[640px]">
            Blocos correlatos juntos: escolha o cenário e veja o que oferecemos na mesma seção.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {v2Scenarios.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="v2-card !p-4 hover:border-[var(--v2-abyss)]"
              >
                <h3 className="v2-h3 text-[16px]">{item.title}</h3>
                <p className="v2-caption mt-2">{item.audience}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 space-y-10">
            {solutionGroups.map((group) => (
              <div key={group.id}>
                <h3 className="v2-h3 border-b border-[var(--v2-mist)] pb-3">{group.title}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {group.items.map((item) => (
                    <article key={item.title} className="v2-card flex flex-col">
                      <h4 className="text-[16px] font-bold text-[var(--v2-ink)]">{item.title}</h4>
                      <p className="v2-body-sm mt-2">{item.benefit}</p>
                      <Link
                        href={item.href}
                        className="mt-auto inline-flex items-center gap-2 pt-5 text-[14px] font-bold text-[var(--v2-abyss)]"
                      >
                        {item.cta}
                        <ArrowRightIcon className="size-4 text-[var(--v2-ember)]" />
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Método */}
      <section id="metodo" className="v2-section bg-[var(--v2-fog)]">
        <div className="v2-container">
          <p className="v2-eyebrow">Método</p>
          <h2 className="v2-h2 mt-2">Como a consultoria funciona</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {v2Process.map((item) => (
              <li key={item.step} className="v2-card">
                <p className="text-[13px] font-bold text-[var(--v2-ember)]">{item.step}</p>
                <h3 className="v2-h3 mt-2">{item.title}</h3>
                <p className="v2-body-sm mt-2">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Sobre + diferenciais + credenciais */}
      <section id="sobre" className="v2-section bg-[var(--v2-paper)]">
        <div className="v2-container">
          <p className="v2-eyebrow">Por que a E DIAS</p>
          <h2 className="v2-h2 mt-2">{v2Comparison.title}</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="v2-card">
              <h3 className="v2-h3 text-[var(--v2-graphite)]">Abordagem tradicional</h3>
              <ul className="mt-4 space-y-3">
                {v2Comparison.traditional.map((line) => (
                  <li key={line} className="v2-body-sm flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--v2-mist)]" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[20px] bg-[var(--v2-abyss)] p-6 text-white sm:p-8">
              <h3 className="text-[18px] font-bold text-[var(--v2-ember)]">
                Abordagem consultiva E DIAS
              </h3>
              <ul className="mt-4 space-y-3">
                {v2Comparison.consultive.map((line) => (
                  <li key={line} className="flex gap-2 text-[14px] leading-relaxed text-white/85">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-[var(--v2-ember)]" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {v2Credentials.map((item) => (
              <article key={item.title} className="v2-card">
                <h3 className="v2-h3">{item.title}</h3>
                <p className="v2-body-sm mt-2">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 max-w-[640px]">
            <h3 className="v2-h2 text-[24px]">{v2About.title}</h3>
            <p className="v2-body mt-3">{v2About.body}</p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="v2-section bg-[var(--v2-fog)]">
        <div className="v2-container">
          <p className="v2-eyebrow">Cases</p>
          <h2 className="v2-h2 mt-2">Resultados relevantes para o público corporativo</h2>
          <p className="v2-body mt-3 max-w-[640px]">
            Exemplos ilustrativos. Substituímos por cases nominados (valores de sinistro, economia
            ou implantação) assim que houver autorização do cliente.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {v2Cases.map((item) => (
              <article key={item.context} className="v2-card flex flex-col">
                <p className="v2-tag w-fit">{item.context}</p>
                <dl className="mt-4 space-y-3">
                  <div>
                    <dt className="text-[13px] font-bold text-[var(--v2-ink)]">Problema</dt>
                    <dd className="v2-body-sm">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-[13px] font-bold text-[var(--v2-ink)]">Solução</dt>
                    <dd className="v2-body-sm">{item.solution}</dd>
                  </div>
                  <div>
                    <dt className="text-[13px] font-bold text-[var(--v2-ink)]">Resultado</dt>
                    <dd className="v2-body-sm">{item.result}</dd>
                  </div>
                </dl>
                <blockquote className="mt-auto border-t border-[var(--v2-mist)] pt-4 text-[15px] font-semibold text-[var(--v2-ink)]">
                  “{item.quote}”
                  <footer className="v2-caption mt-2">
                    {item.person} · {item.role}
                  </footer>
                </blockquote>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {v2Authority.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="v2-card flex items-start justify-between gap-3"
              >
                <div>
                  <p className="v2-tag w-fit">{item.type}</p>
                  <h3 className="v2-h3 mt-2 text-[16px]">{item.title}</h3>
                  <p className="v2-body-sm mt-1">{item.body}</p>
                </div>
                <ArrowRightIcon className="mt-1 size-4 shrink-0 text-[var(--v2-ember)]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="v2-section bg-[var(--v2-paper)]">
        <div className="v2-container grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="v2-eyebrow">Próximo passo</p>
            <h2 className="v2-h2 mt-2">Receba uma análise objetiva</h2>
            <p className="v2-body mt-3 max-w-[640px]">
              Formulário curto para o primeiro contato. Relatórios formatados e gestão de
              documentos de checklist entram na etapa seguinte (ferramentas ou sistema).
            </p>
            <ul className="mt-6 space-y-2">
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
            <div className="mt-8 flex flex-wrap gap-3">
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

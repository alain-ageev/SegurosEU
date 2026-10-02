import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { v2About } from "@/lib/v2-content";

export const metadata: Metadata = createPageMetadata({
  title: "Sobre a E DIAS",
  description:
    "Conheça a E DIAS Corretora de Seguros em Recife: quem somos, nossa missão e canais de contato.",
  path: "/sobre",
  keywords: [
    "E DIAS Corretora",
    "sobre E Dias",
    "consultoria de seguros Recife",
    "missão E DIAS",
  ],
});

export default function SobrePage() {
  const aboutLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Sobre a E DIAS Corretora de Seguros",
    url: `${siteConfig.url}/sobre`,
    mainEntity: {
      "@type": ["InsuranceAgency", "LocalBusiness"],
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phoneHref.replace("tel:", ""),
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.postalCode,
        addressCountry: "BR",
      },
    },
  };

  return (
    <>
      <JsonLd data={aboutLd} />
      <Hero
        brand="Sobre"
        title="Sobre a E DIAS"
        description={v2About.body}
        primaryCta={{ label: "Falar no WhatsApp", href: siteConfig.whatsappHref }}
        secondaryCta={{ label: "Solicitar diagnóstico", href: "/#contato" }}
        compact
        imageSrc="/images/home/meeting.jpg"
        imageAlt="Equipe E DIAS em consultoria com clientes"
      />

      <section id="quem-somos" className="v2-section bg-white">
        <div className="v2-container">
          <p className="v2-eyebrow">Quem somos</p>
          <h2 className="v2-h2 mt-1">Consultoria com base em Recife</h2>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-3">
            {v2About.points.map((point) => (
              <li
                key={point}
                className="rounded-[14px] bg-[#f4f4f4] px-4 py-3.5 text-[16px] font-semibold text-[var(--v2-ink)]"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="missao"
        className="v2-section v2-section-compact bg-[var(--v2-abyss)] text-white"
      >
        <div className="v2-container">
          <p className="v2-eyebrow text-[var(--v2-ember)]">Propósito</p>
          <h2 className="v2-h2 v2-h2-on-blue mt-1">{v2About.missionTitle}</h2>
          <p className="mt-3 max-w-[760px] text-[18px] font-semibold leading-snug text-[var(--v2-ember)]">
            {v2About.missionLead}
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {v2About.missionBody.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="rounded-[14px] bg-white p-4 text-[16px] leading-snug text-[var(--v2-ink)] shadow-sm"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="contatos" className="v2-section bg-white">
        <div className="v2-container">
          <p className="v2-eyebrow">Fale conosco</p>
          <h2 className="v2-h2 mt-1">Contatos</h2>
          <p className="v2-body mt-2 max-w-[640px]">
            Atendimento consultivo em Recife · Boa Viagem — e remoto para outras praças.
          </p>

          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            <li className="rounded-[14px] bg-[#f4f4f4] p-5">
              <p className="flex items-center gap-2 text-[15px] font-bold text-[var(--v2-ink)]">
                <PhoneIcon className="size-4 text-[var(--v2-abyss)]" />
                Telefone
              </p>
              <a
                href={siteConfig.phoneHref}
                className="mt-2 block text-[18px] font-bold text-[var(--v2-abyss)] hover:underline"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="rounded-[14px] bg-[#f4f4f4] p-5">
              <p className="flex items-center gap-2 text-[15px] font-bold text-[var(--v2-ink)]">
                <PhoneIcon className="size-4 text-[var(--v2-abyss)]" />
                WhatsApp
              </p>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-[18px] font-bold text-[var(--v2-abyss)] hover:underline"
              >
                {siteConfig.phoneSecondary}
              </a>
            </li>
            <li className="rounded-[14px] bg-[#f4f4f4] p-5">
              <p className="flex items-center gap-2 text-[15px] font-bold text-[var(--v2-ink)]">
                <MailIcon className="size-4 text-[var(--v2-abyss)]" />
                E-mail
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block break-all text-[16px] font-bold text-[var(--v2-abyss)] hover:underline"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="rounded-[14px] bg-[#f4f4f4] p-5">
              <p className="flex items-center gap-2 text-[15px] font-bold text-[var(--v2-ink)]">
                <MapPinIcon className="size-4 text-[var(--v2-abyss)]" />
                Endereço e horário
              </p>
              <p className="mt-2 text-[16px] font-semibold leading-snug text-[var(--v2-ink)]">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.neighborhood}, {siteConfig.address.city}/
                {siteConfig.address.state}
                <br />
                CEP {siteConfig.address.postalCode}
                <br />
                <span className="mt-2 inline-block">{siteConfig.hours}</span>
              </p>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-btn v2-btn-primary"
            >
              WhatsApp
              <ArrowRightIcon className="size-4" />
            </a>
            <Link href="/contato" className="v2-btn v2-btn-outline">
              Página de contato
            </Link>
            <Link href="/#contato" className="v2-btn v2-btn-ghost">
              Diagnóstico na home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

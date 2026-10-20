import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contato",
  description:
    "Fale com a E DIAS Corretora de Seguros em Recife: telefone, WhatsApp, e-mail e endereço em Boa Viagem.",
  path: "/contato",
});

export default function ContatoPage() {
  const contactLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contato E DIAS Corretora de Seguros",
    url: `${siteConfig.url}/contato`,
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
    },
  };

  return (
    <>
      <JsonLd data={contactLd} />
      <Hero
        brand="Contato"
        title="Atendimento consultivo, perto de você"
        description="Segunda a sexta, 08h30 às 17h30. Recife · Boa Viagem — e atendimento remoto para outras praças."
        primaryCta={{ label: "Ligar agora", href: siteConfig.whatsappHref }}
        secondaryCta={{ label: "WhatsApp", href: siteConfig.whatsappHref }}
        compact
        imageSrc="/images/home/clients.jpg"
        imageAlt="Atendimento consultivo E DIAS"
      />

      <section className="bg-[var(--edias-canvas)] py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-[var(--edias-navy)]">
              Canais
            </h2>
            <dl className="mt-6 space-y-4 text-sm text-[var(--edias-ink-muted)]">
              <div>
                <dt className="font-medium text-[var(--edias-navy)]">Telefones</dt>
                <dd className="mt-1">
                  <a href={siteConfig.phoneHref} className="hover:underline">
                    {siteConfig.phone}
                  </a>
                  {" · "}
                  {siteConfig.phoneSecondary}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--edias-navy)]">E-mail</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="break-all hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--edias-navy)]">Endereço</dt>
                <dd className="mt-1">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.neighborhood}, {siteConfig.address.city}/
                  {siteConfig.address.state}
                  <br />
                  CEP {siteConfig.address.postalCode}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--edias-navy)]">Horário</dt>
                <dd className="mt-1">{siteConfig.hours}</dd>
              </div>
            </dl>
          </div>

          <div className="bg-white p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-semibold text-[var(--edias-navy)]">
              Mensagem rápida
            </h2>
            <p className="mt-2 text-sm text-[var(--edias-ink-muted)]">
              Este formulário abre seu cliente de e-mail com os dados preenchidos
              — sem backend nesta fatia.
            </p>
            <form
              className="mt-6 space-y-4"
              action={`mailto:${siteConfig.email}`}
              method="post"
              encType="text/plain"
            >
              <div>
                <label htmlFor="nome" className="text-sm font-medium text-[var(--edias-navy)]">
                  Nome
                </label>
                <Input id="nome" name="nome" required className="mt-1.5" />
              </div>
              <div>
                <label htmlFor="telefone" className="text-sm font-medium text-[var(--edias-navy)]">
                  Telefone
                </label>
                <Input id="telefone" name="telefone" required className="mt-1.5" />
              </div>
              <div>
                <label htmlFor="assunto" className="text-sm font-medium text-[var(--edias-navy)]">
                  Assunto
                </label>
                <Input
                  id="assunto"
                  name="assunto"
                  placeholder="Consórcio, vida, viagem, saúde…"
                  className="mt-1.5"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="text-sm font-medium text-[var(--edias-navy)]">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={4}
                  className="mt-1.5 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                />
              </div>
              <Button
                type="submit"
                className="bg-[var(--edias-gold)] text-[var(--edias-navy)] hover:bg-[var(--edias-gold-soft)]"
              >
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

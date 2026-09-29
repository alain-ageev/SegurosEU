import { partners, siteConfig } from "@/lib/site";

/** Conteúdo da homepage de conversão (/v2) — foco em receita e confiança */

export const v2Nav = [
  { label: "Soluções", href: "/v2#solucoes" },
  { label: "Como funciona", href: "/v2#metodo" },
  { label: "Cases", href: "/v2#cases" },
  { label: "Sobre", href: "/v2#sobre" },
] as const;

/** Credenciais públicas — trocar por números reais autorizados pelo cliente */
export const v2Credentials = [
  {
    title: "Sinistros acompanhados",
    body: "Suporte na documentação e acompanhamento até a regulação — com histórico sob demanda para clientes corporativos.",
  },
  {
    title: "Parceiros nacionais",
    body: "Acesso a seguradoras e operadoras para comparar coberturas, não apenas preço.",
  },
  {
    title: "Foco corporativo",
    body: "Linguagem e relatório pensados para diretoria, RH e compras — avaliação institucional inclusa.",
  },
] as const;

export const v2Hero = {
  eyebrow: "Consultoria de seguros B2B · Recife",
  title: "Proteção certa para sua empresa — sem pagar a mais nem ficar descoberto",
  subtitle:
    "Diagnóstico objetivo de riscos e benefícios para reduzir custo, fechar lacunas de cobertura e dar clareza ao RH e à diretoria.",
  primaryCta: {
    label: "Solicitar diagnóstico gratuito",
    href: "/v2#contato",
  },
  secondaryCta: {
    label: "Falar no WhatsApp",
    href: siteConfig.whatsappHref,
  },
  trustLine:
    "Atendimento consultivo · Parceiros nacionais · Resposta em até 1 dia útil",
} as const;

export const v2TrustIndicators = [
  {
    value: "20+",
    label: "Seguradoras e operadoras parceiras",
  },
  {
    value: "B2B",
    label: "Foco em empresas, RH e patrimônio",
  },
  {
    value: "1 dia",
    label: "Prazo médio de primeiro retorno",
  },
] as const;

export const v2Scenarios = [
  {
    id: "reduzir-custo",
    title: "Quero reduzir custo",
    audience: "Diretoria financeira e gestores",
    pain: "Prêmios altos, coberturas sobrepostas ou desatualizadas.",
    outcome: "Revisão comparativa e proposta com economia ou melhor relação custo-benefício.",
    href: "/v2#contato",
    cta: "Pedir revisão de custos",
  },
  {
    id: "proteger-patrimonio",
    title: "Preciso proteger patrimônio",
    audience: "Empresas e famílias patrimoniais",
    pain: "Riscos de propriedade, RC, frota ou interrupção sem mapa claro.",
    outcome: "Mapa de riscos prioritários e programa de seguros alinhado ao negócio.",
    href: "/v2#contato",
    cta: "Mapear riscos",
  },
  {
    id: "cuidar-rh",
    title: "Quero cuidar do RH",
    audience: "RH e benefícios",
    pain: "Plano de saúde caro, baixa adesão ou pouca clareza para colaboradores.",
    outcome: "Comparativo de operadoras, coparticipação e implantação assistida.",
    href: "/saude",
    cta: "Analisar benefícios",
  },
  {
    id: "pme",
    title: "Sou uma pequena empresa",
    audience: "PME e sócios-operadores",
    pain: "Pouco tempo para cotar e medo de contratar errado.",
    outcome: "Pacote essencial sob medida, com orientação em linguagem simples.",
    href: "/v2#contato",
    cta: "Começar pelo essencial",
  },
] as const;

export const v2Solutions = [
  {
    title: "Seguros empresariais",
    benefit: "Patrimônio, RC, transporte e frota com análise de exposição real.",
    forWho: "Indústria, comércio e serviços",
    href: "/contato",
    cta: "Falar sobre seguro empresarial",
  },
  {
    title: "Planos de saúde e benefícios",
    benefit: "Operadoras certas para o perfil da equipe — sem surpresa na renovação.",
    forWho: "RH e empresas em crescimento",
    href: "/saude",
    cta: "Solicitar diagnóstico de benefícios",
  },
  {
    title: "Consórcio Porto",
    benefit: "Planejamento de bens com parcelas previsíveis e grupos de qualidade.",
    forWho: "Empresas e pessoas físicas",
    href: "/consorcio",
    cta: "Receber análise de consórcio",
  },
  {
    title: "Seguro de vida",
    benefit: "Capital e coberturas alinhados à proteção familiar e sucessória.",
    forWho: "Sócios, executivos e famílias",
    href: "/vida",
    cta: "Montar proteção de vida",
  },
  {
    title: "Seguro viagem",
    benefit: "Cobertura nacional ou mundial com assistência 24h e orientação rápida.",
    forWho: "Viagens a trabalho ou lazer",
    href: "/viagem",
    cta: "Cotação de viagem",
  },
  {
    title: "Consultoria de riscos",
    benefit: "Visão integrada: o que manter, ajustar ou eliminar no programa atual.",
    forWho: "Empresas com múltiplas apólices",
    href: "/v2#contato",
    cta: "Agendar diagnóstico",
  },
] as const;

export const v2Process = [
  {
    step: "01",
    title: "Diagnóstico",
    body: "Entendemos porte, riscos, apólices atuais e prioridades de caixa ou RH.",
  },
  {
    step: "02",
    title: "Proposta",
    body: "Comparamos opções com parceiros e apresentamos trade-offs claros.",
  },
  {
    step: "03",
    title: "Implantação",
    body: "Documentação, adesões e comunicação para quem precisa usar o benefício.",
  },
  {
    step: "04",
    title: "Acompanhamento",
    body: "Renovação, sinistros e ajustes — relacionamento contínuo, não só cotação.",
  },
] as const;

export const v2Comparison = {
  title: "Abordagem tradicional × consultiva",
  traditional: [
    "Catálogo de produtos sem contexto do negócio",
    "Cotação rápida baseada só em preço",
    "Pouco acompanhamento após a venda",
    "Linguagem técnica que confunde a decisão",
  ],
  consultive: [
    "Diagnóstico de risco e objetivo comercial",
    "Comparativo por benefício, exclusão e total cost",
    "Implantação e suporte em sinistro/renovação",
    "Recomendações em linguagem de decisão",
  ],
} as const;

export const v2Cases = [
  {
    context: "Comércio varejista · Recife",
    problem: "Prêmio de seguro patrimonial alto e cobertura desalinhada ao estoque real.",
    solution: "Revisão de importância segurada, franquias e cláusula de lucros cessantes.",
    result: "Programa mais adequado ao fluxo da loja, com clareza para a diretoria.",
    quote:
      "Passamos a entender o que está coberto de fato — e o que precisava mudar antes da renovação.",
    person: "Gestor operacional",
    role: "Varejo · PE",
  },
  {
    context: "Empresa de serviços · benefícios",
    problem: "Plano de saúde com insatisfação interna e pressão de custo no RH.",
    solution: "Comparativo SulAmérica, Bradesco e Amil com cenários de coparticipação.",
    result: "Decisão fundamentada para renovação, com comunicação clara aos colaboradores.",
    quote:
      "A E DIAS organizou as opções do jeito que o RH e a diretoria precisavam decidir.",
    person: "Coordenação de RH",
    role: "Serviços · PE",
  },
  {
    context: "Família empresária",
    problem: "Seguros pessoais e empresariais tratados em silos, com lacunas entre eles.",
    solution: "Visão conjunta de vida, patrimônio e responsabilidades dos sócios.",
    result: "Prioridades definidas e roadmap de proteção em etapas.",
    quote:
      "Pela primeira vez vimos o quadro completo — empresa e família no mesmo diagnóstico.",
    person: "Sócio-administrador",
    role: "Grupo familiar",
  },
] as const;

export const v2Authority = [
  {
    title: "Checklist de cotação",
    body: "Documentos e dados mínimos para acelerar propostas sem retrabalho.",
    href: "/checklist",
    type: "Ferramenta",
  },
  {
    title: "Dúvidas de consórcio",
    body: "Contemplação, lances e prazos explicados sem jargão desnecessário.",
    href: "/consorcio/duvidas",
    type: "FAQ",
  },
  {
    title: "Planos de saúde comparados",
    body: "Como ler rede, reembolso e coparticipação antes de renovar.",
    href: "/saude",
    type: "Guia",
  },
  {
    title: "Seguro viagem",
    body: "Brasil ou mundo: o que não pode faltar na apólice.",
    href: "/viagem",
    type: "Guia",
  },
] as const;

export const v2About = {
  title: "Sobre a E DIAS",
  body: "Corretora e consultoria de seguros em Recife, com foco em proteção empresarial e familiar. Trabalhamos com compromisso de tranquilidade, estabilidade e atendimento personalizado — alinhados aos valores de segurança, confiança e credibilidade da marca.",
  points: [
    "Atuação consultiva B2B e personalizada",
    "Parceiros nacionais de seguros e saúde",
    "Base em Boa Viagem, Recife/PE",
  ],
} as const;

export const v2PartnerLogos = partners.slice(0, 10);

export const v2Form = {
  title: "Solicite um diagnóstico",
  description:
    "Conte o essencial. Retornamos em até 1 dia útil com os próximos passos — sem spam e com privacidade.",
  privacy:
    "Usamos seus dados apenas para retorno comercial da E DIAS. Não compartilhamos com terceiros sem necessidade do atendimento.",
} as const;

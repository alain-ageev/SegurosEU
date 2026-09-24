export const siteConfig = {
  name: "Edias Consultoria",
  legalName: "E Dias Corretora de Seguros",
  shortName: "Edias",
  description:
    "Consultoria em seguros corporativos e pessoais em Recife. Consórcio, vida, viagem, saúde e proteção patrimonial com atendimento próximo e assertivo.",
  url: "https://www.ediasconsultoria.com.br",
  locale: "pt_BR",
  phone: "(81) 3105.7588",
  phoneSecondary: "(11) 9 7715.7588",
  phoneHref: "tel:+558131057588",
  whatsappHref: "https://wa.me/5511977157588",
  email: "ramoselementares@ediasconsultoria.com.br",
  hours: "Segunda a sexta, 08h30 às 17h30",
  cnpj: "27.380.353/0001-10",
  instagram: "https://www.instagram.com/edias_seguros",
  address: {
    street: "Rua Ribeiro de Brito — Empresarial Iberbras",
    neighborhood: "Boa Viagem",
    city: "Recife",
    state: "PE",
    postalCode: "51021-310",
    country: "BR",
  },
} as const;

export const navItems = [
  {
    label: "Consórcio",
    href: "/consorcio",
    children: [
      { label: "Visão geral", href: "/consorcio" },
      { label: "Tabelas", href: "/consorcio/tabelas" },
      { label: "Dúvidas", href: "/consorcio/duvidas" },
    ],
  },
  { label: "Vida", href: "/vida" },
  { label: "Viagem", href: "/viagem" },
  {
    label: "Saúde",
    href: "/saude",
    children: [
      { label: "Operadoras", href: "/saude" },
      { label: "SulAmérica", href: "/saude/sulamerica" },
      { label: "Bradesco", href: "/saude/bradesco" },
      { label: "Amil", href: "/saude/amil" },
    ],
  },
  { label: "Checklist", href: "/checklist" },
] as const;

export const services = [
  {
    slug: "consorcio",
    title: "Consórcio",
    href: "/consorcio",
    summary:
      "Realize o sonho do imóvel, veículo ou equipamento com parcelas planejadas e grupos Porto Bank.",
    accent: "Planejamento sem juros bancários",
  },
  {
    slug: "vida",
    title: "Seguro de Vida",
    href: "/vida",
    summary:
      "Proteção sob medida para família e renda, com coberturas de doenças graves e assistências.",
    accent: "Tranquilidade para quem depende de você",
  },
  {
    slug: "viagem",
    title: "Seguro Viagem",
    href: "/viagem",
    summary:
      "Cobertura nacional e internacional com contratação rápida e suporte 24h no exterior.",
    accent: "Viaje com proteção e desconto",
  },
  {
    slug: "saude",
    title: "Planos de Saúde",
    href: "/saude",
    summary:
      "Orientação consultiva entre operadoras para encontrar rede, coparticipação e reembolso ideais.",
    accent: "Saúde alinhada ao seu perfil",
  },
] as const;

export const corporateHighlights = [
  {
    title: "Consultoria de riscos",
    body: "Cálculos mais assertivos para reduzir rateio, lacunas de cobertura e surpresas no sinistro.",
  },
  {
    title: "Proteção empresarial",
    body: "Ramos elementares, responsabilidade civil, transporte e soluções para o fluxo de caixa.",
  },
  {
    title: "Planejamento familiar",
    body: "Vida, saúde e patrimônio pensados juntos — não como produtos isolados.",
  },
] as const;

export const partners = [
  "Porto Seguro",
  "SulAmérica",
  "Bradesco Seguros",
  "Amil",
  "Allianz",
  "Mapfre",
  "Tokio Marine",
  "Zurich",
  "HDI",
  "Sompo",
  "Unimed",
  "Hapvida",
] as const;

export const checklistItems = [
  {
    slug: "consorcio",
    title: "Consórcio",
    description: "Documentos e dados para cotação e adesão a grupos.",
  },
  {
    slug: "saude",
    title: "Saúde",
    description: "Checklist para análise de plano individual ou empresarial.",
  },
  {
    slug: "veiculos",
    title: "Veículos",
    description: "Informações do veículo e perfil do condutor.",
  },
  {
    slug: "residencial",
    title: "Residencial",
    description: "Dados do imóvel para proteção residencial.",
  },
  {
    slug: "empresarial",
    title: "Empresarial",
    description: "Levantamento de riscos e coberturas corporativas.",
  },
  {
    slug: "rcg",
    title: "Responsabilidade Civil (RCG)",
    description: "Informações para cotação de RCG.",
  },
  {
    slug: "transporte",
    title: "Transporte",
    description: "Checklist para cargas e operações logísticas.",
  },
  {
    slug: "placa-solar",
    title: "Placa solar",
    description: "Dados do projeto e instalação fotovoltaica.",
  },
  {
    slug: "deposito-recursal",
    title: "Depósito recursal",
    description: "Orientações e formulário para depósito recursal.",
  },
  {
    slug: "garantia-judicial",
    title: "Garantia judicial",
    description: "Formulário essencial para obtenção da garantia.",
  },
] as const;

export const consorcioPlans = [
  {
    title: "Consórcio de Veículos",
    body: "Carros, motos e náuticos com pagamento em até 90 meses. Crédito de R$ 25 mil a R$ 200 mil.",
  },
  {
    title: "Consórcio de Imóvel",
    body: "Casa, apartamento, terreno, construção, reforma e quitação de financiamento em até 200 meses. Crédito de R$ 70 mil a R$ 900 mil.",
  },
  {
    title: "Consórcio de Pesados",
    body: "Caminhões, ônibus, tratores e linha amarela com pagamento em até 120 meses. Crédito de R$ 180 mil a R$ 360 mil.",
  },
  {
    title: "Consórcio Sustentável",
    body: "Compra e instalação de placa solar e componentes em até 30 meses. Crédito de R$ 10 mil a R$ 20 mil.",
  },
  {
    title: "Consórcio Bike",
    body: "Da urbana à elétrica, planos a partir de R$ 8 mil em até 30 meses, sem juros.",
  },
] as const;

export const vidaPlans = [
  {
    title: "Contrata Fácil Executivo Prestige",
    range: "Vida de R$ 1 a 4 milhões",
  },
  {
    title: "Clássico Especial",
    range: "Vida de R$ 250 a 750 mil",
  },
  {
    title: "Exato Flex",
    range: "Vida de R$ 50 a 100 mil",
  },
  {
    title: "Estagiário",
    range: "Acidentes de R$ 50 a 300 mil",
  },
] as const;

export const saudeOperators = [
  {
    slug: "sulamerica",
    name: "SulAmérica",
    href: "/saude/sulamerica",
    summary:
      "Rede ampla, opções de reembolso e planos para famílias e empresas.",
  },
  {
    slug: "bradesco",
    name: "Bradesco Saúde",
    href: "/saude/bradesco",
    summary:
      "Cobertura consolidada com rede credenciada e modalidades de coparticipação.",
  },
  {
    slug: "amil",
    name: "Amil",
    href: "/saude/amil",
    summary:
      "Planos com rede nacional e flexibilidade de acomodação e reembolso.",
  },
] as const;

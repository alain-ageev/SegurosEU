export const siteConfig = {
  name: "E DIAS Corretora de Seguros",
  legalName: "E Dias Corretora de Seguros",
  shortName: "E DIAS",
  description:
    "E DIAS Corretora de Seguros em Recife. Soluções em proteção e segurança: consórcio, vida, viagem, saúde e patrimônio com atendimento personalizado.",
  url: "https://www.ediasconsultoria.com.br",
  locale: "pt_BR",
  phone: "(81) 3105.7588",
  phoneSecondary: "(81) 98878-7588",
  phoneHref: "tel:+558131057588",
  whatsappHref: "https://wa.me/5581988787588",
  email: "ramoselementares@ediasconsultoria.com.br",
  hours: "Segunda a sexta, 08h30 às 17h30",
  cnpj: "27.380.353/0001-10",
  instagram: "https://www.instagram.com/edias_seguros/",
  linkedin: "https://www.linkedin.com/company/edias-seguros/posts/?feedView=all",
  address: {
    street: "Rua Ribeiro de Brito — Empresarial Iberbras",
    neighborhood: "Boa Viagem",
    city: "Recife",
    state: "PE",
    postalCode: "51021-310",
    country: "BR",
  },
} as const;

/** Menu no modelo Belz: pill nav + mega painéis */
export type MegaColumn = {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
};

export const odontoHref =
  "https://sulamericaodonto.com.br/?corretora=emmanueldias";

export const consorcioTables = [
  {
    id: "auto-pf",
    title: "Tabela Automóvel PF",
    body: "Planos para pessoa física — carros e motos com diferentes prazos e créditos. Solicite a tabela atualizada.",
  },
  {
    id: "auto-pj",
    title: "Tabela Automóvel PJ",
    body: "Planos para pessoa jurídica — frota e veículos da empresa com condições por grupo vigente.",
  },
  {
    id: "imovel-pf",
    title: "Tabela Imóvel PF",
    body: "Faixas de crédito para casa, apartamento, terreno, construção e reforma (pessoa física).",
  },
  {
    id: "imovel-pj",
    title: "Tabela Imóvel PJ",
    body: "Crédito imobiliário para pessoa jurídica — campanhas e grupos sob consulta.",
  },
  {
    id: "pesados-pf",
    title: "Tabela Pesados PF",
    body: "Caminhões, ônibus, tratores e equipamentos para pessoa física — conforme grupo disponível.",
  },
  {
    id: "pesados-pj",
    title: "Tabela Pesados PJ",
    body: "Pesados para pessoa jurídica — tabelas sob demanda conforme disponibilidade do grupo.",
  },
  {
    id: "solar",
    title: "Solar",
    body: "Consórcio para energia solar e soluções sustentáveis — simulação com o consultor.",
  },
  {
    id: "bike",
    title: "Bike",
    body: "Modalidade bike / mobilidade — consulte grupos e valores atualizados.",
  },
] as const;

export type NavItem = {
  label: string;
  href: string;
  mega?: {
    eyebrow: string;
    title: string;
    description: string;
    cta: { label: string; href: string };
    columns: MegaColumn[];
  };
};

export const navItems: NavItem[] = [
  {
    label: "Soluções",
    href: "/#solucoes",
    mega: {
      eyebrow: "Soluções",
      title: "Encontre pelo seu cenário",
      description:
        "Consórcio, vida, viagem, saúde e odonto com orientação consultiva da E DIAS.",
      cta: { label: "Ver soluções", href: "/#solucoes" },
      columns: [
        {
          title: "Para você",
          links: [
            { label: "Consórcio", href: "/consorcio" },
            { label: "Seguro de vida", href: "/vida" },
            { label: "Seguro viagem", href: "/viagem" },
            { label: "Planos de saúde", href: "/saude" },
            {
              label: "Odonto",
              href: odontoHref,
              external: true,
            },
          ],
        },
        {
          title: "Ferramentas",
          links: [
            { label: "Checklists", href: "/checklist" },
            { label: "Dúvidas de consórcio", href: "/consorcio/duvidas" },
          ],
        },
        {
          title: "Destaques",
          links: [
            { label: "Tabelas de consórcio", href: "/consorcio/tabelas" },
            { label: "Sobre a E DIAS", href: "/sobre" },
            { label: "Parceiros", href: "/#parceiros" },
          ],
        },
      ],
    },
  },
  {
    label: "Consórcio",
    href: "/consorcio",
    mega: {
      eyebrow: "Consórcio",
      title: "Realize o sonho com parcelas planejadas",
      description:
        "Grupos Porto Bank para imóvel, veículo, pesados e soluções sustentáveis.",
      cta: { label: "Ver consórcio", href: "/consorcio" },
      columns: [
        {
          title: "Comece aqui",
          links: [
            { label: "Visão geral", href: "/consorcio" },
            { label: "Dúvidas frequentes", href: "/consorcio/duvidas" },
            { label: "Checklist consórcio", href: "/checklist/consorcio" },
          ],
        },
        {
          title: "Tabelas",
          links: [
            { label: "Todas as tabelas", href: "/consorcio/tabelas" },
            { label: "Automóvel PF", href: "/consorcio/tabelas#auto-pf" },
            { label: "Automóvel PJ", href: "/consorcio/tabelas#auto-pj" },
            { label: "Imóvel PF", href: "/consorcio/tabelas#imovel-pf" },
            { label: "Imóvel PJ", href: "/consorcio/tabelas#imovel-pj" },
            { label: "Pesados PF", href: "/consorcio/tabelas#pesados-pf" },
            { label: "Pesados PJ", href: "/consorcio/tabelas#pesados-pj" },
            { label: "Solar", href: "/consorcio/tabelas#solar" },
            { label: "Bike", href: "/consorcio/tabelas#bike" },
          ],
        },
        {
          title: "Modalidades",
          links: [
            { label: "Automóvel", href: "/consorcio" },
            { label: "Imóvel", href: "/consorcio" },
            { label: "Pesados", href: "/consorcio" },
            { label: "Solar", href: "/consorcio" },
            { label: "Bike", href: "/consorcio" },
            { label: "Falar com especialista", href: "/contato" },
          ],
        },
      ],
    },
  },
  {
    label: "Saúde",
    href: "/saude",
    mega: {
      eyebrow: "Saúde",
      title: "A melhor escolha para a sua necessidade",
      description:
        "Compare rede, coparticipação e reembolso entre as principais operadoras.",
      cta: { label: "Ver operadoras", href: "/saude" },
      columns: [
        {
          title: "Operadoras",
          links: [
            { label: "Todas as operadoras", href: "/saude" },
            { label: "SulAmérica", href: "/saude/sulamerica" },
            { label: "Bradesco", href: "/saude/bradesco" },
            { label: "Amil", href: "/saude/amil" },
          ],
        },
        {
          title: "Também oferecemos",
          links: [
            {
              label: "Odonto SulAmérica",
              href: odontoHref,
              external: true,
            },
            { label: "Checklist saúde", href: "/checklist/saude" },
          ],
        },
      ],
    },
  },
  {
    label: "Odonto",
    href: odontoHref,
  },
  { label: "Checklist", href: "/checklist" },
  {
    label: "Sobre",
    href: "/sobre",
    mega: {
      eyebrow: "Institucional",
      title: "Sobre a E DIAS",
      description:
        "Conheça a corretora, nossa missão e os canais de atendimento em Recife.",
      cta: { label: "Ir para Sobre", href: "/sobre" },
      columns: [
        {
          title: "Institucional",
          links: [
            { label: "Sobre a E DIAS", href: "/sobre" },
            { label: "Nossa missão", href: "/sobre#missao" },
            { label: "Contatos", href: "/sobre#contatos" },
          ],
        },
        {
          title: "Atendimento",
          links: [
            { label: "Formulário de contato", href: "/contato" },
            { label: "Diagnóstico na home", href: "/#contato" },
            { label: "WhatsApp", href: siteConfig.whatsappHref, external: true },
          ],
        },
      ],
    },
  },
];

export const services = [
  {
    slug: "consorcio",
    title: "Consórcio",
    href: "/consorcio",
    summary:
      "Realize o sonho do imóvel, veículo ou equipamento com parcelas planejadas e grupos Porto Bank.",
    accent: "Planejamento sem juros bancários",
    image: "/images/home/consorcio.jpg",
    imageAlt: "Família conquistando o sonho do imóvel com consórcio",
  },
  {
    slug: "vida",
    title: "Seguro de Vida",
    href: "/vida",
    summary:
      "Proteção sob medida para família e renda, com coberturas de doenças graves e assistências.",
    accent: "Tranquilidade para quem depende de você",
    image: "/images/home/family.jpg",
    imageAlt: "Proteção familiar com seguro de vida",
  },
  {
    slug: "viagem",
    title: "Seguro Viagem",
    href: "/viagem",
    summary:
      "Cobertura nacional e internacional com contratação rápida e suporte 24h no exterior.",
    accent: "Viaje com proteção e desconto",
    image: "/images/home/travel.jpg",
    imageAlt: "Viagem protegida com seguro viagem",
  },
  {
    slug: "saude",
    title: "Planos de Saúde",
    href: "/saude",
    summary:
      "Orientação consultiva entre operadoras para encontrar rede, coparticipação e reembolso ideais.",
    accent: "Saúde alinhada ao seu perfil",
    image: "/images/home/health.jpg",
    imageAlt: "Cuidado com a saúde e planos adequados",
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

/** Logos baixados do site antigo (Wix) — pasta /public/images/partners */
export const partners = [
  {
    name: "Porto Seguro",
    logo: "/images/partners/porto.png",
    href: "https://www.portoseguro.com.br/",
  },
  {
    name: "SulAmérica",
    logo: "/images/partners/sulamerica.png",
    href: "https://portal.sulamericaseguros.com.br/home.htm",
  },
  {
    name: "Bradesco Seguros",
    logo: "/images/partners/bradesco.png",
    href: "https://www.bradescoseguros.com.br/clientes",
  },
  {
    name: "Allianz",
    logo: "/images/partners/allianz.png",
    href: "https://www.allianz.com.br/",
  },
  {
    name: "Mapfre",
    logo: "/images/partners/mapfre.png",
    href: "https://www.mapfre.com.br/para-voce/",
  },
  {
    name: "Tokio Marine",
    logo: "/images/partners/tokio.png",
    href: "https://www.tokiomarine.com.br/",
  },
  {
    name: "Zurich",
    logo: "/images/partners/zurich.png",
    href: "https://www.zurich.com.br/",
  },
  {
    name: "HDI",
    logo: "/images/partners/hdi.png",
    href: "https://www.hdiseguros.com.br/",
  },
  {
    name: "Sompo",
    logo: "/images/partners/sompo.png",
    href: "https://sompo.com.br/",
  },
  {
    name: "Unimed",
    logo: "/images/partners/unimed.webp",
    href: "https://www.segurosunimed.com.br/",
  },
  {
    name: "Sura",
    logo: "/images/partners/sura.png",
    href: "https://www.segurossura.com.br/home",
  },
  {
    name: "AXA",
    logo: "/images/partners/axa.png",
    href: "https://axa.com.br/para-corretores",
  },
  {
    name: "Azul Seguros",
    logo: "/images/partners/azul.png",
    href: "https://www.azulseguros.com.br/",
  },
  {
    name: "Yelum",
    logo: "/images/partners/yelum.jpg",
    href: "https://www.yelumseguros.com.br/Pages/Home.aspx",
  },
  {
    name: "Essor",
    logo: "/images/partners/essor.png",
    href: "https://www.essor.com.br/",
  },
  {
    name: "Chubb",
    logo: "/images/partners/chubb.png",
    href: "https://www.chubb.com/br-pt/",
  },
  {
    name: "Mongeral Aegon",
    logo: "/images/partners/mongeral.png",
    href: "https://mag.com.br/",
  },
  {
    name: "Itaú Seguros",
    logo: "/images/partners/itau.jpg",
    href: "https://www.itau.com.br/seguros",
  },
  {
    name: "Excelsior",
    logo: "/images/partners/excelsior.jpg",
    href: "https://www.excelsiorseguros.com.br/",
  },
  {
    name: "Liberty",
    logo: "/images/partners/liberty.png",
    href: "https://www.libertyseguros.com.br/",
  },
  {
    name: "Mitsui",
    logo: "/images/partners/mitsui.png",
    href: "https://www.mitsui-sumitomo.com.br/",
  },
  {
    name: "Alfa Seguros",
    logo: "/images/partners/alfa.png",
    href: "https://www.alfaseguradora.com.br/",
  },
  {
    name: "Allseg",
    logo: "/images/partners/allseg.jpg",
    href: "https://allsegseguradora.com.br/",
  },
  {
    name: "America",
    logo: "/images/partners/america.png",
    href: "https://www.americaseguros.com.br/",
  },
] as const;

export const institutionalPartners = [
  {
    name: "APES",
    role: "Associação dos Corretores",
    logo: "/images/partners/apes.avif",
    href: "https://www.apes.com.br/",
  },
  {
    name: "Revista NE Super",
    role: "Imprensa especializada",
    logo: "/images/partners/revista-ne.avif",
    href: "http://www.revistanesuper.com.br",
  },
  {
    name: "Sindvarejista PE",
    role: "Entidade setorial",
    logo: "/images/partners/sindvarejista.jpg",
    href: "http://www.sindvarejista-pe.com.br",
  },
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

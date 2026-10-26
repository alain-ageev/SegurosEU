import { checklistCatalog } from "./checklist";

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

/** Portal SulAmérica aberto de dentro de /viagem (mesmo papel do botão do site antigo). */
export const seguroViagemPortalHref =
  "https://portal.sulamericaseguros.com.br/seguroviagem/?idLink=CTJAZW8";

export const consorcioTables = [
  {
    id: "auto-pf",
    title: "Tabela Automóvel PF",
    body: "Planos para pessoa física — carros e motos, nas faixas do Consórcio Porto Bank.",
    images: [
      "/images/consorcio/tabelas/auto-pf-1.webp",
      "/images/consorcio/tabelas/auto-pf-2.webp",
      "/images/consorcio/tabelas/auto-pf-3.webp",
      "/images/consorcio/tabelas/auto-pf-4.webp",
    ],
  },
  {
    id: "auto-pj",
    title: "Tabela Automóvel PJ",
    body: "Planos para pessoa jurídica — frota e veículos da empresa.",
    images: [
      "/images/consorcio/tabelas/auto-pj-1.webp",
      "/images/consorcio/tabelas/auto-pj-2.webp",
      "/images/consorcio/tabelas/auto-pj-3.webp",
      "/images/consorcio/tabelas/auto-pj-4.webp",
    ],
  },
  {
    id: "imovel-pf",
    title: "Tabela Imóvel PF",
    body: "Faixas de crédito para casa, apartamento, terreno, construção e reforma.",
    images: [
      "/images/consorcio/tabelas/imovel-pf-1.webp",
      "/images/consorcio/tabelas/imovel-pf-2.webp",
      "/images/consorcio/tabelas/imovel-pf-3.webp",
      "/images/consorcio/tabelas/imovel-pf-4.webp",
    ],
  },
  {
    id: "imovel-pj",
    title: "Tabela Imóvel PJ",
    body: "Crédito imobiliário para pessoa jurídica.",
    images: [
      "/images/consorcio/tabelas/imovel-pj-1.webp",
      "/images/consorcio/tabelas/imovel-pj-2.webp",
      "/images/consorcio/tabelas/imovel-pj-3.webp",
      "/images/consorcio/tabelas/imovel-pj-4.webp",
    ],
  },
  {
    id: "pesados-pf",
    title: "Tabela Pesados PF",
    body: "Caminhões, ônibus, tratores e equipamentos para pessoa física.",
    images: [
      "/images/consorcio/tabelas/pesados-pf-1.webp",
      "/images/consorcio/tabelas/pesados-pf-2.webp",
    ],
  },
  {
    id: "pesados-pj",
    title: "Tabela Pesados PJ",
    body: "Pesados para pessoa jurídica.",
    images: [
      "/images/consorcio/tabelas/pesados-pj-1.webp",
      "/images/consorcio/tabelas/pesados-pj-2.webp",
    ],
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
        "Consórcio, vida, viagem, saúde, odonto e incêndio com orientação consultiva da E DIAS.",
      cta: { label: "Ver soluções", href: "/#solucoes" },
      columns: [
        {
          title: "Para você",
          links: [
            { label: "Incêndio", href: "/incendio" },
            { label: "Planos de saúde", href: "/saude" },
            { label: "Seguro de vida", href: "/vida" },
            { label: "Consórcio", href: "/consorcio" },
            { label: "Seguro viagem", href: "/viagem" },
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
          title: "Consórcio",
          links: [
            { label: "Consórcio", href: "/consorcio" },
            { label: "Dúvidas", href: "/consorcio/duvidas" },
          ],
        },
        {
          title: "Tabelas",
          links: [
            { label: "Todas as tabelas", href: "/consorcio/tabelas" },
            { label: "Automóvel PF", href: "/consorcio/tabelas/auto-pf" },
            { label: "Automóvel PJ", href: "/consorcio/tabelas/auto-pj" },
            { label: "Imóvel PF", href: "/consorcio/tabelas/imovel-pf" },
            { label: "Imóvel PJ", href: "/consorcio/tabelas/imovel-pj" },
            { label: "Pesados PF", href: "/consorcio/tabelas/pesados-pf" },
            { label: "Pesados PJ", href: "/consorcio/tabelas/pesados-pj" },
          ],
        },
        {
          title: "Planos",
          links: [
            { label: "Veículos", href: "/consorcio#veiculos" },
            { label: "Imóvel", href: "/consorcio#imovel" },
            { label: "Pesados", href: "/consorcio#pesados" },
            { label: "Sustentável", href: "/consorcio#sustentavel" },
            { label: "Bike", href: "/consorcio#bike" },
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
  {
    label: "Checklist",
    href: "/checklist",
    mega: {
      eyebrow: "Checklist",
      title: "Formulários para cotação",
      description:
        "A mesma lista do site anterior: cadastro, consórcio, garantia, empresarial, saúde, vida e os demais.",
      cta: { label: "Ver todos", href: "/checklist" },
      columns: [
        {
          title: "Formulários",
          links: checklistCatalog.slice(0, 7).map((item) => ({
            label: item.menuLabel,
            href: item.href,
          })),
        },
        {
          title: "Mais formulários",
          links: checklistCatalog.slice(7).map((item) => ({
            label: item.menuLabel,
            href: item.href,
          })),
        },
      ],
    },
  },
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
    slug: "incendio",
    title: "Seguro Incêndio",
    href: "/incendio",
    summary:
      "Proteção de imóvel, conteúdo e operação contra incêndio e riscos correlatos — residencial, comercial ou industrial.",
    accent: "Patrimônio e continuidade protegidos",
    image: "/images/home/incendio-ig-limpo.jpg",
    imageAlt: "Escritório em chamas — proteção contra risco de incêndio",
  },
  {
    slug: "saude",
    title: "Planos de Saúde",
    href: "/saude",
    summary:
      "Orientação consultiva entre operadoras para encontrar rede, coparticipação e reembolso ideais.",
    accent: "Saúde alinhada ao seu perfil",
    image: "/images/home/travel.jpg",
    imageAlt: "Médico com estetoscópio — planos de saúde",
  },
  {
    slug: "vida",
    title: "Seguro de Vida",
    href: "/vida",
    summary:
      "Proteção sob medida para família e renda, com coberturas de doenças graves e assistências.",
    accent: "Tranquilidade para quem depende de você",
    image: "/images/home/familia2.jpg",
    imageAlt: "Proteção familiar com seguro de vida",
  },
  {
    slug: "consorcio",
    title: "Consórcio",
    href: "/consorcio",
    summary:
      "Realize o sonho do imóvel, veículo ou equipamento com parcelas planejadas e grupos Porto Bank.",
    accent: "Planejamento sem juros bancários",
    image: "/images/home/viagem3.jpg",
    imageAlt: "Casal conquistando o carro com consórcio",
  },
  {
    slug: "viagem",
    title: "Seguro Viagem",
    href: "/viagem",
    summary:
      "Cobertura nacional e internacional com contratação rápida e suporte 24h no exterior.",
    accent: "Viaje com proteção e desconto",
    image: "/images/home/viagem2.jpg",
    imageAlt: "Família no aeroporto pronta para viajar",
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
    role: "Associação Pernambucana de Supermercados",
    logo: "/images/partners/apoio-apes.png",
    href: "https://www.apes.com.br/",
  },
  {
    name: "Revista NE Super",
    role: "Imprensa especializada",
    logo: "/images/partners/apoio-revista-ne.png",
    href: "http://www.revistanesuper.com.br",
  },
  {
    name: "Sindvarejista PE",
    role: "Entidade setorial",
    logo: "/images/partners/apoio-sindvarejista.png",
    href: "http://www.sindvarejista-pe.com.br",
  },
] as const;

export const consorcioPlans = [
  {
    id: "veiculos",
    title: "Consórcio de Veículos",
    body: "Carros, motos e náuticos com pagamento em até 90 meses. Crédito de R$ 25 mil a R$ 200 mil.",
    image: "/images/consorcio/planos/auto.webp",
    tablesHref: "/consorcio/tabelas/auto-pf",
  },
  {
    id: "imovel",
    title: "Consórcio de Imóvel",
    body: "Casa, apartamento, terreno, construção, reforma e quitação de financiamento em até 200 meses. Crédito de R$ 70 mil a R$ 900 mil.",
    image: "/images/consorcio/planos/imovel.webp",
    tablesHref: "/consorcio/tabelas/imovel-pf",
  },
  {
    id: "pesados",
    title: "Consórcio de Pesados",
    body: "Caminhões, ônibus, tratores e linha amarela com pagamento em até 120 meses. Crédito de R$ 180 mil a R$ 360 mil.",
    image: "/images/consorcio/planos/pesados.webp",
    tablesHref: "/consorcio/tabelas/pesados-pf",
  },
  {
    id: "sustentavel",
    title: "Consórcio Sustentável",
    body: "Compra e instalação de placa solar e componentes em até 30 meses. Crédito de R$ 10 mil a R$ 20 mil.",
    image: "/images/consorcio/planos/sustentavel.webp",
    tablesHref: "/checklist/placa-solar",
  },
  {
    id: "bike",
    title: "Consórcio Bike",
    body: "Da urbana à elétrica, planos a partir de R$ 8 mil em até 30 meses, sem juros.",
    image: "/images/consorcio/planos/bike.webp",
    tablesHref: "/contato",
  },
] as const;

/**
 * Destino de "Simule agora". String vazia usa o WhatsApp até existir
 * o link definitivo da simulação de cada produto ou seção.
 */
export function vidaSimulateHref(override = "") {
  return override || siteConfig.whatsappHref;
}

export const vidaPlans = [
  {
    title: "Contrata Fácil Executivo Prestige",
    range: "Vida de R$ 1 a 4 milhões",
    href: "https://ediasvidaprestige.plataformadeseguros.com.br",
    image: "/images/vida/planos/prestige.jpg",
    imageAlt: "Executivo em traje formal, perfil do plano Prestige",
    simulateHref: "",
  },
  {
    title: "Clássico Especial",
    range: "Vida de R$ 250 a 750 mil",
    href: "https://ediasvidaclassico.plataformadeseguros.com.br/",
    image: "/images/vida/planos/classico.jpg",
    imageAlt: "Profissional sorridente, perfil do plano Clássico Especial",
    simulateHref: "",
  },
  {
    title: "Exato Flex",
    range: "Vida de R$ 50 a 100 mil",
    href: "https://ediasvidaflex.plataformadeseguros.com.br/",
    image: "/images/vida/planos/flex.jpg",
    imageAlt: "Mulher confiante de braços cruzados, perfil do plano Exato Flex",
    simulateHref: "",
  },
  {
    title: "Estagiário",
    range: "Acidentes de R$ 50 a 300 mil",
    href: "https://ediasvidaestagiario.plataformadeseguros.com.br/",
    image: "/images/vida/planos/estagiario.jpg",
    imageAlt: "Estudante com cadernos, perfil do plano Estagiário",
    simulateHref: "",
  },
] as const;

export const vidaCoverageSection = {
  title: "Conheça algumas de nossas coberturas e assistências",
  intro:
    "Coberturas que protegem sua renda em casos de doença ou acidente. Simule para conhecer todas as opções de proteção.",
  simulateHref: "",
  items: [
    {
      title: "Morte qualquer causa",
      body: "Segurança para seus familiares caso você venha a faltar.",
      image: "/images/vida/coberturas/morte.png",
    },
    {
      title: "Invalidez por acidente",
      body: "Proteção para você em caso de uma invalidez causada por acidente.",
      image: "/images/vida/coberturas/acidente.png",
    },
    {
      title: "Doenças graves",
      body: "Proteção para você em caso do diagnóstico de uma doença grave, como câncer, AVC, Parkinson e Alzheimer. São 30 doenças, a maior cobertura do Brasil.",
      image: "/images/vida/coberturas/doencas-graves.png",
    },
    {
      title: "Invalidez por doença",
      body: "Proteção para você em caso de uma invalidez causada por doença.",
      image: "/images/vida/coberturas/invalidez-doenca.png",
    },
    {
      title: "Assistência funeral",
      body: "Caso você venha a faltar, seus familiares ou amigos podem acionar o serviço e recebem o auxílio necessário nesse momento.",
      image: "/images/vida/coberturas/funeral.png",
    },
  ],
} as const;

export const vidaBenefitSection = {
  title: "Benefícios que facilitam sua vida",
  intro:
    "Oferecemos diversos benefícios de acordo com sua proteção, para você usar quando precisar.",
  simulateHref: "",
  items: [
    {
      title: "Médico na tela",
      body: "Atendimento médico online sem limite de utilização, 24 horas por dia, 7 dias por semana.",
      image: "/images/vida/beneficios/medico-na-tela.png",
    },
    {
      title: "Clube de vantagens",
      body: "Descontos e benefícios exclusivos para cuidar da saúde integral.",
      image: "/images/vida/beneficios/clube.png",
    },
    {
      title: "Desconto em farmácias",
      body: "Descontos de até 70% em medicamentos nas maiores redes de farmácias do Brasil.",
      image: "/images/vida/beneficios/farmacias.png",
    },
    {
      title: "Sorteios mensais",
      body: "Sorteios de até R$ 15 mil pela loteria federal todo mês.",
      image: "/images/vida/beneficios/sorteios.png",
    },
    {
      title: "Assistência residencial",
      body: "Pequenos reparos, como chaveiro e eletricista, além de vigilância e segurança.",
      image: "/images/vida/beneficios/residencial.png",
    },
  ],
} as const;

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

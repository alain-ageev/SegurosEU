import { odontoHref, siteConfig } from "@/lib/site";

/** Conteúdo da homepage de conversão (/) — foco em receita e confiança */

export const v2Nav = [
  { label: "Soluções", href: "/#solucoes" },
  { label: "Nossa atuação", href: "/#atuacao" },
  { label: "Cases", href: "/#cases" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contatos", href: "/sobre#contatos" },
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
    href: "/#contato",
  },
  secondaryCta: {
    label: "Falar no WhatsApp",
    href: siteConfig.whatsappHref,
  },
  trustLine:
    "Atendimento consultivo · Parceiros nacionais · Resposta em até 1 dia útil",
  /**
   * Vídeo no slot da imagem principal.
   * Envie o MP4 e coloque em public/videos/hero.mp4 (ou atualize este path).
   * Enquanto estiver vazio/null, a imagem posterSrc permanece.
   */
  videoSrc: null as string | null,
  posterSrc: "/images/home/brand-hero.jpg",
};

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
    href: "/#contato",
    cta: "Pedir revisão de custos",
  },
  {
    id: "proteger-patrimonio",
    title: "Preciso proteger patrimônio",
    audience: "Empresas e famílias patrimoniais",
    pain: "Riscos de propriedade, RC, frota ou interrupção sem mapa claro.",
    outcome: "Mapa de riscos prioritários e programa de seguros alinhado ao negócio.",
    href: "/#contato",
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
    href: "/#contato",
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
    href: "/#contato",
    cta: "Agendar diagnóstico",
  },
  {
    title: "Odonto SulAmérica",
    benefit: "Plano odontológico com a corretora E DIAS — contratação no portal SulAmérica.",
    forWho: "Pessoas e empresas",
    href: odontoHref,
    cta: "Acessar Odonto",
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
  missionTitle: "Nossa missão",
  missionLead:
    "Dissolver os entraves de seguro que atrapalham a saúde financeira da empresa — com cálculo assertivo, cobertura adequada e menos risco de rateio no sinistro.",
  missionBody: [
    "É impossível para os sócios conhecerem todas as questões que envolvem a empresa. Sabemos que não é falta de vontade: mergulhar só no operacional é deixar ao acaso os rumos do negócio.",
    "A rotina frenética das empresas, por vezes, arrasta gestores a jornadas exaustivas. Por isso é comum encontrar erros de declaração e cálculos incorretos nas avaliações de seguros.",
    "A consequência é falta de cobertura adicional, perda proporcional e rateios em que a empresa participa do dano junto à seguradora — situações que poderiam ser evitadas.",
    "A experiência mostra que grande parte das demandas nasce de inconformidade corporativa. Por isso dedicamos nosso trabalho a reduzir esses riscos com consultoria objetiva.",
  ],
} as const;

export const v2Form = {
  title: "Solicite um diagnóstico",
  description:
    "Conte o essencial. Retornamos em até 1 dia útil com os próximos passos — sem spam e com privacidade.",
  privacy:
    "Usamos seus dados apenas para retorno comercial da E DIAS. Não compartilhamos com terceiros sem necessidade do atendimento.",
} as const;

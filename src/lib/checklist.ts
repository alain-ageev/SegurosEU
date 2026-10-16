/* Generated from the live Edias Wix checklists. Do not edit field lists by hand. */

export type ChecklistFieldType =
  | "text"
  | "email"
  | "tel"
  | "number"
  | "textarea"
  | "select"
  | "radio"
  | "checkbox"
  | "date";

export type ChecklistField = {
  name: string;
  label: string;
  type: ChecklistFieldType;
  required: boolean;
  options?: string[];
};

export type ChecklistFile = {
  label: string;
  href: string;
  external?: boolean;
};

export type ChecklistEntry = {
  slug: string;
  menuLabel: string;
  title: string;
  description: string;
  href: string;
  route: boolean;
  files: ChecklistFile[];
  form: {
    title: string;
    description: string;
    fields: ChecklistField[];
  };
};

export const checklistCatalog: ChecklistEntry[] = [
  {
    "slug": "cadastro",
    "menuLabel": "Cadastro cliente",
    "title": "Cadastro de clientes",
    "description": "O preenchimento deste formulário é essencial para obtenção correta dos valores para o cálculo.",
    "href": "/checklist/cadastro",
    "route": true,
    "files": [],
    "form": {
      "title": "CADASTRO CLIENTES",
      "description": "Riscos Corporativos",
      "fields": [
        {
          "name": "q1",
          "label": "CNPJ",
          "type": "text",
          "required": false
        },
        {
          "name": "q2",
          "label": "Nome",
          "type": "text",
          "required": true
        },
        {
          "name": "q3",
          "label": "Celular ou Fixo",
          "type": "tel",
          "required": true
        },
        {
          "name": "q4",
          "label": "O email",
          "type": "email",
          "required": false
        },
        {
          "name": "q5",
          "label": "Produtos de Interesse",
          "type": "checkbox",
          "required": false,
          "options": [
            "Planos de Saúde",
            "Plano Odontológico",
            "Seguro Empresarial",
            "Seguro de Carga",
            "Seguro Viagem",
            "Seguro de Vida",
            "Seguro Frota",
            "Seguro Automóvel",
            "Seguro Resp. Civil",
            "Seguro Placa Solar",
            "Previdência Privada",
            "Consórcio"
          ]
        }
      ]
    }
  },
  {
    "slug": "consorcio",
    "menuLabel": "Consórcio",
    "title": "Checklist de consórcio",
    "description": "O preenchimento deste formulário é essencial para a obtenção da cota de consórcio.",
    "href": "/checklist#consorcio",
    "route": false,
    "files": [],
    "form": {
      "title": "CHECKLIST - CONSÓRCIO",
      "description": "Obrigado pelo seu tempo, por favor, preencha o formulário abaixo.",
      "fields": [
        {
          "name": "q1",
          "label": "Tipo de Consórcio",
          "type": "select",
          "required": false,
          "options": [
            "Automóvel",
            "Imóvel",
            "Pesados",
            "Automóvel + Imóvel",
            "Automóvel + Pesados",
            "Imóvel + Pesados",
            "Automóvel + Imóvel + Pesados"
          ]
        },
        {
          "name": "q2",
          "label": "Carta Automóvel",
          "type": "select",
          "required": false,
          "options": [
            "R$ 0,00",
            "R$ 25.000,00",
            "R$ 27.500,00",
            "R$ 30.000,00",
            "R$ 32.500,00",
            "R$ 34.000,00",
            "R$ 35.000,00",
            "R$ 37.500,00",
            "R$ 40.000,00",
            "R$ 42.500,00",
            "R$ 45.000,00",
            "R$ 47.500,00",
            "R$ 50.000,00",
            "R$ 52.500,00",
            "R$ 55.000,00",
            "R$ 57.500,00",
            "R$ 60.000,00",
            "R$ 62.500,00",
            "R$ 65.000,00",
            "R$ 62.500,00",
            "R$ 67.500,00",
            "R$ 70.000,00",
            "R$ 72.500,00",
            "R$ 75.000,00",
            "R$ 77.500,00",
            "R$ 80.000,00",
            "R$ 82.500,00",
            "R$ 85.000,00",
            "R$ 87.500,00",
            "R$ 90.000,00",
            "R$ 92.500,00",
            "R$ 95.000,00",
            "R$ 97.500,00",
            "R$ 100.000,00",
            "R$ 102.500,00",
            "R$ 105.000,00",
            "R$ 107.500,00",
            "R$ 110.000,00",
            "R$ 112.500,00",
            "R$ 115.000,00",
            "R$ 117.500,00",
            "R$ 120.000,00",
            "R$ 122.500,00",
            "R$ 125.000,00",
            "R$ 130.000,00",
            "R$ 135.000,00",
            "R$ 140.000,00",
            "R$ 145.000,00",
            "R$ 150.000,00",
            "R$ 155.000,00",
            "R$ 160.000,00",
            "R$ 165.000,00",
            "R$ 170.000,00",
            "R$ 175.000,00",
            "R$ 180.000,00",
            "R$ 185.000,00",
            "R$ 190.000,00",
            "R$ 195.000,00",
            "R$ 200.000,00"
          ]
        },
        {
          "name": "q3",
          "label": "Quant de Cotas Automóvel",
          "type": "number",
          "required": false
        },
        {
          "name": "q4",
          "label": "Carta Imóvel",
          "type": "select",
          "required": false,
          "options": [
            "R$ 0,00",
            "R$ 70.000,00",
            "R$ 80.000,00",
            "R$ 90.000,00",
            "R$ 100.000,00",
            "R$ 110.000,00",
            "R$ 120.000,00",
            "R$ 130.000,00",
            "R$ 140.000,00",
            "R$ 280.000,00",
            "R$ 300.000,00",
            "R$ 360.000,00",
            "R$ 400.000,00",
            "R$ 440.000,00",
            "R$ 480.000,00",
            "R$ 500.000,00",
            "R$ 540.000,00",
            "R$ 560.000,00",
            "R$ 600.000,00",
            "R$ 650.000,00",
            "R$ 700.000,00",
            "R$ 750.000,00",
            "R$ 800.000,00",
            "R$ 850.000,00",
            "R$ 900.000,00"
          ]
        },
        {
          "name": "q5",
          "label": "Quant de Cotas Imóvel",
          "type": "number",
          "required": false
        },
        {
          "name": "q6",
          "label": "Carta Pesados",
          "type": "select",
          "required": false,
          "options": [
            "R$ 0,00",
            "R$ 180.000,00",
            "R$ 190.000,00",
            "R$ 200.000,00",
            "R$ 210.000,00",
            "R$ 220.000,00",
            "R$ 230.000,00",
            "R$ 240.000,00",
            "R$ 250.000,00",
            "R$ 260.000,00",
            "R$ 270.000,00",
            "R$ 280.000,00",
            "R$ 290.000,00",
            "R$ 300.000,00",
            "R$ 310.000,00",
            "R$ 330.000,00",
            "R$ 340.000,00",
            "R$ 350.000,00",
            "R$ 360.000,00"
          ]
        },
        {
          "name": "q7",
          "label": "Quant de Cotas Pesados",
          "type": "number",
          "required": false
        },
        {
          "name": "q8",
          "label": "Contratante",
          "type": "radio",
          "required": true,
          "options": [
            "Pessoa Física",
            "Pessoa Jurídica"
          ]
        },
        {
          "name": "q9",
          "label": "Renda Mensal (PF) / Faturamento (PJ)",
          "type": "text",
          "required": true
        },
        {
          "name": "q10",
          "label": "Opção de Pagamento Primeira Parcela",
          "type": "radio",
          "required": true,
          "options": [
            "Boleto",
            "Cartão de Crédito"
          ]
        },
        {
          "name": "q11",
          "label": "Opção de Pagamento Demais Parcelas",
          "type": "radio",
          "required": true,
          "options": [
            "Boleto",
            "Cartão de Crédito",
            "Débito em Conta Corrente"
          ]
        },
        {
          "name": "q12",
          "label": "Nome Completo",
          "type": "text",
          "required": true
        },
        {
          "name": "q13",
          "label": "CPF",
          "type": "text",
          "required": true
        },
        {
          "name": "q14",
          "label": "Data de Nascimento",
          "type": "text",
          "required": true
        },
        {
          "name": "q15",
          "label": "Estado Civil",
          "type": "radio",
          "required": true,
          "options": [
            "Casado",
            "Solteiro"
          ]
        },
        {
          "name": "q16",
          "label": "Profissão",
          "type": "text",
          "required": true
        },
        {
          "name": "q17",
          "label": "Email",
          "type": "email",
          "required": true
        },
        {
          "name": "q18",
          "label": "Telefone Pessoal",
          "type": "tel",
          "required": true
        },
        {
          "name": "q19",
          "label": "RG",
          "type": "text",
          "required": true
        },
        {
          "name": "q20",
          "label": "Orgão",
          "type": "text",
          "required": true
        },
        {
          "name": "q21",
          "label": "Data Emissão",
          "type": "text",
          "required": true
        },
        {
          "name": "q22",
          "label": "Naturalidade",
          "type": "text",
          "required": true
        },
        {
          "name": "q23",
          "label": "Nome da Mãe",
          "type": "text",
          "required": true
        },
        {
          "name": "q24",
          "label": "Endereço Residencial",
          "type": "text",
          "required": true
        },
        {
          "name": "q25",
          "label": "Dados Bancários",
          "type": "textarea",
          "required": false
        },
        {
          "name": "q26",
          "label": "Nome Completo Conjuge",
          "type": "text",
          "required": false
        },
        {
          "name": "q27",
          "label": "CPF Cônjuge",
          "type": "text",
          "required": false
        },
        {
          "name": "q28",
          "label": "Razão Social",
          "type": "text",
          "required": false
        },
        {
          "name": "q29",
          "label": "CNPJ",
          "type": "text",
          "required": false
        },
        {
          "name": "q30",
          "label": "Faturamento Mensal",
          "type": "number",
          "required": false
        },
        {
          "name": "q31",
          "label": "Email",
          "type": "email",
          "required": false
        },
        {
          "name": "q32",
          "label": "Telefone Empresa",
          "type": "tel",
          "required": false
        },
        {
          "name": "q33",
          "label": "Anexo Documentos",
          "type": "text",
          "required": false
        }
      ]
    }
  },
  {
    "slug": "deposito-recursal",
    "menuLabel": "Depósito recursal",
    "title": "Checklist de depósito recursal",
    "description": "Retire o guia e os documentos da SUSEP em até 7 dias após a emissão da apólice. O formulário é essencial para a obtenção dos resultados.",
    "href": "/checklist/deposito-recursal",
    "route": true,
    "files": [
      {
        "label": "Depósito recursal — guia.pdf",
        "href": "/files/checklist/deposito-recursal-guia.pdf"
      },
      {
        "label": "Apólice emitida pela SUSEP",
        "href": "https://www2.susep.gov.br/safe/apolices/app/garantia",
        "external": true
      },
      {
        "label": "Certificados da seguradora — consulte a SUSEP",
        "href": "https://www.gov.br/pt-br/servicos/consultar-entidades-licenciadas-pela-susep",
        "external": true
      }
    ],
    "form": {
      "title": "CHECKLIST - DEPÓSITO RECURSAL",
      "description": "Obrigado pelo seu tempo, por favor, preencha o formulário abaixo.",
      "fields": [
        {
          "name": "q1",
          "label": "CNPJ (Tomador)",
          "type": "text",
          "required": true
        },
        {
          "name": "q2",
          "label": "Razão Social (Tomador)",
          "type": "text",
          "required": true
        },
        {
          "name": "q3",
          "label": "Endereço (Tomador)",
          "type": "text",
          "required": true
        },
        {
          "name": "q4",
          "label": "CPF Funcionário (Segurado Reclamante)",
          "type": "text",
          "required": true
        },
        {
          "name": "q5",
          "label": "Nome Completo (Segurado)",
          "type": "text",
          "required": true
        },
        {
          "name": "q6",
          "label": "Endereço (Segurado)",
          "type": "text",
          "required": true
        },
        {
          "name": "q7",
          "label": "RG (Segurado)",
          "type": "text",
          "required": true
        },
        {
          "name": "q8",
          "label": "Orgão",
          "type": "text",
          "required": true
        },
        {
          "name": "q9",
          "label": "Data Emissão",
          "type": "text",
          "required": true
        },
        {
          "name": "q10",
          "label": "Produto",
          "type": "select",
          "required": true,
          "options": [
            "Garantia segurado - ramo público"
          ]
        },
        {
          "name": "q11",
          "label": "Modalidade",
          "type": "select",
          "required": true,
          "options": [
            "Depósito recursal"
          ]
        },
        {
          "name": "q12",
          "label": "Valor Garantia (IS) - acrescer + 30%",
          "type": "text",
          "required": true
        },
        {
          "name": "q13",
          "label": "Início Vigência - não retroagir",
          "type": "date",
          "required": true
        },
        {
          "name": "q14",
          "label": "Fim Vigência - de 3 a 5 anos",
          "type": "date",
          "required": true
        },
        {
          "name": "q15",
          "label": "Tipo de Recurso",
          "type": "select",
          "required": true,
          "options": [
            "Recurso ordinário (TRT)",
            "Recurso de revista (TST)",
            "Recurso de embargos (TST)",
            "Recurso em ação rescisória",
            "Agravo de instrumento"
          ]
        },
        {
          "name": "q16",
          "label": "Número do Processo:",
          "type": "text",
          "required": true
        }
      ]
    }
  },
  {
    "slug": "garantia-judicial",
    "menuLabel": "Garantia judicial",
    "title": "Checklist de garantia judicial",
    "description": "O preenchimento correto deste formulário é essencial para a obtenção dos resultados.",
    "href": "/checklist/garantia-judicial",
    "route": true,
    "files": [],
    "form": {
      "title": "CHECKLIST - GARANTIA JUDICIAL",
      "description": "Obrigado pelo seu tempo, por favor, preencha o formulário abaixo.",
      "fields": [
        {
          "name": "q1",
          "label": "Tomador",
          "type": "text",
          "required": false
        },
        {
          "name": "q2",
          "label": "CNPJ",
          "type": "text",
          "required": false
        },
        {
          "name": "q3",
          "label": "Endereço do Tomador",
          "type": "text",
          "required": true
        },
        {
          "name": "q4",
          "label": "Segurado",
          "type": "text",
          "required": true
        },
        {
          "name": "q5",
          "label": "CNPJ/CPF",
          "type": "text",
          "required": true
        },
        {
          "name": "q6",
          "label": "Endereço do Segurado",
          "type": "text",
          "required": true
        },
        {
          "name": "q7",
          "label": "Autor",
          "type": "text",
          "required": true
        },
        {
          "name": "q8",
          "label": "CNPJ/CPF",
          "type": "text",
          "required": true
        },
        {
          "name": "q9",
          "label": "Endereço do Autor",
          "type": "text",
          "required": true
        },
        {
          "name": "q10",
          "label": "Nome e Qualificação do Réu:",
          "type": "textarea",
          "required": false
        },
        {
          "name": "q11",
          "label": "Processo Judicial:",
          "type": "text",
          "required": false
        },
        {
          "name": "q12",
          "label": "Auto de Infração:",
          "type": "text",
          "required": false
        },
        {
          "name": "q13",
          "label": "Procedimento Administrativo:",
          "type": "text",
          "required": false
        },
        {
          "name": "q14",
          "label": "Tipo de Ação:",
          "type": "text",
          "required": false
        },
        {
          "name": "q15",
          "label": "Juízo:",
          "type": "text",
          "required": false
        },
        {
          "name": "q16",
          "label": "Valor da Causa",
          "type": "number",
          "required": false
        },
        {
          "name": "q17",
          "label": "Data",
          "type": "date",
          "required": false
        },
        {
          "name": "q18",
          "label": "Tipo de Caução",
          "type": "select",
          "required": false,
          "options": [
            "Nova Caução do Processo",
            "Substituição de Garantia",
            "Garantia Adicional"
          ]
        },
        {
          "name": "q19",
          "label": "Objeto do Processo",
          "type": "textarea",
          "required": false
        },
        {
          "name": "q20",
          "label": "Histórico do processo",
          "type": "textarea",
          "required": false
        },
        {
          "name": "q21",
          "label": "Linha de Defesa Sustentada",
          "type": "textarea",
          "required": false
        },
        {
          "name": "q22",
          "label": "Classificação quanto à probabilidade de êxito:",
          "type": "select",
          "required": false,
          "options": [
            "Provável",
            "Possível",
            "Remota"
          ]
        },
        {
          "name": "q23",
          "label": "Valor atualizado da garantia judicial a ser apresentada:",
          "type": "number",
          "required": false
        },
        {
          "name": "q24",
          "label": "Data Base:",
          "type": "date",
          "required": false
        },
        {
          "name": "q25",
          "label": "Índice de reajuste adotado:",
          "type": "text",
          "required": false
        },
        {
          "name": "q26",
          "label": "Objetivo da Garantia",
          "type": "textarea",
          "required": false
        },
        {
          "name": "q27",
          "label": "Vigência",
          "type": "date",
          "required": false
        },
        {
          "name": "q28",
          "label": "Nome",
          "type": "text",
          "required": false
        },
        {
          "name": "q29",
          "label": "Número de Inscrição na OAB:",
          "type": "text",
          "required": false
        },
        {
          "name": "q30",
          "label": "Estado:",
          "type": "text",
          "required": false
        },
        {
          "name": "q31",
          "label": "Local e Data",
          "type": "text",
          "required": false
        },
        {
          "name": "q32",
          "label": "Assinatura eletrônica",
          "type": "text",
          "required": false
        }
      ]
    }
  },
  {
    "slug": "rcg",
    "menuLabel": "Resp. civil (RCG)",
    "title": "Checklist de responsabilidade civil",
    "description": "O preenchimento deste formulário é essencial para obtenção correta dos valores para o cálculo.",
    "href": "/checklist/rcg",
    "route": true,
    "files": [],
    "form": {
      "title": "CHECKLIST - RESP. CIVIL GERAL",
      "description": "Obrigado pelo seu tempo, por favor, preencha o formulário abaixo.",
      "fields": [
        {
          "name": "q1",
          "label": "Atividade da Empresa",
          "type": "select",
          "required": true,
          "options": [
            "Armazém",
            "Distribuidor",
            "Escritório",
            "Frigorífico",
            "Fábrica",
            "Indústria",
            "Posto de Gasolina",
            "Supermercado",
            "Tecidos Depósito",
            "Tecidos Loja",
            "Outras"
          ]
        },
        {
          "name": "q2",
          "label": "CNPJ",
          "type": "text",
          "required": true
        },
        {
          "name": "q3",
          "label": "CNPJ'S Filiais",
          "type": "textarea",
          "required": false
        },
        {
          "name": "q4",
          "label": "Nome Contato",
          "type": "text",
          "required": false
        },
        {
          "name": "q5",
          "label": "Celular ou Fixo",
          "type": "tel",
          "required": true
        },
        {
          "name": "q6",
          "label": "O email",
          "type": "email",
          "required": true
        },
        {
          "name": "q7",
          "label": "Total Func. nas Empresas",
          "type": "number",
          "required": false
        },
        {
          "name": "q8",
          "label": "Faturamento dos últimos 12 meses",
          "type": "text",
          "required": true
        },
        {
          "name": "q9",
          "label": "O Segurado tem conhecimento de alguma reclamação ou de qualquer fato que possa advir uma reclamação contra si nos últimos cinco anos?",
          "type": "radio",
          "required": true,
          "options": [
            "Sim",
            "Não"
          ]
        },
        {
          "name": "q10",
          "label": "Nos últimos 5 anos a Proponente e/ou suas subsidiárias já foram acionados em razão reclamações e/ou demandas judiciais ou extrajudiciais, ainda que não houvesse seguro no período?",
          "type": "radio",
          "required": true,
          "options": [
            "Sim",
            "Não"
          ]
        },
        {
          "name": "q11",
          "label": "Qual o valor para proposta?",
          "type": "radio",
          "required": true,
          "options": [
            "1 MM",
            "2 MM",
            "3 MM",
            "4 MM",
            "5 MM",
            "6 MM",
            "7 MM",
            "8 MM",
            "9 MM",
            "10 MM"
          ]
        }
      ]
    }
  },
  {
    "slug": "empresarial",
    "menuLabel": "Empresarial",
    "title": "Checklist empresarial — incêndio grandes riscos",
    "description": "O preenchimento deste formulário é essencial para obtenção correta dos valores para o cálculo.",
    "href": "/checklist/empresarial",
    "route": true,
    "files": [],
    "form": {
      "title": "CHECKLIST - INCÊNDIO GRANDES RISCOS",
      "description": "Obrigado pelo seu tempo, por favor, preencha o formulário abaixo.",
      "fields": [
        {
          "name": "q1",
          "label": "Atividade da Empresa",
          "type": "select",
          "required": true,
          "options": [
            "Armazém",
            "Distribuidor",
            "Escritório",
            "Frigorífico",
            "Fábrica",
            "Indústria",
            "Posto de Gasolina",
            "Supermercado",
            "Tecidos Depósito",
            "Tecidos Loja",
            "Outras"
          ]
        },
        {
          "name": "q2",
          "label": "Tipo de Seguro",
          "type": "radio",
          "required": true,
          "options": [
            "Prédio",
            "Conteúdo",
            "Prédio e Conteúdo"
          ]
        },
        {
          "name": "q3",
          "label": "Razão Social",
          "type": "text",
          "required": false
        },
        {
          "name": "q4",
          "label": "CNPJ",
          "type": "text",
          "required": true
        },
        {
          "name": "q5",
          "label": "Func. Registrado",
          "type": "number",
          "required": false
        },
        {
          "name": "q6",
          "label": "Nome Completo",
          "type": "text",
          "required": false
        },
        {
          "name": "q7",
          "label": "Celular ou Fixo",
          "type": "tel",
          "required": true
        },
        {
          "name": "q8",
          "label": "O email",
          "type": "email",
          "required": true
        },
        {
          "name": "q9",
          "label": "Tipo de Seguro",
          "type": "radio",
          "required": true,
          "options": [
            "Seguro Novo",
            "Ren. 1 Ano",
            "Ren. 2 Anos",
            "Ren. 3 Anos",
            "Ren. 4 Anos",
            "Ren. 5 Anos"
          ]
        },
        {
          "name": "q10",
          "label": "Área do Prédio",
          "type": "text",
          "required": true
        },
        {
          "name": "q11",
          "label": "Mercadorias e Estoque (Conteúdo)",
          "type": "text",
          "required": true
        },
        {
          "name": "q12",
          "label": "Máquinas e Equipamentos (Imobilizado)",
          "type": "text",
          "required": true
        },
        {
          "name": "q13",
          "label": "Merc. Cameras Frias",
          "type": "text",
          "required": false
        },
        {
          "name": "q14",
          "label": "Despesas Fixas Mensais",
          "type": "text",
          "required": false
        },
        {
          "name": "q15",
          "label": "Lucro Líquido (Média)",
          "type": "text",
          "required": false
        },
        {
          "name": "q16",
          "label": "Se hover Vidros na frente de loja, qual valor máximo para contratar?",
          "type": "checkbox",
          "required": false,
          "options": [
            "até 5 mil",
            "até 10 mil",
            "até 15 mil",
            "Não tem"
          ]
        },
        {
          "name": "q17",
          "label": "Responsabilidade Civil para Terceiros",
          "type": "checkbox",
          "required": true,
          "options": [
            "Casas ao lado do Prédio",
            "Empresas ao lado do Prédio",
            "Casa e Empresas",
            "Não Exitem Imóveis ao lado do Prédio"
          ]
        },
        {
          "name": "q18",
          "label": "Possui Placa Solar no Estabelecimento?",
          "type": "radio",
          "required": true,
          "options": [
            "Sim",
            "Não"
          ]
        },
        {
          "name": "q19",
          "label": "Possui certidão do bombeiro ou projeto em andamento?",
          "type": "radio",
          "required": true,
          "options": [
            "Sim",
            "Não"
          ]
        },
        {
          "name": "q20",
          "label": "Possui Alvará de funcionamento ou Projeto em andamento?",
          "type": "radio",
          "required": true,
          "options": [
            "Sim",
            "Não"
          ]
        },
        {
          "name": "q21",
          "label": "Possui Estacionamento com monitoramento?",
          "type": "radio",
          "required": true,
          "options": [
            "Sim",
            "Não"
          ]
        },
        {
          "name": "q22",
          "label": "Possui até 25% de metal na cobertura do telhado?",
          "type": "radio",
          "required": true,
          "options": [
            "Sim",
            "Não"
          ]
        },
        {
          "name": "q23",
          "label": "Existe Gerador em sua instalação?",
          "type": "radio",
          "required": true,
          "options": [
            "Sim",
            "Não"
          ]
        },
        {
          "name": "q24",
          "label": "Protecionais",
          "type": "checkbox",
          "required": true,
          "options": [
            "Extintores",
            "Hidrante Internos",
            "Hidrantes Externos",
            "Sprinkler 25%",
            "Sprinkler 50%",
            "Sprinkler 75%",
            "Sprinkler 100%",
            "Detector de Fumaça",
            "Alarme de Incêndio",
            "Alarme Monitoramento Interno",
            "Alarme de Monitoramento Externo",
            "Vigilância 24h Desarmada",
            "Vigilância 24h Armada"
          ]
        }
      ]
    }
  },
  {
    "slug": "empresarial-resumido",
    "menuLabel": "Empresarial resumido",
    "title": "Checklist empresarial resumido",
    "description": "Versão curta do checklist de incêndio para grandes riscos.",
    "href": "/checklist/empresarial-resumido",
    "route": true,
    "files": [],
    "form": {
      "title": "CHECKLIST - INCÊNDIO GRANDES RISCOS",
      "description": "Obrigado pelo seu tempo, por favor, preencha o formulário abaixo.",
      "fields": [
        {
          "name": "q1",
          "label": "Atividade da Empresa",
          "type": "select",
          "required": true,
          "options": [
            "Armazém",
            "Distribuidor",
            "Escritório",
            "Frigorífico",
            "Fábrica",
            "Indústria",
            "Posto de Gasolina",
            "Supermercado",
            "Tecidos Depósito",
            "Tecidos Loja",
            "Outras"
          ]
        },
        {
          "name": "q2",
          "label": "Cobertura",
          "type": "radio",
          "required": true,
          "options": [
            "Prédio",
            "Conteúdo",
            "Prédio e Conteúdo"
          ]
        },
        {
          "name": "q3",
          "label": "CNPJ",
          "type": "text",
          "required": true
        },
        {
          "name": "q4",
          "label": "Tipo de Seguro",
          "type": "radio",
          "required": true,
          "options": [
            "Seguro Novo",
            "Ren. 1 Ano",
            "Ren. 2 Anos",
            "Ren. 3 Anos",
            "Ren. 4 Anos",
            "Ren. 5 Anos"
          ]
        },
        {
          "name": "q5",
          "label": "Área do Prédio",
          "type": "text",
          "required": true
        },
        {
          "name": "q6",
          "label": "Mercadorias e Estoque (Conteúdo)",
          "type": "text",
          "required": true
        },
        {
          "name": "q7",
          "label": "Máquinas e Equipamentos (Imobilizado)",
          "type": "text",
          "required": true
        },
        {
          "name": "q8",
          "label": "Merc. Cameras Frias",
          "type": "text",
          "required": false
        },
        {
          "name": "q9",
          "label": "Protecionais",
          "type": "checkbox",
          "required": true,
          "options": [
            "Extintores",
            "Hidrante Internos",
            "Hidrantes Externos",
            "Sprinkler 25%",
            "Sprinkler 50%",
            "Sprinkler 75%",
            "Sprinkler 100%",
            "Detector de Fumaça",
            "Alarme de Incêndio",
            "Alarme Monitoramento Interno",
            "Alarme de Monitoramento Externo",
            "Vigilância 24h Desarmada",
            "Vigilância 24h Armada"
          ]
        }
      ]
    }
  },
  {
    "slug": "placa-solar",
    "menuLabel": "Placa solar",
    "title": "Checklist de placa solar",
    "description": "O preenchimento deste formulário é essencial para obtenção correta dos valores para o cálculo.",
    "href": "/checklist/placa-solar",
    "route": true,
    "files": [],
    "form": {
      "title": "CHECKLIST - PLACA SOLAR",
      "description": "Obrigado pelo seu tempo, por favor, preencha o formulário abaixo.",
      "fields": [
        {
          "name": "q1",
          "label": "Nome do Consultor Projetista",
          "type": "select",
          "required": false,
          "options": [
            "Evandro",
            "Monica",
            "Paula",
            "Valentim",
            "Não tem"
          ]
        },
        {
          "name": "q2",
          "label": "Atividade da Empresa",
          "type": "select",
          "required": true,
          "options": [
            "Armazém",
            "Distribuidor",
            "Escritório",
            "Frigorífico",
            "Fábrica",
            "Indústria",
            "Posto de Gasolina",
            "Supermercado",
            "Outras"
          ]
        },
        {
          "name": "q3",
          "label": "Razão Social",
          "type": "text",
          "required": false
        },
        {
          "name": "q4",
          "label": "CNPJ",
          "type": "text",
          "required": true
        },
        {
          "name": "q5",
          "label": "Nome Completo",
          "type": "text",
          "required": false
        },
        {
          "name": "q6",
          "label": "Celular ou Fixo",
          "type": "tel",
          "required": true
        },
        {
          "name": "q7",
          "label": "O email",
          "type": "email",
          "required": true
        },
        {
          "name": "q8",
          "label": "Tipo de Seguro",
          "type": "radio",
          "required": true,
          "options": [
            "Seguro Novo",
            "Renovação"
          ]
        },
        {
          "name": "q9",
          "label": "Endereço",
          "type": "text",
          "required": true
        },
        {
          "name": "q10",
          "label": "Tipo de Instalação",
          "type": "radio",
          "required": true,
          "options": [
            "Misto (Telhado e Solo)",
            "Solo",
            "Telhado"
          ]
        },
        {
          "name": "q11",
          "label": "Local de Instalação",
          "type": "radio",
          "required": true,
          "options": [
            "Zona Urbana",
            "Zona Rural",
            "Misto (Zona Urbana e Rural)"
          ]
        },
        {
          "name": "q12",
          "label": "Ano de Fabricação do Equipamento",
          "type": "select",
          "required": true,
          "options": [
            "2025",
            "2024",
            "2023",
            "2022",
            "2021",
            "2020",
            "2019",
            "2018",
            "2017",
            "Outro"
          ]
        },
        {
          "name": "q13",
          "label": "O valor de LMI da COBERTURA BÁSICA deve ser o valor total do projeto (equipamentos + custo de instalação):",
          "type": "select",
          "required": true,
          "options": [
            "Estou ciente"
          ]
        },
        {
          "name": "q14",
          "label": "Usina de geração compartilhada?:",
          "type": "select",
          "required": true,
          "options": [
            "Sim",
            "Não"
          ]
        },
        {
          "name": "q15",
          "label": "Valor Cobertura Padrão",
          "type": "text",
          "required": true
        },
        {
          "name": "q16",
          "label": "Valor para Danos Elétricos",
          "type": "text",
          "required": true
        },
        {
          "name": "q17",
          "label": "Endereço 02",
          "type": "text",
          "required": false
        },
        {
          "name": "q18",
          "label": "Tipo de Instalação 02",
          "type": "radio",
          "required": false,
          "options": [
            "Misto (Telhado e Solo)",
            "Solo",
            "Telhado"
          ]
        },
        {
          "name": "q19",
          "label": "Local de Instalação 02",
          "type": "radio",
          "required": false,
          "options": [
            "Zona Urbana",
            "Zona Rural",
            "Misto (Zona Urbana e Rural)"
          ]
        },
        {
          "name": "q20",
          "label": "Ano de Fabricação do Equipamento 02",
          "type": "select",
          "required": false,
          "options": [
            "2025",
            "2024",
            "2023",
            "2022",
            "2021",
            "2020",
            "2019",
            "2018",
            "2017",
            "Outro"
          ]
        },
        {
          "name": "q21",
          "label": "O valor de LMI da COBERTURA BÁSICA 02 deve ser o valor total do projeto (equipamentos + custo de instalação):",
          "type": "select",
          "required": false,
          "options": [
            "Estou ciente"
          ]
        },
        {
          "name": "q22",
          "label": "Usina 02 de geração compartilhada?:",
          "type": "select",
          "required": false,
          "options": [
            "Sim",
            "Não"
          ]
        },
        {
          "name": "q23",
          "label": "Valor Cobertura Padrão 02",
          "type": "text",
          "required": false
        },
        {
          "name": "q24",
          "label": "Valor para Danos Elétricos 02",
          "type": "text",
          "required": false
        }
      ]
    }
  },
  {
    "slug": "residencial",
    "menuLabel": "Residencial",
    "title": "Checklist residencial",
    "description": "O preenchimento deste formulário é essencial para obtenção correta dos valores para o cálculo.",
    "href": "/checklist/residencial",
    "route": true,
    "files": [],
    "form": {
      "title": "CHECKLIST - RESIDENCIAL",
      "description": "Obrigado pelo seu tempo, por favor, preencha o formulário abaixo.",
      "fields": [
        {
          "name": "q1",
          "label": "Tipo de Seguro",
          "type": "radio",
          "required": true,
          "options": [
            "Seguro Novo",
            "Renovação"
          ]
        },
        {
          "name": "q2",
          "label": "Nome/Razão Social",
          "type": "text",
          "required": false
        },
        {
          "name": "q3",
          "label": "CPF/CNPJ",
          "type": "text",
          "required": true
        },
        {
          "name": "q4",
          "label": "Celular ou Fixo",
          "type": "tel",
          "required": true
        },
        {
          "name": "q5",
          "label": "O email",
          "type": "email",
          "required": true
        },
        {
          "name": "q6",
          "label": "Endereço",
          "type": "text",
          "required": true
        },
        {
          "name": "q7",
          "label": "Tipo de Tomador",
          "type": "radio",
          "required": true,
          "options": [
            "Proprietário",
            "Inquilino"
          ]
        },
        {
          "name": "q8",
          "label": "Tipo de Imóvel",
          "type": "radio",
          "required": true,
          "options": [
            "Apartamento",
            "Casa",
            "Casa em Condomínio"
          ]
        },
        {
          "name": "q9",
          "label": "Tipo de Construção",
          "type": "radio",
          "required": true,
          "options": [
            "Alvenaria",
            "Madeira"
          ]
        },
        {
          "name": "q10",
          "label": "Uso do Imóvel",
          "type": "radio",
          "required": true,
          "options": [
            "Moradia",
            "Moradia Mista",
            "Veraneio",
            "Desocupado",
            "Aluguel Temporada"
          ]
        },
        {
          "name": "q11",
          "label": "Valor do Imóvel+Móveis",
          "type": "text",
          "required": true
        }
      ]
    }
  },
  {
    "slug": "saude",
    "menuLabel": "Saúde",
    "title": "Checklist de saúde",
    "description": "O preenchimento deste formulário é essencial para obtenção correta dos valores para o cálculo.",
    "href": "/checklist/saude",
    "route": true,
    "files": [],
    "form": {
      "title": "CHECKLIST - SAÚDE",
      "description": "Obrigado pelo seu tempo, por favor, preencha o formulário abaixo.",
      "fields": [
        {
          "name": "q1",
          "label": "Razão Social",
          "type": "text",
          "required": false
        },
        {
          "name": "q2",
          "label": "CNPJ",
          "type": "text",
          "required": true
        },
        {
          "name": "q3",
          "label": "Responsável",
          "type": "text",
          "required": false
        },
        {
          "name": "q4",
          "label": "Celular ou Fixo",
          "type": "tel",
          "required": true
        },
        {
          "name": "q5",
          "label": "E-mail",
          "type": "email",
          "required": true
        },
        {
          "name": "q6",
          "label": "Operadora de Preferencia",
          "type": "checkbox",
          "required": true,
          "options": [
            "Sul América",
            "Bradesco Seguros",
            "Amil Saúde",
            "Unimed",
            "Hapvida",
            "Outras"
          ]
        },
        {
          "name": "q7",
          "label": "Tipo de Plano para Análise?",
          "type": "checkbox",
          "required": true,
          "options": [
            "Sem Coparticipação",
            "Com Coparticipação",
            "Com e Sem Coparticipação"
          ]
        },
        {
          "name": "q8",
          "label": "Total Vidas",
          "type": "text",
          "required": true
        },
        {
          "name": "q9",
          "label": "Existe Alguém Gestante?",
          "type": "radio",
          "required": true,
          "options": [
            "Sim",
            "Não"
          ]
        },
        {
          "name": "q10",
          "label": "00 a 18",
          "type": "text",
          "required": false
        },
        {
          "name": "q11",
          "label": "19 a 23",
          "type": "text",
          "required": false
        },
        {
          "name": "q12",
          "label": "24 a 28",
          "type": "text",
          "required": false
        },
        {
          "name": "q13",
          "label": "29 a 33",
          "type": "text",
          "required": false
        },
        {
          "name": "q14",
          "label": "34 a 38",
          "type": "text",
          "required": false
        },
        {
          "name": "q15",
          "label": "39 a 43",
          "type": "text",
          "required": false
        },
        {
          "name": "q16",
          "label": "44 a 48",
          "type": "text",
          "required": false
        },
        {
          "name": "q17",
          "label": "49 a 53",
          "type": "text",
          "required": false
        },
        {
          "name": "q18",
          "label": "54 a 58",
          "type": "text",
          "required": false
        },
        {
          "name": "q19",
          "label": "Idade dos Idosos acima de 58 anos.",
          "type": "text",
          "required": false
        },
        {
          "name": "q20",
          "label": "Tem Plano de Saúde Atualmente?",
          "type": "radio",
          "required": true,
          "options": [
            "Sim",
            "Não"
          ]
        },
        {
          "name": "q21",
          "label": "Operadora Atual?",
          "type": "text",
          "required": false
        },
        {
          "name": "q22",
          "label": "Nome e Tipo de Plano Atual?",
          "type": "text",
          "required": false
        },
        {
          "name": "q23",
          "label": "Valor Pago Atualmente?",
          "type": "text",
          "required": false
        }
      ]
    }
  },
  {
    "slug": "vida",
    "menuLabel": "Vida",
    "title": "Checklist Vida Flex",
    "description": "Antes de escolher as coberturas, consulte o folheto e os benefícios. Após análise e aprovação, outras informações são pedidas para efetivar a proposta.",
    "href": "/checklist/vida",
    "route": true,
    "files": [
      {
        "label": "Vida Flex",
        "href": "/files/checklist/vida-flex.pdf"
      },
      {
        "label": "Benefícios",
        "href": "/files/checklist/vida-beneficios.pdf"
      },
      {
        "label": "Médico na tela",
        "href": "/files/checklist/vida-medico-na-tela.pdf"
      },
      {
        "label": "Saúde familiar",
        "href": "/files/checklist/vida-saude-familiar.pdf"
      }
    ],
    "form": {
      "title": "CHECKLIST - VIDA INDIVIDUAL",
      "description": "Lembrando que após análise e aprovação, outras informações serão pedidas para efetivarmos a proposta. Você poderá contratar diretamente pelo Link, é só clicar no Menu -> Vida.",
      "fields": [
        {
          "name": "q1",
          "label": "Qual o valor da Cobertura?",
          "type": "select",
          "required": false,
          "options": [
            "R$ 50.000,00",
            "R$ 100.000,00",
            "R$ 150.000,00",
            "R$ 200.000,00",
            "R$ 250.000,00",
            "R$ 300.000,00",
            "R$ 350.000,00",
            "R$ 400.000,00",
            "R$ 450.000,00",
            "R$ 500.000,00",
            "R$ 550.000,00",
            "R$ 600.000,00",
            "R$ 650.000,00",
            "R$ 700.000,00",
            "R$ 750.000,00",
            "R$ 800.000,00",
            "R$ 850.000,00",
            "R$ 900.000,00",
            "R$ 950.000,00",
            "R$ 1.000.000,00",
            "R$ 1.500.000,00",
            "R$ 2.000.000,00",
            "R$ 2.500.000,00",
            "R$ 3.000.000,00",
            "R$ 3.500.000,00",
            "R$ 4.000.000,00",
            "R$ 4.500.000,00",
            "R$ 5.000.000,00",
            "acima R$ 5.000.000,00"
          ]
        },
        {
          "name": "q2",
          "label": "Nome",
          "type": "text",
          "required": false
        },
        {
          "name": "q3",
          "label": "Data de Nascimento",
          "type": "text",
          "required": false
        },
        {
          "name": "q4",
          "label": "Celular ou Fixo",
          "type": "tel",
          "required": true
        },
        {
          "name": "q5",
          "label": "Função ou Ocupação",
          "type": "text",
          "required": true
        },
        {
          "name": "q6",
          "label": "Faixa de Renda",
          "type": "select",
          "required": false,
          "options": [
            "Até R$ 2.500,00",
            "de R$ 2.501,00 até R$ 5.000,00",
            "de R$ 5.001,00 até R$ 7.500,000",
            "de R$ 7.501,00 até R$ 10.000,000",
            "Acima de R$ 10.000,00"
          ]
        },
        {
          "name": "q7",
          "label": "Coberturas Básicas",
          "type": "checkbox",
          "required": true,
          "options": [
            "Morte",
            "Morte Acidental",
            "Invalidez por Acidente",
            "Invalizez por Doença",
            "Funeral Individual",
            "Rede de Saúde Familiar"
          ]
        },
        {
          "name": "q8",
          "label": "Coberturas Complementares",
          "type": "checkbox",
          "required": false,
          "options": [
            "Morte com Extensão ao Cônjuge",
            "Doenças Graves",
            "DIT (Perda de Renda Temporária)",
            "Despesas Médicas e Odontológicas",
            "Adiantamento por Doença Terminal",
            "DIH (Diária por Internação Hospitalar por Doença ou Acidente)",
            "DIH A (Diária por Internação Hospitalar por Acidente)",
            "Diária por Internação Hospitalar por Doença ou Acidente em UTI",
            "Cirurgias",
            "Filhos Póstumos",
            "Funeral Familiar",
            "Funeral Ampliado",
            "Aquisição de Jazigo"
          ]
        },
        {
          "name": "q9",
          "label": "Observações:",
          "type": "textarea",
          "required": false
        }
      ]
    }
  },
  {
    "slug": "transporte",
    "menuLabel": "Transporte",
    "title": "Checklist de transporte embarcador",
    "description": "O preenchimento deste formulário é essencial para obtenção correta dos valores para o cálculo.",
    "href": "/checklist/transporte",
    "route": true,
    "files": [],
    "form": {
      "title": "CHECKLIST - TRANSPORTE EMBARCADOR",
      "description": "Obrigado pelo seu tempo, por favor, preencha o formulário abaixo.",
      "fields": [
        {
          "name": "q1",
          "label": "Razão Social",
          "type": "text",
          "required": false
        },
        {
          "name": "q2",
          "label": "CNPJ",
          "type": "text",
          "required": true
        },
        {
          "name": "q3",
          "label": "Responsável",
          "type": "text",
          "required": false
        },
        {
          "name": "q4",
          "label": "Celular ou Fixo",
          "type": "tel",
          "required": true
        },
        {
          "name": "q5",
          "label": "Email",
          "type": "email",
          "required": true
        },
        {
          "name": "q6",
          "label": "Tipo de Empresa",
          "type": "select",
          "required": false,
          "options": [
            "Atacado",
            "Distribuidora",
            "Fábrica",
            "Indústria",
            "Supermercado",
            "Panificadora",
            "Outros"
          ]
        },
        {
          "name": "q7",
          "label": "Beneficiamento",
          "type": "radio",
          "required": true,
          "options": [
            "Próprio",
            "Terceiros",
            "Próprio e Terceiros",
            "Sem Beneficiamento"
          ]
        },
        {
          "name": "q8",
          "label": "Modalidade",
          "type": "radio",
          "required": true,
          "options": [
            "Terrestre",
            "Marítimo",
            "Aéreo",
            "Todos"
          ]
        },
        {
          "name": "q9",
          "label": "Mercadorias Transportadas",
          "type": "checkbox",
          "required": true,
          "options": [
            "Alimentos",
            "Carnes em Geral",
            "Animais Vivos",
            "Artigos de Papelaria",
            "Artigos Fotográficos",
            "Automotivos",
            "Bebidas",
            "Brinquedos",
            "Calçados",
            "Celulose e Papel",
            "Combustível",
            "Construção",
            "Eletro-Doméstico / Eletro-Eletrônicos",
            "Higiene e Limpeza",
            "Instrumentos Musicais",
            "Máquinas e Equipamentos",
            "Metais Preciosos",
            "Metalurgicos e Siderurgicos",
            "Móveis",
            "Mudança",
            "Outros",
            "Produtos Quimicos",
            "Produtos Esportivos",
            "Produtos Hospitalares",
            "Texteis",
            "Utilidade Doméstica"
          ]
        },
        {
          "name": "q10",
          "label": "Digite abaixo o percentual das mercadorias",
          "type": "textarea",
          "required": false
        },
        {
          "name": "q11",
          "label": "Centro Oeste",
          "type": "checkbox",
          "required": false,
          "options": [
            "GO",
            "MT",
            "MS",
            "DF"
          ]
        },
        {
          "name": "q12",
          "label": "Nordeste",
          "type": "checkbox",
          "required": false,
          "options": [
            "MA",
            "PI",
            "CE",
            "RN",
            "PB",
            "PE",
            "AL",
            "SE",
            "BA"
          ]
        },
        {
          "name": "q13",
          "label": "Norte",
          "type": "checkbox",
          "required": false,
          "options": [
            "AM",
            "PA",
            "AC",
            "RR",
            "RO",
            "AP",
            "TO"
          ]
        },
        {
          "name": "q14",
          "label": "Sudeste",
          "type": "checkbox",
          "required": false,
          "options": [
            "ES",
            "MG",
            "RJ",
            "SP"
          ]
        },
        {
          "name": "q15",
          "label": "Sul",
          "type": "checkbox",
          "required": false,
          "options": [
            "PR",
            "SC",
            "RS"
          ]
        },
        {
          "name": "q16",
          "label": "Quant. Embarques Mensais",
          "type": "number",
          "required": false
        },
        {
          "name": "q17",
          "label": "Valor médio por Embarque",
          "type": "number",
          "required": false
        },
        {
          "name": "q18",
          "label": "Tipo de Logística",
          "type": "radio",
          "required": false,
          "options": [
            "Distribuição",
            "Ponto a Ponto",
            "Distribuição / Ponto a Ponto"
          ]
        },
        {
          "name": "q19",
          "label": "Frota Própria",
          "type": "number",
          "required": false
        },
        {
          "name": "q20",
          "label": "Fretistas Autônomos",
          "type": "number",
          "required": false
        },
        {
          "name": "q21",
          "label": "Frota Agregada",
          "type": "number",
          "required": false
        },
        {
          "name": "q22",
          "label": "Contratou Seguro de Carga nos últimos 12 meses?",
          "type": "radio",
          "required": false,
          "options": [
            "Sim",
            "Não"
          ]
        },
        {
          "name": "q23",
          "label": "Houve algum sinistro nos últimos 12 meses?",
          "type": "radio",
          "required": false,
          "options": [
            "Sim",
            "Não"
          ]
        },
        {
          "name": "q24",
          "label": "Observações",
          "type": "textarea",
          "required": false
        }
      ]
    }
  },
  {
    "slug": "veiculos",
    "menuLabel": "Veículo",
    "title": "Checklist de automóvel",
    "description": "O preenchimento deste formulário é essencial para obtenção correta dos valores para o cálculo.",
    "href": "/checklist/veiculos",
    "route": true,
    "files": [],
    "form": {
      "title": "CHECKLIST AUTOMOVEL",
      "description": "Obrigado pelo seu tempo, por favor, preencha o formulário abaixo.",
      "fields": [
        {
          "name": "q1",
          "label": "Tipo de seguro",
          "type": "select",
          "required": false,
          "options": [
            "Seguro Novo",
            "Renovação Allianz",
            "Renovacão Alirio",
            "Renovação Azul",
            "Renovação BB",
            "Renovação Bradesco",
            "Renovação HDI",
            "Renovação Itaú",
            "Renovação Liberty",
            "Renovação Mapfre",
            "Renovação Porto Seguro",
            "Renovação Santander",
            "Renovação Sompo",
            "Renovação Tokio Marine",
            "Renovação Zurich",
            "Outros"
          ]
        },
        {
          "name": "q2",
          "label": "Vigência (data de renovação)",
          "type": "date",
          "required": false
        },
        {
          "name": "q3",
          "label": "Segurado",
          "type": "text",
          "required": false
        },
        {
          "name": "q4",
          "label": "Principal condutor",
          "type": "text",
          "required": false
        },
        {
          "name": "q5",
          "label": "Celular ou fixo",
          "type": "tel",
          "required": true
        },
        {
          "name": "q6",
          "label": "E-mail",
          "type": "email",
          "required": true
        },
        {
          "name": "q7",
          "label": "Endereço",
          "type": "text",
          "required": false
        },
        {
          "name": "q8",
          "label": "Garagem na residência",
          "type": "radio",
          "required": false,
          "options": [
            "Sim, com portão eletrônico",
            "Sim, sem portão eletrônico",
            "Não"
          ]
        },
        {
          "name": "q9",
          "label": "Garagem no trabalho",
          "type": "radio",
          "required": false,
          "options": [
            "Sim",
            "Não",
            "Não utiliza para trabalhar",
            "Não trabalha"
          ]
        },
        {
          "name": "q10",
          "label": "Garagem no Estudo/Curso",
          "type": "radio",
          "required": false,
          "options": [
            "Sim",
            "Não",
            "Não estuda",
            "Não utiliza para estudar"
          ]
        },
        {
          "name": "q11",
          "label": "Tipo do veículo",
          "type": "radio",
          "required": false,
          "options": [
            "Carro",
            "Moto",
            "Caminhão"
          ]
        },
        {
          "name": "q12",
          "label": "Uso do veículo",
          "type": "radio",
          "required": false,
          "options": [
            "Particular",
            "Comercial",
            "Prestação de Serviços",
            "Taxi",
            "Transporte de Carga",
            "Uber",
            "Visitar Clientes e Fornecedores"
          ]
        },
        {
          "name": "q13",
          "label": "Tipo de franquia",
          "type": "radio",
          "required": false,
          "options": [
            "Normal",
            "Reduzida"
          ]
        },
        {
          "name": "q14",
          "label": "Valor de cobertura para terceiros",
          "type": "radio",
          "required": false,
          "options": [
            "50 mil",
            "100 mil",
            "150 mil",
            "200 mil",
            "acima de 200 mil"
          ]
        },
        {
          "name": "q15",
          "label": "Assistência 24h/Reboque",
          "type": "radio",
          "required": false,
          "options": [
            "Até 100 km",
            "Até 200 km",
            "Até 400 km",
            "Sem limites"
          ]
        },
        {
          "name": "q16",
          "label": "Carro reserva",
          "type": "radio",
          "required": false,
          "options": [
            "7 dias",
            "15 dias",
            "30 dias",
            "Sem carro reserva"
          ]
        },
        {
          "name": "q17",
          "label": "Coberturas adicionais",
          "type": "checkbox",
          "required": false,
          "options": [
            "Martelinho de ouro",
            "Reparo de arranhões",
            "Reparo de para-choque",
            "Danos morais",
            "APP morte",
            "APP invalidez Choice",
            "Não desejo contratar"
          ]
        },
        {
          "name": "q18",
          "label": "Tipo de pagamento",
          "type": "radio",
          "required": false,
          "options": [
            "Boleto",
            "Débito até 6x sem juros",
            "Débito até 10x sem juros",
            "Cartão 10x sem juros"
          ]
        },
        {
          "name": "q19",
          "label": "Anexos - PDF ou Foto",
          "type": "text",
          "required": false
        }
      ]
    }
  }
];

export const checklistRoutes = checklistCatalog.filter((item) => item.route);

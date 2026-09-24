import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/amil", destination: "/saude/amil", permanent: true },
      { source: "/bradesco", destination: "/saude/bradesco", permanent: true },
      {
        source: "/sulamerica",
        destination: "/saude/sulamerica",
        permanent: true,
      },
      {
        source: "/tabelas-consorcio",
        destination: "/consorcio/tabelas",
        permanent: true,
      },
      {
        source: "/duvidas-consorcio",
        destination: "/consorcio/duvidas",
        permanent: true,
      },
      {
        source: "/checklist-consorcio",
        destination: "/checklist/consorcio",
        permanent: true,
      },
      {
        source: "/checklist-saude",
        destination: "/checklist/saude",
        permanent: true,
      },
      {
        source: "/checklist-veiculos",
        destination: "/checklist/veiculos",
        permanent: true,
      },
      {
        source: "/checklist-residencial",
        destination: "/checklist/residencial",
        permanent: true,
      },
      {
        source: "/checklist-empresarial",
        destination: "/checklist/empresarial",
        permanent: true,
      },
      {
        source: "/checklist-rcg",
        destination: "/checklist/rcg",
        permanent: true,
      },
      {
        source: "/checklist-transporte",
        destination: "/checklist/transporte",
        permanent: true,
      },
      {
        source: "/checklist-placasolar",
        destination: "/checklist/placa-solar",
        permanent: true,
      },
      {
        source: "/checklist-depositorecursal",
        destination: "/checklist/deposito-recursal",
        permanent: true,
      },
      {
        source: "/garantia-judicial",
        destination: "/checklist/garantia-judicial",
        permanent: true,
      },
      { source: "/cadastro", destination: "/contato", permanent: false },
      { source: "/vidaflex", destination: "/vida", permanent: false },
    ];
  },
};

export default nextConfig;

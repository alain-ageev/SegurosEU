# E DIAS Corretora de Seguros — site marketing

Site da **E DIAS Corretora de Seguros** (Recife): homepage de conversão B2B na raiz (`/`), com paleta do Manual da Marca (`#052e44` + `#b6a571`) e tipografia Lato na UI principal.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em [http://127.0.0.1:43127](http://127.0.0.1:43127) (porta configurada no script `dev`).

```bash
npm run build
npm run start   # produção local (porta 43127)
npm run lint
```

## Páginas principais

- `/` — Home de conversão (diagnóstico, soluções, cases, formulário)
- `/v2` — redireciona para `/` (compatibilidade com links antigos)
- `/consorcio`, `/consorcio/tabelas`, `/consorcio/duvidas`
- `/vida`, `/viagem`
- `/saude` e `/saude/[brand]` (sulamerica, bradesco, amil)
- Odonto — link externo SulAmérica (`sulamericaodonto.com.br/?corretora=emmanueldias`) no menu
- `/checklist` e `/checklist/[slug]`
- `/contato`
- SEO: `sitemap.xml`, `robots.txt`, metadados OG, JSON-LD, página 404

Redirects permanentes cobrem URLs antigas do site Wix (`/amil`, `/tabelas-consorcio`, `/checklist-saude`, etc.).

## Marca

Ver `design.md` e `docs/Manual_da_Marca_E_Dias.pdf`.

- Azul `#052E44`
- Ouro `#B6A571`
- Tipografia: Lato (home) · Cinzel / Source Sans 3 / Abhaya Libre (páginas de produto)
- Pattern do escudo ED em superfícies escuras

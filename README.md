# Edias Consultoria — site marketing

Site moderno da **Edias Consultoria** (corretora/consultoria de seguros em Recife), reconstruído em Next.js a partir da IA do site atual e da linguagem visual da marca (azul + ouro, Raleway + Open Sans).

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

Outros comandos:

```bash
npm run build
npm run start   # produção local (também na porta 43127)
npm run lint
```

## Páginas principais

- `/` — Home
- `/consorcio`, `/consorcio/tabelas`, `/consorcio/duvidas`
- `/vida`, `/viagem`
- `/saude` e `/saude/[brand]` (sulamerica, bradesco, amil)
- `/checklist` e `/checklist/[slug]`
- `/contato`
- SEO: `sitemap.xml`, `robots.txt`, metadados OG, JSON-LD, página 404

Redirects permanentes cobrem URLs antigas do site Wix (`/amil`, `/checklist-saude`, etc.).

## Marca

- Azul `#00305B` / `#052E44`
- Ouro `#B6A571`
- Tipografia: Raleway (títulos) + Open Sans (corpo)

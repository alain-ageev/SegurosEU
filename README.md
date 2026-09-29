# E DIAS Corretora de Seguros — site marketing

Site da **E DIAS Corretora de Seguros** (Recife), alinhado ao Manual da Marca: azul `#052e44`, dourado `#b6a571`, tipografia Cinzel + Source Sans 3 (alternativa à Corbel) + Abhaya Libre.

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

- `/` — Home
- `/consorcio`, `/consorcio/tabelas`, `/consorcio/duvidas`
- `/vida`, `/viagem`
- `/saude` e `/saude/[brand]` (sulamerica, bradesco, amil)
- `/checklist` e `/checklist/[slug]`
- `/contato`
- SEO: `sitemap.xml`, `robots.txt`, metadados OG, JSON-LD, página 404

Redirects permanentes cobrem URLs antigas do site Wix (`/amil`, `/checklist-saude`, etc.).

## Marca

Ver `design.md` e `docs/Manual_da_Marca_E_Dias.pdf`.

- Azul `#052E44`
- Ouro `#B6A571`
- Tipografia: Cinzel (títulos) · Source Sans 3 (UI) · Abhaya Libre (descrições)
- Pattern do escudo ED em superfícies escuras

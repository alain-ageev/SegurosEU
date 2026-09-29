# Gestão de informações e arquivos — dá para começar sem sistema próprio?

**Resposta curta:** sim, para um MVP operacional. Não, se a meta for segurança jurídica, histórico auditável, multi-usuário e automações críticas (ex.: vencimento de extintores com prova de envio) em escala.

## O que o Emmanuel pediu

1. Checklists → relatório formatado (para E DIAS e para o cliente)
2. Armazenar documentos por cliente
3. Avisos automáticos (ex.: 30 dias antes do vencimento)
4. Preferência por WhatsApp, sem perder informação

## O que é possível **sem** backend customizado

| Necessidade | Caminho sem sistema próprio | Limite |
|-------------|----------------------------|--------|
| Formulário → e-mail organizado | Google Forms / Tally / Typeform + e-mail nativo ou Zapier/Make | Layout do relatório limitado; pouco controle visual |
| Relatório “bonito” em PDF | Google Forms → Sheets → **Apps Script** gera PDF e envia | Exige manutenção do script; não é “zero código” |
| Planilha + arquivos por cliente | Google Drive pastas por CNPJ + Sheets | Organização manual; permissões frágeis |
| Lembrete 30 dias | Sheets + Apps Script / Airtable + automação / Zapier | Depende do “relógio” do serviço; falhas se alguém editar a planilha |
| Cópia no WhatsApp | Zapier/Make manda resumo após submit | **Não use WhatsApp como arquivo mestre** — risco de perda e LGPD |
| Histórico simples | Airtable ou Notion database | Bom até dezenas/centenas de clientes; depois aperta |

### Stack recomendada para a fase “casca do site + operação”

1. **Site** (já em Next) com CTA e checklists públicos.
2. **Captura:** Tally ou Google Forms (ou Route Handler + Resend no Next, ainda sem “sistema”).
3. **Dados:** Google Sheets ou Airtable.
4. **Arquivos:** Google Drive (pastas por cliente/CNPJ).
5. **Automação leve:** Zapier/Make ou Apps Script (e-mail + lembrete).
6. **WhatsApp:** só notificação/resumo; arquivo oficial fica no Drive/e-mail.

Isso atende o acordo da reunião: **site primeiro**, operação com ferramentas de mercado, sistema customizado depois.

## O que **não** substitui um sistema

- Controle de acesso por perfil (corretor / cliente / admin)
- Trilha de auditoria (quem enviou, quando, qual versão do documento)
- LGPD com base legal, retenção e exclusão sob demanda
- Relatórios padronizados em volume (muitos checklists/dia)
- Integração estável com WhatsApp Business API + garantia de entrega
- Backup, SLA e responsabilidade clara sobre documentos oficiais

Armazenar CNPJ, laudos e validades de extintores em Drive/Sheets **é aceitável para início**, desde que:
- acesso restrito à equipe;
- política mínima de privacidade no site;
- alguém responsável pela pasta e pelas automações.

## Recomendação prática

| Fase | Escopo | Ferramenta |
|------|--------|------------|
| Agora | Site + lead + checklists | Next.js + form → e-mail/WhatsApp resumo |
| 30–60 dias | Relatório formatado + pasta por cliente | Forms/Tally + Sheets/Airtable + Drive + Apps Script/Zapier |
| Depois | Login, documentos, alertas críticos, multi-cliente | Sistema próprio (ou vertical SaaS de corretoras) com responsável de segurança |

## Decisão sugerida para o time

- **Sim:** operar gestão básica **sem** sistema próprio, com Google/Airtable/Zapier.
- **Não:** prometer ao cliente corporativo (ex.: Tramontina) um portal de documentos e alertas com garantia jurídica só com Wix/WhatsApp.
- Manter o site como porta de entrada; não bloquear o go-live do site pelo sistema.

# Reminder App: "Guarde agora. Lembre-se depois."

A reminder application being built as part of Hack Club Terra.

**Autor:** Felton Da Silva Joaquim Estevão

---

## Visão do Produto
O produto não é simplesmente mais uma aplicação de tarefas ou bloco de notas. É uma **"caixa de entrada para tudo o que vais fazer depois"**. Resolve o problema de abandono ("vou fazer depois e nunca faço") transformando a intenção de adiar numa ação concreta de lembrete, com a mínima fricção possível.

**Posicionamento:** "Não confie na memória. Partilhe e lembre-se depois."

## O Problema
1. As pessoas veem conteúdos (posts no Facebook/Instagram, links, fotos, mensagens no WhatsApp) que exigem uma ação, mas não podem ou não querem executá-la no momento.
2. A intenção de "vou fazer depois" raramente se converte em ação sem um gatilho.
3. Criar uma tarefa nas aplicações atuais (Todoist, Keep, To Do) exige demasiados passos: copiar, abrir a app, criar tarefa, colar, preencher título/descrição, escolher data, guardar.

## A Solução (O Diferencial)
O fluxo deve ser extremamente rápido e quase automático:
**Qualquer coisa → Partilhar → IA entende → Escolhe lembrete → Acabou.**

## Concorrentes e Lacunas
- **Todoist / TickTick / Microsoft To Do:** Focados na gestão complexa de tarefas. Criam fricção com excesso de opções (projetos, tags, prioridades).
- **Google Keep / Raindrop.io:** Excelentes para "guardar/arquivar", mas não orientados para "ação futura/execução".
- **Cue:** O mais próximo da visão, provando que o problema e a necessidade existem.
- **As Reclamações Comuns:** Demasiados passos, lembretes não fiáveis, sincronização falha, perda do contexto original e preços altos.

## Prioridades do MVP (As 5 Regras de Ouro)

### P1 — Partilha Universal
Aceitar links, fotografias, screenshots e texto através do menu nativo de partilha (especialmente desenhado para mobile/Android).

### P2 — Captura em Segundos (Máximo 2-3 toques)
Extrair o título e o link automaticamente. Permitir guardar sem obrigar o utilizador a preencher título, categoria ou descrição. O formulário manual deve ser evitado a todo o custo.

### P3 — Lembretes Fiáveis e Rápidos
Oferecer opções instantâneas: "Hoje", "Amanhã", "Daqui a 30 min". Não prometer notificações se o sistema operativo bloquear.

### P4 — Preservar o Contexto
Cada lembrete deve permitir abrir imediatamente o link, ver a imagem ou recuperar o texto original. O lembrete não é "ver isto", é a própria porta de entrada para a ação.

### P5 — Inteligência (IA)
Usar inteligência artificial para detetar o contexto do conteúdo, extrair datas/prazos automaticamente e notificar o utilizador sobre o que deve fazer, sem que ele tenha de digitar nada.

## Arquitetura da Interface (MVP)

A tela principal não deve focar em "Criar Tarefa", mas sim em "Guardar para depois" e mostrar o que está pendente de forma limpa.

```text
┌──────────────────────────┐
│  🔔 Recordar             │
│                          │
│  + Guardar para depois   │
│                          │
│  ─────────────────────   │
│                          │
│  🔴 Hoje                 │
│  Candidatura AEM         │
│                          │
│  🟡 Amanhã               │
│  Comprar cabo USB        │
│                          │
│  🟢 Esta semana          │
│  Workshop Python         │
└──────────────────────────┘
```

## Status e Próximos Passos
- [x] Project setup and planning phase
- [ ] Criar a interface da Inbox (index.html, style.css)
- [ ] Criar a interface rápida de partilha/receção de dados
- [ ] Validar com utilizadores reais (Moçambique)]
  { }

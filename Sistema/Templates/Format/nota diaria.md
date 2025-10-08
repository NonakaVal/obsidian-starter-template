---
tags:
  - calendar/daily
created: <% tp.file.creation_date() %>
---

# Lembretes

# Notas Criadas Hoje

`````tabs

tab: Resumo Notas criadas
```dataview
TABLE WITHOUT ID file.link AS Nota, file.ctime as Criada
FROM "Atlas" OR "+" OR "Esforços"
WHERE contains(file.outlinks, [[<% tp.date.now("YYYY-MM-DD") %>]])
SORT file.name DESC

```

tab: Tarefas
![[% TODAS TAREFAS]]




`````



# Ações rápidas


![[quick-actions]]
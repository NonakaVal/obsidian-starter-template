---
tags:
  - calendar/daily
created: <% tp.file.creation_date() %>
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---
# Notas Criadas Hoje

`````tabs

tab: Resumo Notas criadas
```dataview
TABLE file.link AS Note, file.outlinks AS Outlinks
FROM "ATLAS" OR "+" OR "EFFORTS"
WHERE contains(file.outlinks, [[<% tp.date.now("YYYY-MM-DD") %>]])
SORT file.name DESC

```

tab: Tarefas
![[% TODAS TAREFAS]]




`````

# Ações rápidas


![[BARRA DE AÇÕES]]
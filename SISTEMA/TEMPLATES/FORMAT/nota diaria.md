---
tags:
  - calendar/daily
created: <% tp.file.creation_date() %>
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---

# Lembretes

# Notas Criadas Hoje

`````tabs

tab: Resumo Notas criadas
```dataview
TABLE WITHOUT ID file.link AS Nota, file.ctime as Criada
FROM "ATLAS" OR "+" OR "ESFORÇOS"
WHERE contains(file.outlinks, [[<% tp.date.now("YYYY-MM-DD") %>]])
SORT file.name DESC

```

tab: Tarefas
![[% TODAS TAREFAS]]




`````



# Ações rápidas


![[BARRA DE AÇÕES]]
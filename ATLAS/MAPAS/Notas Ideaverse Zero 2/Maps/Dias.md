---
up:
  - "[[Calendário]]"
collection:
  - "[[Mapas]]"
  - "[[Visualizações]]"
related: 
created: 2025-04-07 19:27
---
> [!calendar] **[[Dias]]** | [[Registros]] | [[Avaliações]] 

Mostrando as notas diárias mais recentes, com base na forma como são nomeadas.

```dataview
TABLE WITHOUT ID
file.link as Nota, created as Criada
FROM "CALENDAR/DAILY"
sort file.name desc
```
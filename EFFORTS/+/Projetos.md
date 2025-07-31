---
up:
  - "[[Home Pro]]"
collection:
  - "[[Projetos|Projetos]]"
created:
  - 2023-08-19
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---
~ [[Efforts]]

# [[Projetos]]

> [!mountain] [[Areas]] | [[Projetos]] 

Estes são os projetos ativos que têm mais da sua atenção. Mantenha entre 3 e 11. Priorize pela classificação.
``` dataview
TABLE WITHOUT ID
file.link as Nota, project as Projeto,resumo as Resumo, status as Status, created as Criado

FROM "EFFORTS/PROJECTS" 
where type != "project_note"
where type = "project"
sort created DESC

LIMIT 33
```


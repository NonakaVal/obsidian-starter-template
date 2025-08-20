---
up: "[[SISTEMA/COLEÇÕES/SAUDE.md|SAUDE]]"
area: "[[saúde]]"
tags: area/saúde
type: area_family
created: "[[2025-08-20]]"
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
collection: "[[SISTEMA/COLEÇÕES/TRABALHO.md|TRABALHO]]"
related:
  - "[[ATLAS/FONTES/AULAS/aula 1.md|aula 1]]"
---
| `Up` | `INPUT[suggester(optionQuery("")):up]`    | `Coleção` | `INPUT[suggester(optionQuery("SISTEMA/COLEÇÕES")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[saúde]] 


---

| `BUTTON[TEMPLATE-CRIAR-NOVA-AREA]` |

```meta-bind-button
label: Criar Nota da Area
icon: plus
hidden: true
class: ""
id: TEMPLATE-CRIAR-NOVA-AREA
style: primary
actions:
  - type: command
    command: quickadd:choice:33b02e5d-cbf0-4df9-b622-4648b3cfe405
```

#  Notas

```dataview
table created AS "Created", resumo AS "Resumo"
from "ESFORÇOS/AREAS/saúde"
where type != "area"
where type = "area_note"
where type != "area_note_sub"
sort created DESC
```



# Tasks  
````tabs
tab: Em Aberto

```dataview
TASK
FROM "ESFORÇOS/AREAS/saúde"
WHERE !completed AND !checked
GROUP BY file.name

```

tab: Concluídas 
```dataview
TASK
FROM "ESFORÇOS/AREAS/saúde"
WHERE completed AND checked
GROUP BY file.name

```


````




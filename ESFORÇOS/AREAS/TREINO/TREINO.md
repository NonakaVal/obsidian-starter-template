---
up:
  - "[[Efforts]]"
area: "[[TREINO]]"
tags: area/treino
type: area_family
created: "[[2025-09-04]]"
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
collection: "[[SISTEMA/COLEÇÕES/SAUDE.md|SAUDE]]"
---
| `Up` | `INPUT[suggester(optionQuery("")):up]`    | `Coleção` | `INPUT[suggester(optionQuery("SISTEMA/COLEÇÕES")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[TREINO]] 


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
from "ESFORÇOS/AREAS/TREINO"
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
FROM "ESFORÇOS/AREAS/TREINO"
WHERE !completed AND !checked
GROUP BY file.name

```

tab: Concluídas 
```dataview
TASK
FROM "ESFORÇOS/AREAS/TREINO"
WHERE completed AND checked
GROUP BY file.name

```


````




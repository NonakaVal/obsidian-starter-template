---
up:
  - "[[Efforts]]"
  - "[[../../../ESFORÇOS/1_AREAS|1_AREAS]]"
area: "[[Saúde]]"
tags: area/saúde
type: area_family
created: "[[2025-09-12]]"
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
collection: "[[SISTEMA/COLEÇÕES/Saúde.md|Saúde]]"
---
 `Coleção` | `INPUT[suggester(optionQuery("SISTEMA/COLEÇÕES")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[Saúde]] 


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
from "ESFORÇOS/AREAS/Saúde"
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
FROM "ESFORÇOS/AREAS/Saúde"
WHERE !completed AND !checked
GROUP BY file.name

```

tab: Concluídas 
```dataview
TASK
FROM "ESFORÇOS/AREAS/Saúde"
WHERE completed AND checked
GROUP BY file.name

```


````




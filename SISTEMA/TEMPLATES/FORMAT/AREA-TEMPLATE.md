---
up:
  - "[[Efforts]]"
area: "[[ESFORÇOS]]"
tags: 
type: area_family
created: '[[2025-08-16]]'
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---
| `Coleção` | `INPUT[suggester(optionQuery("")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery("ATLAS"), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[ESFORÇOS]] 


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
from "ESFORÇOS/AREAS/ESFORÇOS"
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
FROM "ESFORÇOS"
WHERE !completed AND !checked
GROUP BY file.name

```

tab: Concluídas 
```dataview
TASK
FROM "ESFORÇOS"
WHERE completed AND checked
GROUP BY file.name

```


````




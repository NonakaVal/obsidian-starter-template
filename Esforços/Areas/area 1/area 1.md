---
up:
  - "[[Efforts]]"
  - "[[1_AREAS|1_AREAS]]"
area: "[[Area 1]]"
tags: area/area_1
type: area_family
created: "[[2025-10-09]]"
---
 `Coleção` | `INPUT[suggester(optionQuery("Sistema/Coleções")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---

`BUTTON[TEMPLATE-CRIAR-NOVA-AREA]` 

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
from "Esforços/AREAS/Area 1"
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
FROM "Esforços/Areas/Area 1"
WHERE !completed AND !checked
GROUP BY file.name

```

tab: Concluídas 
```dataview
TASK
FROM "Esforços/Areas/Area 1"
WHERE completed AND checked
GROUP BY file.name

```


````




---
up:
  - "[[Efforts]]"
area: "[[saude]]"
tags: area/saude
type: area_family
created: "[[2025-07-30]]"
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---

~ [[Efforts]] 

| `Coleção` | `INPUT[suggester(optionQuery("")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery("ATLAS"), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[saude]] 


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
from "EFFORTS/AREAS/saude"
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
FROM "EFFORTS/AREAS/saude"
WHERE !completed AND !checked
GROUP BY file.name

```

tab: Concluídas 
```dataview
TASK
FROM "EFFORTS/AREAS/saude"
WHERE completed AND checked
GROUP BY file.name

```


````




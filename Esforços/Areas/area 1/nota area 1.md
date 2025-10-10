---
area: "[[Area 1]]"
resumo:
tags: area/area_1/nota_area_1
type: area_note
created:
  - "[[2025-10-09]]"
up:
  - "[[1_AREAS|1_AREAS]]"
---
~ [[Area 1]] 

| `Coleção` | `INPUT[suggester(optionQuery("Sistema/Coleções")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---


 `BUTTON[NOTA-AREA-TEMPLATE]`     

```meta-bind-button
label: Adicionar Task
hidden: true
icon: plus
class: ""
id: NOTA-AREA-TEMPLATE
style: primary
actions:
  - type: command
    command: quickadd:choice:ae846d91-78c4-4e44-8b5d-f1f5075abb88
```


## Tarefas

- [ ] task 1
- [x] task 2
- [x] task 3

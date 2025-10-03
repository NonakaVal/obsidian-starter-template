---
project: "[[projeto 1]]"
resumo:
tags: project/projeto_1/nota_projeto_1
type: project_note
cssclasses:
  - hide-properties_reading
  - hide-properties_editing
created:
  - "[[2025-10-03]]"
up:
  - "[[2_PROJETOS|2_PROJETOS]]"
collection: "[[SISTEMA/COLEÇÕES/projetos.md|projetos]]"
related:
  - "[[Esforços/Areas/Area 1/Area 1.md|Area 1]]"
---

~ [[projeto 1]] 

| `Coleção` | `INPUT[suggester(optionQuery("Sistema/Coleções")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[nota projeto 1]] 

---

# Definir Resumo 
`INPUT[textArea(showcase, class(meta-bind-full-width), class(meta-bind-high)):resumo]`



# TAREFAS E PROCESSOS


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







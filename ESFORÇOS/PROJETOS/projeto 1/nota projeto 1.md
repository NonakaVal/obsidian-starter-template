---
project: "[[projeto 1]]"
resumo: "mapear requisitos para início "
tags: project/projeto_1/nota_projeto_1
type: project_note
cssclasses:
  - hide-properties_reading
  - hide-properties_editing
created:
  - "[[2025-09-04]]"
up:
  - "[[../../../ESFORÇOS/2_PROJETOS|2_PROJETOS]]"
collection: "[[SISTEMA/COLEÇÕES/Trabalho.md|Trabalho]]"
related:
  - "[[ESFORÇOS/PROJETOS/projeto 1/projeto 1.md|projeto 1]]"
---
~ [[projeto 1]] 

| `Coleção` | `INPUT[suggester(optionQuery("SISTEMA/COLEÇÕES")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

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
    command: quickadd:choice:a2caccb1-1160-4573-b24c-d01e9d892505
```




## Tarefas
- [ ] task 1







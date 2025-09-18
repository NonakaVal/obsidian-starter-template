---
project: "[[projeto 1]]"
resumo: resumo das reuniões
tags: project/projeto_1/resumo_reunião
type: project_note
cssclasses:
  - hide-properties_reading
  - hide-properties_editing
created:
  - "[[2025-09-18]]"
up:
  - "[[../../../ESFORÇOS/2_PROJETOS|2_PROJETOS]]"
collection: "[[SISTEMA/COLEÇÕES/Trabalho.md|Trabalho]]"
---
~ [[projeto 1]] 

| `Coleção` | `INPUT[suggester(optionQuery("SISTEMA/COLEÇÕES")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[Resumo reunião]] 
---

# Definir Resumo 
`INPUT[textArea(showcase, class(meta-bind-full-width), class(meta-bind-high)):resumo]`

# Informações adicionais e recursos




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




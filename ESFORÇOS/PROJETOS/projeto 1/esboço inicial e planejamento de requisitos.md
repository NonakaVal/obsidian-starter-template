---
project: "[[projeto 1]]"
resumo: documentos processos necessarios
tags: project/projeto_1/esboço_inicial_e_planejamento_de_requisitos
type: project_note
cssclasses:
  - hide-properties_reading
  - hide-properties_editing
created:
  - "[[2025-09-17]]"
up:
  - "[[../../../ESFORÇOS/2_PROJETOS|2_PROJETOS]]"
collection: "[[SISTEMA/COLEÇÕES/Trabalho .md|Trabalho ]]"
---
~ [[projeto 1]] 

| `Coleção` | `INPUT[suggester(optionQuery("SISTEMA/COLEÇÕES")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[esboço inicial e planejamento de requisitos]] 
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






- [ ] tarefa 1

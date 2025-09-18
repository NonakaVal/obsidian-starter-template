---
area: "[[Saúde]]"
resumo: Definições das metas de treino
tags: area/saúde/acompanhamento_e_metas_de_treino
type: area_note
cssclasses:
  - hide-properties_reading
  - hide-properties_editing
created:
  - "[[2025-09-18]]"
up:
  - "[[../../../ESFORÇOS/1_AREAS|1_AREAS]]"
collection: "[[SISTEMA/COLEÇÕES/Desenvolvimento pessoal.md|Desenvolvimento pessoal]]"
---
~ [[Saúde]] 

| `Coleção` | `INPUT[suggester(optionQuery("SISTEMA/COLEÇÕES")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[Acompanhamento e metas de treino]] 


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


---


- [ ] Treino inicial 3 vezes por semana durante 2 meses

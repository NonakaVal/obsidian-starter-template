---
area: "[[Saúde]]"
resumo: Nota para Definir metas de treino semanais
tags: area/saúde/metas_de_treino
type: area_note
cssclasses:
  - hide-properties_reading
  - hide-properties_editing
created:
  - "[[2025-09-04]]"
up:
  - "[[../../../ESFORÇOS/1_AREAS|1_AREAS]]"
collection: "[[SISTEMA/COLEÇÕES/Saúde.md|Saúde]]"
related:
  - "[[ESFORÇOS/AREAS/Saúde/Saúde.md|Saúde]]"
---
~ [[Saúde]] 

| `Coleção` | `INPUT[suggester(optionQuery("SISTEMA/COLEÇÕES")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[metas de treino]] 


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


---
- [ ] treinar 4 dias por semana por 3 meses







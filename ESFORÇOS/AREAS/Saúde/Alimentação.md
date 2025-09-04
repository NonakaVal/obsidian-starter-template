---
area: "[[Saúde]]"
resumo: Receitas e ideias para emagreçer
tags: area/saúde/alimentação
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
  - "[[ESFORÇOS/AREAS/Saúde/metas de treino.md|metas de treino]]"
---
~ [[Saúde]] 

| `Coleção` | `INPUT[suggester(optionQuery("SISTEMA/COLEÇÕES")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[Alimentação]] 


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
- [x] atualizar notas de receitas 
- [x] definir formas de controlar calorias
- [ ] cortar doces pela metade







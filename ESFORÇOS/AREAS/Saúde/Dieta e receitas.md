---
area: "[[Saúde]]"
resumo: Listas de receitas e métricas de calorias
tags: area/saúde/dieta_e_receitas
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
# [[Dieta e receitas]] 


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






- [x] Aprender 10 notas receitas saudáveis
- [ ] Diminuir fastfood 3 semanas

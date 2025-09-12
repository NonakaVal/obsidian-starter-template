---
project: "[[Projeto 1]]"
resumo: |
  Pesquisa inicial
tags: project/projeto_1/análise_swot
type: project_note
cssclasses:
  - hide-properties_reading
  - hide-properties_editing
created:
  - "[[2025-09-12]]"
up:
  - "[[../../../ESFORÇOS/2_PROJETOS|2_PROJETOS]]"
collection: "[[SISTEMA/COLEÇÕES/Trabalho.md|Trabalho]]"
related:
  - "[[ESFORÇOS/PROJETOS/Projeto 1/Projeto 1.md|Projeto 1]]"
---
~ [[Projeto 1]] 

| `Coleção` | `INPUT[suggester(optionQuery("SISTEMA/COLEÇÕES")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[Análise SWOT]] 
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
- [x] Definir Forças
- [x] Fraquezas
- [ ] Oportunidades
- [ ] Ameaças







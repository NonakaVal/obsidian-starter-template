---
area: "[[saude]]"
resumo: construção de habitos
tags: area/saude/habitos_
type: area_note
"created:": "[[2025-07-30]]"
cssclasses:
  - hide-properties_reading
  - hide-properties_editing
---

~ [[saude]] 

| `Coleção` | `INPUT[suggester(optionQuery("")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery("ATLAS"), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[habitos ]] 


# Definir Resumo 
`INPUT[textArea(showcase, class(meta-bind-full-width), class(meta-bind-high)):resumo]`


# TAREFAS E PROCESSOS

---
 `BUTTON[tasks-button]`     

```meta-bind-button
label: Adicionar ou Editar Tarefa 
hidden: true
icon: plus
class: ""
id: tasks-button
style: destructive
actions:
  - type: command
    command: obsidian-tasks-plugin:edit-task
```


- [ ] meditar mais






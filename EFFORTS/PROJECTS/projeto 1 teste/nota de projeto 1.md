---
project: "[[projeto 1 teste]]"
resumo: nota d
tags: project/projeto_1_teste/nota_de_projeto_1
type: project_note
"created:": "[[2025-07-30]]"
cssclasses:
  - hide-properties_reading
  - hide-properties_editing
---
~ [[projeto 1 teste]] 

| `Coleção` | `INPUT[suggester(optionQuery("")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery("ATLAS"), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[nota de projeto 1]] 
---

# Definir Resumo 
`INPUT[textArea(showcase, class(meta-bind-full-width), class(meta-bind-high)):resumo]`



# TAREFAS E PROCESSOS

---
 `BUTTON[tasks-button]`     
 - [ ] task 4
- [ ] task 3
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

- [ ] task 2








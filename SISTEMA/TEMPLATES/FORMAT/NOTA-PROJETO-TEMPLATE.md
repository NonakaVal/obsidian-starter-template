---
project: "[[FORMAT]]"
resumo: 
tags: 
type: project_note
cssclasses:
  - hide-properties_reading
  - hide-properties_editing
created:
  - '[[2025-08-16]]'
---
~ [[FORMAT]] 

| `Coleção` | `INPUT[suggester(optionQuery("")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery("ATLAS"), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[% MAPA DATAVIEW DE ATLAS]] 
---

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

<% tp.file.cursor() %>









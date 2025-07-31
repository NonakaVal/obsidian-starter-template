---
project: "[[<% tp.file.folder() %>]]"
resumo: 
tags: 
type: project_note
"created:": '[[<% tp.date.now("YYYY-MM-DD") %>]]'
cssclasses:
  - hide-properties_reading
  - hide-properties_editing
---
~ [[<%tp.file.folder() %>]] 

| `Coleção` | `INPUT[suggester(optionQuery("")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery("ATLAS"), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[<% tp.file.title %>]] 
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

<%tp.file.cursor()%>








<%* tp.hooks.on_all_templates_executed(async () => { const file = tp.file.find_tfile(tp.file.path(true)); const value1 = tp.file.folder().split(" ").map(word => word.toLowerCase()).join("_"); const value2 = tp.file.title.split(" ").map(word => word.toLowerCase()).join("_"); await app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["tags"] = `project/${value1}/${value2}`; }); }); -%>
---
project: "[[<% tp.file.folder() %>]]"
resumo:
tags:
type: project_note
cssclasses:
  - hide-properties_reading
  - hide-properties_editing
created:
  - '[[<% tp.date.now("YYYY-MM-DD") %>]]'
up:
  - "[[../../../ESFORÇOS/2_PROJETOS|2_PROJETOS]]"
---

~ [[<%tp.file.folder() %>]] 

| `Coleção` | `INPUT[suggester(optionQuery("SISTEMA/COLEÇÕES")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[<% tp.file.title %>]] 

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


<%tp.file.cursor()%>

## Tarefas






<%* tp.hooks.on_all_templates_executed(async () => { const file = tp.file.find_tfile(tp.file.path(true)); const value1 = tp.file.folder().split(" ").map(word => word.toLowerCase()).join("_"); const value2 = tp.file.title.split(" ").map(word => word.toLowerCase()).join("_"); await app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["tags"] = `project/${value1}/${value2}`; }); }); -%>
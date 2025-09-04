---
project: "[[<% tp.file.folder() %>]]"
tags:
type: project
cssclasses:
  - hide-properties_reading
  - hide-properties_editing
created:
  - '[[<% tp.date.now("YYYY-MM-DD") %>]]'
up: "[[../../../ESFORÇOS/2_PROJETOS|2_PROJETOS]]"
---
 `Coleção` | `INPUT[suggester(optionQuery("SISTEMA/COLEÇÕES")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[<%tp.file.folder() %>]] 



|Data Início|Data Entrega|Status|
| --- | --- |---|
| `INPUT[datePicker(showcase, defaultValue(null)):inicio]`| `INPUT[datePicker(showcase, defaultValue(null)):entrega]` |`INPUT[inlineSelect(option('Em andamento'), option('Finalizada'), option('Arquivado'), option('Aguardando')):status]` |

---

# Definir Resumo 
`INPUT[textArea(showcase, class(meta-bind-full-width), class(meta-bind-high)):resumo]`


 `BUTTON[TEMPLATE-CRIAR-NOVA-NOTA-PROJETO]`

```meta-bind-button
label: Criar Nota de Projeto
icon: plus
hidden: true
class: ""
id: TEMPLATE-CRIAR-NOVA-NOTA-PROJETO
style: default
actions:
  - type: command
    command: quickadd:choice:708c308e-d5d0-491d-8e27-29399c75064a
```



# Tarefas 
````tabs
tab: Em Aberto

```dataview
TASK
FROM "<% tp.file.folder(true) %>"
WHERE !completed AND !checked
GROUP BY file.name

```

tab: Concluídas 
```dataview
TASK
FROM "<% tp.file.folder(true) %>"
WHERE completed AND checked
GROUP BY file.name

```


````

<%tp.file.cursor()%>

#  Notas

```dataview
table created AS "Created", resumo AS "Resumo"
from "ESFORÇOS/PROJETOS/<% tp.file.folder() %>"
where type != "project"
where type = "project_note"
sort created DESC
```


<%* tp.hooks.on_all_templates_executed(async () => { 
    const file = tp.file.find_tfile(tp.file.path(true)); 
    const task_tag_value = tp.file.folder().toLowerCase().split(" ").join("_");
    await app.fileManager.processFrontMatter(file, (frontmatter) => { 
        frontmatter["tags"] = `project/${task_tag_value}`; 
    }); 
}); -%>
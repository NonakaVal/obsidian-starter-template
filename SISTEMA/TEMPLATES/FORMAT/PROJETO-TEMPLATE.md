---
project: "[[FORMAT]]"
tags: 
type: project
cssclasses:
  - hide-properties_reading
  - hide-properties_editing
created:
  - '[[2025-08-16]]'
---
| `Coleção` | `INPUT[suggester(optionQuery("")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery("ATLAS"), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[FORMAT]] 



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
FROM "SISTEMA/TEMPLATES/FORMAT"
WHERE !completed AND !checked
GROUP BY file.name

```

tab: Concluídas 
```dataview
TASK
FROM "SISTEMA/TEMPLATES/FORMAT"
WHERE completed AND checked
GROUP BY file.name

```


````

<% tp.file.cursor() %>

#  Notas

```dataview
table created AS "Created", resumo AS "Resumo"
from "ESFORÇOS/PROJETOS/FORMAT"
where type != "project"
where type = "project_note"
sort created DESC
```



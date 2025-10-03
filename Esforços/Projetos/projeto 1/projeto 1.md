---
project: "[[projeto 1]]"
tags: project/projeto_1
type: project
cssclasses:
  - hide-properties_reading
  - hide-properties_editing
created:
  - "[[2025-10-03]]"
up: "[[2_PROJETOS|2_PROJETOS]]"
collection: "[[SISTEMA/COLEÇÕES/projetos.md|projetos]]"
---

 `Coleção` | `INPUT[suggester(optionQuery("Sistema/Coleções")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[projeto 1]] 



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
FROM "Esforços/Projetos/projeto 1"
WHERE !completed AND !checked
GROUP BY file.name

```

tab: Concluídas 
```dataview
TASK
FROM "Esforços/Projetos/projeto 1"
WHERE completed AND checked
GROUP BY file.name

```


````



#  Notas

```dataview
table created AS "Created", resumo AS "Resumo"
from "Esforços/PROJETOS/projeto 1"
where type != "project"
where type = "project_note"
sort created DESC
```



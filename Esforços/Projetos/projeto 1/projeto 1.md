---
project: "[[Projeto 1]]"
tags: project/projeto_1
type: project
created:
  - "[[2025-10-09]]"
up: "[[2_PROJETOS|2_PROJETOS]]"
resumo: resumo do projeto
inicio: 2025-10-09
entrega: 2025-10-30
status: Em andamento
related:
  - "[[Esforços/Areas/Area 1/Area 1.md|Area 1]]"
---

 `Coleção` | `INPUT[suggester(optionQuery("Sistema/Coleções")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---

| Data Início                                              | Data Entrega                                              | Status                                                                                                                |
| -------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `INPUT[datePicker(showcase, defaultValue(null)):inicio]` | `INPUT[datePicker(showcase, defaultValue(null)):entrega]` | `INPUT[inlineSelect(option('Em andamento'), option('Finalizada'), option('Arquivado'), option('Aguardando')):status]` |

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
FROM "Esforços/Projetos/Projeto 1"
WHERE !completed AND !checked
GROUP BY file.name

```

tab: Concluídas 
```dataview
TASK
FROM "Esforços/Projetos/Projeto 1"
WHERE completed AND checked
GROUP BY file.name

```


````



#  Notas

```dataview
table created AS "Created", resumo AS "Resumo"
from "Esforços/PROJETOS/Projeto 1"
where type != "project"
where type = "project_note"
sort created DESC
```



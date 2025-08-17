---
project: "[[Blog Alex Donega]]"
tags: project/blog_alex_donega
type: project
cssclasses:
  - hide-properties_reading
  - hide-properties_editing
created:
  - "[[2025-08-16]]"
---
| `Coleção` | `INPUT[suggester(optionQuery("")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery("ATLAS"), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[Blog Alex Donega]] 

#  Notas

```dataview
table created AS "Created", resumo AS "Resumo"
from "ESFORÇOS/PROJETOS/Blog Alex Donega"
where type != "project"
sort created DESC
```



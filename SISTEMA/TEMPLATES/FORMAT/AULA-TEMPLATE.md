---
created:
  - '[[<% tp.date.now("YYYY-MM-DD") %>]]'
up: "[[../../SOBRE/LYT/ATLAS]]"
---
| `Up` | `INPUT[suggester(optionQuery("")):up]`    | `Coleção` | `INPUT[suggester(optionQuery("SISTEMA/COLEÇÕES")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---

# [[<% tp.file.title %>]] 


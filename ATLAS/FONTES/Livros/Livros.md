---
created:
  - "[[2025-09-17]]"
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
up: "[[SISTEMA/SOBRE/LYT/ATLAS.md|ATLAS]]"
collection: "[[SISTEMA/COLEÇÕES/Estudos.md|Estudos]]"
---
| `Up` | `INPUT[suggester(optionQuery("")):up]`    | `Coleção` | `INPUT[suggester(optionQuery("SISTEMA/COLEÇÕES")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |



---
# [[Livros]] 

- [ ] [[Livro 1]]

---

Última alteração:   `="[[" + dateformat(date(today), "yyyy-MM-dd") + "]]"` - `$= dv.current().file.mtime`
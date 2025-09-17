---
created:
  - "[[2025-09-17]]"
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
up: "[[Cursos|Cursos]]"
collection: "[[SISTEMA/COLEÇÕES/Estudos.md|Estudos]]"
---
| `Up` | `INPUT[suggester(optionQuery("")):up]`    | `Coleção` | `INPUT[suggester(optionQuery("SISTEMA/COLEÇÕES")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[Curso 1]] 

- [[Aula 1]]
- [[Segunda Aula]]
- [[Terceira Aula]]

---

Última alteração:   `="[[" + dateformat(date(today), "yyyy-MM-dd") + "]]"` - `$= dv.current().file.mtime`
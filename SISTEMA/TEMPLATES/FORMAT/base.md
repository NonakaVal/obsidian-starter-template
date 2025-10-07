---
created:
  - '[[<% tp.date.now("YYYY-MM-DD") %>]]'
up:
  - <% tp.file.folder() %>
---

`Coleção` | `INPUT[suggester(optionQuery("Sistema/Coleções")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |



---
# [[<% tp.file.title %>]] 



---

Última alteração:   `="[[" + dateformat(date(today), "yyyy-MM-dd") + "]]"` - `$= dv.current().file.mtime`
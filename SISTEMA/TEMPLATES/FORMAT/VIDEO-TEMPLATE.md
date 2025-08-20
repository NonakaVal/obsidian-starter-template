---
created:
  - '[[<% tp.date.now("YYYY-MM-DD") %>]]'
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---
| `Up` | `INPUT[suggester(optionQuery("")):up]`    | `Coleção` | `INPUT[suggester(optionQuery("SISTEMA/COLEÇÕES")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[<% tp.file.title %>]] 

|🎥 **Vídeo**|
|---|
|**Canal/Criador:** `INPUT[text:Criador]`|
|**URL:** `INPUT[text:URL]`|
|**Status:** `INPUT[inlineSelect(option("Para assistir", "Assistindo", "Assistido", "Revisitar"), showcase):Status]`|

<%tp.file.cursor()%>

---

# Descrição

# Principais Pontos

# Aprendizados

# Ações Derivadas

---

Last modified :   `="[[" + dateformat(date(today), "yyyy-MM-dd") + "]]"` - `$= dv.current().file.mtime`
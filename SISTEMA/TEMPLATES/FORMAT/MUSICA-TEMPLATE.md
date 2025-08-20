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

|🎵 **Música**|
|---|
|**Artista/Banda:** `INPUT[text:Artista]`|
|**Álbum:** `INPUT[text:Album]`|
|**Ano:** `INPUT[number:Ano]`|
|**Gênero:** `INPUT[inlineList:Genero]`|
|**Link:** `INPUT[text:Link]`|

<%tp.file.cursor()%>

---

# Sobre a Música

# Por que gosto?

# Memórias Associadas

# Letra (Destaques)

---

Last modified :   `="[[" + dateformat(date(today), "yyyy-MM-dd") + "]]"` - `$= dv.current().file.mtime`
---
created:
  - '[[2025-08-16]]'
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---
| `Coleção` | `INPUT[suggester(optionQuery("")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[% TAREFAS EFFORTS]] 

|🎵 **Música**|
|---|
|**Artista/Banda:** `INPUT[text:Artista]`|
|**Álbum:** `INPUT[text:Album]`|
|**Ano:** `INPUT[number:Ano]`|
|**Gênero:** `INPUT[inlineList:Genero]`|
|**Link:** `INPUT[text:Link]`|

<% tp.file.cursor() %>

---

# Sobre a Música

# Por que gosto?

# Memórias Associadas

# Letra (Destaques)

---

Last modified :   `="[[" + dateformat(date(today), "yyyy-MM-dd") + "]]"` - `$= dv.current().file.mtime`
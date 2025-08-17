---
created:
  - '[[2025-08-16]]'
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---
| `Coleção` | `INPUT[suggester(optionQuery("")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[Areas]] 

|📚 **Livro - Metadados**|
|---|
|**Autor(es):** `INPUT[text:Autores]`|
|**Editora:** `INPUT[text:Editora]`|
|**Ano Publicação:** `INPUT[number:AnoPublicacao]`|
|**Páginas:** `INPUT[number:Paginas]`|
|**Gênero:** `INPUT[inlineList:Genero]`|
|**Status:** `INPUT[inlineSelect(option('Para ler'), option('Lendo'), option('Lido'), option('Abandonado'), showcase):Status]`|

<% tp.file.cursor() %>

# Sinopse

# Principais Ideias

# Citações

# Crítica/Análise

# Aplicação Prática

---

Last modified :   `="[[" + dateformat(date(today), "yyyy-MM-dd") + "]]"` - `$= dv.current().file.mtime`
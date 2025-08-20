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

|📚 **Livro - Metadados**|
|---|
|**Autor(es):** `INPUT[text:Autores]`|
|**Editora:** `INPUT[text:Editora]`|
|**Ano Publicação:** `INPUT[number:AnoPublicacao]`|
|**Páginas:** `INPUT[number:Paginas]`|
|**Gênero:** `INPUT[inlineList:Genero]`|
|**Status:** `INPUT[inlineSelect(option('Para ler'), option('Lendo'), option('Lido'), option('Abandonado'), showcase):Status]`|



# Sinopse

# Principais Ideias

# Citações

# Crítica/Análise

# Aplicação Prática

---

Last modified :   `="[[" + dateformat(date(today), "yyyy-MM-dd") + "]]"` - `$= dv.current().file.mtime`
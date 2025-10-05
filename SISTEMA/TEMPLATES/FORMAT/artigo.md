---
created:
  - '[[<% tp.date.now("YYYY-MM-DD") %>]]'
---
| `Up` | `INPUT[suggester(optionQuery("")):up]`    | `Coleção` | `INPUT[suggester(optionQuery("Sistema/Coleções")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[<% tp.file.title %>]] 

|📄 **Artigo - Metadados**|
|---|
|**Autores:** `INPUT[text:Autores]`|
|**Publicação:** `INPUT[text:Publicacao]`|
|**Ano:** `INPUT[number:Ano]`|
|**DOI/URL:** `INPUT[text:DOI]`|
|**Palavras-Chave:** `INPUT[inlineList:PalavrasChave]`|
|**Status Leitura:** `INPUT[inlineSelect(option("Para ler"), option("Lendo"), option("Lido"), option("Revisando"), showcase):StatusLeitura]`|


---

# Resumo

# Contexto

# Métodos

# Resultados

# Crítica/Análise

# Aplicações

---

Last modified :   `="[[" + dateformat(date(today), "yyyy-MM-dd") + "]]"` - `$= dv.current().file.mtime`
---
created:
  - '[[2025-08-16]]'
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---
| `Coleção` | `INPUT[suggester(optionQuery("")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[TEMPLATE-BASE]] 

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
---
created:
  - '[[<% tp.date.now("YYYY-MM-DD") %>]]'
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---

| `Coleção` | `INPUT[suggester(optionQuery("")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[<% tp.file.title %>]] 

|🛠️ **Ferramenta - Metadados**|
|---|
|**Tipo:** `INPUT[inlineSelect(option("Software"),option("Hardware"), option("Serviço"), option("Framework"), option("Linguagem"), showcase):Tipo]`|
|**URL:** `INPUT[text:URL]`|
|**Status Uso:** `INPUT[inlineSelect(option("Em uso"), option("Testando"), option("Descontinuado"), option("Potencial"), showcase):StatusUso]`|
|**Custo:** `INPUT[text:Custo]`|

---

# Descrição

# Casos de Uso

# Vantagens

# Limitações

# Configurações Importantes

# Alternativas

---

Last modified :   `="[[" + dateformat(date(today), "yyyy-MM-dd") + "]]"` - `$= dv.current().file.mtime`
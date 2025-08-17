---
created:
  - '[[2025-08-16]]'
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---
| `Coleção` | `INPUT[suggester(optionQuery("")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[FERRAMENTA-TEMPLATE]] 

|📌 **Evento - Metadados**|
|---|
|**Tipo:** `INPUT[inlineSelect(option("Conferência"), option("Workshop"), option("Meetup"), option("Social"), option("Pessoal"), showcase):TipoEvento]`|
|**Data Início:** `INPUT[date:DataInicio]`|
|**Data Fim:** `INPUT[date:DataFim]`|
|**Local:** `INPUT[text:Local]`|
|**Organizador:** `INPUT[text:Organizador]`|
|**Website:** `INPUT[text:Website]`|
|**Status:** `INPUT[inlineSelect(option("Planejando"), option("Confirmado"), option("Participando"), option("Concluído"), showcase):Status]`|
|**Custo:** `INPUT[text:Custo]`|

<% tp.file.cursor() %>


---

# Descrição

# Agenda

# Participantes

# Preparação

# Aprendizados

# Próximas Ações

---

Last modified :   `="[[" + dateformat(date(today), "yyyy-MM-dd") + "]]"` - `$= dv.current().file.mtime`
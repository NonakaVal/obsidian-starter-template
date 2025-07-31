---
created:
  - '[[<% tp.date.now("YYYY-MM-DD") %>]]'
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---

~ 

| `Coleção` | `INPUT[suggester(optionQuery("")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[<% tp.file.title %>]] 

|📅 **Reunião**|
|---|
|**Data:** `INPUT[date:Data]`|
|**Hora:** `INPUT[time:Hora]`|
|**Local/Plataforma:** `INPUT[text:Local]`|
|**Participantes:** `INPUT[inlineList:Participantes]`|
|**Projeto Relacionado:** `INPUT[text:Projeto]`|
|**Status:** `INPUT[inlineSelect(option("Agendada", "Realizada", "Cancelada", "Adiada"), showcase):Status]`|

<%tp.file.cursor()%>
---

# Objetivo

# Agenda

# Discussões

# Decisões

# Ações (Who/What/When)

# Próximos Passos

---

Last modified :   `="[[" + dateformat(date(today), "yyyy-MM-dd") + "]]"` - `$= dv.current().file.mtime`
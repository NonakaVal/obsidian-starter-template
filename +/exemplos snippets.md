---
created:
  - '[[2025-09-17]]'
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---

| `Up` | `INPUT[suggester(optionQuery("")):up]`    | `Coleção` | `INPUT[suggester(optionQuery("SISTEMA/COLEÇÕES")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |


 `BUTTON[home]`     

```meta-bind-button
label: Abrir Homepage
hidden: true
icon: home
class: ""
id: home
style: primary
actions:
  - type: command
    command: homepage:open-homepage
```

<iframe 
  src="https://notes.nicolevanderhoeven.com/Zettelkasten" 
  width="100%" 
  height="600" 
  frameborder="0"
  style="border:1px solid #ccc;">
</iframe>


Última modificação :   `="[[" + dateformat(date(today), "yyyy-MM-dd") + "]]"` - `$= dv.current().file.mtime`
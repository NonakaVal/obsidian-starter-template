---
tags: area/esforços
---

# [[Areas]]

> [!mountain] [[Areas]] | [[Projetos]] 
``` dataview
TABLE WITHOUT ID
file.link as Nota, area as Area,resumo as Resumo

FROM "ESFORÇOS/AREAS"
where type != "area"
where type = "area_note"
where type != "area_note_sub"
sort created DESC
LIMIT 33
```


---
up:
  - "[[Efforts]]"
collection:
  - "[[Areas]]"
created:
  - 2024-02-09
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---
~ [[Efforts]]


# [[Areas]]

> [!mountain] [[Areas]] | [[Projetos]] 
``` dataview
TABLE WITHOUT ID
file.link as Nota, area as Area,resumo as Resumo

FROM "EFFORTS/AREAS"
where type != "area"
where type = "area_note"
where type != "area_note_sub"
sort created DESC
LIMIT 33
```


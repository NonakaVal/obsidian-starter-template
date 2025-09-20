---
created:
  - '[[2025-09-20]]'
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---
````tabs
tab: 📂 Totais Coleções

```dataview
TABLE without id file.link as Coleção, length(file.inlinks) as Notas 
FROM "SISTEMA/COLEÇÕES"
SORT length(file.inlinks) desc


LIMIT 30
```

tab: 📂 Coleções  (Links)


```dataview
TABLE file.inlinks as Backlinks, length(file.inlinks) as Total
FROM "SISTEMA/COLEÇÕES"
SORT length(file.inlinks) desc


LIMIT 30
```

````
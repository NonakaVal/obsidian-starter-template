---
up: 
collection:
  - "[[Mapas]]"
  - "[[Visões]]"
related: 
created: 2025-04-12 15:15
rank: 1.5
---
~ [[ARC Framework]]

Mais uma visão... Aqui estão as anotações mais empoeiradas do seu Atlas. Estas são as notas mais antigas que não foram alteradas. Limitado a `10`.

``` dataview
TABLE WITHOUT ID
 file.link as "Dusty Notes in the Atlas",
 (date(today) - file.mday).day as "Days since last encounter"

FROM "Atlas"

SORT file.mtime asc

LIMIT 10
```
---
up: "[[Mapa de Gestão de Conhecimento|Mapa de Gestão de Conhecimento]]"
collection: "[[SISTEMA/COLEÇÕES/Gestão de Conhecimento.md|Gestão de Conhecimento]]"
---
```dataview
TABLE WITHOUT ID 
file.link as "Mapas",
length(file.inlinks) as "Inlinks",
length(file.outlinks) as "Outlinks"
FROM "Atlas/Mapas" 

SORT length(file.inlinks) desc 

LIMIT 111
````

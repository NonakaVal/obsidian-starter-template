---
up: "[[Atlas/Mapas/Mapa Linking Your Thinking.md|Mapa Linking Your Thinking]]"
collection: "[[SISTEMA/COLEÇÕES/Gestão de Conhecimento.md|Gestão de Conhecimento]]"
---
```dataview
TABLE WITHOUT ID
file.link as Nota , file.inlinks AS inlins, length(file.inlinks) as Total 
FROM "CALENDÁRIO/DIAS"
sort file.ctime desc
```


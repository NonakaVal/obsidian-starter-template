> [!waypoints] **Básico** »  [[Obsidian e PKM]]  |[[Markdown]]| [[Metadados]]  | **[[Coleções]]** | [[Atalhos]]   


```dataview
TABLE without id file.link as Coleção, file.inlinks as Notas,length(file.inlinks) as Total 
FROM "SISTEMA/COLEÇÕES"
WHERE !contains(tags, "#calendar/daily" ) AND (length(file.outlinks) >= 1 OR length(file.inlinks) >= 1)
SORT length(file.inlinks) desc


LIMIT 30
```

---
collection:
  - "[[Mapas]]"
  - "[[ATLAS/MAPAS/+/Coleções]]"
created: "{{date}}"
rank: 1
---
~ [[ATLAS/MAPAS/+/Coleções]] 

Esta nota reúne todas as notas onde a propriedade `collection` indica `{{title}}`.

```dataview
TABLE WITHOUT ID
	file.link as Note,
	dateformat(created, "EEE, MMM dd, yyyy") as "Date Created"
WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")
SORT created desc
LIMIT 333
```
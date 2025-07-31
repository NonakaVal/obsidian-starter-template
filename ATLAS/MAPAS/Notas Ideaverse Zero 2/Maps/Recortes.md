---
up: 
collection:
  - "[[Mapas]]"
  - "[[Coleções]]"
related: 
created: 2025-04-14
rank: 1
---
ColeColeçõesColeções]] 

This note collects all notes where the `collection` property says `Clippings`.

```dataview
TABLE WITHOUT ID
	file.link as Note,
	dateformat(created, "EEE, MMM dd, yyyy") as "Date Created"
WHERE
	contains(collection,this.file.link)
SORT created desc
LIMIT 333
```
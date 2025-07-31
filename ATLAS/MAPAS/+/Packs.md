---
up: 
collection:
  - "[[Mapas]]"
  - "[[Coleções]]"
related: 
created: 2025-04-07
rank: 1.5
mapState:
  - 🟩
---
~ [[x]]

> [!ghost] **[[Pacotes]]** | [[Templates]] | [[CANVAS E QUADROS]] 

Packs são uma parte importante da modularização na construção e compartilhamento do conhecimento. O pack mais importante incluído no Ideaverse Pro 2 é o ACE Pack.

Esta nota reúne todas as notas onde a propriedade `collection` diz `Packs`.

```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "SYSTEM/PACKS"),
		"🎒 " + file.link,
	file.link) as "Packs",
	
	about as About
WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")
SORT file.name desc
LIMIT 55
```
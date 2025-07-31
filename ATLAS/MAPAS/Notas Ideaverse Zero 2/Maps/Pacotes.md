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
Coleções~ [[Claro! Por favor, envie o texto que você gostaria que eu traduzisse.]]

> [!ghost] **[[Pacotes]]** | [[Modelos]] | [[Visuais]] 

Os Packs são uma parte fundamental para modularizar a construção e o compartilhamento de conhecimento. O pack mais importante incluído no Ideaverse Pro 2 é o ACE Pack.

Esta nota reúne todas as notas onde a propriedade `collection` indica `Packs`.

```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "x/Packs"),
		"🎒 " + file.link,
	file.link) as "Packs",
	
	about as About
WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")
SORT file.name asc
LIMIT 55
```
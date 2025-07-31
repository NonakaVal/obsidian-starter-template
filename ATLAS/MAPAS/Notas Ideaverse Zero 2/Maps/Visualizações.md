---
up: 
collection: []
related: 
created:
  - 2024-07-07
rank: 4
mapState:
  - 🟩
version: "1.5"
---
~ [[Mapas]]

> [!map] [[Coleções]] | **[[Visões]]** | [[Mapas por Links]] | [[Mapas por Tipo]] 

"Ver notas" mostra visões dinâmicas e autoatualizadas de buscas personalizadas.

Esta nota coleta todas as notas onde a propriedade `collection` é `Visões`.

```dataview
TABLE WITHOUT ID
	choice(contains(collection,link("Mapas")),
		"🔭 " + file.link,
	file.link) as "Visões",
	
	rank as Rank,
	join(mapState) as Estado
WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")
SORT mapState desc, rank desc
LIMIT 111
```
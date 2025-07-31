---
up: 
collection:
  - "[[Visualizações]]"
  - "[[Mapas]]"
  - "[[Coleções]]"
related: 
created:
  - 2025-04-07
  - "[[2025-05-30]]"
rank: 2
mapState:
  - 🟩
---
Mapas~ [[Mapas]]

> [!map] [[Coleções]] | [[Visualizações]] | **[[Mapas por Rank]]** | [[Mapas por Links]] 

Esta nota mostra todos os mapas no ideaverso onde a propriedade `collection` contém `Maps`, ordenados por rank.
```dataview
TABLE WITHOUT ID 
	choice(contains(collection,link("MAPAS")),
		"🗺️ " + file.link,
	file.link) as "MAPAS",

rank as "Rank",

choice( contains(file.folder, "+"), "`" + file.folder + "`", file.folder ) as "Caminho da Pasta"

WHERE contains(collection,link("MAPAS")) 

SORT rank desc 

LIMIT 222
```
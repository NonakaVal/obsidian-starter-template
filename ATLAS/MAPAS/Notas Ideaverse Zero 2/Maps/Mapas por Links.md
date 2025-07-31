---
up: 
collection:
  - "[[Visualizações]]"
related: 
created:
  - 2025-04-07
rank: 2
mapState:
  - 🟩
---
~ [[Mapas]]

> [!map] [[Coleções]] | [[Visualizações]] | **[[Mapas por Links]]** | [[Mapas por Tipo]] 

This note shows all the maps in the ideaverse where the `collection` property has `Maps`.

```dataview
TABLE WITHOUT ID 
	choice(contains(collection,link("Maps")),
		"🗺️ " + file.link,
	file.link) as "Maps",

length(file.inlinks) as "Inlinks",

length(file.outlinks) as "Outlinks",

choice( contains(file.folder, "+"), "`" + file.folder + "`", file.folder ) as "Folder Path"

WHERE contains(collection,link("Maps")) 

SORT length(file.inlinks) desc 

LIMIT 222
```
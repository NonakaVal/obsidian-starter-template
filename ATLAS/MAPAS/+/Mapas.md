---
up:
  - "[[ATLAS]]"
collection:
  - "[[Mapas]]"
  - "[[Coleções]]"
related: 
created:
  - 2023-11-21
rank: 5
mapState:
  - 🟩
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---
Mapas~ [[ATLAS]] 

> [!map] [[Coleções]] | [[Visualizações]] | [[Mapas por Links]] | [[Mapas por Tipo]] 

Mapas de conteúdo ajudam você a ***reunir, desenvolver e navegar por ideias***. Ao criar e personalizar seus mapas, você está dando sentido a alguma parte do mundo que importa para você. Esta nota mostra todos os mapas no ideaverso onde a propriedade `collection` contém `Mapas`, ordenados por rank.

```dataview
TABLE WITHOUT ID 
	choice(contains(collection,link("Mapas")),
		"🗺️ " + file.link,
	file.link) as "Mapas",

rank as "Rank",

choice( contains(file.folder, "+"), "`" + file.folder + "`", file.folder ) as "Caminho da Pasta"

WHERE contains(collection,link("Mapas")) 

SORT rank desc 

LIMIT 133
```


---


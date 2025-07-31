---
up: 
collection:
  - "[[Visualizações]]"
  - "[[Mapas]]"
related: 
created: 2025-04-07
rank: 1
mapState:
  - 🟩
---
~ [[Mapas]] 

> [!map] [[Coleções]] | [[Visualizações]] | [[Mapas por Links]] | **[[Mapas por Tipo]]** 

Esta nota causará dores de cabeça sobre como os mapas são tecnicamente classificados, mas também é interessante analisar as diferenças entre o que é um mapa simples de conteúdo, o que também é uma "visualização" e o que também é uma "coleção". Provavelmente você deveria simplesmente ignorar esta nota.

KEY: 🗃️ Coleção | 🔭 Visualização | 🗺️ Mapa

```dataview
TABLE WITHOUT ID
    choice(contains(collection,link("Maps")) AND contains(collection,link("Collections")) AND contains(collection,link("Views")),
        "🗺️ 🔭 🗃️ " + file.link,
        choice(contains(collection,link("Maps")) AND contains(collection,link("Collections")),
            "🗺️ 🗃️ " + file.link,
            choice(contains(collection,link("Maps")) AND contains(collection,link("Views")),
                "🗺️ 🔭 " + file.link,
                choice(contains(collection,link("Collections")) AND contains(collection,link("Views")),
                    "🗃️ 🔭 " + file.link,
                    choice(contains(collection,link("Maps")),
                        "🗺️ " + file.link,
                        choice(contains(collection,link("Views")),
                            "🔭 " + file.link,
                            choice(contains(collection,link("Collections")),
                                "🗃️ " + file.link,
                                file.link
                            )
                        )
                    )
                )
            )
        )
    ) as "Maps",
    
	length(file.inlinks) as "Inlinks",

	length(file.outlinks) as "Outlinks",

    rank as Rank
    
WHERE 
    contains(collection,link("Maps")) OR
    contains(collection,link("Views")) OR
    contains(collection,link("Collections"))
SORT rank desc, file.name asc
LIMIT 333
```

---

Voltar para [[Mapas]]
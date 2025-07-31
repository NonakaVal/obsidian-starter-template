---
up: 
collection:
  - "[[Visualizações]]"
  - "[[Mapas]]"
related: 
created: 2025-04-09
rank: 4.5
mapState:
  - 🟩
---
~ [[Home Pro]] 

> [!trees] [[Plantar]] | [[Cultivar]] | [[Pergunta]] | [[Replantar]] | [[Revitalizar]] | [[Revisitar]] — [[Arquiteto]] ⤴️

Quando você estiver em uma nota e sentir que quer voltar a ela, basta adicionar a tag `garden` nessa nota. Não importa se o motivo é vago ou claro. Então, através das seguintes visualizações do Garden, você poderá encontrá-la depois (e fazer conexões serendipitosas pelo caminho).

CHAVE: 🌱 Plantar | ☘️ Cultivar | 🪴 Replantar | 🍄 Pergunta | 💦 Revitalizar | 🍁 Revisitar

```dataview
TABLE WITHOUT ID
	choice(contains(file.tags, "#garden/plant"),
        "🌱 " + file.link,
	choice(contains(file.tags, "#garden/cultivate"),
		"☘️ " + file.link,
	choice(contains(file.tags, "#garden/question"),
		"🍄 " + file.link,
	choice(contains(file.tags, "#garden/repot"),
		"🪴 " + file.link,
	choice(contains(file.tags, "#garden/revitalize"),
		"💦 " + file.link,
	choice(contains(file.tags, "#garden/revisit"),
		"🍁 " + file.link,
	file.link)))))) as "Notas para o Garden",
    
    join(filter(file.tags, (t) => startswith(t, "#garden/")), ", ") as "Tags do Garden",
    
    choice(contains(file.folder, "+"),
	    "`" + file.folder + "`",
	    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
		) as "Pasta Pai"

FROM #garden

WHERE !contains(file.name, "Master Key (Garden Tags)")

SORT file.mtime DESC

LIMIT 77
```


---

Voltar para [[ARC Framework]] 


---
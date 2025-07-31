---
up:
  - "[[Home Pro]]"
collection:
  - "[[Mapas]]"
  - "[[Visualizações]]"
created: 2023-08-19
rank: 2.5
mapState:
  - 🟨
---
~ [[Esforços]]

> [!mountain] [[Áreas]] | **[[Projetos]]** | [[Trabalhos]] 

> [!training] [[Projetos Ativos|Ativos]] | **[[Projetos Em Fervura|Simmering]]** | [[Projetos Adormecidos|Dormindo]] 

Estes podem subconscientemente ferver em segundo plano sem culpa. Objetivo: < 15.

``` dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Efforts/Projects/Simmering"),
		"⚗️ " + file.link,
	file.link) as "Simmering Projects",

rank as "Rank"

FROM "Efforts/Projects/Simmering"

SORT rank desc

LIMIT 33
```
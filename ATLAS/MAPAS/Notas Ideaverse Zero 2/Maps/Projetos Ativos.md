---
up:
  - "[[Home Pro]]"
collection:
  - "[[Mapas]]"
  - "[[Visualizações]]"
created: 2023-08-19
rank: 4.5
mapState:
  - 🟨
---
~ [[Esforços]]

> [!mountain] [[Áreas]] | **[[Projetos]]** | [[Trabalhos]] 

> [!training] **[[Active Projects|Projetos Ativos]]** | [[Simmering Projects|Em Aquecimento]] | [[Sleeping Projects|Em Repouso]] 

Estes são projetos ativos que recebem a maior parte da sua atenção. Almeje entre 3-11. Priorize por rank.

``` dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Efforts/Projects/Active"),
		"⚗️ " + file.link,
	file.link) as "Active Projects",

rank as "Rank"

FROM "Efforts/Projects/Active"

SORT rank desc

LIMIT 33
```
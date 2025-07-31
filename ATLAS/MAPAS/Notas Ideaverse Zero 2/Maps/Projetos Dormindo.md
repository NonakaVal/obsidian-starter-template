---
up:
  - "[[Home Pro]]"
collection:
  - "[[Mapas]]"
  - "[[Visualizações]]"
created: 2023-08-19
tags:
  - architect/build
rank: 1
mapState:
  - 🟨
---
~ [[Esforços]]

> [!mountain] [[Áreas]] | **[[Projetos]]** | [[Trabalhos]] 

> [!training] [[Projetos Ativos|Ativos]] | [[Projetos Em Efervescência|Em Efervescência]] | **[[Projetos Adormecidos|Adormecidos]]** 

Estes projetos estão quase no plano da consciência, mas podem ser facilmente reativados. 

``` dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Efforts/Projects/Sleeping"),
		"⚗️  " + file.link,
	file.link) as "Sleeping Projects",

rank as "Rank"

FROM "Efforts/Projects/Sleeping"

SORT rank desc

LIMIT 33
```
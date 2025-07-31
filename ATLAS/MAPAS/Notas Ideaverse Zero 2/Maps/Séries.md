---
up:
  - "[[Fontes]]"
collection:
  - "[[Coleções]]"
  - "[[Mapas]]"
related:
  - "[[Livros]]"
  - "[[Filmes]]"
  - "[[Séries]]"
created: 2022-01-01
rank: 2
mapState:
  - 🟩
cssclasses: []
---
MapasColeções~ [[Fontes]]

> [!kindling] [[Livros]] | [[Filmes]] | **[[Séries]]** | [[Cursos]] 

Esta nota reúne todas as notas onde a propriedade `collection` diz `Series`.

# Séries ordenadas por Avaliações e Ano de Experiência

Séries ordenadas por Avaliação, com Capas e AnoXP.

```dataview
TABLE WITHOUT ID
	years as Years,
	"![|60](" + image + ")" as Poster,
	file.link as Title,
	rating as Rating,
	yearXP as YearXP,
	yearXPL as YearXPL
WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")
SORT rating desc, year asc
```

# Séries ordenadas por Avaliações, com Pessoas e Gêneros

Isto está “em andamento”, mas deve dar algumas ideias para seus próprios grupos de séries e estantes de séries.
```dataview
TABLE WITHOUT ID
	years as Years,
	"![|60](" + image + ")" as Poster,
	file.link as Title,
	rating as Rating,
	join(list(writer, actors)) as People,
	join(list(showGenre)) as Genre
WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")
SORT rating desc, year asc
```

---

Voltar para [[Fontes]]
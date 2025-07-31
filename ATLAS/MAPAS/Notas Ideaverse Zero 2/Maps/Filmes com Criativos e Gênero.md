---
up: 
related: 
created: 2025-04-07 15:19
cssclasses: []
---
~ [[Fontes]] 

> [!kindling] [[Livros]] | **[[Filmes]]** | [[Séries]] | [[Cursos]] 

> [!film] [[Filmes Mais Bem Avaliados]] | **[[Filmes com Criativos e Gênero]]** | [[Filmes, Visualizações Extras]] 
> 

# Filmes ordenados por Avaliação, com Pessoas e Gêneros

Esta visualização está ordenada pela minha avaliação pessoal e adiciona algumas das pessoas criativas envolvidas e o gênero.

```dataview
TABLE WITHOUT ID
	year as Year,
	"![|60](" + image + ")" as Poster,
	file.link as Title,
	rating as Rating,
	join(list(director, actors)) as People,
	join(list(showGenre)) as Genre
WHERE
	contains(collection,[[Filmes]]) and
	!contains(file.name, "Template")
SORT rating desc, year desc
```

---

Voltar para [[Filmes]]
---
up: 
related: 
created: 2025-04-07 15:19
cssclasses: []
---
~ [[Fontes]] 

> [!kindling] [[Livros]] | **[[Filmes]]** | [[Séries]] | [[Cursos]] 

> [!film] [[Filmes mais bem avaliados]] | [[Filmes com Criativos e Gênero]] | **[[Filmes, Visões Extras]]** 
> 

Estes são "trabalhos em progresso", mas devem lhe dar algumas ideias para seus próprios grupos de filmes e prateleiras de filmes.

# Dia da Marmota
Séries ordenadas pela propriedade `showGroup` de "groundhog day"

```dataview
TABLE WITHOUT ID
	year as Year,
	"![|60](" + image + ")" as Poster,
	file.link as Title,
	rating as Rating,
	join(list(director, actors)) as People
WHERE
	contains(showGroup,"groundhog day")
SORT rating desc, year desc
```

# MAX Testosterona!
Séries ordenadas por showGroup de "max testosterone"

```dataview
TABLE WITHOUT ID
	year as Year,
	"![|60](" + image + ")" as Poster,
	file.link as Title,
	rating as Rating,
	join(list(director, actors)) as People
WHERE
	contains(showGroup,"max testosterone")
SORT rating desc, year desc
```

# Adaptações
Séries ordenadas por showGroup de `adaptation`

```dataview
TABLE WITHOUT ID
	year as Year,
	"![|60](" + image + ")" as Poster,
	file.link as Title,
	rating as Rating,
	join(list(director, actors)) as People
WHERE
	contains(showGroup,"adaptation")
SORT rating desc, year desc
```


---

Voltar para [[Filmes]]
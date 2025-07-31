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
rank: 3
mapState:
  - 🟩
cssclasses:
  - wide-page
---
Coleções~ [[Fontes]] 

> [!kindling] [[Livros]] | **[[Filmes]]** | [[Séries]] | [[Cursos]] 

> [!film] **[[Filmes Mais Bem Avaliados]]** | [[Filmes com Criativos e Gênero]] | [[Filmes, Visualizações Extras]] 

> [!multi-column]
>
> > [!Wand] 5.7+
> >
> > ```dataview
> > TABLE WITHOUT ID
> > 	file.link as Movie,
> > 	"![|100](" + image + ")" as Poster,
> > 	rating as Rating
> > WHERE
> > 	contains(collection,[[Filmes]]) and
> > 	rating >= 5.7 and
> > 	!contains(file.name, "Template")
> > SORT rating desc, year asc
> > ```
>
> > [!Zap] 5.4 - 5.6
> >
> > ```dataview
> > TABLE WITHOUT ID
> > 	file.link as Movie,
> > 	"![|75](" + image + ")" as Poster,
> > 	rating as Rating
> > WHERE
> > 	contains(collection,[[Filmes]]) and
> > 	rating < 5.7 and
> > 	rating > 5.3 and
> > 	!contains(file.name, "Template")
> > SORT rating desc, year asc
> > ```
>
> > [!Waves] 5.1 - 5.3
> >
> > ```dataview
> > TABLE WITHOUT ID
> > 	file.link as Movie,
> > 	"![|50](" + image + ")" as Poster,
> > 	rating as Rating
> > WHERE
> > 	contains(collection,[[Filmes]]) and
> > 	rating < 5.4 and
> > 	rating > 5 and
> > 	!contains(file.name, "Template")
> > SORT rating desc, year asc
> > ```
>
> > [!Gem] 5's
> >
> > ```dataview
> > TABLE WITHOUT ID
> > 	file.link as Movie,
> > 	"![|40](" + image + ")" as Poster,
> > 	rating as Rating
> > WHERE
> > 	contains(collection,[[Filmes]]) and
> > 	rating = 5 and
> > 	!contains(file.name, "Template")
> > SORT rating desc, year asc
> > ```

---

Voltar para [[Filmes]]
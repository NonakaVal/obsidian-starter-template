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
rank: 1
mapState:
  - 🟩
cssclasses: []
---
Coleções~ [[Fontes]] 

> [!kindling] **[[Livros]]** | [[Filmes]] | [[Séries]] | [[Cursos]] 

Esta nota reúne todas as notas onde a propriedade `collection` está como `Books`, ordenadas por `Rating`.

```dataview
TABLE WITHOUT ID
	year as Year,
	"![|60](" + image + ")" as Cover,
	file.link as Title,
	join(list(by)) as Author,
	yearXP as YearXP,
	rating as Rating
WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")
SORT rating desc, year asc
```

---

# Livros por Categoria

Para quem gostaria de aproveitar todas as propriedades que as notas de livros possuem, aqui está um exemplo de organização por `bookCategory`.

```dataview
TABLE WITHOUT ID
	year as Year,
	file.link as Title,
	bookCategory as Category
WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")
SORT bookCategory, desc, year desc
```
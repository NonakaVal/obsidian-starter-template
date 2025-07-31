---
up:
  - "[[Pontos]]"
collection:
  - "[[Mapas]]"
  - "[[Coleções]]"
created: 2023-10-12
rank: 2.5
mapState:
  - 🟩
---
~ [[Pontos]]

> [!shapes] [[Coisas]] | [[Declarações]] | **[[Pessoas]]** | [[Citações]] | [[Perguntas]]

Isso exibe notas onde a propriedade `collection` diz `People`, ordenadas pela data de nascimento.

```dataview
TABLE WITHOUT ID
 choice(contains(file.path, "Atlas/Dots/People"), 
		"👤 " + file.link, file.link) as "People",
	lifespan as "Lifespan",
	finalAge as "Final Age",
	join(list(peopleDomain)) as Domain
WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template") and
	!contains(file.name, "Master Key (People)")
SORT lifespan asc, file.name asc
```

---

O Ideaverse Pro também vem com [[Pessoas GRITAM]] para gerenciar seus "Alcances e Respostas".

---

Voltar para [[Pontos]]
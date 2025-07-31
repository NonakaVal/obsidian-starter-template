---
up:
  - "[[Registros]]"
collection:
  - "[[Mapas]]"
  - "[[Coleções]]"
related: 
created: 2023-11-21
rank: 1.5
mapState:
  - 🟩
---
MapasMapasColeções~ [[Registros]] 

> [!boxes]  [[Eventos]] | [[Ideias]] | **[[Reuniões]]** | [[Coisas Boas]] 

Esta nota reúne todas as notas onde a propriedade `collection` indica `Reunião`.

```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Calendar/Records/Meetings"), 
		"☎️ " + file.link,file.link) as "Reuniões",
	one-liner as One-liner
WHERE
	contains(collection,link("Reuniões")) and
	!contains(file.name, "Template")
SORT file.name desc
```

---

Voltar para [[Registros]]
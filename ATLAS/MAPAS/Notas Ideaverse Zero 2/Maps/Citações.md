---
up:
  - "[[Pontos]]"
collection: []
related:
  - "[[Perguntas]]"
created:
  - 2023-11-24
rank: 3.5
mapState:
  - 🟩
---
~ [[Pontos]] 

> [!shapes] [[Coisas]] | [[Declarações]] | [[Pessoas]] | **[[Citações]]** | [[Perguntas]] 

Esta nota exibe todas as notas onde a propriedade `collection` contém `Quotes`, ordenadas por `rank`.

```dataview
TABLE WITHOUT ID 

choice(contains(file.path, "Atlas/Dots/Quotes"), 
"💬 " + file.link, file.link) as "Quotes", 

join(list(by)) as By, 
rank as Rank 

WHERE contains(collection,this.file.link) and !contains(file.name, "Template") 

SORT rank desc, by asc

LIMIT 77
```

---

# Citações Inline

Nem todas as citações têm sua própria nota dedicada, mas se você digitar `quote::` no início de uma linha, a visualização seguinte irá renderizá-la.

---

Voltar para [[Pontos]]
---
up:
  - "[[Jardim]]"
collection:
  - "[[Mapas]]"
  - "[[Visualizações]]"
related: 
created: 2025-04-01
---
 ~ [[Jardim]] 

> [!árvores] [[Planta]] | [[Cultivar]] | [[Pergunta]] | **[[Replantar]]** | [[Revitalizar]] | [[Revisitar]] — [[Arquiteto]] ⤴️

Se você marcou notas com `#garden/repot` então você quer **refatorar essas notas dividindo-as ou reformantando-as.** Isso geralmente significa cortar uma seção específica de uma nota diária e colar o conteúdo em uma nova nota com um título claro.

A visualização a seguir está ordenada pela modificação mais recente.

```dataview
TABLE WITHOUT ID
    "🪴 " + file.link as "Notas para replantar no ideaverso",
    
    choice(
        contains(file.folder, "+"),
        "`" + file.folder + "`",
        regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
    ) as "Pasta Pai"

FROM #garden/repot

WHERE !contains(file.name, "Master Key (Garden Tags)")

SORT file.mtime DESC

LIMIT 77
```
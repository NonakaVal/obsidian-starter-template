---
up:
  - "[[Jardim]]"
collection:
  - "[[Mapas]]"
  - "[[Visões]]"
related: 
created: 2025-04-01
---
 ~ [[Jardim]] 


> [!árvores] [[Planta]] | **[[Cultivar]]** | [[Pergunta]] | [[Transplantar]] | [[Revitalizar]] | [[Revisitar]] — [[Arquiteto]] ⤴️

Se você marcou notas com `#garden/cultivate` então quer **desenvolver essas notas mais a fundo.** Isso pode significar adicionar mais pensamentos, contexto, links, fontes, ou acrescentar mais valor de alguma forma. Você também pode fazer novos comentários — esclarecendo, criticando ou expandindo as ideias dentro.

A visão a seguir está ordenada pela modificação mais recente.

```dataview
TABLE WITHOUT ID
    "☘ " + file.link as "Notas para cultivar no ideaverso",
    
    choice(
        contains(file.folder, "+"),
        "`" + file.folder + "`",
        regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
    ) as "Pasta Pai"

FROM #garden/cultivate

SORT file.mtime DESC

WHERE !contains(file.name, "Master Key (Garden Tags)")

LIMIT 77
```
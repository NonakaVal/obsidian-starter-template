---
up:
  - "[[Jardim]]"
collection:
  - "[[Mapas]]"
  - "[[Visualizações]]"
related: 
created: 2025-04-01
---
Mapas ~ [[Jardim]] 

> [!trees] [[Planta]] | [[Cultivar]] | [[Pergunta]] | [[Repot]] | **[[Revitalize]]** | [[Revisitar]] — [[Arquiteto]] ⤴️

Se você marcou notas com `#garden/revitalize`, então deseja **revisar essas notas de uma forma que lhes dê nova vida.** Isso geralmente é a sensação de que algo está travado na nota e, se você apenas reescrevê-la ou reestruturá-la, isso lhe proporcionará mais clareza e valor.

A visualização a seguir está ordenada pela última modificação.

```dataview
TABLE WITHOUT ID
    "💦 " + file.link as "Notas para revitalizar no ideaverse",
    
    choice(
        contains(file.folder, "+"),
        "`" + file.folder + "`",
        regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
    ) as "Pasta Pai"

FROM #garden/revitalize

SORT file.mtime DESC

WHERE !contains(file.name, "Master Key (Garden Tags)")

LIMIT 77
```
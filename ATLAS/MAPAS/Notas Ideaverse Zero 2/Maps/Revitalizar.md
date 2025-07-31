---
up:
  - "[[Jardim]]"
collection:
  - "[[Mapas]]"
  - "[[Visualizações]]"
related: 
created: 2025-04-01
---
MapasMapas ~ [[Jardim]] 

> [!trees] [[Planta]] | [[Cultivar]] | [[Pergunta]] | [[Replantar]] | **[[Revitalizar]]** | [[Revisitar]] — [[Arquiteto]] ⤴️

Se você marcou notas com `#garden/revitalize` então você quer **revisar essas notas de uma forma que lhes dê nova vida.** Isso geralmente é a sensação de que algo está preso na nota e se você simplesmente reescrevesse ou reestruturasse, isso lhe proporcionaria mais clareza e valor. 

A visualização a seguir está ordenada pela modificação mais recente.

```dataview
TABLE WITHOUT ID
    "💦 " + file.link as "Notes to revitalize in the ideaverse",
    
    choice(
        contains(file.folder, "+"),
        "`" + file.folder + "`",
        regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
    ) as "Parent Folder"

FROM #garden/revitalize

SORT file.mtime DESC

WHERE !contains(file.name, "Master Key (Garden Tags)")

LIMIT 77
```
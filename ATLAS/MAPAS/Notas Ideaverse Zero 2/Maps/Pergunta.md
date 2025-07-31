---
up:
  - "[[Jardim]]"
collection:
  - "[[Mapas]]"
  - "[[Visualizações]]"
related:
  - "[[Perguntas]]"
created: 2025-04-01
---
 ~ [[Jardim]] 

> [!trees] [[Planta]] | [[Cultivar]] | **[[Pergunta]]** | [[Replantar]] | [[Revitalizar]] | [[Revisitar]] — [[Arquiteto]] ⤴️

Se você marcou notas com `#garden/question` então deseja **refletir sobre as perguntas nessas notas.** Isso pode significar usar as perguntas como inspiração ou para refletir e ruminar mais profundamente sobre os pensamentos que essas perguntas provocam. 

A visualização a seguir está ordenada pela modificação mais recente.

```dataview
TABLE WITHOUT ID
    "🍄 " + file.link as "Notes with questions in the ideaverse",
    
    choice(
        contains(file.folder, "+"),
        "`" + file.folder + "`",
        regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
    ) as "Parent Folder"

FROM #garden/question

SORT file.mtime DESC

WHERE !contains(file.name, "Master Key (Garden Tags)")

LIMIT 77
```
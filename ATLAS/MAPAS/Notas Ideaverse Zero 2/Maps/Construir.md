---
up: 
collection:
  - "[[Visualizações]]"
  - "[[Mapas]]"
related: 
created: 2025-04-10
tags:
  - architect/build
rank: 1
---
MapasMapas~ [[Arquiteto]] 

> [!scale] **[[Construir]]** | [[Renovar]] — [[Jardim]] ⤵️

Quando você tem um mapa de conteúdo mais recente ou quase inacabado que precisa de algum trabalho, pode dar a ele a tag `architect/build`. A visualização a seguir está ordenada pelo conteúdo modificado mais recentemente.

```dataview
TABLE WITHOUT ID
    "🧱 " + file.link as "Notas para construir no ideaverso",
    
    choice(contains(file.folder, "+"),
	    "`" + file.folder + "`",
	    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
		) as "Pasta Pai"

FROM #architect/build 

SORT file.mtime DESC

WHERE !contains(file.name, "Master Key (Architect Tags)")

LIMIT 77
```


---

Voltar para [[Arquiteto]]
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
~ [[Arquiteto]] 

> [!scale] [[Construir]] | **[[Renovar]]** — [[Jardim]] ⤵️

Quando você tem um mapa de conteúdo antigo ou que sente que precisa de algum tipo de atualização, pode dar a ele a tag `architect/renovate`. A visualização a seguir está ordenada pela modificação mais recente.

```dataview
TABLE WITHOUT ID
	choice(contains(file.tags, "#architect/renovate"),
		"🪜 " + file.link,
	file.link) as "Notas para o Arquiteto",
    
    join(filter(file.tags, (t) => startswith(t, "#architect/")), ", ") as "Tags de Arquiteto",
    
    choice(contains(file.folder, "+"),
	    "`" + file.folder + "`",
	    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
		) as "Pasta Pai"

FROM #architect/renovate 

WHERE !contains(file.name, "Master Key (Architect Tags)")

SORT file.mtime DESC

LIMIT 77
```


---

Voltar para [[Arquiteto]]
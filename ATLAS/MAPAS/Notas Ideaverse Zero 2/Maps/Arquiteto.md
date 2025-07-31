---
up:  
collection:  
  - "[[Visualizações]]"  
  - "[[Mapas]]"  
related:   
created: 2025-04-10  
tags: []  
rank: 1  
---  
~ [[Home Pro]]  

> [!scale] [[Construir]] | [[Renovar]] — [[Jardim]] ⤵️  

Quando você tiver um mapa de conteúdo que precise de algum trabalho, basta adicionar a tag `architect` nessa nota. Então, através das seguintes visualizações Architect, você poderá encontrar a nota quando precisar.  

CHAVE: 🧱 Construir | 🪜 Renovar  

```dataview  
TABLE WITHOUT ID  
	choice(contains(file.tags, "#architect/build"),  
        "🧱 " + file.link,  
	choice(contains(file.tags, "#architect/renovate"),  
		"🪜 " + file.link,  
	file.link)) as "Notas para o Arquiteto",  
      
    join(filter(file.tags, (t) => startswith(t, "#architect/")), ", ") as "Tags do Arquiteto",  
      
    choice(contains(file.folder, "+"),  
	    "`" + file.folder + "`",  
	    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")  
		) as "Pasta Pai"  
  
FROM #architect  
  
WHERE !contains(file.name, "Master Key (Architect Tags)")  
  
SORT file.mtime DESC  
  
LIMIT 77  
```  
  
---  
  
Voltar para [[Home Pro]]
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

> [!trees] **[[Planta]]** | [[Cultivar]] | [[Pergunta]] | [[Transplantar]] | [[Revitalizar]] | [[Revisitar]] — [[Arquiteto]] ⤴️

Se você marcou notas com `#garden/plant`, provavelmente as fez com pressa, mas quer se lembrar de **conectar essas notas ao restante do seu ideaverso.** 

A visualização a seguir está ordenada pelas modificações mais recentes.

```dataview
TABLE WITHOUT ID
    "🌱 " + file.link as "Notas para plantar no ideaverso",
    
    choice(contains(file.folder, "+"),
	    "`" + file.folder + "`",
	    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
		) as "Pasta Pai"

FROM #garden/plant

SORT file.mtime DESC

WHERE !contains(file.name, "Master Key (Garden Tags)")

LIMIT 77
```


---


Você sabia? Nos kits iniciais originais do LYT, essas notas eram carinhosamente chamadas de BOAT. Essas [[notas BOAT]] são *barcos solitários flutuando em um oceano vazio*. Tudo o que você precisa fazer é amarrá-las a outras notas.
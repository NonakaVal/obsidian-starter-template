~ [[Garden]]  

> [!trees] **[[Plant]]** | [[Cultivate]] | [[Question]] | [[Repot]] | [[Revitalize]] | [[Revisit]] — [[Architect]] ⤴️  

Se você marcou notas com `#garden/plant`, provavelmente as criou com pressa, mas quer se lembrar de **conectar essas notas ao restante do seu ideaverse.**  

A visualização a seguir está ordenada pelas notas mais recentemente modificadas.  

```dataview
TABLE WITHOUT ID
    "🌱 " + file.link as "Notas para plantar no ideaverse",
    
    choice(contains(file.folder, "+"),
	    "`" + file.folder + "`",
	    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
		) as "Pasta Pai"

FROM #garden/plant

SORT file.mtime DESC

WHERE !contains(file.name, "Master Key (Garden Tags)")

LIMIT 77
```
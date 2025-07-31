---
up: 
related: 
created: 2025-04-09 10:19
---
~ [[Home Pro]] 
 
> [!ghost] **[[Por favor, envie o texto que deseja traduzir para que eu possa ajudar.]]** » [[Pacotes]] | [[Modelos]] | [[Visuais]] 

"x" significa "extras." Foi assim que recebeu o nome. Ele se posiciona convenientemente perto do final de qualquer pasta, exatamente onde as coisas extras deveriam estar. Mas isso não diminui nada em "x". Pode estar no final da lista, mas não está no final do nosso coração. 

Abaixo estão as notas na pasta **x**, ordenadas por última modificação. 

```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "x/Packs"),
		"🎒 " + file.link,
	choice(contains(file.path, "x/Templates"),
		"📋 " + file.link,
	choice(contains(file.path, "x/Visuals"),
		"🖼️ " + file.link,
	choice(contains(file.path, "x/x"),
		"𝔁 " + file.link,
	file.link)))) as "Notes in x",

 (date(today) - file.mday).day as "Days ago"

FROM "x"

WHERE
	!contains(file.name, "Template")

SORT file.mtime desc

LIMIT 55
```

---


Voltar para [[Casa Pro]]
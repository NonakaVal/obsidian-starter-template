---
up: 
related: 
created: 2025-04-10 09:57
---
~ [[x]]

> [!ghost] [[Packs]] | [[Templates]] | **[[CANVAS E QUADROS]]** 

Visuals podem conter todos os tipos de arquivos. Imagens, arquivos canvas, PDFs e meu favorito: desenhos do excalidraw. Sendo assim, a seguinte visualização busca uma propriedade específica que todos os desenhos excalidraw possuem, `excalidraw-plugin`, e exibe os resultados abaixo:

```dataview 
TABLE WITHOUT ID 
	choice(contains(file.path, "SYSTEM/MEDIA/Visuals"),
		"🖼️ " + file.link,
	file.link) as "Desenhos Excalidraw",

dateformat(file.mtime, "MMM yyyy") as "Modificado",
dateformat(file.ctime, "MMM yyyy") as "Criado"

WHERE contains(excalidraw-plugin,"") 
and !contains(file.name, "Template") 
and !contains(file.name, "excalibrain") 

SORT file.mtime desc 

LIMIT 155
```
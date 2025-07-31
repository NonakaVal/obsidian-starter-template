---
up: 
related: 
created: 2025-04-10 09:57
---
~ [[Por favor, forneça o texto que deseja traduzir.]]

> [!ghost] [[Pacotes]] | [[Modelos]] | **[[Visuais]]** 

Visuais podem conter todos os tipos de arquivos. Imagens, arquivos canvas, PDFs, e meu favorito: desenhos excalidraw. Como tal, a seguinte visão procura uma propriedade específica que todos os desenhos excalidraw possuem, `excalidraw-plugin`, e exibe os resultados abaixo:

```dataview 
TABLE WITHOUT ID 
	choice(contains(file.path, "x/Visuals"),
		"🖼️ " + file.link,
	file.link) as "Excalidraw Drawings",

dateformat(file.mtime, "MMM yyyy") as "Modified",
dateformat(file.ctime, "MMM yyyy") as "Created"

WHERE contains(excalidraw-plugin,"") 
and !contains(file.name, "Template") 
and !contains(file.name, "excalibrain") 

SORT file.mtime desc 

LIMIT 155
```
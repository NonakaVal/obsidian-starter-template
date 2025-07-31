---
up: 
collection:
  - "[[Mapas]]"
  - "[[Visualizações]]"
  - "[[Coleções]]"
created: 2023-11-30
tags:
  - architect/build
rank: 4
mapVisibility: TBD
mapState:
  - 🟨
---
MapasColeções~ [[Esforços]] 

> [!mountain] [[Áreas]] | [[Projetos]] | **[[Trabalhos]]** 

Trabalhos são coisas que criamos. Esta nota representa o terceiro passo do ARC Framework, [[Comunicar]], e mostra tanto os trabalhos que você compartilhou quanto os trabalhos em andamento.

A coleção a seguir mostra trabalhos em andamento (WIPs), ordenados por rank.

CHAVE: 🖋️ Artigos | 🗞️ Newsletters | 🎤 Palestras | 📹 Vídeos

```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Efforts/Works/Articles"), 
		"🖋️ " + file.link,
	choice(contains(file.path, "Efforts/Works/Artifacts"), 
		"💠 " + file.link,
	choice(contains(file.path, "Efforts/Works/Lessons"), 
		"📓 " + file.link,
	choice(contains(file.path, "Efforts/Works/Lyrics"),
		"🎵 " + file.link,
	choice(contains(file.path, "Efforts/Works/Newsletters"),
		"🗞️ " + file.link,
	choice(contains(file.path, "Efforts/Works/Slides"),
		"🛝 " + file.link,
	choice(contains(file.path, "Efforts/Works/Talks"),
		"🎤 " + file.link,
	choice(contains(file.path, "Efforts/Works/Videos"),
		"📹 " + file.link,
choice(contains(file.path, "Efforts/Works/Walkthroughs"),
		"🥾 " + file.link,
	file.link))))))))) as "Works in Progress",
	
    rank as "Rank",

	regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1") as "Parent Folder"

WHERE rank and contains(collection,[[Trabalhos]]) 

SORT rank DESC

LIMIT 11
```



---



# Todos os Trabalhos Compartilhados

Aqui está uma lista de todos os trabalhos compartilhados, ordenados pela data de `published` mais recente.

```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Efforts/Works/Articles"), 
		"🖋️ " + file.link,
	choice(contains(file.path, "Efforts/Works/Artifacts"), 
		"💠 " + file.link,
	choice(contains(file.path, "Efforts/Works/Lessons"), 
		"📓 " + file.link,
	choice(contains(file.path, "Efforts/Works/Lyrics"),
		"🎵 " + file.link,
	choice(contains(file.path, "Efforts/Works/Newsletters"),
		"🗞️ " + file.link,
	choice(contains(file.path, "Efforts/Works/Slides"),
		"🛝 " + file.link,
	choice(contains(file.path, "Efforts/Works/Talks"),
		"🎤 " + file.link,
	choice(contains(file.path, "Efforts/Works/Videos"),
		"📹 " + file.link,
choice(contains(file.path, "Efforts/Works/Walkthroughs"),
		"🥾 " + file.link,
	file.link))))))))) as "Shared Works",
	
    published as "Published"
    
FROM "Efforts/Works"

SORT published DESC

LIMIT 55
```

---


Voltar para [[Esforços]]
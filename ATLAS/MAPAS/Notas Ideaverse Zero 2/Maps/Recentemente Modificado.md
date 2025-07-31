---
up: 
collection:
  - "[[Visualizações]]"
  - "[[Mapas]]"
related:
  - "[[Recents Visualizados]]"
created: 2023-10-16
rank: 3
mapState:
  - 🟩
---
~ [[Home Pro]] 

Esta visualização oferece contexto sobre toda a sua ideaverso de maneiras antes quase impossíveis de alcançar. Está ordenada por modificações recentes.

```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "+"), 
		"✨ " + file.link,
	choice(contains(file.path, "Atlas/Dots/Things"), 
		"🧩 " + file.link,
	choice(contains(file.path, "Atlas/Dots/Statements"), 
		"📣 " + file.link,
	choice(contains(file.path, "Atlas/Dots/People"), 
		"👤 " + file.link,
	choice(contains(file.path, "Atlas/Dots/Quotes"),
		"💬 " + file.link,
	choice(contains(file.path, "Atlas/Dots/Questions"),
		"❓ " + file.link,
	choice(contains(file.path, "Atlas/Dots/x"),
		"𝓧 " + file.link,
	choice(contains(file.path, "Atlas/Maps"),
		"🗺️ " + file.link,
    choice(contains(file.path, "Atlas/Sources/Books"), 
        "📚 " + file.link,
    choice(contains(file.path, "Atlas/Sources/Clippings"), 
        "✂ " + file.link,
    choice(contains(file.path, "Atlas/Sources/Courses"), 
        "⛳️ " + file.link,
    choice(contains(file.path, "Atlas/Sources/Games"),
        "🎮 " + file.link,
    choice(contains(file.path, "Atlas/Sources/Papers"),
        "🔬 " + file.link,
    choice(contains(file.path, "Atlas/Sources/Shows"),
        "📺 " + file.link,
    choice(contains(file.path, "Atlas/Sources/Songs"),
        "🎵 " + file.link,
    choice(contains(file.path, "Atlas/Sources/Talks"),
        "🎤 " + file.link,
    choice(contains(file.path, "Atlas/Sources/x"),
        "𝙓 " + file.link,
	choice(contains(file.path, "Calendar/Days"), 
		" — " + file.link,
	choice(contains(file.path, "Calendar/Records/Events"), 
		"🎪 " + file.link,
	choice(contains(file.path, "Calendar/Records/Ideas"), 
		"💡 " + file.link,
	choice(contains(file.path, "Calendar/Records/Logs"), 
		"🪵 " + file.link,
	choice(contains(file.path, "Calendar/Records/Meetings"),
		"☎️ " + file.link,
	choice(contains(file.path, "Calendar/Records/Nice Things"),
		"🌈 " + file.link,
	choice(contains(file.path, "Calendar/Reviews"),
		"🔍 " + file.link,
	choice(contains(file.path, "Efforts/Areas"),
		" –  " + file.link,
	choice(contains(file.path, "Efforts/Projects"),
		"⚗️ " + file.link,
	choice(contains(file.path, "Efforts/Works"),
		"🎨 " + file.link,	
	choice(contains(file.path, "x/Packs"),
		"🎒 " + file.link,	
	choice(contains(file.path, "x/Templates"),
		"📋 " + file.link,	
	choice(contains(file.path, "x/Visuals/Excalidraw"),
		"✍️ " + file.link,	
	choice(contains(file.path, "x/Visuals/Images"),
		"🖼️ " + file.link,	
	file.link))))))))))))))))))))))))))))))) as "Notas",
    
    choice(contains(file.folder, "+"),
	    "`" + file.folder + "`",
	    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
		) as "Pasta Pai"

SORT file.mtime desc

LIMIT 177
```

---

Voltar para [[Home Pro]]
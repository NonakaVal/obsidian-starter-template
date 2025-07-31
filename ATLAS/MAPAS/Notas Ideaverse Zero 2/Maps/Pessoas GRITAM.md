---
up:
  - "[[Pessoas]]"
collection:
  - "[[Visualizações]]"
  - "[[Mapas]]"
related: 
created: 2023-11-21
rank: 1.5
mapState:
  - 🟩
cssclasses:
  - wide-page
---
Mapas~ [[Pessoas]] 

ROAR significa "Reach-Outs And Replies" (Alcances e Respostas).

> [!multi-column]
> 
> > [!zap]+ Alcances
> > ```dataview
> > TABLE WITHOUT ID
> > 	file.link as "Name",
> > 	"![|60](" + image + ")" as Image,
> > 	ROARdetails as Details,
> > 	ROARrank as RRank
> > WHERE
> > 	ROARrank and
> > 	contains(ROAR,"reach-out") and
> > 	contains(collection, [[Pessoas]]) and
> > 	!contains(file.name, "Template")
> > SORT ROARrank desc
> > ```
> 
> > [!messages]+ Respostas
> > ```dataview
> > TABLE WITHOUT ID
> > 	file.link as "Name",
> > 	"![|60](" + image + ")" as Image,
> > 	ROARdetails as Details,
> > 	ROARrank as RRank
> > WHERE
> > 	ROARrank and
> > 	contains(ROAR,"reply") and
> > 	contains(collection, [[Pessoas]]) and
> > 	!contains(file.name, "Template")
> > SORT ROARrank desc
> > ```
> 

> [!watch]+ Aguardando
> ```dataview
> TABLE WITHOUT ID
> 	file.link as "Name",
> 	"![|60](" + image + ")" as Image,
> 	ROARdetails as Details,
> 	ROARrank as RRank
> WHERE
> 	ROARrank and
> 	contains(ROAR,"waiting") and
> 	contains(collection, [[Pessoas]]) and
> 	!contains(file.name, "Template")
> SORT ROARrank desc
> ```

---

> [!Layers]- Em espera
> ```dataview
> TABLE WITHOUT ID
> 	file.link as "Name",
> 	"![|60](" + image + ")" as Image,
> 	ROARdetails as Details,
> 	ROARrank as RRank
> WHERE 
> 	contains(ROAR,"backburner") and
> 	contains(collection, [[Pessoas]]) and
> 	!contains(file.name, "Template")
> SORT ROARrank desc
> ```
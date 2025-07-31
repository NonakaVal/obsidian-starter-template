---
up:
  - "[[Home Pro]]"
collection:
  - "[[Mapas]]"
  - "[[Visualizações]]"
related: 
created:
  - 2023-10-15
rank: 1.5
mapState:
  - 🟩
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---
MapasMapasMapas~ [[Adicionar]] 

Nunca comece com uma página em branco. Surpreenda-se com o trabalho que você já fez invisivelmente.

Esta visualização muito avançada mostra notas de espaço reservado acumulando pelo menos `3` links apontando para ela. Se você sentir o estalo, transforme a nota de espaço reservado em uma nota real.

```dataviewjs
const count = 3;
let d = {};
function process(k, v) {
  Object.keys(v).forEach(function (x) {
    x = dv.fileLink(x);
    if (d[x]==undefined) { d[x] = []; }
    d[x].push(dv.fileLink(k));
  });
}

Object.entries(dv.app.metadataCache.unresolvedLinks)
    .filter(([k,v])=>Object.keys(v).length)
    .forEach(([k,v]) => process(k, v));
    
dv.table(["Notas de espaço reservado acumulando", "Linkadas de"],
         Object.entries(d)
         .filter(([k, v]) => v.length >= count)
         .sort((a, b) => b[1].length - a[1].length)
         .map(([k,v])=> [k, v.join(" • ")]))
```
 
Você também pode pensar nelas como: sementes sombras, slowburns secretas, notas de espaço reservado acumulando.

---

Vá para [[Adicionar]]
> [!waypoints] [[Boas Vindas]] | [[Obsidian e PKM]]  | [[Metadados]]  | [[Atalhos]]  | **[[Coleções]]**

```dataviewjs
const colecoes = dv.pages('"SISTEMA/COLEÇÕES"')
    .sort(p => p.file.name, 'asc');

dv.table(
    ["Coleção", "Qtd", "Notas"],
    colecoes.map(c => [
        c.file.link,
        c.file.inlinks.length,
        c.file.inlinks.length > 0
            ? c.file.inlinks.map(n => dv.fileLink(n.path))
            : "—"
    ])
);

```

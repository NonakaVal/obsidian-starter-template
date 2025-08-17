
```dataviewjs
// Configurações
const pastas = ["CALENDÁRIO", "ATLAS", "ESFORÇOS"];
const mesAtual = dv.date("today").toFormat("yyyy-MM");

// Coleta as notas filtradas
let notas = dv.pages(pastas.map(p => `"${p}"`).join(" OR "))
    .where(n => dv.date(n.file.ctime).toFormat("yyyy-MM") === mesAtual);

// Totais gerais
dv.header(2, "📌 Resumo Mensal");
dv.paragraph(`Mês: **${mesAtual}**`);
dv.paragraph(`Total de notas criadas: **${notas.length}**`);

// Totais por pasta
let porPasta = {};
for (let p of pastas) {
    porPasta[p] = notas.filter(n => n.file.folder.includes(p)).length;
}
dv.list(Object.entries(porPasta).map(([p, q]) => `${p}: **${q} notas**`));

// Distribuição semanal
let porSemana = {};
for (let n of notas) {
    let semana = dv.date(n.file.ctime).toFormat("ww");
    porSemana[semana] = (porSemana[semana] || 0) + 1;
}

// Lista detalhada
dv.header(3, "📄 Notas do mês");
dv.table(["Data", "Nota"],
    notas
        .sort(n => n.file.ctime, 'asc')
        .map(n => [n.file.ctime.toFormat("yyyy-MM-dd"), n.file.link]));

```


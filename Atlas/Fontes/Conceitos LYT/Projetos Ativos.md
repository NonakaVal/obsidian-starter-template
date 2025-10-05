~ [[Esforços]]

> [!mountain] [[Áreas]] | **[[projetos]]** | [[Trabalhos]]  

> [!training] **[[Projetos Ativos|Ativos]]** | [[Projetos em Fogo Brando|Simmering]] | [[Projetos Adormecidos|Dormindo]]  

Estes são projetos ativos que têm a maior parte da sua atenção. O ideal é manter entre **3 e 11**. Priorize pela classificação (**rank**).

```dataviewjs
//-----------------------------------------------------
// CONFIGURAÇÃO
//-----------------------------------------------------
const ICONES = {
    "PROJETOS": "🛠️",
    "EFFORTS": "⚡",
    "DEFAULT": "📄"
};

//-----------------------------------------------------
// FUNÇÕES AUXILIARES
//-----------------------------------------------------
function getIcon(folder) {
    const upperFolder = folder.toUpperCase();
    return ICONES[Object.keys(ICONES).find(key => upperFolder.includes(key))] || ICONES.DEFAULT;
}

function estilizarLink(p) {
    return `**${dv.fileLink(p.file.path, false, p.file.name)}**`;
}

function formatDate(date) {
    return date ? `\`${dv.date(date).toFormat("yyyy-MM-dd")}\`` : "-";
}

function diasRestantes(inicio, entrega) {
    if (!inicio || !entrega) return "-";
    const d1 = dv.date(inicio);
    const d2 = dv.date(entrega);
    const diff = d2.diff(d1, "days").days; // diferença em dias
    return diff >= 0 ? `${diff} d` : `${diff} d (atrasado)`;
}

//-----------------------------------------------------
// COLETA E FILTRO
//-----------------------------------------------------
const pages = dv.pages('"Esforços/PROJETOS"')
    .where(p => p.type && p.type == "project")
    .sort(p => p.file.mtime, 'desc');

//-----------------------------------------------------
// EXIBIÇÃO
//-----------------------------------------------------
dv.table(
    ["", "📄 Projeto", "🗓️ Início", "📌 Entrega", "📊 Status", "⏳ Prazo (dias)"],
    pages.map(p => [
        getIcon(p.file.folder),
        estilizarLink(p),
        formatDate(p.inicio),
        formatDate(p.entrega),
        p.status ?? "-",
        diasRestantes(p.inicio, p.entrega)
    ])
);


```


---
up: "[[Mapa de Gestão de Conhecimento|Mapa de Gestão de Conhecimento]]"
collection: "[[SISTEMA/COLEÇÕES/Gestão de Conhecimento.md|Gestão de Conhecimento]]"
---
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

function diasRestantes(entrega) {
    if (!entrega) return "-";
    const hoje = dv.luxon.DateTime.now();          // Data atual
    const dEntrega = dv.date(entrega);             // Data da entrega
    const diff = dEntrega.diff(hoje, "days").days; // Diferença em dias
    return diff >= 0 ? `${Math.floor(diff)} d` : `${Math.ceil(diff)} d (atrasado)`;
}

//-----------------------------------------------------
// COLETA E FILTRO
//-----------------------------------------------------
const pages = dv.pages('"Esforços/Projetos"')
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
        diasRestantes(p.entrega) // agora calcula da data de hoje até a entrega
    ])
);

```
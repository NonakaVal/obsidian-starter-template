//-----------------------------------------------------
// CONFIGURAÇÃO
//-----------------------------------------------------
const ICONES = {
    "AULAS": "📚",
    "PROJETOS": "🛠️",
    "EFFORTS": "⚡",
    "NOTAS": "📝",
    "ATLAS": "🌍",
    "DEFAULT": "📄"
};

// Inclui EFFORTS, ATLAS e qualquer pasta com +
const PASTAS_INCLUIR = [
    /.*\+.*/,       // Pastas com "+"
    /^EFFORTS/,     // Pasta EFFORTS
    /^ATLAS/        // Pasta ATLAS
];

// Exclui apenas pastas de sistema
const PASTAS_EXCLUIR = [
    /^SYSTEM\//     // Ignora pastas de sistema
];

//-----------------------------------------------------
// FUNÇÕES AUXILIARES
//-----------------------------------------------------
function deveIncluir(pasta) {
    return PASTAS_INCLUIR.some(regex => regex.test(pasta)) &&
        !PASTAS_EXCLUIR.some(regex => regex.test(pasta));
}

function getIcon(folder) {
    const upperFolder = folder.toUpperCase();
    for (let key in ICONES) {
        if (upperFolder.includes(key)) return ICONES[key];
    }
    return ICONES.DEFAULT;
}

function formatarIdade(data) {
    const diff = Date.now() - data.toJSDate().getTime();
    const minutos = diff / 1000 / 60;

    if (minutos < 60) return `${Math.floor(minutos)} min`;
    if (minutos < 60 * 24) return `${Math.floor(minutos / 60)} h`;
    if (minutos < 60 * 24 * 30) return `${Math.floor(minutos / 60 / 24)} d`;
    if (minutos < 60 * 24 * 365) return `${Math.floor(minutos / 60 / 24 / 30)} m`;
    return `${Math.floor(minutos / 60 / 24 / 365)} a`;
}

//-----------------------------------------------------
// COLETA E AGRUPAMENTO
//-----------------------------------------------------
const pages = dv.pages("")
    .where(p => deveIncluir(p.file.folder))
    .sort(p => p.file.mtime, 'desc')
    .limit(50); // Mais notas, pois agora será por pasta

// Agrupando por pasta principal
const grupos = pages.groupBy(p => p.file.folder.split("/")[0]);

//-----------------------------------------------------
// EXIBIÇÃO POR PASTA
//-----------------------------------------------------
for (let grupo of grupos) {
    dv.header(3, `📂 ${grupo.key} (${grupo.rows.length})`);

    dv.table(
        ["Ícone", "Nota", "Modificada em", "Tempo desde modificação"],
        grupo.rows.map(p => [
            getIcon(p.file.folder),
            dv.fileLink(p.file.path, false, p.file.name),
            p.file.mtime.toFormat("yyyy-MM-dd HH:mm"),
            formatarIdade(p.file.mtime)
        ])
    );
}

---
created:
  - '[[2025-07-30]]'
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---

~ 

| `Coleção` | `INPUT[suggester(optionQuery("")):collection]`   | `Relacionados` | `INPUT[inlineListSuggester(optionQuery(""), option(something, other),  useLinks(true), showcase):related]`  |

---
# [[alterações recentes 2]] 

```dataviewjs
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

// Filtrando pastas a serem incluídas
const PASTAS_INCLUIR = [
    /.*\+.*/,       // Todas as pastas com "+"
    /^EFFORTS/,     // Qualquer nota dentro de "EFFORTS"
    /^ATLAS/        // Qualquer nota dentro de "ATLAS"
];

// Pastas a serem excluídas da busca (excluir só sistema)
const PASTAS_EXCLUIR = [
    /^System\//     // Ignora pastas de sistema (ajuste conforme necessário)
];

//-----------------------------------------------------
// FUNÇÕES AUXILIARES
//-----------------------------------------------------
function deveIncluir(pasta) {
    // Inclui pastas que coincidem com qualquer expressão regular de PASTAS_INCLUIR,
    // e exclui as que coincidem com qualquer expressão regular de PASTAS_EXCLUIR.
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
    let value;
    
    if (minutos < 60) {
        value = `${Math.floor(minutos)} min`;
    } else if (minutos < 60 * 24) {
        value = `${Math.floor(minutos / 60)} h`;
    } else if (minutos < 60 * 24 * 30) {
        value = `${Math.floor(minutos / 60 / 24)} d`;
    } else if (minutos < 60 * 24 * 365) {
        value = `${Math.floor(minutos / 60 / 24 / 30)} m`;
    } else {
        value = `${Math.floor(minutos / 60 / 24 / 365)} a`;
    }
    
    return value;
}

//-----------------------------------------------------
// COLETA E AGRUPAMENTO
//-----------------------------------------------------
const pages = dv.pages("")
    .where(p => deveIncluir(p.file.folder))  // Filtra pelas pastas
    .sort(p => p.file.mtime, 'desc')  // Ordena por data de modificação
    .limit(30);  // Limita a exibição para 30 notas

//-----------------------------------------------------
// EXIBIÇÃO
//-----------------------------------------------------
dv.table(
    ["Ícone", "Nota", "Modificada em", "Tempo desde modificação"],
    pages.map(p => [
        getIcon(p.file.folder),  // Adiciona ícone baseado na pasta
        dv.fileLink(p.file.path, false, p.file.name),  // Link da nota
        p.file.mtime.toFormat("yyyy-MM-dd HH:mm"),  // Data formatada de modificação
        formatarIdade(p.file.mtime)  // Tempo desde a modificação
    ])
);

```
---

Last modified :   `="[[" + dateformat(date(today), "yyyy-MM-dd") + "]]"` - `$= dv.current().file.mtime`
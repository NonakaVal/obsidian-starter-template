```dataviewjs
// ==================== Configurações ====================
const pastas = ["CALENDÁRIO", "Atlas", "Esforços"];
let mesSelecionado = "2025-09";  

// ==================== Coleta as notas ====================
let notas = dv.pages(pastas.map(p => `"${p}"`).join(" OR "))
    .where(n => dv.date(n.file.ctime).toFormat("yyyy-MM") === mesSelecionado);

// ==================== Totais gerais ====================
dv.header(2, "📌 Resumo Mensal");
dv.paragraph(`Mês: **${mesSelecionado}**`);
dv.paragraph(`Total de notas criadas: **${notas.length}**`);

// ==================== Totais por pasta ====================
let porPasta = {};
for (let p of pastas) {
    porPasta[p] = notas.filter(n => n.file.folder.includes(p)).length;
}
dv.list(Object.entries(porPasta).map(([p, q]) => `${p}: **${q} notas**`));

// ==================== Distribuição semanal ====================
let porSemana = {};
for (let n of notas) {
    let semana = dv.date(n.file.ctime).toFormat("ww");
    porSemana[semana] = (porSemana[semana] || 0) + 1;
}

// ==================== Lista detalhada com botão ====================
dv.header(3, "📄 Notas do mês");

// Cria container
let container = dv.el("div", "");
let botao = document.createElement("button");
botao.textContent = "🔄 Ordenar (mais antigas primeiro)";
botao.style.margin = "8px 0";
botao.style.padding = "4px 8px";
botao.style.borderRadius = "6px";
botao.style.cursor = "pointer";
botao.style.border = "1px solid var(--text-muted)";
botao.style.background = "var(--background-secondary)";
botao.style.color = "var(--text-normal)";
container.appendChild(botao);

// Área da tabela
let tabelaDiv = document.createElement("div");
container.appendChild(tabelaDiv);

// Estado inicial
let ordemAsc = true;

// Função para renderizar tabela em HTML puro
function renderTabela() {
    tabelaDiv.innerHTML = "";

    let notasOrdenadas = ordemAsc
        ? [...notas].sort((a, b) => a.file.ctime - b.file.ctime)
        : [...notas].sort((a, b) => b.file.ctime - a.file.ctime);

    let html = `<table class="dataview table-view-table">
        <thead>
            <tr>
                <th>Data/Hora</th>
                <th>Nota</th>
                <th>Criada há</th>
            </tr>
        </thead>
        <tbody>`;

    for (let n of notasOrdenadas) {
        let data = n.file.ctime.toFormat("yyyy-MM-dd HH:mm");
        let dias = dv.date("now").diff(n.file.ctime, "days").as("days").toFixed(0);
        html += `<tr>
            <td>${data}</td>
            <td>${n.file.link}</td>
            <td>${dias} dias</td>
        </tr>`;
    }

    html += "</tbody></table>";
    tabelaDiv.innerHTML = html;
}

// Evento do botão
botao.addEventListener("click", () => {
    ordemAsc = !ordemAsc;
    botao.textContent = ordemAsc
        ? "🔄 Ordenar (mais antigas primeiro)"
        : "🔄 Ordenar (mais recentes primeiro)";
    renderTabela();
});

// Render inicial
renderTabela();

```
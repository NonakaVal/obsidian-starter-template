---
created: <% tp.date.now("YYYY-MM-DD @ HH:mm") %>
cssclasses:
  - wide-page
tags:
  - calendar/monthly
---

# <% tp.date.now("YYYY-MM, MMM") %>

<< [[<% moment(tp.file.title,'YYYY-MM').add(-1,'month').format("YYYY-MM") %>|⏪ Last month(<% moment(tp.file.title,'YYYY-MM').add(-1,'month').format("YYYY-MM") %>)]] | [[<% moment(tp.file.title,'YYYY-MM').add(1,'month').format("YYYY-MM") %>|Next month(<% moment(tp.file.title,'YYYY-MM').add(1,'month').format("YYYY-MM") %>) ⏩]] >>


```dataviewjs
// =============================
// 📊 ANÁLISE DE HUMOR (7 dias)
// =============================
const startDate = moment('<% tp.date.now("YYYY-MM-DD", -30) %>', 'YYYY-MM-DD');
const endDate = moment('<% tp.date.now("YYYY-MM-DD") %>', 'YYYY-MM-DD');

const moodScale = {
    "😄 – Happy": 5, "🙂 – Neutral": 4, "😐 – Meh": 3, "😞 – Sad": 2, "😠 – Frustrated": 1
};

const moodColors = { 5: '#4caf50', 4: '#8bc34a', 3: '#ffc107', 2: '#ff9800', 1: '#f44336' };
const moodLabels = Object.fromEntries(Object.entries(moodScale).map(([k, v]) => [v, k]));

const labels = [], data = [], colors = [];
const moodCount = {};
let totalValue = 0;
let daysWithMood = 0;

// Coleta dados
for (let p of dv.pages('#calendar/daily').sort(p => p.file.name, 'asc')) {
    const d = moment(p.file.name, 'YYYY-MM-DD');
    const mood = p["daily-mood"];
    const value = moodScale[mood];

    if (d.isBetween(startDate, endDate, null, '[]') && value) {
        labels.push(d.format('DD/MM'));
        data.push(value);
        colors.push(moodColors[value]);
        moodCount[value] = (moodCount[value] || 0) + 1;
        totalValue += value;
        daysWithMood++;
    }
}

// =============================
// 📈 RESUMO DE HUMOR
// =============================
const averageMood = daysWithMood > 0 ? (totalValue / daysWithMood).toFixed(1) : 0;

// Encontrar humor mais frequente
let mostFrequentMood = null;
let maxCount = 0;
for (const [value, count] of Object.entries(moodCount)) {
    if (count > maxCount) {
        maxCount = count;
        mostFrequentMood = parseInt(value);
    }
}

// Determinar tendência
let trend = "→ Estável";
if (data.length >= 2) {
    const firstHalf = data.slice(0, Math.floor(data.length / 2));
    const secondHalf = data.slice(Math.floor(data.length / 2));
    const avgFirst = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
    const avgSecond = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;
    
    if (avgSecond > avgFirst + 0.3) trend = "📈 Melhorando";
    else if (avgSecond < avgFirst - 0.3) trend = "📉 Piorando";
}

// Criar resumo
const summaryDiv = dv.el("div", "");
summaryDiv.style.cssText = `
    background: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 15px;
    border-left: 4px solid #7e57c2;
`;

// Estatísticas principais
const statsHTML = `
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 8px; margin-bottom: 12px;">
    <div style="text-align: center; padding: 8px; background: rgba(255,255,255,0.15); border-radius: 6px; border: 1px solid rgba(255,255,255,0.2);">
        <div style="font-size: 0.8em; color: #e0e0e0; margin-bottom: 4px;">📅 Período</div>
        <div style="font-weight: bold; font-size: 0.9em; color: #ffffff;">${startDate.format('DD/MM')} - ${endDate.format('DD/MM')}</div>
    </div>
    <div style="text-align: center; padding: 8px; background: rgba(255,255,255,0.15); border-radius: 6px; border: 1px solid rgba(255,255,255,0.2);">
        <div style="font-size: 0.8em; color: #e0e0e0; margin-bottom: 4px;">📊 Média</div>
        <div style="font-weight: bold; font-size: 0.9em; color: ${moodColors[Math.round(averageMood)] || '#ffffff'}">${averageMood}/5</div>
    </div>
    <div style="text-align: center; padding: 8px; background: rgba(255,255,255,0.15); border-radius: 6px; border: 1px solid rgba(255,255,255,0.2);">
        <div style="font-size: 0.8em; color: #e0e0e0; margin-bottom: 4px;">🎯 Mais Frequente</div>
        <div style="font-weight: bold; font-size: 0.9em; color: #ffffff;">${mostFrequentMood ? moodLabels[mostFrequentMood].split(' – ')[0] : 'N/A'}</div>
    </div>
    <div style="text-align: center; padding: 8px; background: rgba(255,255,255,0.15); border-radius: 6px; border: 1px solid rgba(255,255,255,0.2);">
        <div style="font-size: 0.8em; color: #e0e0e0; margin-bottom: 4px;">🔍 Tendência</div>
        <div style="font-weight: bold; font-size: 0.9em; color: #ffffff;">${trend}</div>
    </div>
</div>

<div style="display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap; gap: 6px; background: rgba(255,255,255,0.1); padding: 8px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.15);">
`;

// Adicionar contadores de cada humor
let summaryHTML = statsHTML;
Object.entries(moodScale).forEach(([label, value]) => {
    const count = moodCount[value] || 0;
    const percentage = daysWithMood > 0 ? ((count / daysWithMood) * 100).toFixed(0) : 0;
    const emoji = label.split(' – ')[0];
    
    summaryHTML += `
    <div style="text-align: center; min-width: 55px; padding: 6px; background: rgba(0,0,0,0.3); border-radius: 6px; border: 1px solid rgba(255,255,255,0.1);">
        <div style="font-size: 1.4em; margin-bottom: 3px;">${emoji}</div>
        <div style="font-weight: bold; font-size: 1em; color: #ffffff; margin-bottom: 2px;">${count}</div>
        <div style="font-size: 0.75em; color: #b0b0b0; font-weight: 500;">${percentage}%</div>
    </div>`;
});

summaryHTML += `</div>`;
summaryDiv.innerHTML = summaryHTML;

// =============================
// 📊 GRÁFICO
// =============================
const chartData = {
    type: 'line',
    data: {
        labels,
        datasets: [{
            data,
            borderColor: '#7e57c2',
            backgroundColor: 'rgba(126, 87, 194, 0.1)',
            pointBackgroundColor: colors,
            pointBorderColor: colors,
            borderWidth: 2,
            tension: 0.3,
            fill: true,
            pointRadius: 6,
            pointHoverRadius: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { intersect: false, mode: 'index' },
        layout: {
            padding: 10
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: ctx => `Humor: ${moodLabels[ctx.raw] || ctx.raw}`
                },
                backgroundColor: 'rgba(30, 30, 30, 0.9)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff'
            }
        },
        scales: {
            y: {
                min: 0.5, max: 5.5,
                ticks: {
                    stepSize: 1,
                    color: '#ffffff',
                    backdropColor: 'rgba(0, 0, 0, 0.5)',
                    callback: val => moodLabels[val] || val,
                    padding: 6
                },
                grid: { color: 'rgba(200, 200, 200, 0.2)' }
            },
            x: {
                ticks: {
                    color: '#ffffff',
                    backdropColor: 'rgba(0, 0, 0, 0.5)',
                    padding: 6
                },
                grid: { display: false }
            }
        }
    }
};

// Container do gráfico
const chartContainer = dv.el("div", "");
Object.assign(chartContainer.style, {
    height: '250px',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '8px',
    padding: '10px',
    marginTop: '10px'
});

// =============================
// 🚀 RENDERIZAÇÃO
// =============================
// Adicionar resumo primeiro
dv.container.appendChild(summaryDiv);

// Adicionar gráfico
dv.container.appendChild(chartContainer);
window.renderChart(chartData, chartContainer);
```

---

```dataviewjs
// =============================
// 🔹 Pomodoros + TimeEntries detalhado com filtros e agrupamento
// =============================
const root = dv.el("div", "");

// Intervalo de datas
const startDate = moment('<% tp.date.now("YYYY-MM-DD", -30) %>', 'YYYY-MM-DD');
const endDate = moment('<% tp.date.now("YYYY-MM-DD") %>', 'YYYY-MM-DD');

// -----------------------------
// 🔹 Captura Pomodoros (#calendar/daily)
let pomodoros = [];
for (let page of dv.pages("#calendar/daily").where(p => Array.isArray(p.pomodoros))) {
    for (let p of page.pomodoros) {
        let start = new Date(p.startTime);
        let end = new Date(p.endTime);
        if (isNaN(start) || start < startDate || start > endDate) continue;

        let duration = typeof p.plannedDuration === "number" ? p.plannedDuration : (!isNaN(end) ? (end - start) / 60000 : 0);

        pomodoros.push({
            start: start,
            end: end,
            duration: duration,
            type: p.type ?? "—",
            done: p.completed ? "✅" : "❌",
            source: "Pomodoro",
            file: page.file
        });
    }
}

// -----------------------------
// 🔹 Captura TimeEntries (#task)
let timeEntries = [];
for (let page of dv.pages("#task").where(p => Array.isArray(p.timeEntries))) {
    for (let te of page.timeEntries) {
        let start = new Date(te.startTime);
        let end = new Date(te.endTime);
        if (isNaN(start) || isNaN(end) || start < startDate || start > endDate) continue;

        let duration = (end - start) / 60000; // minutos
        timeEntries.push({
            start: start,
            end: end,
            duration: duration,
            type: te.description ?? "—",
            done: "—",
            source: "TimeEntry",
            file: page.file
        });
    }
}

// -----------------------------
// 🔹 Combina e ordena por horário
let combined = [...pomodoros, ...timeEntries].sort((a,b) => a.start - b.start);

// -----------------------------
// 📊 RESUMO ESTILIZADO
// -----------------------------
const totalMin = combined.reduce((acc, e) => acc + (e.duration || 0), 0);
const totalPom = combined.filter(e => e.source === "Pomodoro").length;
const totalTE = combined.filter(e => e.source === "TimeEntry").length;
const completedPom = combined.filter(e => e.source === "Pomodoro" && e.done === "✅").length;
const completionRate = totalPom > 0 ? Math.round((completedPom / totalPom) * 100) : 0;

// Criar container do resumo
const summaryDiv = document.createElement("div");
summaryDiv.style.cssText = `
    background: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 15px;
    border-left: 4px solid #7e57c2;
`;

// Conteúdo do resumo
summaryDiv.innerHTML = `
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 8px; margin-bottom: 10px;">
    <div style="text-align: center; padding: 8px; background: rgba(255,255,255,0.15); border-radius: 6px; border: 1px solid rgba(255,255,255,0.2);">
        <div style="font-size: 0.8em; color: #e0e0e0; margin-bottom: 4px;">📅 Período</div>
        <div style="font-weight: bold; font-size: 0.9em; color: #ffffff;">${startDate.format("DD/MM")} → ${endDate.format("DD/MM")}</div>
    </div>
    <div style="text-align: center; padding: 8px; background: rgba(255,255,255,0.15); border-radius: 6px; border: 1px solid rgba(255,255,255,0.2);">
        <div style="font-size: 0.8em; color: #e0e0e0; margin-bottom: 4px;">⏱️ Tempo Total</div>
        <div style="font-weight: bold; font-size: 0.9em; color: #4caf50;">${Math.ceil(totalMin)} min</div>
    </div>
    <div style="text-align: center; padding: 8px; background: rgba(255,255,255,0.15); border-radius: 6px; border: 1px solid rgba(255,255,255,0.2);">
        <div style="font-size: 0.8em; color: #e0e0e0; margin-bottom: 4px;">🍅 Pomodoros</div>
        <div style="font-weight: bold; font-size: 0.9em; color: #ff9800;">${totalPom}</div>
    </div>
    <div style="text-align: center; padding: 8px; background: rgba(255,255,255,0.15); border-radius: 6px; border: 1px solid rgba(255,255,255,0.2);">
        <div style="font-size: 0.8em; color: #e0e0e0; margin-bottom: 4px;">📝 TimeEntries</div>
        <div style="font-weight: bold; font-size: 0.9em; color: #2196f3;">${totalTE}</div>
    </div>
</div>

<div style="display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap; gap: 6px; background: rgba(255,255,255,0.1); padding: 8px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.15);">
    <div style="text-align: center; min-width: 70px; padding: 6px; background: rgba(0,0,0,0.3); border-radius: 6px; border: 1px solid rgba(255,255,255,0.1);">
        <div style="font-size: 1.2em; margin-bottom: 3px;">✅</div>
        <div style="font-weight: bold; font-size: 0.9em; color: #ffffff; margin-bottom: 2px;">${completedPom}</div>
        <div style="font-size: 0.75em; color: #b0b0b0; font-weight: 500;">Concluídos</div>
    </div>
    <div style="text-align: center; min-width: 70px; padding: 6px; background: rgba(0,0,0,0.3); border-radius: 6px; border: 1px solid rgba(255,255,255,0.1);">
        <div style="font-size: 1.2em; margin-bottom: 3px;">❌</div>
        <div style="font-weight: bold; font-size: 0.9em; color: #ffffff; margin-bottom: 2px;">${totalPom - completedPom}</div>
        <div style="font-size: 0.75em; color: #b0b0b0; font-weight: 500;">Incompletos</div>
    </div>
    <div style="text-align: center; min-width: 70px; padding: 6px; background: rgba(0,0,0,0.3); border-radius: 6px; border: 1px solid rgba(255,255,255,0.1);">
        <div style="font-size: 1.2em; margin-bottom: 3px;">📊</div>
        <div style="font-weight: bold; font-size: 0.9em; color: #ffffff; margin-bottom: 2px;">${completionRate}%</div>
        <div style="font-size: 0.75em; color: #b0b0b0; font-weight: 500;">Taxa de Sucesso</div>
    </div>
    <div style="text-align: center; min-width: 70px; padding: 6px; background: rgba(0,0,0,0.3); border-radius: 6px; border: 1px solid rgba(255,255,255,0.1);">
        <div style="font-size: 1.2em; margin-bottom: 3px;">⏰</div>
        <div style="font-weight: bold; font-size: 0.9em; color: #ffffff; margin-bottom: 2px;">${Math.ceil(totalMin / 60)}h</div>
        <div style="font-size: 0.75em; color: #b0b0b0; font-weight: 500;">Total em Horas</div>
    </div>
</div>
`;

// Adicionar resumo ao root
root.appendChild(summaryDiv);

// -----------------------------
// 🔹 Seletores de agrupamento/ordenar
const controls = document.createElement("div");
controls.style.cssText = `
    margin-bottom: 12px;
    padding: 8px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 6px;
    border: 1px solid rgba(255,255,255,0.1);
`;

// Criando o select via DOM
const sortSelect = document.createElement("select");
sortSelect.style.cssText = `
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 4px;
    padding: 4px 8px;
    color: #ffffff;
    font-size: 0.9em;
`;

const options = [
    {value: "start", text: "⏰ Horário"},
    {value: "type", text: "🎯 Tipo/Descrição"},
    {value: "done", text: "✅ Feito"},
    {value: "note", text: "🔗 Nota/Arquivo"}
];

options.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.text;
    option.style.cssText = `
        background: #2d2d2d;
        color: #ffffff;
    `;
    sortSelect.appendChild(option);
});

const label = document.createElement("span");
label.textContent = "Agrupar/Ordenar por: ";
label.style.cssText = `
    color: #e0e0e0;
    font-size: 0.9em;
    margin-right: 8px;
`;

controls.appendChild(label);
controls.appendChild(sortSelect);
root.appendChild(controls);

// -----------------------------
// 🔹 Renderizar tabela com agrupamento
function renderTable(data, groupBy = "start") {
    const oldTable = root.querySelector("table");
    if(oldTable) oldTable.remove();

    const table = document.createElement("table");
    table.style.cssText = `
        width: 100%;
        border-collapse: collapse;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 6px;
        overflow: hidden;
    `;

    const headers = ["⏰ Horário", "⏱️ Duração", "🎯 Tipo / Descrição", "✅ Feito", "🔗 Nota"];
    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");

    for (let h of headers) {
        const th = document.createElement("th");
        th.textContent = h;
        th.style.cssText = `
            text-align: left;
            padding: 8px 12px;
            border-bottom: 2px solid rgba(255,255,255,0.2);
            background: rgba(255,255,255,0.1);
            color: #ffffff;
            font-weight: 600;
            font-size: 0.9em;
        `;
        trHead.appendChild(th);
    }
    thead.appendChild(trHead);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    function getIcon(entry) {
        if(entry.source === "Pomodoro") {
            if(entry.type === "short-break") return "🛌";
            if(entry.type === "long-break") return "☕";
            if(entry.type === "work") return "🍅";
            return "🍅";
        } else if(entry.source === "TimeEntry") {
            return "📝";
        }
        return "—";
    }

    // Agrupa
    let grouped = {};
    data.forEach(e => {
        let key;
        if(groupBy === "type") key = e.type || "—";
        else if(groupBy === "done") key = e.done || "—";
        else if(groupBy === "note") key = e.file?.path || "—";
        else key = "Todos"; // start ou sem agrupamento

        if(!grouped[key]) grouped[key] = [];
        grouped[key].push(e);
    });

    for (let group in grouped) {
        // Linha de título do grupo
        if(groupBy !== "start") {
            const trGroup = document.createElement("tr");
            const tdGroup = document.createElement("td");
            tdGroup.colSpan = headers.length;
            tdGroup.textContent = group;
            tdGroup.style.cssText = `
                font-weight: bold;
                background: rgba(126, 87, 194, 0.3);
                padding: 8px 12px;
                color: #ffffff;
                border-bottom: 1px solid rgba(255,255,255,0.1);
                font-size: 0.9em;
            `;
            trGroup.appendChild(tdGroup);
            tbody.appendChild(trGroup);
        }

        // Entradas do grupo
        grouped[group].forEach(entry => {
            const tr = document.createElement("tr");
            tr.style.cssText = `border-bottom: 1px solid rgba(255,255,255,0.05);`;

            const tdTime = document.createElement("td");
            tdTime.textContent = `${moment(entry.start).format("HH:mm")} → ${moment(entry.end).format("HH:mm")}`;
            tdTime.style.cssText = `
                padding: 6px 12px;
                font-family: monospace;
                color: #e0e0e0;
                font-size: 0.85em;
            `;
            tr.appendChild(tdTime);

            const tdDur = document.createElement("td");
            tdDur.textContent = `${getIcon(entry)} ${Math.ceil(entry.duration)} min`;
            tdDur.style.cssText = `
                padding: 6px 12px;
                color: #e0e0e0;
                font-size: 0.85em;
                font-weight: 500;
            `;
            tr.appendChild(tdDur);

            const tdType = document.createElement("td");
            tdType.textContent = entry.type ?? "—";
            tdType.style.cssText = `
                padding: 6px 12px;
                color: #e0e0e0;
                font-size: 0.85em;
            `;
            tr.appendChild(tdType);

            const tdDone = document.createElement("td");
            tdDone.textContent = entry.done ?? "—";
            tdDone.style.cssText = `
                padding: 6px 12px;
                color: #e0e0e0;
                font-size: 0.85em;
                text-align: center;
            `;
            tr.appendChild(tdDone);

            const tdLink = document.createElement("td");
            tdLink.style.cssText = `
                padding: 6px 12px;
                color: #e0e0e0;
                font-size: 0.85em;
            `;
            if(entry.file) tdLink.appendChild(dv.el("span", entry.file.link));
            else tdLink.textContent = "—";
            tr.appendChild(tdLink);

            tbody.appendChild(tr);
        });
    }

    table.appendChild(tbody);
    root.appendChild(table);
}

// Render inicial
renderTable(combined);

// -----------------------------
// 🔹 Lógica de seleção
sortSelect.addEventListener("change", (e) => {
    const val = e.target.value;
    let sorted = [...combined];
    if(val === "type") sorted.sort((a,b) => (a.type||"").localeCompare(b.type||""));
    else if(val === "done") sorted.sort((a,b) => (a.done||"").localeCompare(b.done||""));
    else if(val === "note") sorted.sort((a,b) => ((a.file?.path)||"").localeCompare((b.file?.path)||""));
    else sorted.sort((a,b) => a.start - b.start);

    renderTable(sorted, val);
});
```

---
---

```dataviewjs
//-----------------------------------------------------
// ⚙️ CONFIGURAÇÕES — altere APENAS esta seção
//-----------------------------------------------------
const CONFIG = {
    tag: "#calendar/daily",      // Tag usada para filtrar notas
    sectionHeader: "Logs",       // Cabeçalho da seção alvo
    rangeDays: 30,               // Intervalo em dias (padrão: últimos 30)
    sortOrder: "desc"            // Opções: "asc" | "desc"
};

//-----------------------------------------------------
// 🎯 CATEGORIAS PARA AGRUPAMENTO
//-----------------------------------------------------
const categories = [
  { icon: "🧩", name: "Aprendizado" },
  { icon: "⭐", name: "Algo muito bom" },
  { icon: "😞", name: "Frustração / Erros" },
  { icon: "😤", name: "Estresse / Sobrecarga" },
  { icon: "🤔", name: "Reflexões / Emoções" },
  { icon: "✅", name: "Conquistas / Realizações" },
  { icon: "💡", name: "Insights / Ideias" },
  { icon: "⚠️", name: "Obstáculos" },
  { icon: "🪴", name: "Hábitos / Rotina" },
];

//-----------------------------------------------------
// 🗓️ INTERVALO DE DATAS — agora dinâmico e correto
//-----------------------------------------------------
const endDate = moment(); // Hoje
const startDate = moment().subtract(CONFIG.rangeDays, "days"); // X dias atrás

//-----------------------------------------------------
// 📄 CAPTURA DE PÁGINAS VÁLIDAS
//-----------------------------------------------------
const pages = dv.pages(CONFIG.tag)
    .where(p => {
        const fileDate = moment(p.file.name, "YYYY-MM-DD");
        return fileDate.isBetween(startDate, endDate, null, '[]');
    })
    .sort(p => p.file.name, CONFIG.sortOrder);

//-----------------------------------------------------
// 🧩 EXTRAÇÃO DO CONTEÚDO DA SEÇÃO DEFINIDA
//-----------------------------------------------------
let allEntries = [];
let categoryTotals = Object.fromEntries(categories.map(c => [c.name, 0]));
let totalLogs = 0;

for (const page of pages) {
    const content = await dv.io.load(page.file.path);
    const lines = content.split('\n');
    let insideTarget = false;
    let sectionContent = [];

    for (const line of lines) {
        if (line.startsWith("# " + CONFIG.sectionHeader)) {
            insideTarget = true;
            continue;
        }
        if (line.startsWith("# ") && insideTarget) break;
        if (insideTarget && line.trim() !== "") {
            sectionContent.push(line.trim());
        }
    }

    if (sectionContent.length > 0) {
        // Para cada linha do conteúdo, criar uma entrada separada
        sectionContent.forEach(line => {
            // Detectar categoria baseada no emoji
            let detectedCategory = "Outros";
            let categoryIcon = "📄";
            
            for (const category of categories) {
                if (line.includes(category.icon)) {
                    detectedCategory = category.name;
                    categoryIcon = category.icon;
                    categoryTotals[category.name]++;
                    totalLogs++;
                    break;
                }
            }
            
            allEntries.push({
                date: page.file.link,
                content: line,
                category: detectedCategory,
                icon: categoryIcon,
                rawContent: line.replace(/[🧩⭐😞😤🤔✅💡⚠️🪴]/g, '').trim() // Remove emoji para display
            });
        });
    }
}

//-----------------------------------------------------
// 📊 CARD DE CONTAGEM NO TOPO
//-----------------------------------------------------
function renderStatsCard() {
    const statsCard = document.createElement("div");
    statsCard.style.marginBottom = "12px";
    statsCard.style.padding = "12px";
    statsCard.style.border = "1px solid var(--background-modifier-border)";
    statsCard.style.borderRadius = "6px";
    statsCard.style.backgroundColor = "var(--background-secondary)";
    
    let statsHTML = `
        <div style="display: flex; justify-content: center; align-items: center; gap: 16px; margin-bottom: 8px;">
    `;
    
    for (const cat of categories) {
        const count = categoryTotals[cat.name] || 0;
        const percentage = totalLogs > 0 ? ((count / totalLogs) * 100).toFixed(1) : 0;
        
        statsHTML += `
            <div style="display: flex; flex-direction: column; align-items: center;">
                <span style="font-size: 1.5em;">${cat.icon}</span>
                <span style="font-weight: bold; font-size: 1.1em;">${count}</span>
                <span style="font-size: 0.8em; color: var(--text-muted);">${percentage}%</span>
            </div>
        `;
    }
    
    statsHTML += `</div>`;
    
    // Total geral centralizado
    statsHTML += `
        <div style="text-align: center; padding-top: 6px; border-top: 1px solid var(--background-modifier-border);">
            <span style="font-weight: bold; font-size: 1em;">🧮 Total: ${totalLogs}</span>
        </div>
    `;
    
    statsCard.innerHTML = statsHTML;
    return statsCard;
}

//-----------------------------------------------------
// 🎛️ CONTROLES DE SELEÇÃO
//-----------------------------------------------------
const controls = document.createElement("div");
controls.style.marginBottom = "16px";
controls.style.padding = "8px";
controls.style.border = "1px solid var(--background-modifier-border)";
controls.style.borderRadius = "8px";

// Select para agrupamento
const groupSelect = document.createElement("select");
groupSelect.style.marginRight = "12px";

const groupOptions = [
    { value: "none", text: "📅 Ordenar por Data" },
    { value: "category", text: "🎯 Agrupar por Categoria" }
];

// Adicionar opções de categorias específicas
categories.forEach(category => {
    const count = categoryTotals[category.name] || 0;
    groupOptions.push({
        value: `cat-${category.name}`,
        text: `${category.icon} ${category.name} (${count})`
    });
});

groupOptions.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.text;
    groupSelect.appendChild(option);
});

// Select para ordenação
const sortSelect = document.createElement("select");

const sortOptions = [
    { value: "desc", text: "📅 Data (Mais Recente)" },
    { value: "asc", text: "📅 Data (Mais Antiga)" },
    { value: "category", text: "🔤 Categoria (A-Z)" }
];

sortOptions.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.text;
    option.selected = opt.value === CONFIG.sortOrder;
    sortSelect.appendChild(option);
});

// Adicionar controles ao container
controls.appendChild(document.createTextNode("Agrupar por: "));
controls.appendChild(groupSelect);
controls.appendChild(document.createTextNode(" Ordenar por: "));
controls.appendChild(sortSelect);

//-----------------------------------------------------
// 📊 FUNÇÃO PARA RENDERIZAR TABELA
//-----------------------------------------------------
function renderTable(entries, groupBy = "none", sortBy = CONFIG.sortOrder) {
    // Remover tabela anterior se existir
    const oldTable = dv.container.querySelector("table");
    if (oldTable) oldTable.remove();
    
    let processedEntries = [...entries];
    
    // Aplicar ordenação
    if (sortBy === "asc") {
        processedEntries.sort((a, b) => a.date > b.date ? 1 : -1);
    } else if (sortBy === "desc") {
        processedEntries.sort((a, b) => a.date < b.date ? 1 : -1);
    } else if (sortBy === "category") {
        processedEntries.sort((a, b) => a.category.localeCompare(b.category));
    }
    
    // Criar tabela
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    
    const headers = ["🗓️ Data                    ", "📝 Conteúdo"];
    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");
    
    headers.forEach(h => {
        const th = document.createElement("th");
        th.textContent = h;
        th.style.textAlign = "left";
        th.style.padding = "8px 12px";
        th.style.borderBottom = "2px solid var(--background-modifier-border)";
        th.style.backgroundColor = "var(--background-secondary)";
        trHead.appendChild(th);
    });
    thead.appendChild(trHead);
    table.appendChild(thead);
    
    const tbody = document.createElement("tbody");
    
    if (groupBy === "none" || groupBy.startsWith("cat-")) {
        // Modo sem agrupamento ou categoria específica
        let filteredEntries = processedEntries;
        
        // Filtrar por categoria específica se selecionado
        if (groupBy.startsWith("cat-")) {
            const selectedCategory = groupBy.replace("cat-", "");
            filteredEntries = processedEntries.filter(entry => entry.category === selectedCategory);
        }
        
        filteredEntries.forEach(entry => {
            const tr = document.createElement("tr");
            
            // Coluna Data
            const tdDate = document.createElement("td");
            tdDate.style.padding = "6px 12px";
            tdDate.style.borderBottom = "1px solid var(--background-modifier-border)";
            tdDate.appendChild(dv.el("span", entry.date));
            tr.appendChild(tdDate);
            
            // Coluna Conteúdo
            const tdContent = document.createElement("td");
            tdContent.style.padding = "6px 12px";
            tdContent.style.borderBottom = "1px solid var(--background-modifier-border)";
            tdContent.innerHTML = `<strong>${entry.icon}</strong> ${entry.rawContent}`;
            tr.appendChild(tdContent);
            
            tbody.appendChild(tr);
        });
        
    } else if (groupBy === "category") {
        // Modo agrupado por categoria
        const grouped = {};
        
        processedEntries.forEach(entry => {
            if (!grouped[entry.category]) {
                grouped[entry.category] = [];
            }
            grouped[entry.category].push(entry);
        });
        
        // Ordenar categorias
        const sortedCategories = Object.keys(grouped).sort();
        
        sortedCategories.forEach(category => {
            const categoryEntries = grouped[category];
            const categoryInfo = categories.find(cat => cat.name === category) || { icon: "📄", name: category };
            const categoryCount = categoryEntries.length;
            
            // Linha de cabeçalho da categoria
            const trHeader = document.createElement("tr");
            const tdHeader = document.createElement("td");
            tdHeader.colSpan = 2;
            tdHeader.style.padding = "8px 12px";
            tdHeader.style.backgroundColor = "var(--background-secondary)";
            tdHeader.style.fontWeight = "bold";
            tdHeader.style.borderBottom = "2px solid var(--background-modifier-border)";
            tdHeader.textContent = `${categoryInfo.icon} ${category} (${categoryCount} entradas)`;
            trHeader.appendChild(tdHeader);
            tbody.appendChild(trHeader);
            
            // Entradas da categoria
            categoryEntries.forEach(entry => {
                const tr = document.createElement("tr");
                
                const tdDate = document.createElement("td");
                tdDate.style.padding = "6px 12px";
                tdDate.style.borderBottom = "1px solid var(--background-modifier-border)";
                tdDate.appendChild(dv.el("span", entry.date));
                tr.appendChild(tdDate);
                
                const tdContent = document.createElement("td");
                tdContent.style.padding = "6px 12px";
                tdContent.style.borderBottom = "1px solid var(--background-modifier-border)";
                tdContent.innerHTML = entry.rawContent;
                tr.appendChild(tdContent);
                
                tbody.appendChild(tr);
            });
        });
    }
    
    table.appendChild(tbody);
    dv.container.appendChild(table);
}

//-----------------------------------------------------
// 🚀 EXECUÇÃO INICIAL
//-----------------------------------------------------
// Adicionar card de estatísticas
dv.container.appendChild(renderStatsCard());

// Adicionar controles
dv.container.appendChild(controls);

// Renderizar tabela inicial
renderTable(allEntries);

//-----------------------------------------------------
// 🎛️ EVENT LISTENERS PARA OS CONTROLES
//-----------------------------------------------------
groupSelect.addEventListener("change", (e) => {
    renderTable(allEntries, e.target.value, sortSelect.value);
});

sortSelect.addEventListener("change", (e) => {
    renderTable(allEntries, groupSelect.value, e.target.value);
});
```


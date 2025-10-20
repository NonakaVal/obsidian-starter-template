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
// 🔹 Resumo
const totalMin = combined.reduce((acc, e) => acc + (e.duration || 0), 0);
const totalPom = combined.filter(e => e.source === "Pomodoro").length;
const totalTE  = combined.filter(e => e.source === "TimeEntry").length;

root.appendChild(dv.el("div", `
##### 🧩 Sessões (${startDate.format("YYYY-MM-DD")} → ${endDate.format("YYYY-MM-DD")})
- ⏱️ Total: **${Math.ceil(totalMin)} min**
- 🍅 Pomodoros: **${totalPom}**
- 📝 TimeEntries: **${totalTE}**
`));

// -----------------------------
// 🔹 Seletores de agrupamento/ordenar
const controls = document.createElement("div");
controls.style.marginBottom = "8px";

// Criando o select via DOM
const sortSelect = document.createElement("select");
const options = [
    {value: "start", text: "Horário"},
    {value: "type", text: "Tipo/Descrição"},
    {value: "done", text: "Feito"},
    {value: "note", text: "Nota/Arquivo"}
];

options.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.text;
    sortSelect.appendChild(option);
});

controls.appendChild(document.createTextNode("Agrupar/Ordenar por: "));
controls.appendChild(sortSelect);
root.appendChild(controls);

// -----------------------------
// 🔹 Renderizar tabela com agrupamento
function renderTable(data, groupBy = "start") {
    const oldTable = root.querySelector("table");
    if(oldTable) oldTable.remove();

    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";

    const headers = ["⏰ Horário", "⏱️ Duração", "🎯 Tipo / Descrição", "✅ Feito", "🔗 Nota"];
    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");

    for (let h of headers) {
        const th = document.createElement("th");
        th.textContent = h;
        th.style.textAlign = "left";
        th.style.padding = "4px 8px";
        th.style.borderBottom = "1px solid #ccc";
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
            tdGroup.style.fontWeight = "bold";
            tdGroup.style.backgroundColor = "#262626";
            tdGroup.style.padding = "6px 8px";
            trGroup.appendChild(tdGroup);
            tbody.appendChild(trGroup);
        }

        // Entradas do grupo
        grouped[group].forEach(entry => {
            const tr = document.createElement("tr");

            const tdTime = document.createElement("td");
            tdTime.textContent = `${moment(entry.start).format("HH:mm")} → ${moment(entry.end).format("HH:mm")}`;
            tdTime.style.padding = "4px 8px";
            tdTime.style.fontFamily = "monospace";
            tr.appendChild(tdTime);

            const tdDur = document.createElement("td");
            tdDur.textContent = `${getIcon(entry)} ${Math.ceil(entry.duration)} min`;
            tdDur.style.padding = "4px 8px";
            tr.appendChild(tdDur);

            const tdType = document.createElement("td");
            tdType.textContent = entry.type ?? "—";
            tdType.style.padding = "4px 8px";
            tr.appendChild(tdType);

            const tdDone = document.createElement("td");
            tdDone.textContent = entry.done ?? "—";
            tdDone.style.padding = "4px 8px";
            tr.appendChild(tdDone);

            const tdLink = document.createElement("td");
            tdLink.style.padding = "4px 8px";
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
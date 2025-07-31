# [[% TAREFAS EFFORTS]]


````tabs
tab: AREAS

```dataview
TASK
FROM "EFFORTS/AREAS" 
WHERE !completed AND !checked and type != "area_utils" 
GROUP BY file.name 
SORT file.name DESC
```
tab: PROJETOS

```dataview
TASK
FROM "EFFORTS/PROJECTS" 
WHERE !completed AND !checked and type != "area_utils" 
GROUP BY file.name 
SORT file.name DESC

tab: ARQUIVADOS

```dataview
TASK
FROM "EFFORTS/ARCHIVES" 
WHERE !completed AND !checked and type != "area_utils" 
GROUP BY file.name 
SORT file.name DESC
````
# VISÃO GERAL TAREFAS EFFORTS

````tabs

tab: VISÃO GERAL

```dataviewjs
const pages = dv.pages('"EFFORTS"')
  .where(p => !p.file.path.startsWith("EFFORTS/11_ARCHIVES"));

let totalTasks = 0;
let totalCompleted = 0;
const tableData = [];

for (let page of pages) {
  const tasks = page.file.tasks || [];
  if (tasks.length === 0) continue;

  const completedTasks = tasks.filter(t => t.completed && t.checked && t.type !== "area_utils");

  totalTasks += tasks.length;
  totalCompleted += completedTasks.length;

  tableData.push({
    file: page.file.link,
    total: tasks.length,
    completed: completedTasks.length
  });
}

dv.table(
  ["Arquivo", "Total de Tasks", "Concluídas"],
  tableData.map(row => [row.file, row.total, row.completed])
);

dv.paragraph(`**Total Geral de Tasks:** ${totalTasks}`);
dv.paragraph(`**Total Geral Concluídas:** ${totalCompleted}`);
```

---

tab: VISÃO GERAL DETALHADO

## Pendentes

```dataviewjs
const pages = dv.pages('"EFFORTS"')
  .where(p => !(p.tags?.includes("#inlog") || p.tags?.includes("#lost-codes")))
  .where(p => !p.file.path.startsWith("EFFORTS/11_ARCHIVES"));

let totalTasksPending = 0;
const tableDataPending = [];

for (let page of pages) {
  const tasks = page.file.tasks || [];
  const filteredTasks = tasks.filter(t => !t.completed && !t.checked && t.type !== "area_utils");

  if (filteredTasks.length === 0) continue;

  totalTasksPending += filteredTasks.length;

  tableDataPending.push({
    file: page.file.link,
    totalPending: filteredTasks.length,
    pendingTexts: filteredTasks.map(t => t.text).join(", "),
    created: page.created ? `[[${dv.date(page.created).toFormat("yyyy-MM-dd")}]]` : "–",
    mtime: page.file.mtime
  });
}

tableDataPending.sort((a, b) => b.mtime - a.mtime);

dv.table(
  ["Arquivo", "Pendentes", "Tarefas Pendentes", "Criado"],
  tableDataPending.map(row => [row.file, row.totalPending, row.pendingTexts, row.created])
);

dv.paragraph(`**Total Geral de Tarefas Pendentes:** ${totalTasksPending}`);
```


---


tab: TAREFAS CONCLUIDAS

```dataview
TASK
FROM "EFFORTS"
WHERE completed AND checked and type != "area_utils"
GROUP BY file.name
```

````

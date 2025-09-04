---
cssclasses:
  - no-inline
  - hide-properties_editing
  - hide-properties_reading
banner: "https://w.wallhaven.cc/full/zp/wallhaven-zp85qo.png"
---
```widgets
type: clock
```
<br><br>

`BUTTON[new_note]`     `BUTTON[collection]`          `BUTTON[lembrete]`

<br><br>


````tabs
tab: Atlas

> [!globe] **[[ATLAS]]** »  
>  `BUTTON[dash, nav]`  `BUTTON[col]`

```dataview
TABLE without id file.link as Coleção, length(file.inlinks) as Notas 
FROM "SISTEMA/COLEÇÕES"
SORT length(file.inlinks) desc


LIMIT 30
```









tab: Calendário

> [!calendar] Calendário » 
>  `BUTTON[today]` `BUTTON[days]`  
tab: Esforços

> [!mountain]  » **[[Como Esforços funciona|Esforços]]**
>  `BUTTON[areas]` `BUTTON[projects]` `BUTTON[open-tasks]`
````

```meta-bind-button
label: Lembrete
hidden: true
icon: plus
class: ""
id: lembrete
style: destructive
actions:
  - type: command
    command: quickadd:choice:7ec7e9a0-be26-4424-9caf-5751f9865da3
```
```meta-bind-button
label: Base
icon: plus
hidden: true
class: ""
id: base
style: destructive
actions:
  - type: command
    command: bases:new-file
```
```meta-bind-button
label: Coleções
hidden: true
icon: folder
class: ""
id: col
style: destructive
actions:
  - type: open
    link: "[[_COLEÇÕES]]"

```


<br><br>


---

````tabs

tab: ⏱️ Notas Alteradas Recentemente

```dataviewjs
//-----------------------------------------------------
// CONFIGURAÇÃO
//-----------------------------------------------------
const ICONES = {
    "AULAS": "📚",
    "PROJETOS": "🛠️",
    "ESFORÇOS": "⚡",
    "NOTAS": "📝",
    "ATLAS": "🌍",
    "DEFAULT": "📄"
};

const PASTAS_INCLUIR = [
    /.*\+.*/,
    /^ESFORÇOS/,
    /^ATLAS/
];

const PASTAS_EXCLUIR = [
    /^\//
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
    return ICONES[Object.keys(ICONES).find(key => upperFolder.includes(key))] || ICONES.DEFAULT;
}

function formatarIdade(data) {
    const diff = Date.now() - data.toJSDate().getTime();
    const minutos = diff / 1000 / 60;

    if (minutos < 60) return `${Math.floor(minutos)} min`;
    if (minutos < 1440) return `${Math.floor(minutos / 60)} h`;
    if (minutos < 43200) return `${Math.floor(minutos / 1440)} d`;
    if (minutos < 525600) return `${Math.floor(minutos / 43200)} m`;
    return `${Math.floor(minutos / 525600)} a`;
}

function estilizarLink(p) {
    return `**${dv.fileLink(p.file.path, false, p.file.name)}**`;
}

//-----------------------------------------------------
// COLETA E AGRUPAMENTO
//-----------------------------------------------------
const pages = dv.pages("")
    .where(p => deveIncluir(p.file.folder))
    .sort(p => p.file.mtime, 'desc')
    .limit(20);  // 🔥 Alterado para 10 notas

//-----------------------------------------------------
// EXIBIÇÃO
//-----------------------------------------------------
dv.table(
    ["", "📄 Nota", "🕒 Modificação", "⏳ Desde modificação"],
    pages.map(p => [
        getIcon(p.file.folder),
        estilizarLink(p),
        `\`${p.file.mtime.toFormat("yyyy-MM-dd HH:mm")}\``,
        `\`${formatarIdade(p.file.mtime)}\``
    ])
);

```

---
tab: 📍 Últimas notas criadas
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

tab: 🗂️ Totais Coleções

```dataview
TABLE length(file.inlinks) as Total, file.inlinks as Backlinks  
FROM "SISTEMA/COLEÇÕES"
SORT length(file.inlinks) desc


LIMIT 30
```



````

```meta-bind-button
label: Nova Coleção
hidden: true
icon: plus
class: ""
id: collection
style: destructive
actions:
  - type: command
    command: quickadd:choice:d223214e-cf0c-4a6a-9d27-bfe62d8542aa
```

`BUTTON[hotkeys]` `BUTTON[recents]` 
****
----








```meta-bind-button
label: Mapa de Templates
hidden: true
icon: code
class: ""
id: templates
style: destructive
actions:
  - type: open
    link: "[[TEMPLATES]]"
```
```meta-bind-button
label: Boas Vindas
hidden: true
class: ""
id: readme
style: destructive
actions:
  - type: open
    link: "[[Boas Vindas]]"

```


```meta-bind-button
label: Atalhos
icon: keyboard
hidden: true
class: ""
id: hotkeys
style: default
actions:
  - type: open
    link: "[[Atalhos]]"

```


```meta-bind-button
label: Nota diária
icon: calendar
hidden: true
class: “”
tooltip: “”
id: today
style: primary
actions:
  - type: command
    command: periodic-notes:open-daily-note
```

```meta-bind-button
style: default
icon: list
id: open-tasks
hidden: true
label: Tarefas
action:
  type: open
  link: "[[% TODAS TAREFAS]]"
```


```meta-bind-button
style: default
id: open-overview
hidden: true
label: Visão Geral Atlas
action:
  type: open
  link: "[[ATLAS]]"
```

```meta-bind-button
label: Criar Nota
icon: plus
hidden: true
class: ""
id: new_note
style: primary
actions:
  - type: command
    command: quickadd:choice:9dd5d65e-dae6-4ada-8590-069c6fedb6c2
```

```meta-bind-button
label: Dashboard de Notas
hidden: true
icon: notebook
class: ""
id: dash
style: primary
actions:
  - type: command
    command: dashboard-navigator:dashboard
```

```meta-bind-button
label: Navegador de Notas
hidden: true
icon: map
class: ""
id: nav
style: primary
actions:
  - type: command
    command: dashboard-navigator:navigator
```

```meta-bind-button
label: Página de busca 
hidden: true
icon: search
class: ""
id: search
style: primary
actions:
  - type: open
    link: "[[Buscar Notas]]"
```

```meta-bind-button
label: Notas Recentemente Modificadas
hidden: true
icon: clock
class: ""
id: recents
style: destructive
actions:
  - type: open
    link: "[[Notas Recentemente Modificadas]]"
```


```meta-bind-button
label: Dias 
hidden: true
class: ""
id: day
style: destructive
actions:
  - type: open
    link: "[[Dias]]"
```



```meta-bind-button
label: Areas
hidden: true
class: ""
id: areas
style: primary
actions:
  - type: open
    link: "[[_AREAS]]"
```


```meta-bind-button
label: Projetos
hidden: true
class: ""
id: projects
style: primary
actions:
  - type: open
    link: "[[_Projetos]]"
```







```meta-bind-button
label: Boas Vindas
hidden: true
class: ""
id: readme
style: destructive
actions:
  - type: open
    link: "[[Boas Vindas]]"

```


```meta-bind-button
label: Atalhos
icon: keyboard
hidden: true
class: ""
id: hotkeys
style: default
actions:
  - type: open
    link: "[[Atalhos]]"

```


```meta-bind-button
label: Nota diária
icon: calendar
hidden: true
class: “”
tooltip: “”
id: today
style: primary
actions:
  - type: command
    command: periodic-notes:open-daily-note
```



```meta-bind-button
label: Dias
hidden: true
icon: sun
class: ""
id: days
style: destructive
actions:
  - type: open
    link: "[[DIAS]]"
```




```meta-bind-button
style: default
icon: list
id: open-tasks
hidden: true
label: Tarefas
action:
  type: open
  link: "[[% TODAS TAREFAS]]"
```


```meta-bind-button
style: default
id: open-overview
hidden: true
label: Visão Geral Atlas
action:
  type: open
  link: "[[ATLAS]]"
```

```meta-bind-button
label: Criar Nota
icon: plus
hidden: true
class: ""
id: new_note
style: primary
actions:
  - type: command
    command: quickadd:choice:9dd5d65e-dae6-4ada-8590-069c6fedb6c2
```

```meta-bind-button
label: Dashboard de Notas
hidden: true
icon: notebook
class: ""
id: dash
style: primary
actions:
  - type: command
    command: dashboard-navigator:dashboard
```

```meta-bind-button
label: Navegador de Notas
hidden: true
icon: map
class: ""
id: nav
style: primary
actions:
  - type: command
    command: dashboard-navigator:navigator
```

```meta-bind-button
label: Página de busca 
hidden: true
icon: search
class: ""
id: search
style: primary
actions:
  - type: open
    link: "[[Buscar Notas]]"
```

```meta-bind-button
label: Notas Recentes
hidden: true
icon: clock
class: ""
id: recents
style: destructive
actions:
  - type: open
    link: "[[Notas Recentemente Modificadas]]"
```

```meta-bind-button
label: Areas
hidden: true
icon: list
class: ""
id: areas
style: primary
actions:
  - type: open
    link: "[[_Areas]]"
```


```meta-bind-button
label: Projetos
hidden: true
icon: list
class: ""
id: projects
style: primary
actions:
  - type: open
    link: "[[_Projetos]]"
```


[^1]: 

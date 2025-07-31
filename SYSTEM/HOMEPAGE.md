---
cssclasses:
  - no-inline
  - hide-properties_editing
  - hide-properties_reading
---
# 
`BUTTON[new_note]`   `BUTTON[hotkeys]`

### Dashboard -+ Navegar 

`BUTTON[recents]` `BUTTON[templates]`   `BUTTON[readme]`

---

> [!globe] **[[+/ATLAS|ATLAS]]** »    [[Mapas]] | [[Coleções]] | [[Fontes]]
>  `BUTTON[search, dash, nav]`

---

> [!calendar] **Calendário** » **[[Dias]]** | [[Registros]] | [[Avaliações]]   
>  `BUTTON[today]`  `BUTTON[open-tasks]`

---

> [!mountain] **[[Esforços]]** »  [[Areas]] | [[EFFORTS/+/Projetos|Projetos]] 

---



---





### Atividades Recentes
#### Últimas Alterações

~~~~note-gallery     #           padrão | opções
path: /           # opcional: pasta da nota atual | caminho/para/pasta
limit: 4            # opcional: 0 | qualquer número
recursive: true      # opcional: true | false
sort: desc           # opcional: desc | asc
sortby: mtime        # opcional: mtime | ctime | nome
fontsize: 6pt        # opcional: 6pt | NÚMEROpt | NÚMEROps
~~~~

---
#### Últimas notas criadas
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
    /^System\//     // Ignora pastas de sistema
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

```


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
label: README
icon: code
hidden: true
class: ""
id: readme
style: destructive
actions:
  - type: open
    link: "[[README]]"

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
    link: "[[ATALHOS]]"

```


```meta-bind-button
label: Nota diária
icon: calendar
hidden: true
class: “”
tooltip: “”
id: today
style: default
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
    link: "[[NOTA DE BUSCA]]"
```

```meta-bind-button
label: Alteradas Recentemente
hidden: true
icon: clock
class: ""
id: recents
style: destructive
actions:
  - type: open
    link: "[[Alterações Recentes]]"
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
    link: "[[Areas]]"
```


```meta-bind-button
label: Projetos
hidden: true
class: ""
id: projects
style: primary
actions:
  - type: open
    link: "[[Projetos]]"
```




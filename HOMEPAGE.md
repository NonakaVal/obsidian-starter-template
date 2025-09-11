---
banner: "https://w.wallhaven.cc/full/7j/wallhaven-7j3lve.png"
cssclasses:
banner_y: 0.35088
---
```widgets
type: clock
```
> [!waypoints] [[Boas Vindas]] | [[Obsidian e PKM]]  | **[[Metadados]]**  | [[Coleções]]

 <br>

`BUTTON[new]` [^1] [^4]  `BUTTON[collection]`    `BUTTON[lembrete]`   
<br>

> [!globe]+ **[[Atlas]]** [^3] » [[como + funciona|+]] | [[MOC definição|Mapas]] | [[Coleções]] 
>  >  `BUTTON[dash, nav]` [^2]  `BUTTON[col]`  `BUTTON[last]`  

--- start-multi-column: ExampleRegion3

> [!calendar]+ **[[Como Calendário funciona|Calendar]]** [^3] » [[DIAS|Dias]] | [[Como Calendário funciona|Reviews]] 
> `BUTTON[today]`   `BUTTON[task]`    [^3]

\--- end-column ---

> [!mountain]+ **[[Efforts]]** [^3] » [[Como Esforços funciona|Works]] 
> `BUTTON[areas]`  `BUTTON[project]`  [^3]
> 
>  `BUTTON[eff]`

--- end-multi-column



<br><br>
# Trabalhos... 
---
`````tabs
tab: 📝 Atividades Recentes

````tabs

tab: ⏱️ Alteradas Recentemente

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
    .limit(10);  // 🔥 Alterado para 10 notas

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

````
tab: 🗂️ Coleções

````tabs
tab: 📂 Totais Coleções

```dataview
TABLE without id file.link as Coleção, length(file.inlinks) as Notas 
FROM "SISTEMA/COLEÇÕES"
SORT length(file.inlinks) desc


LIMIT 30
```

tab: 📂 Coleções  (Links)


```dataview
TABLE length(file.inlinks) as Total, file.inlinks as Backlinks  
FROM "SISTEMA/COLEÇÕES"
SORT length(file.inlinks) desc


LIMIT 30
```

````

tab: ☑️ Tarefas

# 


````tabs
tab: Calendário 
![[% TAREFAS DO CALENDÁRIO]]

tab: Efforts
![[% TAREFAS EFFORTS]]

````


`````


```meta-bind-button
label: Nota
hidden: true
icon: plus
class: ""
id: new
style: primary
actions:
  - type: command
    command: quickadd:choice:9dd5d65e-dae6-4ada-8590-069c6fedb6c2
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


# Recursos e Sistema 


- ! [[Boas Vindas]]
- help [[Guias Práticos]]
- & [[Templates]]
- clock [[Notas Recentemente Modificadas]]
- ? [[Nick Milo's Starting Custom Callouts]]
- %  [[Atalhos]]



---


```meta-bind-button
label: Notas Recentes
hidden: true
icon: clock
class: ""
id: last
style: destructive
actions:
  - type: command
    command: obsidian-hotkeys-for-specific-files:SISTEMA/SOBRE/Notas Recentemente Modificadas.md
```



```meta-bind-button
label: Tarefas
hidden: true
icon: workflow
class: ""
id: task
style: primary
actions:
  - type: command
    command: obsidian-hotkeys-for-specific-files:SISTEMA/TEMPLATES/SNIPPET/% TODAS TAREFAS.md
```


```meta-bind-button
label: Coleções 
hidden: true
icon: layout
class: ""
id: col
style: primary
actions:
  - type: command
    command: obsidian-hotkeys-for-specific-files:SISTEMA/SOBRE/_COLEÇÕES.md
```

```meta-bind-button
label: Criar Coleção
hidden: true
icon: folder
class: ""
id: collection
style: destructive
actions:
  - type: command
    command: quickadd:choice:d223214e-cf0c-4a6a-9d27-bfe62d8542aa
```

<br><br>
<br><br>


```meta-bind-button
label: Area / Projeto
hidden: true
icon: plus
class: ""
id: eff
style: primary
actions:
  - type: command
    command: quickadd:choice:ebc3941c-ed51-4da4-abb4-bf15c72eb683
```


```meta-bind-button
label: Projetos
hidden: true
icon: swords
class: ""
id: project
style: destructive
actions:
  - type: command
    command: obsidian-hotkeys-for-specific-files:ESFORÇOS/2_PROJETOS.md
```


```meta-bind-button
label: Dias
hidden: true
icon: sun
class: ""
id: dias
style: destructive
actions:
  - type: command
    command: obsidian-hotkeys-for-specific-files:CALENDÁRIO/REVISÕES/DIAS.md
```



```meta-bind-button
label: Areas
hidden: true
icon: sword
class: ""
id: areas
style: destructive
actions:
  - type: command
    command: obsidian-hotkeys-for-specific-files:ESFORÇOS/1_AREAS.md
```



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
label: Dashboard
hidden: true
icon: book 
class: ""
id: dash
style: primary
actions:
  - type: command
    command: dashboard-navigator:dashboard
```


```meta-bind-button
label: Nota Diária
hidden: true
icon: calendar
class: ""
id: today
style: destructive
actions:
  - type: command
    command: daily-notes
```



[^1]: Seu ponto de partida e base principal.
		- Eu quero... [[Add|Adicionar]] ideias.
		- Eu quero... [[Relate|Relacionar]] ideias.
		- Eu quero... [[Communicate|Comunicar]] ideias.

[^2]: Use as seguintes coleções para navegar rapidamente pelo seu ideaverso:
	
	- Eu quero... navegar pelo meu conhecimento 
		- [[Maps|Mapas]], [[Views|Visualizações]], [[Collections|Coleções]]
	- Eu quero... navegar pelas minhas fontes 
		- [[Sources|Fontes]], [[Books|Livros]], [[Movies|Filmes]], [[Series|Séries]]
	- Eu quero... navegar pelos meus esforços 
		- [[Efforts|Esforços]]
	- Eu quero... navegar pelo meu mundo 
		- [[People|Pessoas]], [[Entities|Entidades]], [[Meetings|Reuniões]]
	- Eu quero... navegar por ideias 
		- [[Things|Coisas]], [[Statements|Declarações]], [[Concepts|Conceitos]], [[Quotes|Citações]], [[Questions|Perguntas]]

[^3]: > [!box] [[como + funciona|+]] - **[[Como Atlas funciona|Atlas]] - [[Como Calendário funciona|Calendário]] - [[Como Esforços funciona|Esforços]]** 
		
	<div style="background: linear-gradient(135deg, #2c3e50 0%, #1a2530 100%); padding: 20px; border-radius: 16px; color: #ecf0f1; box-shadow: 0 8px 25px rgba(0,0,0,0.4); margin-bottom: 24px; border: 1px solid #34495e;">
	  <h3 style="display: flex; align-items: center; gap: 10px; font-size: 1.4em; margin-top: 0; color: #3498db;">🌐 Atlas</h3>
	  <ul style="padding-left: 20px; margin-top: 10px; margin-bottom: 0;">
	    <li>📍 <strong>Espaço:</strong> Atlas</li>
	    <li>🧠 <strong>Foco:</strong> Conhecimento</li>
	    <li>♾️ <strong>Dimensão Temporal:</strong> Atemporal</li>
	    <li>💡 <strong>Intenção:</strong> Compreender</li>
	    <li>🗺️ <strong>Princípio Organizador:</strong> Espaço (relações)</li>
	  </ul>
	</div>
	
	<div style="background: linear-gradient(135deg, #2c3e50 0%, #1a2530 100%); padding: 20px; border-radius: 16px; color: #ecf0f1; box-shadow: 0 8px 25px rgba(0,0,0,0.4); margin-bottom: 24px; border: 1px solid #34495e;">
	  <h3 style="display: flex; align-items: center; gap: 10px; font-size: 1.4em; margin-top: 0; color: #e74c3c;">📅 Calendar</h3>
	  <ul style="padding-left: 20px; margin-top: 10px; margin-bottom: 0;">
	    <li>⏰ <strong>Espaço:</strong> Calendar</li>
	    <li>⏳ <strong>Foco:</strong> Tempo</li>
	    <li>📜 <strong>Dimensão Temporal:</strong> Temporal</li>
	    <li>🎯 <strong>Intenção:</strong> Focar</li>
	    <li>📈 <strong>Princípio Organizador:</strong> Sequência temporal</li>
	  </ul>
	</div>
	
	<div style="background: linear-gradient(135deg, #2c3e50 0%, #1a2530 100%); padding: 20px; border-radius: 16px; color: #ecf0f1; box-shadow: 0 8px 25px rgba(0,0,0,0.4); margin-bottom: 24px; border: 1px solid #34495e;">
	  <h3 style="display: flex; align-items: center; gap: 10px; font-size: 1.4em; margin-top: 0; color: #2ecc71;">⚡ Efforts</h3>
	  <ul style="padding-left: 20px; margin-top: 10px; margin-bottom: 0;">
	    <li>🔥 <strong>Espaço:</strong> Efforts</li>
	    <li>🏃 <strong>Foco:</strong> Ação</li>
	    <li>❗ <strong>Dimensão Temporal:</strong> Oportuno</li>
	    <li>▶️ <strong>Intenção:</strong> Agir</li>
	    <li>🚩 <strong>Princípio Organizador:</strong> Prioridade / urgência</li>
	  </ul>
	</div>


[^4]: > [!rainbow] ARC » [[Adicionar]] | [[Relacionar]] | [[Comunicar]] 
	
	![[Pasted image 20250815104904.png]]

---
banner: "https://w.wallhaven.cc/full/7j/wallhaven-7jgyre.jpg"
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
banner_y: 0.71024
---
```widgets
type: clock
```
# ...


[^5]  [^6] 

`BUTTON[new]` [^1] [^2] `BUTTON[collection]`    `BUTTON[lembrete]`   [^7] 



<br>

> [!globe]+ **[[Atlas]] »» [[como + funciona|+]] » [[MOC definição|Mapas]] » [[Coleções]]** [^3] [^4]
>  >  `BUTTON[dash, nav]`   `BUTTON[col]`  `BUTTON[last]`  [^7]

--- start-multi-column: ExampleRegion3

> [!calendar]- **[[Como Calendário funciona|Calendar]]**  »» [[DIAS|Dias]] | [[Como Calendário funciona|Reviews]] [^3]
> `BUTTON[today]`   `BUTTON[task]`    

\--- end-column ---

> [!mountain]- **[[Como Esforços funciona|Esforços]]**  »» [[Como Esforços funciona|Works]] [^3]
> `BUTTON[areas]`  `BUTTON[project]`  
> 
>  `BUTTON[eff]`

--- end-multi-column
[^7]


<br>

# Trabalhos... 

[^7]

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
    "ESFORÇOS": "⚡",
    "NOTAS": "📝",
    "ATLAS": "🌍",
    "DEFAULT": "📄"
};

// Inclui EFFORTS, ATLAS e qualquer pasta com +
const PASTAS_INCLUIR = [
    /.*\+.*/,       // Pastas com "+"
    /^ESFORÇOS/,     // Pasta EFFORTS
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

tab: Esforços
![[% TAREFAS EFFORTS]]

````


`````




[^7]
# Recursos e Sistema 


- ! [[Boas Vindas]]
- help [[Guias Práticos]]
- & [[Templates]]
- clock [[Notas Recentemente Modificadas]]
- ? [[Nick Milo's Starting Custom Callouts]]
- %  [[Atalhos]]

[^7] 
# Footnotes
---



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

[^1]: - Seu ponto de partida e base principal.
		- Eu quero... [[Adicionar]] ideias.
		- Eu quero... [[Relacionar]] ideias.
		- Eu quero... [[Comunicar]] ideias.
	

[^2]: > [!rainbow] ARC » [[Adicionar]] | [[Relacionar]] | [[Comunicar]] 
	> ![[Pasted image 20250815104904.png]]

[^3]: > [!box] [[como + funciona|+]] - **[[Como Atlas funciona|Atlas]] - [[Como Calendário funciona|Calendário]] - [[Como Esforços funciona|Esforços]]** 
	> - **A – Atlas** → Guarda referências e conhecimento geral. É o “mapa” das suas ideias, conceitos e temas.
	> - **C – Calendário** → Armazena tudo que está ligado a datas: eventos, prazos, registros cronológicos.
	> - **E – Esforços** → Contém seus projetos, tarefas e iniciativas que exigem ação.
	> - ![[Pasted image 20250816180551.png]]

[^4]: Use as seguintes coleções para navegar rapidamente pelo seu ideaverso:
	- Eu quero... navegar pelo meu conhecimento 
		- [[MOC definição|Mapas]], [[Views|Visualizações]], [[Coleções]]
	- Eu quero... navegar pelas minhas fontes 
		- [[Sources|Fontes]], [[Books|Livros]], [[Movies|Filmes]], [[Series|Séries]]
	- Eu quero... navegar pelos meus esforços 
		- [[Efforts|Esforços]]
	- Eu quero... navegar pelo meu mundo 
		- [[People|Pessoas]], [[Entities|Entidades]], [[Meetings|Reuniões]]
	- Eu quero... navegar por ideias 
		- [[Things|Coisas]], [[Statements|Declarações]], [[Concepts|Conceitos]], [[Quotes|Citações]], [[Questions|Perguntas]]

[^5]: Metadados
	
	> [!waypoints] [[Boas Vindas]] | [[Obsidian e PKM]]  | **[[Metadados]]**  | [[Coleções]]
	
	### Principais metadados:
	
	* **`created` (data de criação):**
	  Permite acompanhar a linha do tempo de suas anotações, gerar históricos ou revisões mensais/anuais.
	
	* **`up` (hierarquia):**
	  Define a nota **superior** ou contexto maior em que essa nota se encaixa.
	
	  > Ex.: um capítulo tem `up: [[Livro X]]`.
	
	* **`collection` (coleção):**
	  Agrupa notas por temas ou áreas.
	
	  > Ex.: `collection: [[AULAS]], [[CURSOS]]`
	
	
	* **`related` (notas associadas):**
	  Lista conexões manuais que complementam o **graph view**.
	
	  > Ex.: `related: [[Conceito Y]], [[Questão Z]]`.
	
	

[^6]: # 🛠 Boas Práticas
	
	- Revisão Regular: Reserve um tempo semanalmente para revisar e atualizar notas, garantindo que as informações permaneçam relevantes e corretas.
	- Limpeza de Tags e Pastas: Periodicamente, revise tags e a estrutura de pastas para evitar redundâncias ou categorias desatualizadas.
	- Backup: Faça backups regulares de sua vault para evitar perda de dados.
	- Plugins: Utilize plugins que complementam seu fluxo de trabalho, mas mantenha a simplicidade para não sobrecarregar o sistema.

[^7]: 
	| 🏚️ **Homepage**                        | Ctrl + Shift + H |
	| --------------------------------------- | ---------------- |
	| 🎛️ **Paleta de comandos**              | Ctrl + P         |
	| ➡️ **Acessar Nota**                     | Ctrl + O         |
	| 🗓️ **Nota Diária**                     | Ctrl + Shift + I |
	| ➕ **Nova Nota**                         | Ctrl + N         |
	| 📜 **Inserir Snippet Template**         | Alt + E          |
	| 🔖 **Adicionar Propriedade do Arquivo** | Ctrl + ;         |
	| 📑 **Mostrar Favoritos**                | Ctrl + Shift + B |
	| ⭐ **Favoritar Todas as Abas**           | Alt + B          |
	| 🗂️ **Explorador de Arquivos**          | Ctrl + Shift + P |
	| 📦 **Mover Arquivo**                    | Alt + M          |
	| 📄 **Mostrar Títulos**                  | Ctrl + Shift + O |
	| 🔍 **Pesquisar nos Arquivos**           | Ctrl + Shift + F |
	| 🚪 **Fechar Aba**                       | Alt + W          |
	| 🚪 **Fechar Janela**                    | Ctrl + Shift + W |
	| 🗑️ **Excluir Arquivo**                 | Ctrl + Shift + - |
	
	

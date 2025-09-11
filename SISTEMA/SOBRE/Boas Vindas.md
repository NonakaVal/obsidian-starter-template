---
cssclasses:
---

# Resumo 

Sistema integrado de **gestão do conhecimento** baseado no [[Sistema ACE|ACE folder system]] e no [[ARC Framework]], que organiza ideias, tempo e ações em um fluxo coeso. As notas se conectam por **links diretos** (`[[Nota]]`), fortalecendo a rede de conhecimento, e por **backlinks**, que revelam conexões implícitas. Para maior controle, utilizam-se **[[Metadados]]** como: `created` (data de criação), `up` (hierarquia), `collection` (coleção de pertencimento) e `related` 
(notas associadas).


---


---
> [!VIDEO]+ Introdução
> <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://drive.google.com/file/d/1Uf3IgXp_voeLt2NgQgfph4glzGCZZmW9/preview" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Ideaverse Pro Hangar"></iframe></div>

 `BUTTON[help]`


---


# [[Sistema ACE|Sistema de organização ACE]] 
O framework **ACE** (Atlas, Calendar, Efforts) é um sistema universal para organizar conhecimento, tempo e ação, complementado por:





----


--- start-multi-column: ExampleRegion1  
```column-settings  
number of columns: 2  
largest column:  
```


- **A – Atlas** → Guarda referências e conhecimento geral. É o “mapa” das suas ideias, conceitos e temas.
- **C – Calendário** → Armazena tudo que está ligado a datas: eventos, prazos, registros cronológicos.
- **E – Esforços** → Contém seus projetos, tarefas e iniciativas que exigem ação.



--- end-column ---

<div style="position:relative; min-height:200px; border:1px dashed #ccc">
  <img src="Pasted image 20250816180551.png" alt="Imagem" width="190"
       style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);">
</div>

--- end-multi-column
## Adaptação usada.

```
📂 + Pasta de captura inicial
│
📂 ATLAS — Notas e mapas de conteúdo em todos os níveis
│
├── 🧭 MAPAS — Conjunto organizado de várias notas
│
├── 📚 FONTES — Notas de conteúdo separadas por fonte
│   ├── 📄 ARTIGO — Notas de estudo de artigos
│   ├── ▶️ VÍDEOS — Notas sobre vídeos
│   ├── 📙 LIVROS — Notas sobre livros
│   └── ...
│
📂 🚀 ESFORÇOS — Notas de planejamento e revisão de trabalho
│
├── 📂 ÁREAS — Gestão e planejamento de áreas contínuas
├── 📂 PROJETOS — Objetivos com metas definidas
└── 📂 ARQUIVOS — Projetos concluídos ou abandonados
│
📂 📅 CALENDÁRIO — Notas diárias, periódicas ou de revisão
│
├── 📂 DIA
└── 📂 REVISÃO
│
📂 ⚙️ SISTEMA — Notas e pastas de uso do sistema
│
├── 🗂️ COLEÇÕES - Notas de segmentação
├── 🖼️ MÍDIAS
└── 📋 TEMPLATES — Modelos pré-formatados de uso
    ├── 📂 FORMATAÇÃO
    └── 📂 SNIPPET

```
---

# [[ARC Framework]]
ARC define o fluxo das suas ideias pelo tempo e espaço, muito além disso. esse é um framework que amplia seu processo criativo.

**Ciclo**: Novas ideias → Organização natural → Aplicação concreta = Sistema autossustentável de aprendizado.

> [!rainbow] ARC » [[Adicionar]] | [[Relacionar]] | [[Comunicar]] 

![[Pasted image 20250815104904.png]]

# [[Metadados]]

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



# 🛠 Boas Práticas

- Revisão Regular: Reserve um tempo semanalmente para revisar e atualizar notas, garantindo que as informações permaneçam relevantes e corretas.
- Limpeza de Tags e Pastas: Periodicamente, revise tags e a estrutura de pastas para evitar redundâncias ou categorias desatualizadas.
- Backup: Faça backups regulares de sua vault para evitar perda de dados.
- Plugins: Utilize plugins que complementam seu fluxo de trabalho, mas mantenha a simplicidade para não sobrecarregar o sistema.
---
# 🔌 Plugins

| Plugin                                                                                         | Descrição Breve                                                           |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [Advanced URI](https://github.com/Vinzent03/obsidian-advanced-uri)                             | Controle do vault via URLs                                                |
| [BRAT](https://github.com/TfTHacker/obsidian42-brat)                                           | Plugins beta com atualizações automáticas                                 |
| [Calendar](https://github.com/liamcain/obsidian-calendar-plugin)                               | Calendário para notas diárias                                             |
| [Callout Manager](https://github.com/eth-p/obsidian-callout-manager)                           | Criação de callouts sem CSS                                               |
| [Charts View](https://github.com/caronchen/obsidian-chartsview-plugin)                         | Geração de gráficos interativos                                           |
| [Commander](https://github.com/phibr0/obsidian-commander)                                      | Comandos personalizados                                                   |
| [Custom Frames](https://github.com/gino-ple-bags/obsidian-custom-frames)                       | Embeds de páginas web                                                     |
| Dashboard Navigator                                                                            | Substituído por [Homepage](https://github.com/mirnovov/obsidian-homepage) |
| [Datacore](https://github.com/blacksmithgu/obsidian-datacore)                                  | Engine de dados moderna                                                   |
| [Dataview](https://github.com/blacksmithgu/obsidian-dataview)                                  | Consulta de notas como banco de dados                                     |
| [Editing Toolbar](https://github.com/cumany/obsidian-editing-toolbar)                          | Barra de edição flutuante                                                 |
| [Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin)                          | Ferramenta de desenho e quadros                                           |
| [Force note view mode](https://github.com/bwca/obsidian-force-view-mode-of-note)               | Define modo fixo de abertura das notas                                    |
| [Home tab](https://github.com/oliverschwendener/obsidian-home-tab)                             | Aba inicial como em navegador                                             |
| [Homepage](https://github.com/mirnovov/obsidian-homepage)                                      | Define a nota inicial ao abrir o Obsidian                                 |
| [Hotkeys for specific files](https://github.com/Vinzent03/obsidian-hotkeys-for-specific-files) | Atalhos para abrir arquivos específicos                                   |
| [Iconic](https://github.com/aidenlx/obsidian-iconic)                                           | Ícones personalizados para arquivos                                       |
| [JS Engine](https://github.com/Fevol/obsidian-js-engine)                                       | Permite execução JS para plugins                                          |
| [List Callouts](https://github.com/mgmeyers/obsidian-list-callouts)                            | Callouts a partir de listas simples                                       |
| [Meta Bind](https://github.com/mnaouass/obsidian-meta-bind-plugin)                             | Inputs conectados ao frontmatter                                          |
| [Outliner](https://github.com/vslinko/obsidian-outliner)                                       | Estilo outliner com atalhos de organização                                |
| [Paste URL into selection](https://github.com/denolehov/obsidian-url-into-selection)           | Transforma texto em link ao colar URL                                     |
| [Periodic Notes](https://github.com/liamcain/obsidian-periodic-notes)                          | Notas periódicas (semana/mês/ano)                                         |
| [Projects](https://github.com/marcusolsson/obsidian-projects)                                  | Tabela, kanban e calendário para projetos                                 |
| [QuickAdd](https://github.com/chhoumann/quickadd)                                              | Captura rápida de conteúdos                                               |
| [Recent Files](https://github.com/tgrosinger/recent-files-obsidian)                            | Lista de arquivos abertos recentemente                                    |
| [Status Bar Organizer](https://github.com/L7Cy/obsidian-customizable-statusbar)                | Customização da barra de status                                           |
| [Style Settings](https://github.com/mgmeyers/obsidian-style-settings)                          | Interface gráfica para temas e plugins                                    |
| [Tabs](https://github.com/git-yustasse/obsidian-tabs)                                          | Abas de navegação entre arquivos                                          |
| [Tasks](https://github.com/obsidian-tasks-group/obsidian-tasks)                                | Tarefas com datas, prioridades e filtros                                  |
| [Templater](https://github.com/SilentVoid13/Templater)                                         | Engine de templates com lógica JS                                         |

---

# 📚 Inspirações e Recursos

- [Linking Your Thinking - Nick Milo](https://www.linkingyourthinking.com/)
- [Dusk Vault](https://github.com/DuskWasHere/dusk-obsidian-vault)
- [PARA - Fortelabs](https://fortelabs.com/blog/para/)
- [Snippets Customizados](https://github.com/NonakaVal/Obsidian-CSS-Snippets)
- [Dashboard ++](https://github.com/TfTHacker/DashboardPlusPlus)
- [Multi-Column Markdown](https://github.com/ckRobinson/multi-column-markdown)
- [Modular CSS Layout](https://github.com/efemkay/obsidian-modular-css-layout)


```meta-bind-button
label: Guias Práticos
hidden: true
icon: help
class: ""
id: help
style: primary
actions:
  - type: open
    link: "[[Guias Práticos]]"

```

```meta-bind-button
label: Homepage
hidden: true
icon: home
class: ""
id: Homepage
style: primary
actions:
  - type: open
    link: "[[HOMEPAGE]]"

```
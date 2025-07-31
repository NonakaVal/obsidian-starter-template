---
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---
#  🧠 ALEX-OBSIDIAN

`BUTTON[home]` `BUTTON[help]`

```meta-bind-button
label: HOMEPAGE
icon: home
hidden: true
class: ""
id: home
style: primary
actions:
  - type: open
    link: "[[HOMEPAGE]]"
```
```meta-bind-button
label: Guias de Uso
icon: help
hidden: true
class: ""
id: help
style: primary
actions:
  - type: open
    link: "[[GUIAS  DE USO]]"
```
---

# 🗂️ Estrutura da Vault

## 📁 Folder System

- **📂 +** – Ponto inicial de todas as notas 
- **📂 ATLAS** – Notas de estudo e literárias
    - `MAPAS` – Mapas e índices
    - `SOURCES` – Notas de conteúdo
        - ARTIGOS · AULAS · FERRAMENTAS · LIVROS · MÚSICAS · VÍDEOS · _Cursos_
- **📂 CALENDAR**
    - `DAYS` – Notas diárias
    - `REVIEW` – Revisões mensais e anuais
- **📂 EFFORTS** – Projetos e esforços em andamento
    - `ARCHIVES` – Arquivados/concluídos
    - `AREAS` – Temas contínuos (ex: saúde, estudos)
    - `PROJECTS` – Iniciativas com prazo definido
- **📂 SISTEMA** – Organização e infraestrutura
    - `MEDIA` – Arquivos multimídia
    - `TEMPLATES` – Modelos de notas
        - `FORMAT` – Templates de formatação
        - `SNIPPETS` – Fragmentos reutilizáveis
            

---

# 🏷️ Propriedades Principais das Notas

> `Up`, `Relacionadas`, `Coleção`, `Criada em`

- **Criada em** – Link para a nota diária da data de criação
- **Up (Acima)** – Nota MOC/Índice onde a nota está organizada
    - (Usado principalmente em `SOURCES`)
- **Coleção** – Categoria principal da nota
    - (Múltiplas em `MAPS`, única em `SOURCES`)
- **Relacionadas** – Outras notas em `SOURCES` com conexão direta ou temática
    

---


# ⏹️ Templates

![[TEMPLATES]]


# ⌨️ Atalhos

![[ATALHOS]]

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

- [Dusk Vault](https://github.com/DuskWasHere/dusk-obsidian-vault)
- [PARA - Fortelabs](https://fortelabs.com/blog/para/)
- [Snippets Customizados](https://github.com/NonakaVal/Obsidian-CSS-Snippets)
- [Dashboard ++](https://github.com/TfTHacker/DashboardPlusPlus)
- [Multi-Column Markdown](https://github.com/ckRobinson/multi-column-markdown)
- [Modular CSS Layout](https://github.com/efemkay/obsidian-modular-css-layout)
    
# OBSIDIAN-ALEX
# OBSIDIAN-ALEX
# OBSIDIAN-ALEX
# OBSIDIAN-ALEX

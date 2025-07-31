  `BUTTON[homepage]`     

```meta-bind-button
label: HOMEPAGE
hidden: true
icon: home
class: ""
id: homepage
style: default
actions:
  - type: open
    link: obsidian://adv-uri?vault=ALEX-OBSIDIAN-PROTOTYPE&commandid=homepage%3Aopen-homepage

```



# Dashboard -+ Navegar 

 `BUTTON[dash, nav]`      

```meta-bind-button
label: Dashboard de Notas
hidden: true
icon: notebook
class: ""
id: dash
style: default
actions:
  - type: open
    link: obsidian://adv-uri?vault=ALEX-OBSIDIAN-PROTOTYPE&commandid=dashboard-navigator%3Adashboard
```

```meta-bind-button
label: Navegador de Notas
hidden: true
icon: map
class: ""
id: nav
style: default
actions:
  - type: open
    link: obsidian://adv-uri?vault=ALEX-OBSIDIAN-PROTOTYPE&commandid=dashboard-navigator%3Anavigator
```

---

# Criar Nota

 `BUTTON[new_note]`      `BUTTON[new_note_efforts]`  
  
```meta-bind-button
label: Nova Nota Atlas
icon: plus
hidden: true
class: ""
id: new_note
style: default
actions:
  - type: command
    command: quickadd:choice:0f27b583-2c53-4e2c-b6c7-1d2bc970de44
```

```meta-bind-button
label: Nova Nota Efortts 
icon: plus
hidden: true
class: ""
id: new_note_efforts
style: default
actions:
  - type: command
    command: quickadd:choice:ebc3941c-ed51-4da4-abb4-bf15c72eb683
```

# Acessar Notas

`BUTTON[search-n]`   `BUTTON[open-class, open-video, open-article, open-book]`  

`BUTTON[today, open-tasks]`   

`BUTTON[open-index, readme]`  `BUTTON[hotkeys]` `BUTTON[templates]`

```meta-bind-button
label: Mapa de Templates
hidden: true
icon: code
class: ""
id: templates
style: destructive
actions:
  - type: open
    link: "[[Templates]]"
```


```meta-bind-button
label: Página de Busca Notas ++
hidden: true
icon: search
class: ""
id: search-n
style: destructive
actions:
  - type: open
    link: "[[BUSCAR NOTA]]"
```


```meta-bind-button
label: README
icon: info
hidden: true
class: ""
id: readme
style: default
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
style: destructive
actions:
  - type: open
    link: "[[Hotkeys|Hotkeys]]"

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
style: destructive
icon: list
id: open-tasks
hidden: true
label: Tarefas
action:
  type: open
  link: "[[TAREFAS]]"
```


```meta-bind-button
style: default
id: open-overview
hidden: true
label: Visão Geral
action:
  type: open
  link: "[[OVERVIEW GERAL]]"
```

```meta-bind-button
style: primary
id: open-class
hidden: true
label: Aulas
action:
  type: open
  link: "[[MOC-AULAS]]"
```


```meta-bind-button
style: primary
id: open-video
hidden: true
label: Vídeos 
action:
  type: open
  link: "[[MOC-VIDEOS]]"
```

```meta-bind-button
style: primary
id: open-article
hidden: true
label: Artigos 
action:
  type: open
  link: "[[MOC-ARTIGOS]]"
```


```meta-bind-button
style: primary
id: open-book
hidden: true
label: Livros 
action:
  type: open
  link: "[[MOC-LIVROS]]"
```


```meta-bind-button
style: default
icon: list
id: open-index
hidden: true
label: Nota index
action:
  type: open
  link: "[[_index_notas]]"
```


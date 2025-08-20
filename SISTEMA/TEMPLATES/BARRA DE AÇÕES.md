# 
`BUTTON[new_note]`  

### Dashboard -+ Navegar 
---

> [!globe] **[[ATLAS]]** »   
>  `BUTTON[search, dash, nav]`

---

> [!calendar] **Calendário** » **[[DIAS|Dias]]** 
>  `BUTTON[today]` `BUTTON[days]`  

---

> [!mountain] **Esforços** » **[[Como Esforços funciona|Esforços]]**
>  `BUTTON[areas]` `BUTTON[projects]` `BUTTON[open-tasks]`

---

`BUTTON[recents]` `BUTTON[readme]`  `BUTTON[hotkeys]` 



---









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
label: Dias
hidden: true
icon: sun
class: ""
id: days
style: default
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
label: Areas
hidden: true
icon: list
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
icon: list
class: ""
id: projects
style: primary
actions:
  - type: open
    link: "[[Projetos]]"
```




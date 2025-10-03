---
cssclasses:
  - wide-page
banner: "https://w.wallhaven.cc/full/7j/wallhaven-7j3lve.png"
---

```widgets
type: clock
```




<br>

`BUTTON[new]`[^1]  `BUTTON[collection]`    `BUTTON[lembrete]`  [^2] 

<br>

> [!multi-column]
> 
>> [!globe]+ **Atlas** [^6]
>> `BUTTON[dash, nav]`   
>> 
>> `BUTTON[col]`  `BUTTON[last]` [^3]
>
>> [!calendar]+ **Calendário** [^9]
>>`BUTTON[today]`[^4]  `BUTTON[mes]` [^5] 
>>
>>`BUTTON[task]`  
>
>> [!mountain]+ **Esforços** [^11]
>> `BUTTON[areas]`  `BUTTON[project]`  
>> 
>>  `BUTTON[eff]`

---

<br><br>

> [!multi-column]
>
>> [!todo|wide-3]-  Tarefas
>>  ![[% TODAS TAREFAS]]
>
>> [!Blocks|wide-2]- Areas e Projetos
>> ![[1_AREAS]]

---

> [!multi-column]
>
>> [!tldr|wide-3]+  🕐
>> ![[recent-]]
>
>> [!box|wide-2]+ 📦
>> ![[colecoes]]



---



[^7]
# Recursos e Sistema 


- ! [[Boas Vindas 🎉]]
- help [[Guias Práticos]]
- & [[Templates]]
- clock [[Notas Recentemente Modificadas]]
- ? [[Custom Callouts]]
- %  [[Atalhos]]


```meta-bind-button
label: Revisar Mês
hidden: true
icon: calendar-days
class: ""
id: mes
style: destructive
actions:
  - type: command
    command: periodic-notes:open-monthly-note
```

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

[^1]: `Ctrl + N`

[^2]: `Alt + L`

[^3]: `Alt + H`

[^4]: `Ctrl + Shift + D`

[^5]: `Ctrl + Shift + M`

[^6]: **[[Atlas]] »» [[como + funciona|+]] » [[MOC definição|Mapas]] » [[Coleções]]** 

[^7]: 

[^8]: 

[^9]: **[[Como Calendário funciona|Calendar]]**  »» [[Dias|Dias]] | [[Como Calendário funciona|Reviews]] 

[^10]: **[[Como Esforços funciona|Esforços]]**  »» [[Como Esforços funciona|Works]] 

[^11]: **[[Como Esforços funciona|Esforços]]**  »» [[Como Esforços funciona|Works]] 

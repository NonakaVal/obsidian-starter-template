> [!calendar] **[[Como Calendário funciona|Calendário]]** » [Nota Diária](obsidian://adv-uri?vault=obsidian-ACE-ARC&commandid=periodic-notes%3Aopen-daily-note) | [Mensal](obsidian://adv-uri?vault=obsidian-ACE-ARC&commandid=periodic-notes%3Aopen-monthly-note) | [[Todas Tarefas|Tarefas]] 

````tabs

tab: Á fazer

```dataview
TASK
FROM "Calendário/Dias"
WHERE !completed AND !checked
GROUP BY file.name 

```

tab: Concluídas
```dataview
TASK
FROM "Calendário/Dias"
WHERE completed AND checked
GROUP BY file.name
SORT file.mtime asc
````

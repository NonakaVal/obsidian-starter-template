# [[% TAREFAS DO CALENDÁRIO]]

````tabs

tab: Á fazer

```dataview
TASK
FROM "CALENDAR/DAILY"
WHERE !completed AND !checked
GROUP BY file.name

```

tab: Concluídas
```dataview
TASK
FROM "CALENDAR/DAILY"
WHERE completed AND checked
GROUP BY file.name

````
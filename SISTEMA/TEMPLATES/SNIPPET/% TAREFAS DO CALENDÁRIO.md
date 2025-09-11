````tabs

tab: Á fazer

```dataview
TASK
FROM "CALENDÁRIO/DIAS"
WHERE !completed AND !checked
GROUP BY file.name

```

tab: Concluídas
```dataview
TASK
FROM "CALENDÁRIO/DIAS"
WHERE completed AND checked
GROUP BY file.name

````
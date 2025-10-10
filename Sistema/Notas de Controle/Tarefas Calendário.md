
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

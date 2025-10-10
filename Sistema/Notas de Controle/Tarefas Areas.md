````tabs

tab: Á fazer

```dataview
TASK
FROM "Esforços/Areas"
WHERE !completed AND !checked
GROUP BY file.name

```

tab: Concluídas
```dataview
TASK
FROM "Esforços/Areas"
WHERE completed AND checked
GROUP BY file.name

````

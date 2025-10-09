> [!mountain] **[[Como Esforços funciona|Esforços]]** » [[Areas]] | [[Projetos Ativos]]  
````tabs

tab: Á fazer

```dataview
TASK
FROM "Esforços/Projetos"
WHERE !completed AND !checked
GROUP BY file.name

```

tab: Concluídas
```dataview
TASK
FROM "Esforços/Projetos"
WHERE completed AND checked
GROUP BY file.name

````

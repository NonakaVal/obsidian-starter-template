````tabs
tab: AREAS

```dataview
TASK
FROM "Esforços/AREAS" 
WHERE !completed AND !checked and type != "area_utils" 
GROUP BY file.name 
SORT file.name DESC
```
tab: PROJETOS

```dataview
TASK
FROM "Esforços/PROJETOS" 
WHERE !completed AND !checked and type != "area_utils" 
GROUP BY file.name 
SORT file.name DESC

tab: ARQUIVADOS

```dataview
TASK
FROM "Esforços/ARQUIVADOS" 
WHERE !completed AND !checked and type != "area_utils" 
GROUP BY file.name 
SORT file.name DESC
````

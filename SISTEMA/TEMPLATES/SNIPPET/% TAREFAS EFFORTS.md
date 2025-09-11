````tabs
tab: AREAS

```dataview
TASK
FROM "ESFORÇOS/AREAS" 
WHERE !completed AND !checked and type != "area_utils" 
GROUP BY file.name 
SORT file.name DESC
```
tab: PROJETOS

```dataview
TASK
FROM "ESFORÇOS/PROJETOS" 
WHERE !completed AND !checked and type != "area_utils" 
GROUP BY file.name 
SORT file.name DESC

tab: ARQUIVADOS

```dataview
TASK
FROM "ESFORÇOS/ARQUIVADOS" 
WHERE !completed AND !checked and type != "area_utils" 
GROUP BY file.name 
SORT file.name DESC
````

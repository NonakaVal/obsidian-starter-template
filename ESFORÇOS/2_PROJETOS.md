# [[2_PROJETOS]]

> [!mountain] [[1_AREAS]] | [[2_PROJETOS]] 

Estes são os projetos ativos que têm mais da sua atenção. Mantenha entre 3 e 11. Priorize pela classificação.
``` dataview
TABLE WITHOUT ID
created as Criado, file.link as Projeto, resumo as Resumo, entrega as Entrega, status as Status

FROM "ESFORÇOS/PROJETOS" 
where type != "project_note"
where type = "project"
sort created DESC

LIMIT 33
```


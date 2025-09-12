
# [[1_AREAS]]

> [!mountain] [[1_AREAS]] | [[2_PROJETOS|2_PROJETOS]] 

``` dataview
TABLE WITHOUT ID
file.link as Area, file.inlinks as Notas

FROM "ESFORÇOS/AREAS"
where type != "area"
where type = "area_family"
where type != "area_note_sub"
sort created DESC
LIMIT 33
```


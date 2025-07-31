---
created: "{{date}}" 
---



>[!calendar]+ Janela de Tempo do Calendário (± 7 dias)
> Estas são as notas do calendário criadas nos 7 dias antes e depois desta nota.
> 
> ```dataview
> LIST
> FROM "Calendar"
> WHERE date(this.file.ctime) - file.ctime <= dur(1 week)
> SORT file.name asc
> LIMIT 20
> ```
> [!calendar]+ Janelas Temporais do Calendário ±1 e ±3 Dias
> 
> >[!calendar]+ ± 1 dia
> > Todas as notas criadas 1 dia antes e depois da criação desta nota. Limite `20`
> > 
> > ```dataview
> > TABLE WITHOUT ID
> > file.link as Note,
> > dateformat(created, "yyyy-MM-dd") as "Date Created"
> > 
> > FROM ""
> > 
> > WHERE date(this.file.ctime) - file.ctime <= dur(1 days)
> > 
> > SORT file.ctime asc
> > 
> > LIMIT 20
> > ```
> 
> >[!calendar]- ± 3 dias
> > Todas as notas criadas 3 dias antes e depois da criação desta nota. Limite `30`
> > 
> > ```dataview
> > TABLE WITHOUT ID
> > file.link as Note,
> > dateformat(created, "yyyy-MM-dd") as "Date Created"
> > 
> > FROM ""
> > 
> > WHERE date(this.file.ctime) - file.ctime <= dur(3 days)
> > 
> > SORT file.ctime asc
> > 
> > LIMIT 30
> > ```
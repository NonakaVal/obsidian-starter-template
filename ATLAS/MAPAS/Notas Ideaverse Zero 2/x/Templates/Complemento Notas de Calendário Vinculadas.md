> [!calendar]+ Notas do calendário apontando para esta nota  
> Todas as notas em `Calendar` que linkam para `{{title}}`  
> ```dataview
> LIST
> 
> FROM "Calendar"
> 
> WHERE contains(file.name,this.file.name)
> 
> SORT file.name desc
> ```
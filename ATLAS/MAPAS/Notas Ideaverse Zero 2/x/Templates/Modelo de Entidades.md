---
collection:
  - "[[Entidades]]"
related: 
created: "{{date}}"
---


> [!industry]+ Reuniões apontando para esta nota
> - Isso mostra todas as notas de reunião onde a propriedade `meetingGroups` está definida como `{{title}}`.
> - Isso também mostrará quaisquer notas na pasta "Calendar" onde você tenha uma linha que começa com `meeting::` e depois inclui o título desta nota: `{{title}}`.
> ```dataview
> LIST
> 
> FROM "Calendar"
> 
> WHERE contains(meetingGroups, this.file.link) OR contains(meeting, this.file.name) 
> 
> SORT file.name desc
> ```
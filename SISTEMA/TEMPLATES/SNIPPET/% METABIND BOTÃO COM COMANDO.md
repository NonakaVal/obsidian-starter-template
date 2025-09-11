 `BUTTON[<% tp.system.prompt("id")%>]`     

```meta-bind-button
label: <% tp.system.prompt("Label")%>
hidden: true
class: ""
id: <% tp.system.prompt("id")%>
style: default
actions:
  - type: command
    command: <% tp.system.clipboard() %>
```


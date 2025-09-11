---
up:
  - "[[Home Pro]]"
collection:
  - "[[Mapas]]"
related: 
created:
  - 2023-10-15
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---

````tabs

tab: FORMAT

```dataviewjs
// Obter todos os arquivos da pasta Templates
const templateFiles = dv.pages('"SISTEMA/TEMPLATES/FORMAT"')
    .sort(p => p.file.name, 'asc');

// Cabeçalhos da tabela
const headers = ["Templates", "de Propriedades"];

// Processar cada arquivo
const rows = templateFiles.map(page => {
    // Link do arquivo com ícone opcional
    const fileLink = "📋 " + dv.fileLink(page.file.path);
    
    // Contagem segura de propriedades
    let propCount = 0;
    if (page.file.frontmatter && typeof page.file.frontmatter === 'object') {
        propCount = Object.keys(page.file.frontmatter).length;
    }
    
    return [fileLink, propCount];
});

// Criar estilo para tabela
const style = document.createElement('style');
style.textContent = `
.table-view-table {
    width: 100% !important;
}
.table-view-table th:last-child,
.table-view-table td:last-child {
    text-align: center;
}
`;
document.head.appendChild(style);

// Renderizar tabela
dv.table(headers, rows);

```

tab: SNIPPET


```dataviewjs
// Obter todos os arquivos da pasta Templates
const templateFiles = dv.pages('"SISTEMA/TEMPLATES/SNIPPET"')
    .sort(p => p.file.name, 'asc');

// Cabeçalhos da tabela
const headers = ["Templates", "de Propriedades"];

// Processar cada arquivo
const rows = templateFiles.map(page => {
    // Link do arquivo com ícone opcional
    const fileLink = "📋 " + dv.fileLink(page.file.path);
    
    // Contagem segura de propriedades
    let propCount = 0;
    if (page.file.frontmatter && typeof page.file.frontmatter === 'object') {
        propCount = Object.keys(page.file.frontmatter).length;
    }
    
    return [fileLink, propCount];
});

// Criar estilo para tabela
const style = document.createElement('style');
style.textContent = `
.table-view-table {
    width: 100% !important;
}
.table-view-table th:last-child,
.table-view-table td:last-child {
    text-align: center;
}
`;
document.head.appendChild(style);

// Renderizar tabela
dv.table(headers, rows);

```
````
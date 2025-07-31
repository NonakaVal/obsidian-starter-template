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
MapasMapas~ [[Home Pro]] 

Aqui estão todos os modelos, em ordem alfabética, mostrando o número de propriedades que cada um possui.

````tabs

tab: FORMAT

```dataviewjs
// Obter todos os arquivos da pasta Templates
const templateFiles = dv.pages('"SYSTEM/TEMPLATES/FORMAT"')
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
# DATAVIEW SYSTEM TEMPLATES
````
````tabs

tab: Todos Templates
```dataviewjs
// 🧠 Lista snippets em arquivos Markdown filtrados por palavras-chave no nome do arquivo
const folderPath = "SYSTEM/TEMPLATES"; // 📁 Caminho da pasta onde estão os templates/snippets
const keywords = [""]; // 🔑 Lista de palavras-chave obrigatórias no título do arquivo (pode ser preenchida)

let tableRows = []; // 🧱 Armazena as linhas da tabela a ser exibida

// 📄 Seleciona e filtra páginas dentro da pasta-alvo, onde o nome do arquivo contém ao menos uma das palavras-chave
const pages = dv.pages()
  .where(p =>
    p.file.path.startsWith(folderPath) &&
    keywords.some(k => p.file.name.toLowerCase().includes(k.toLowerCase()))
  )
  .sort(p => p.file.name, 'desc'); // 🗂️ Ordena pela ordem alfabética decrescente do nome

// 🔁 Itera sobre os arquivos filtrados
for (const page of pages) {
  // 📥 Carrega o conteúdo do arquivo de forma assíncrona
  const content = await dv.io.load(page.file.path);

  // 🔒 Escapa delimitadores de blocos de código (```) para evitar quebra de renderização
  const safeContent = content.replace(/```/g, "\\`\\`\\`");

  // 🧱 Formata como bloco de código Markdown (tripla crase)
  const codeBlock = `\`\`\`markdown\n${safeContent.trim()}\n\`\`\``;

  // ➕ Adiciona uma linha à tabela com o link e o conteúdo formatado
  tableRows.push([page.file.link, codeBlock]);
}

// 📊 Exibe a tabela com duas colunas: nome do snippet e o código
dv.table(["📄 Note", "Content"], tableRows);


```
tab: Snippets
```dataviewjs
// 🧠 Lista snippets em arquivos Markdown filtrados por palavras-chave no nome do arquivo
const folderPath = "SYSTEM/TEMPLATES/SNIPPET"; // 📁 Caminho da pasta onde estão os templates/snippets
const keywords = [""]; // 🔑 Lista de palavras-chave obrigatórias no título do arquivo (pode ser preenchida)

let tableRows = []; // 🧱 Armazena as linhas da tabela a ser exibida

// 📄 Seleciona e filtra páginas dentro da pasta-alvo, onde o nome do arquivo contém ao menos uma das palavras-chave
const pages = dv.pages()
  .where(p =>
    p.file.path.startsWith(folderPath) &&
    keywords.some(k => p.file.name.toLowerCase().includes(k.toLowerCase()))
  )
  .sort(p => p.file.name, 'desc'); // 🗂️ Ordena pela ordem alfabética decrescente do nome

// 🔁 Itera sobre os arquivos filtrados
for (const page of pages) {
  // 📥 Carrega o conteúdo do arquivo de forma assíncrona
  const content = await dv.io.load(page.file.path);

  // 🔒 Escapa delimitadores de blocos de código (```) para evitar quebra de renderização
  const safeContent = content.replace(/```/g, "\\`\\`\\`");

  // 🧱 Formata como bloco de código Markdown (tripla crase)
  const codeBlock = `\`\`\`markdown\n${safeContent.trim()}\n\`\`\``;

  // ➕ Adiciona uma linha à tabela com o link e o conteúdo formatado
  tableRows.push([page.file.link, codeBlock]);
}

// 📊 Exibe a tabela com duas colunas: nome do snippet e o código
dv.table(["📄 Note", "Content"], tableRows);


```
````
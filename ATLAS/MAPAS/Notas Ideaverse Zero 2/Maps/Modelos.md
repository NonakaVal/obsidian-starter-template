---
up:
  - "[[Home Pro]]"
collection:
  - "[[Mapas]]"
related:
  - "[[Coleções]]"
created: 2023-10-15
rank: 4
mapState:
  - 🟨
---
Coleções~ [[Home Pro]]

> [!ghost] [[Pacotes]] | **[[Modelos]]** | [[Visuais]]

Templates mantêm as coisas organizadas. Você não vai precisar deles no começo, mas conforme você tiver mais notas, eles se tornam mais importantes, não apenas para manter tudo limpo, mas por como você pode pesquisar efetivamente pelas notas se elas compartilharem informações semelhantes. É isso que faz as [[Coleções]] ganharem vida.

Aqui estão os dois templates automáticos quando novas notas são criadas:

- Crie uma nova nota, e o [[Base Template (Templater)]] é aplicado.  
	- Apenas pressione `cmd/ctrl-n`.  
	- Adiciona três propriedades: `up`, `related` e `created`.
- Crie uma nova nota diária, e o [[Modelo Diário (Primeira Luz, Última Luz)]] é aplicado.  
	- Apenas pressione `cmd/ctrl-d`.  
	- Adiciona apenas a propriedade: `created`. 

# Visão dos Templates

Aqui estão todos os templates, em ordem alfabética, mostrando o número de propriedades que eles têm.

```dataviewjs
// Get all files from the Templates folder
const templateFiles = dv.pages('"x/Templates"').sort(page => page.file.name);

// Create table headers
const headers = ["Templates", "`#` of Properties"];

// Process each file safely
const rows = templateFiles.map(page => {
    // Safe file link with icon
    const fileLink = page.file.path.includes("x/Templates") 
        ? "📋 " + dv.fileLink(page.file.path)
        : dv.fileLink(page.file.path);
    
    // Safely count properties
    let propCount = 0;
    try {
        if (page.file.frontmatter && typeof page.file.frontmatter === 'object') {
            propCount = Object.keys(page.file.frontmatter).length;
        }
    } catch (e) {
        propCount = "Error";
    }
    
    return [fileLink, propCount];
});

// Render the table with minimal CSS for better spacing
dv.container.addClass("template-table");

// Add minimal CSS to fix spacing issue without making it too narrow
const style = document.createElement('style');
style.textContent = `
.template-table .table-view-table {
    width: 100%;
}
.template-table .table-view-table th:last-child,
.template-table .table-view-table td:last-child {
    text-align: center;
}
`;
document.head.appendChild(style);

// Render the table
dv.table(headers, rows);
```

---

# Todos os Templates, Curados

Eu acho mais útil olhar todos os templates organizando-os por ACE, e também colocando as [[Coleções]] associadas logo ao lado dos templates relacionados. Vamos começar com a pasta `+`.
## + Templates
Qualquer nova nota que você criar pressionando `cmd/ctrl-n` terá uma data `created` no topo da nota. Isso é graças a como o Ideaverse Pro usa o plugin Templater. Quer personalizar o que entra em uma nota nova? Então personalize este template: [[Base Template (Templater)]]. Mas eu recomendo mantê-lo o mais simples possível.

Se você estiver em uma nota nova ou antiga que não tem um template base e quiser adicionar um, aqui estão as três opções mais comuns:

- [[Modelo Base]]: Apenas o básico: `up`, `related` e `created`
- [[Modelo Base (com Coleção)]]: Inclui a propriedade `collection`
- [[Modelo Base (com Tags)]]: Inclui a propriedade `tags`

## Templates do Atlas
O Atlas é o lugar dos templates para manter suas ideias e conhecimentos estruturados, o que é especialmente valioso à medida que o número de suas notas aumenta.

- Pontos
	- [[Modelo de Conceitos]]  
	- [[Modelo de Entidades]]  
	- [[Modelo de Pessoas]]  
	- [[Modelo de Pessoas (Pro)]] - Inclui tempo de vida & aspectos culturais  
	- [[Modelo de Pessoas (extensão ROAR)]] - Adiciona uma forma de gerenciar relacionamentos  
	- [[Modelo de Perguntas]]  
	- [[Modelo de Citações]]  
- Mapas
	- [[Modelo de Mapa (MOC)]] - Para coleta manual, desenvolvimento, criação  
	- [[Modelo de Mapa (Visão)]] - Para painéis mais passivos e dinâmicos  
	- [[Modelo de Mapa (Coleções)]] - Para listas especificamente curadas  
- Fontes
	- [[Modelo de Livro]] - Base usada pelo BookSearch  
	- [[Modelo de Livro (Backup)]] - Caso algo dê errado, este é um backup confiável  
	- [[Modelo de Recortes]] - Use com moderação  
	- [[Modelo de Filme (QuickAdd)]] - Base usada pelo QuickAdd  
	- [[Modelo de Filme (Backup)]] - Caso algo dê errado, este é um backup confiável  
	- [[Modelo de Série (QuickAdd)]] - Base usada pelo QuickAdd  
	- [[Modelo de Série (Backup)]] - Caso algo dê errado, este é um backup confiável  

## Templates do Calendário

- Dias
	- [[Modelo Diário (Primeira Luz, Última Luz)]] - Base  
	- [[Modelo Diário (± Janela de 1 Semana)]] - Inclui uma consulta baseada em tempo  
- Registros
	- [[Modelo de Evento]]  
	- [[Modelo de Reuniões]]  
	- [[Modelo de Ideia]]  
	- [[Modelo de Coisas Boas]]  
- Revisões
	- [[Modelo de Revisão (Trimestral)]]  

## Templates de Esforços

- Áreas  
	- [[Template de Áreas]]  
- Projetos
	- [[Modelo de Projetos]]  
- Trabalhos
	- [[Modelo de Trabalhos]]  

## x Templates
A pasta x não tem templates dedicados, mas é o lugar onde todos os próprios templates reais são armazenados.

- Pacotes
	- [[Modelo de Aula]]  

# Add-ons
Estes não são templates completos, mas sim add-ons que você pode colocar dentro de notas existentes.

- Add-ons de Ideias
	- [[Complemento Notas Não Correspondidas]] - Reapresenta a coisa certa no momento certo  
	- [[Plugin Notas Não Correspondidas (Por Tag)]] - Depende de tags relacionadas  
- Add-ons de Pessoas
	- [[Modelo de Pessoas (complemento ROAR)]] - Adiciona uma forma de gerenciar relacionamentos  
- Add-ons do Calendário
	- [[Complemento Janela de Tempo (Mais-Menos 1-3 Dias)]] - Aproveita o contexto temporal  
	- [[Addon de Notas de Calendário Vinculado]] - Lista todas as notas em `Calendar` que mencionam a nota. Ótimo para reunir notas de reuniões.  
- Texto de espaço reservado
	- [[Lorem 50 add-on]] - Cerca de 50 palavras de texto dummy em latim  
	- [[Lorem 500 complemento]] - Cerca de 500 palavras de texto dummy em latim  

![[robert-mccall-black-hole-concept-art-bottom-IDV-Pro.jpg|695]]

Nota: Adicione esses templates à sua pasta de Templates conforme necessário. Se você não está familiarizado com templates, pode revisar a documentação do Obsidian [aqui](https://help.obsidian.md/Plugins/Templates).


---


Vá para [[A entrada da floresta]].
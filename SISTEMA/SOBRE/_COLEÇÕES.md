---
cssclasses:
  - wide-page
---

``` dataviewjs
// Código DataviewJS melhorado para visualização de coleções

// Obter coleções
const colecoes = dv.pages('"SISTEMA/COLEÇÕES"').sort(p => p.file.ctime, 'desc').slice(0, 33);
const totalColecoes = colecoes.length;

// Calcular estatísticas
let colecoesComNotas = 0;
let totalNotas = 0;
let colecoesComOutlinks = 0;
let totalOutlinks = 0;

for (let p of colecoes) {
    const inlinksCount = p.file.inlinks ? p.file.inlinks.length : 0;
    const outlinksCount = p.file.outlinks ? p.file.outlinks.length : 0;
    
    if (inlinksCount > 0) {
        colecoesComNotas++;
        totalNotas += inlinksCount;
    }
    
    if (outlinksCount > 0) {
        colecoesComOutlinks++;
        totalOutlinks += outlinksCount;
    }
}



// Criar container para os cartões
const container = dv.el("div", "", {
    attr: { 
        style: "display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 5px; margin-bottom: 8px;" 
    }
});

// Função para criar cartão
function criarCartao(titulo, valor, corFundo, corTexto, icone) {
    const card = dv.el("div", "", {
        attr: { 
            style: `background: ${corFundo}; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);` 
        }
    });
    card.innerHTML = `
        <div style="font-size: 14px; color: ${corTexto}; margin-bottom: 5px; display: flex; align-items: center; gap: 5px;">
            <span>${icone}</span>
            <span>${titulo}</span>
        </div>
        <div style="font-size: 24px; font-weight: bold; color: ${corTexto};">${valor}</div>
    `;
    return card;
}

// Adicionar cartões
container.appendChild(criarCartao("Total de Coleções", totalColecoes, "#e3f2fd", "#0b5394", "📂"));
container.appendChild(criarCartao("Coleções com Notas", colecoesComNotas, "#e8f5e9", "#2e7d32", "📝"));
container.appendChild(criarCartao("Total de Notas", totalNotas, "#fff3e0", "#ef6c00", "📑"));
container.appendChild(criarCartao("Coleções com Links", colecoesComOutlinks, "#e8eaf6", "#283593", "🔗"));

// Tabela melhorada
const tableData = colecoes.map(p => {
    const notasCount = p.file.inlinks ? p.file.inlinks.length : 0;
    const outlinksCount = p.file.outlinks ? p.file.outlinks.length : 0;
    const dataCriacao = p.file.ctime ? p.file.ctime.toFormat("dd/MM/yyyy") : "-";
    const diasDesdeCriacao = p.file.ctime ? Math.floor((DateTime.now() - p.file.ctime) / (1000 * 60 * 60 * 24)) : "-";
    
    // Escolher ícone baseado no número de notas
    let icone = "📁";
    if (notasCount > 10) icone = "📚";
    else if (notasCount > 5) icone = "📖";
    else if (notasCount > 0) icone = "📘";
    
    // Cor baseada na idade da coleção
    let corIdade = "#666";
    if (diasDesdeCriacao !== "-") {
        if (diasDesdeCriacao < 7) corIdade = "#2e7d32"; // Menos de 1 semana
        else if (diasDesdeCriacao < 30) corIdade = "#f57c00"; // Menos de 1 mês
    }
    
    return [
        icone + " " + p.file.link,
        notasCount,
        outlinksCount,
        dataCriacao,
        `<span style="color: ${corIdade}">${diasDesdeCriacao !== "-" ? diasDesdeCriacao + " dias" : "-"}</span>`
    ];
});

// Criar tabela
dv.table(
    ["Coleção", "Notas", "Links", "Criada em", "Idade"], 
    tableData
);

// Adicionar legenda
const legenda = dv.el("div", "", {
    attr: { 
        style: "margin-top: 20px; padding: 12px; background: #f5f5f5; border-radius: 8px; font-size: 12px; color: #666;" 
    }
});
legenda.innerHTML = `
    <div style="font-weight: bold; margin-bottom: 8px;">Legenda:</div>
    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
        <span>📚 Muitas notas (>10)</span>
        <span>📖 Algumas notas (6-10)</span>
        <span>📘 Poucas notas (1-5)</span>
        <span>📁 Sem notas</span>
    </div>
`;
```

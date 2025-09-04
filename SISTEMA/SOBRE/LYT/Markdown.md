
> [!waypoints] **Básico** »  [[Obsidian e PKM]]  |**[[Markdown]]**| [[Metadados]]  | [[Coleções]] | [[Atalhos]]   

> [!VIDEO]-
> <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://drive.google.com/file/d/1wxqhjsWQaiDVCO0DwuXpvzewpurF8efw/preview" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Ideaverse Pro Hangar"></iframe></div>
### Cabeçalhos

Use `#` no início da linha. O número de `#` define o nível (1 a 6).

**Exemplo:**
```markdown
# Título 1
## Título 2
### Título 3
#### Título 4
##### Título 5
###### Título 6
```


### Links

*   **Interno (Wikilink):** `[[Nome da Nota]]`
*   **Interno (Markdown):** `[Texto do Link](Nome%20da%20Nota.md)`
*   **Externo:** `[Texto do Link](https://exemplo.com)`
*   **Para espaços em URLs:** Use `%20` ou envolva o link com `< >`.
    *   `[nota](obsidian://open?file=Minha%20Nota.md)`
    *   `[nota](<obsidian://open?file=Minha Nota.md>)`


### Quebras de Linha

Por padrão, um único `Enter` não cria uma nova linha visível. Para forçar uma quebra de linha *dentro do mesmo parágrafo*, use:

1.  **Dois espaços** no final da linha antes de pressionar `Enter`, ou
2.  O atalho `Shift + Enter`.

**Configuração "Quebras de Linha Estritas":**
*   **Desativada (Padrão):** `Enter` único não quebra a linha.
*   **Ativada:** Segue o padrão Markdown tradicional:
    *   `Enter` sem espaços: junta as linhas.
    *   `Enter` + 2 espaços: quebra de linha (`<br>`).
    *   `Enter` duplo: novo parágrafo (`<p>`).


### Estilos de Texto

| Estilo      | Sintaxe            | Exemplo                   | Saída                   |
| :---------- | :----------------- | :------------------------ | :---------------------- |
| **Negrito** | `** **` ou `__ __` | `**Texto**`               | **Texto**               |
| *Itálico*   | `* *` ou `_ _`     | `*Texto*`                 | *Texto*                 |
| ~~Tachado~~ | `~~ ~~`            | `~~Texto~~`               | ~~Texto~~               |
| **Misto**   | Combinações        | `**Negrito e _itálico_**` | **Negrito e _itálico_** |

**Escapando formatação:** Use a barra invertida `\` antes do caractere especial para exibi-lo literalmente (ex: `\*texto\*` vira *texto*).

### Imagens

*   **Externas:** Adicione um `!` antes do link.
    ```markdown
    ![Texto Alternativo](https://url-da-imagem.jpg)
    ```
*   **Redimensionar:** Adicione `|LARGURA` ou `|LARGURAxALTURA`.
    ```markdown
    ![Texto|100](url.jpg)     // Largura 100px, altura automática
    ![Texto|100x200](url.jpg) // Largura 100px, altura 200px
    ```

### Citações

Use `>` no início da linha para criar uma citação.

**Exemplo:**
```markdown
> Esta é uma citação.
> Ela pode ter múltiplas linhas.
```

### Listas

*   **Não Ordenadas:** Use `-`, `*` ou `+`.
    ```markdown
    - Item A
    - Item B
    ```
*   **Ordenadas:** Use `n.` ou `n)`.
    ```markdown
    1. Primeiro
    2. Segundo
    ```
*   **De Tarefas:** Use `- [ ]` para pendente e `- [x]` para concluído.
    ```markdown
    - [x] Tarefa feita
    - [ ] Tarefa a fazer
    ```
*   **Aninhamento:** Use **tab** para indentar itens e criar sub-listas.

### Regra Horizontal

Use três ou mais `***`, `---` ou `___` em uma linha vazia.

```markdown
---
```

### Código

*   **Inline:** Envolva o texto com crases simples `` ` ``.
    `` `código inline` ``
*   **Bloco:** Envolva o texto com três crases simples `` ``` `` ou três tildes `~~~`.
    ````markdown
    ```javascript
    function exemplo() {
      console.log("Bloco de código");
    }
    ```
    ````

### Notas de Rodapé

Adicione uma referência `[^1]` no texto e defina-a no final do documento.

**Exemplo:**
```markdown
Texto com uma nota de rodapé[^1].

[^1]: Esta é a definição da nota.
```

### Comentários

Texto envolto por `%%` fica visível apenas no modo de edição.

```markdown
Isto é visível. %%Isto é um comentário invisível%%.
```

### Escapando Caracteres Especiais

Use `\` antes de um caractere especial para exibi-lo literalmente.

**Exemplo:** `\*Texto sem itálico\*` resulta em *Texto sem itálico*.

## 
<iframe 
  src="https://help.obsidian.md/syntax" 
  width="100%" 
  height="600" 
  frameborder="0"
  style="border:1px solid #ccc;">
</iframe>

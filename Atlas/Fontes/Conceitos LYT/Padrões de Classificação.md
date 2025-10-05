`Versão 0.7`

Com o surgimento das [[Properties|Propriedades do Obsidian]] (basicamente uma forma adequada de gerenciar metadados), é mais importante do que nunca oferecer uma coleção sugerida de boas práticas e padrões para tipos específicos de notas.

Alguns nerds podem chamar isso de "ontologias", mas aqui usaremos o termo "padrões". Lembre-se de que estes não estão gravados em pedra. São uma lista curada de boas práticas. Algumas surgiram através de uso intenso; outras são pequenos testes que ainda precisam ser validados. A contribuição da comunidade global continuará moldando os **Padrões de Classificação LYT** em futuras iterações.

Você pode esperar padrões sobre:

- O [[Sistema de Classificação para Gestão de Conhecimento Pessoal]]
- Termos
- Sistema de Ranqueamento
- Tipos específicos de Coleções
- Boas Práticas para Classificação em PKM

---

# Termos

#### Coleções

**Coleções** se referem a notas especiais que possuem "buscas salvas" (queries) que permanecem sempre atualizadas (alguns dizem "automágicas"). Elas também podem ser chamadas de "dashboards dinâmicos". Exemplos comuns incluem:

- Mapas
- Coisas, Conceitos, Pessoas
- Declarações, Perguntas, Citações
- Livros, Filmes, Séries
- Reuniões, Entidades
- Esforços

#### Vistas

**Vistas** se referem a notas que possuem "buscas salvas" (queries) para diferentes tipos de notas no seu vault, e não apenas de um tipo, como acontece nas coleções.

Elas podem ser usadas para agrupar coleções diferentes como em [[Sources]], facilitar fluxos de trabalho LYT como [[Add]], ou criar visualizações mais práticas para coleções existentes como [[People ROARs]].

---

# O Sistema de Ranqueamento 5+

O LYT usa um sistema padrão de ranqueamento de 0 a 5, com uma exceção: à medida que algumas coleções crescem em quantidade, pode surgir a necessidade de ajustar a escala. A válvula de escape para isso é usar o sistema 5+.  

Comece com o sistema 0-5, e quando sentir necessidade, avance para o 5+. O melhor exemplo disso é em [[Movies]], onde já assisti cerca de 2000 filmes e senti necessidade de dar nota 5 para grandes filmes, mas reservar o 5+ apenas para meus favoritos especiais.

---

# Boas Práticas para Classificação em PKM

- `collectionProperty`: Uma prática emergente é fazer com que propriedades especializadas comecem com a coleção a que se relacionam.  
  Ex.: `bookGroups`, `showGroups`, `peopleGroups`.  
  - Se fosse apenas `Groups`, você teria sugestões de auto-complete cheias de ruído. Ao digitar `showGroups`, quer ver apenas sugestões relevantes como "favoritos da família" ou "adaptações".
  - Além disso, ao incluir o nome da coleção na propriedade, você não precisa memorizar todas as propriedades: basta começar a digitar "book" e terá sugestões limpas como `bookGenre`, `bookCategory` e `bookAgent`.

- Singular vs Plural: Para tags, a recomendação LYT foi manter tudo no singular. Para propriedades, ainda não há consenso.

---

## Boas Práticas para Classificação por `Type`, `Category`, `Group`, `Class`, `Genre`, `Kind`

Nem toda coleção precisa de todos os tipos de classificação. **Menos é mais** — até você ter um motivo real para expandir.

Usar templates pode automatizar metadados sem esforço, permitindo criar dashboards dinâmicos rapidamente.

- `Type` (_mais abstrato_): Diferencia no nível mais alto.  
  Ex.: `bookType`: "ficção" e "não-ficção"; `showType`: "filme", "série", "peça".
- `Category` (_mais oficial_): Classificações amplamente reconhecidas.
- `Genre` (_mais oficial nas Artes_): Classificações consensuais.  
  Ex.: `showGenre`: "Ação", "Aventura", "Drama" para O Senhor dos Anéis.
- `Groups` (_mais pessoal_): Agrupamentos que você cria, não oficiais.  
  Ex.: `showGroup`: adicionar "Sci-Fi" para gerar uma visualização dinâmica só de filmes Sci-Fi.

Resumo mental do autor:
- "`type` no topo e `group` na base."
- "Preciso de algo no meio? `category` ou `genre` faz mais sentido?"

### Outros termos

- `kind`: Muito parecido com `type`, pode gerar confusão se usado junto. Melhor para pensar em "tipos de notas": Livro, Esforço, Ideia, Reunião, Filme, Pessoas, Série.
- `class`: Também próximo de `type`, raramente usado em propriedades, mas pode ser útil em contextos avançados.

---

# Padrões para Notas de Pessoas

`peopleType`: Agrupa pessoas em grandes blocos  
`peopleDomain`: Segmenta em blocos menores, mas ainda amplos  
`peopleGroups`: Cria agrupamentos personalizados

> [!contact]- 4 tipos de pessoas  
> - fictício  
> - rede  
> - notável  
> - proeminente

> [!contact]- 10 domínios de pessoas  
> 1. Artes  
> 2. Negócios  
> 3. Humanidades  
> 4. Política  
> 5. Ciência & Tecnologia  
> 6. Espiritualidade  
> 7. Esportes  
> 8. Guerra  
> 9. Figura Pública  
> 10. Outro  

Campos adicionais possíveis:  
- `lifespan`: Ex.: 1954 - 2006  
- `finalAge`: Ex.: 52  
- `culturalEra`: Ex.: "Período Romântico" (Mary Shelley)  
- `culturalWorks`: Ex.: "Frankenstein"

#### ROAR: Acompanhar Contatos e Respostas

ROAR = "Reach-Outs And Replies".  
Propriedades:  
- `ROAR`: reach-out; reply; waiting  
- `ROARrank`: 1-5  
- `ROARdetails`: resumo em uma frase  

Funciona melhor para pessoas com quem você não fala diariamente.

---

# Padrões para Notas de Ideias

A classificação de ideias quase sempre falha. Ideias devem ser livres, não engessadas.  

- Evite `ideaCategory`.  
- `ideaGroup` só funciona se for **pessoal** (ex.: "top concepts").  
- Melhor solução: usar **pastas e tags**.

---

# Padrões para Notas de Mídia

Propriedades comuns:  
- `yearXP`: Ano em que foi experienciado pela primeira vez  
- `yearXPL`: Ano em que foi experienciado pela última vez  

---

# Padrões para Notas de Saída

Outputs são complexos por envolverem diferentes estados e mídias.  

Exemplo:  
- `outputMedium`: YouTube, Newsletter  
- `outputMediumStatus`: andamento, publicado, arquivado  

O desafio é não criar infinitas propriedades redundantes.  

---

# Mais padrões virão no futuro...

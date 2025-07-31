---
up:
  - "[[Home Pro]]"
collection:
  - "[[Coleções]]"
  - "[[Mapas]]"
related: "[[Modelos]]"
created:
  - 2023-01-01
rank: 4.5
mapState:
  - 🟩
---
~ [[Mapas]]

> [!map] **[[Coleções|Coleções]]** | [[Visualizações]] | [[Mapas por Links]] | [[Mapas por Tipo]] 

"Notas de coleção" exibem notas que fazem link para ela usando a propriedade `collection`.

Estas são todas as coleções em todo o seu ideaverse, ordenadas por `rank`.

```dataview
TABLE WITHOUT ID
	choice(contains(collection,link("Maps")),
		"🗃️ " + file.link,
	file.link) as "Collections",
	
rank as Rank,
join(mapState) as State

WHERE
contains(collection,[[Coleções]]) and
!contains(file.name, "Template")

SORT rank desc, mapState desc, file.name asc
LIMIT 111
```

# Coleções ordenadas por ACE

### Coleções do Atlas

- Pontos
	- [[Coisas]] | [[Conceitos]] | [[Pessoas]] | [[Entidades]]
	- [[Declarações]] | [[Perguntas]] | [[Citações]]
- Mapas
	- [[Mapas]] | [[Coleções]] | [[Visualizações]]
- Fontes
	- [[Fontes]] | [[Livros]] | [[Filmes]] | [[Séries]] | [[Cursos]]

### Coleções do Calendário

- Dias
- Registros
	- [[Reuniões]]
- Avaliações

### Coleções de Esforços

- [[Esforços]]
- Áreas
	- [[Projetos]] | [[Projetos Ativos]] | [[Projetos em Curso]] | [[Projetos Dormindo]]
- Trabalhos

![[whelan-space-station-1978-narrow.jpg|700]]

> [!NOTE] **Collections** são um trabalho em andamento porque utilizam "Propriedades Obsidian", que ainda estão em desenvolvimento, com novas funcionalidades previstas. O que você vê aqui é muito um teste... ou como gostamos de dizer, um "trabalho em progresso".

# Instruções de instalação para coleções especiais

## Livros

- [[Livros]] | [[Modelo de Livro]]
  - Instruções atuais de instalação (Nível de dificuldade: 5/10)
    - Aperte `cmd-p`, digite `book search`, selecione `create new book note`.
    - Digite o livro desejado, selecione da lista e voilà!
    - Claro, certifique-se que o plugin "Book Search" está instalado e configurado para procurar o [[Modelo de Livro]] fornecido com o Ideaverse Pro.
  - Nota pessoal: Este é o mais fácil de desenvolver, mas preciso estar consciente para preservar o trabalho de Shadow Mapping que fiz.

## Filmes

- [[Filmes]] | [[Template de Filme (QuickAdd)]] | se necessário [[Modelo de Filme (Backup)]]
  - Instruções atuais (Nível de dificuldade: 10/10)
    - Certifique-se que seu cofre possui o plugin comunitário "Quick Add".
    - No "Pro", vá em `Settings/Community Plugins` e clique no ícone de 'abrir pasta'.
    - No navegador de arquivos, encontre a pasta chamada `quickadd`. Clique e copie.
    - Em seu Cofre, vá para `Settings/Community Plugins` e clique no ícone de 'abrir pasta'.
    - No navegador de arquivos, encontre a pasta chamada `quickadd`. Clique e cole.
    - Agora reinicie o Obsidian.
    - Para testar isso, tente apertar `Cmd-p` e digitar `add a movie`. Você vê a opção QuickAdd? Ótimo. Você está 1/3 do caminho.
    ***
    - No "Pro", encontre a pasta `x/x/Scripts`. Clique com o botão direito e escolha "Revelar no Finder".
    - Você encontrará um arquivo chamado `movie.js`. Este arquivo js oculto é usado por uma macro do QuickAdd. Se quiser que funcione imediatamente sem alterar as configurações do QuickAdd, coloque este arquivo em seu cofre exatamente neste caminho: `x/x/Scripts`.
    - Ele não aparecerá no Obsidian; você precisará movê-lo usando o Finder no Mac ou o Explorador de Arquivos no Windows.
    - Agora reinicie o Obsidian.
    ***
    - Em seu Cofre, vá em Configurações e clique em Quick Add na barra lateral.
    - Encontre `Movie Template (OuickAdd)` e clique no ícone de engrenagem.
    - Mude o "Template Path" para onde você guarda seus templates.
    - Certifique-se de que adicionou os templates "Pro", especialmente "Movie Template (QuickAdd)".
    - Apague o caminho de arquivo `Atlas/Sources/Shows` e adicione seu caminho preferido para onde quer salvar os filmes.
  - Instruções de uso
    - Aperte `Cmd-p`, digite `add a movie`, pressione enter, digite o nome do filme, selecione.
    - Voilà, uma nova nota será aberta com informações legais preenchidas automaticamente.

## Séries

- [[Séries]] | [[Template de Série (QuickAdd)]] | se necessário [[Template de Séries (Backup)]]
  - Se conseguiu fazer os "filmes" funcionar, você está 90% do caminho.
  - Para testar, tente apertar `Cmd-p` e digitar `add a series`. Você vê a opção QuickAdd? Ótimo. Tudo que você precisa fazer é mudar onde essas notas são salvas.
  ***
  - Em seu Cofre, vá em Configurações e clique em Quick Add na barra lateral.
  - Encontre `Series Template (OuickAdd)` e clique no ícone de engrenagem.
  - Mude o "Template Path" para onde você guarda seus templates.
  - Certifique-se de que adicionou os templates "Pro", especialmente "Series Template (QuickAdd)".
  - Apague o caminho de arquivo `Atlas/Sources/Shows` e adicione seu caminho preferido para onde quer salvar as séries.

# Trabalhos em andamento, talvez...

Para futuras versões do Ideaverse Pro, posso adicionar mais coleções:

- [[Outputs]] | [[Jogo]] | [[Artigo]] | [[Canção]] | [[Discurso]]

Se quiser rastrear coisas ao longo dos anos, aqui está uma lista inicial de coleções que você pode criar: _livros, filmes, músicas, artigos acadêmicos, peças teatrais, pinturas, citações, vídeos, discursos, poemas, tweets, artigos e boletins informativos_.

Não incluído aqui, mas no meu cofre pessoal, para honrar os antigos, eu também mantenho um [[Livro de Anotações Comuns]] baseado em tags.

> [!NOTE]+ Esta é uma versão sanitizada da minha nota real.
>
> - Conteúdo e links foram removidos.
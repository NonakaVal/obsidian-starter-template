> [!waypoints] **Básico** »  [[Obsidian e PKM]]  |[[Markdown]]| **[[Metadados]]**  | [[Coleções]] | [[Atalhos]]   

No **Obsidian** (e em sistemas de PKM em geral), **metadados** são informações adicionais registradas no início de cada nota, normalmente no formato **YAML frontmatter**:

```yaml
---
created: [[2025-08-19]]
up: [[Projeto X]]
collection: [[Estudos]]
related: [[Ideia A]], [[Pessoa B]]
---
```

Eles funcionam como **camadas de contexto**, facilitando a organização, a navegação e a automação de consultas com **Dataview** ou **DataviewJS**.

### Principais metadados:

* **`created` (data de criação):**
  Permite acompanhar a linha do tempo de suas anotações, gerar históricos ou revisões mensais/anuais.

* **`up` (hierarquia):**
  Define a nota **superior** ou contexto maior em que essa nota se encaixa.

  > Ex.: um capítulo tem `up: [[Livro X]]`.

* **`collection` (coleção):**
  Agrupa notas por temas ou áreas.

  > Ex.: `collection: [[AULAS]], [[CURSOS]]`


* **`related` (notas associadas):**
  Lista conexões manuais que complementam o **graph view**.

  > Ex.: `related: [[Conceito Y]], [[Questão Z]]`.


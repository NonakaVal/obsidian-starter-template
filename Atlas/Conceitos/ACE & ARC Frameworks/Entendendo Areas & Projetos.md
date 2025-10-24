---
up: "[[++ Gestão de Conhecimento]]"
collection: "[[Gestão de Conhecimento]]"
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
---
Tanto **Areas** quanto **Projetos** fazem parte do **E (Efforts)** do sistema ACE - a dimensão da **ação** e **importância**.

---

## 📂 **AREAS (Áreas)**

### O que são?

**Areas** são **responsabilidades contínuas** que você mantém ao longo do tempo - não têm data de conclusão definida.

### Características:

- **Sem prazo final** - são compromissos permanentes
- **Manutenção contínua** - exigem atenção regular
- **Amplas e abrangentes** - cobrem aspectos gerais da vida

### Exemplos:

- `Desenvolvimento Pessoal`
- `Family (Família)`
- `Saúde e Fitness`
- `Carreira`
- `Finanças`

### Estrutura de uma Area:

```yaml
---
area: "[[Nome da Área]]"
tags: area/nome_da_area
type: area_family
created: "[[2025-10-15]]"
---
```

### Onde ficam:

`Projects & Areas/Areas/`

---

## 🚀 **PROJECTS (Projetos)**

### O que são?

**Projetos** são **iniciativas com prazo definido** - têm início, meio e fim claros.

### Características:

- **Prazo definido** - data de início e entrega
- **Objetivo específico** - resultado concreto a alcançar
- **Status rastreável** - podem estar "In Progress", "Finished", "waiting", "to start"
- **Vinculados a Areas** - geralmente fazem parte de uma área maior

### Exemplos:

- `Daily Journal Vault Kit`
- `Flight School Obsidian Vault`
- `PKM pro system`

### Estrutura de um Projeto:

```yaml
---
project: "[[Nome do Projeto]]"
tags: project/nome_do_projeto
type: project
created: "[[2025-10-15]]"
inicio: 2025-10-15
entrega: 2025-10-20
status: to start
---
```

### Campos importantes:

- **inicio** - data de início
- **entrega** - prazo final
- **status** - estado atual (In Progress, Finished, waiting, to start)

### Onde ficam:

`Projects & Areas/Projects/`

---

## 🔗 **Relacionamento entre Areas e Projetos**

### Hierarquia:

```
Area (Desenvolvimento Pessoal)
├── Projeto 1 (Curso de Python)
├── Projeto 2 (Ler 12 livros este ano)
└── Projeto 3 (Implementar sistema PKM)
```

### Fluxo:

1. **Areas** definem suas responsabilidades gerais
2. **Projetos** são iniciativas específicas dentro dessas áreas
3. Quando um projeto termina, a área continua existindo

```dataviewjs
// Mostra projetos com prazos e status
dv.pages('"Projects & Areas/Projects"')
  .where(p => p.type && p.type == "project")
```

---

## 💡 **Diferença Chave**

|Aspecto|Areas|Projetos|
|---|---|---|
|**Duração**|Contínua|Temporária|
|**Prazo**|Sem prazo|Com prazo definido|
|**Foco**|Manutenção|Conclusão|
|**Exemplo**|"Saúde"|"Perder 5kg em 3 meses"|
|**Metadata**|`type: area_family`|`type: project`|

---

## 🎨 **Uso Prático**

### Quando criar uma Area:

- ✅ É uma responsabilidade contínua
- ✅ Requer atenção regular
- ✅ Não tem "data de conclusão"

### Quando criar um Projeto:

- ✅ Tem objetivo claro e mensurável
- ✅ Tem prazo definido
- ✅ Pode ser marcado como "concluído"

---

## 🔄 **Templates Disponíveis**

### Area:

`System/Templates/Format/area.md`

- Cria estrutura básica da área
- Botão para criar notas da área
- Tags automáticas

### Projeto:

`System/Templates/Format/project.md`

- Campos de data início/entrega
- Selector de status
- Botão para criar notas do projeto
- Tags automáticas

### Notas vinculadas:

- `area note.md` - notas específicas de uma área
- `project note.md` - notas específicas de um projeto

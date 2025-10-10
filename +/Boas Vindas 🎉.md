---
collection:
  - "[[SISTEMA/COLEÇÕES/Gestão de Conhecimento.md|Gestão de Conhecimento]]"
---

# Resumo 

Sistema integrado de **gestão do conhecimento** baseado no [[Sistema ACE|ACE folder system]] e no [[ARC Framework]], que organiza ideias, tempo e ações em um fluxo coeso. As notas se conectam por **links diretos** (`[[Nota]]`), fortalecendo a rede de conhecimento, e por **backlinks**, que revelam conexões implícitas. Para maior controle, utilizam-se **[[Propriedades]]** como: `created` (data de criação), `up` (hierarquia), `collection` (coleção de pertencimento) e `related` 
(notas associadas).


---


---

> [!VIDEO]+ Introdução
> <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://drive.google.com/file/d/1gRq5rn8DeGaoibX5fEqXEuK9OUmy-VuF/preview" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Ideaverse Pro Hangar"></iframe></div>



---


# [[Sistema ACE|Sistema de organização ACE]] 
O framework **ACE** (Atlas, Calendar, Efforts) é um Sistema universal para organizar conhecimento, tempo e ação, complementado por:

----

--- start-multi-column: ExampleRegion1  
```column-settings  
number of columns: 2  
largest column:  
```


- **A – Atlas** → Guarda referências e conhecimento geral. É o “mapa” das suas ideias, conceitos e temas.
- **C – Calendário** → Armazena tudo que está ligado a datas: eventos, prazos, registros cronológicos.
- **E – Esforços** → Contém seus projetos, tarefas e iniciativas que exigem ação.



--- end-column ---

<div style="position:relative; min-height:200px; border:1px dashed #ccc">
  <img src="atlas-f.png" alt="Imagem" width="190"
       style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);">
</div>

--- end-multi-column

---

# [[ARC Framework]]
ARC define o fluxo das suas ideias pelo tempo e espaço, muito além disso. esse é um framework que amplia seu processo criativo.

**Ciclo**: Novas ideias → Organização natural → Aplicação concreta = Sistema autossustentável de aprendizado.

> [!rainbow] ARC » [[Adicionar]] | [[Relacionar]] | [[Comunicar]] 

![[arc-flow.png]]

# [[Propriedades|Principais metadados:]]


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

---


 `BUTTON[help]`     

```meta-bind-button
label: Guias Práticos
hidden: true
icon: help
class: ""
id: help
style: primary
actions:
  - type: command
    command: obsidian-hotkeys-for-specific-files:+/Guias Práticos.md-new-tab
```



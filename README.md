# StudyFCP — Documentação do Projeto

> **Uma plataforma inteligente para organizar, aprender, revisar e evoluir.**

## 1. Visão geral

O **StudyFCP** é uma plataforma digital de apoio à vida acadêmica, desenvolvida inicialmente para os estudantes de uma única instituição de ensino.

Seu propósito é centralizar conteúdos escolares, materiais de estudo, ferramentas de aprendizagem, planejamento acadêmico e acompanhamento de desempenho em um único ambiente.

A plataforma será especialmente útil durante os períodos de avaliações e semanas de provas, oferecendo aos estudantes resumos previamente preparados, explicações didáticas, diferentes maneiras de compreender os conteúdos e métodos de revisão adequados à natureza de cada disciplina.

Mais do que disponibilizar materiais, o StudyFCP deverá auxiliar o estudante a compreender:

- O que precisa estudar.
- Como pode estudar determinado conteúdo.
- Quando deve realizar suas revisões.
- Quais são suas principais dificuldades.
- Como está seu desempenho acadêmico.
- O que precisa fazer para alcançar seus objetivos.

A proposta é construir um ambiente de aprendizagem personalizado, organizado, intuitivo e acessível em diferentes dispositivos.

### 1.1. Objetivos principais

1. Centralizar os conteúdos e materiais escolares.
2. Facilitar a preparação para provas e avaliações.
3. Oferecer métodos de aprendizagem adequados a cada disciplina.
4. Personalizar as recomendações de estudo conforme as dificuldades e o desempenho do estudante.
5. Organizar provas, trabalhos, atividades e compromissos.
6. Acompanhar notas, médias e evolução acadêmica.
7. Automatizar cálculos e projeções de desempenho.
8. Disponibilizar ferramentas que tornem o processo de aprendizagem mais prático e agradável.

### 1.2. Público-alvo

O público inicial será formado pelos estudantes do colégio em que o projeto será implementado.

A plataforma deverá considerar as características da instituição, seu calendário acadêmico, suas disciplinas e, principalmente, suas regras específicas de avaliação.

**Escopo institucional:** uma única instituição, com regras acadêmicas fixas e previamente definidas neste documento.

Não implementar sistemas de múltiplas instituições, configurações genéricas de regras escolares ou estruturas desnecessárias para atender outros colégios.

---

# 2. Conceito e princípios do produto

O StudyFCP deverá seguir os seguintes princípios:

### 2.1. Aprendizagem personalizada

Cada disciplina possui características próprias. Portanto, a plataforma não deverá impor uma única metodologia de estudo.

As ferramentas e recomendações deverão considerar:

- A natureza do conteúdo.
- O tipo de habilidade exigida.
- O desempenho anterior do estudante.
- As dificuldades identificadas.
- As preferências de aprendizagem.
- Os objetivos acadêmicos individuais.

### 2.2. Organização e praticidade

O estudante deverá conseguir encontrar rapidamente os materiais necessários, visualizar seus compromissos e iniciar uma atividade de estudo sem passar por processos desnecessariamente complexos.

### 2.3. Aprendizagem ativa

A plataforma deverá estimular o estudante a aplicar o conhecimento, resolver problemas, escrever, programar, interpretar e desenvolver raciocínio próprio, em vez de apenas consumir informações.

### 2.4. Acompanhamento contínuo

O StudyFCP deverá acompanhar a evolução acadêmica ao longo do ano, ajudando o estudante a identificar dificuldades e tomar decisões sobre sua rotina de estudos.

### 2.5. Acessibilidade e disponibilidade

A experiência deverá funcionar adequadamente em computadores, notebooks, tablets e celulares, mantendo a consistência das informações entre dispositivos.

---

# 3. Identidade visual e experiência do usuário

## 3.1. Direção visual

O StudyFCP deverá apresentar uma identidade:

- Tecnológica.
- Jovem.
- Moderna.
- Descontraída.
- Imersiva.
- Organizada.
- Visualmente agradável.

A interface não deverá parecer um portal escolar tradicional ou um sistema administrativo ultrapassado. Entretanto, também não deverá ser infantilizada ou excessivamente gamificada.

A experiência deverá transmitir a sensação de um ambiente pessoal de produtividade e aprendizagem.

## 3.2. Referência de design

Utilizar o **Flocus (flocus.com)** como referência de atmosfera e experiência de usuário.

Observar especialmente:

- Organização visual.
- Sensação de imersão.
- Personalização do ambiente.
- Apresentação de tarefas e objetivos.
- Ferramentas de foco.
- Estatísticas e acompanhamento.
- Interface limpa e intuitiva.

A referência deverá servir como inspiração, sem reproduzir diretamente sua interface, marca ou identidade visual.

## 3.3. Tema e cores

A plataforma deverá utilizar exclusivamente o tema escuro na primeira versão.

Paleta sugerida:

| Token | Cor | Aplicação |
|---|---|---|
| Background | `#0B1020` | Fundo principal |
| Surface | `#121A2B` | Superfícies e painéis |
| Elevated | `#1C2740` | Cards e elementos elevados |
| Primary | `#8B5CF6` | Ações principais |
| Secondary | `#38BDF8` | Elementos secundários |
| Accent | `#F59E0B` | Destaques |
| Text Primary | `#F4F6FC` | Texto principal |
| Text Secondary | `#A4AEC4` | Texto auxiliar |
| Border | `#29344B` | Bordas e divisórias |
| Success | `#22C55E` | Sucesso |
| Warning | `#F59E0B` | Avisos |
| Error | `#EF4444` | Erros |

As cores deverão ser centralizadas em tokens de design. Não espalhar valores hexadecimais diretamente pelos componentes.

## 3.4. Tipografia

Sugestão de tipografia:

- **Manrope:** títulos e elementos de destaque.
- **Inter:** textos, formulários e interface.
- **JetBrains Mono:** códigos, exemplos de programação e conteúdo técnico.

## 3.5. Componentes visuais

Criar componentes reutilizáveis para:

- Botões.
- Campos de formulário.
- Cards.
- Badges.
- Barras de progresso.
- Menus.
- Modais.
- Tooltips.
- Abas.
- Breadcrumbs.
- Tabelas.
- Paginação.
- Alertas.
- Skeletons de carregamento.
- Estados vazios.
- Mensagens de erro e confirmação.

Os componentes deverão possuir estados visuais coerentes, incluindo hover, focus, disabled, loading e active, quando aplicável.

## 3.6. Responsividade

A plataforma deverá se adaptar aos diferentes dispositivos.

Breakpoints de referência:

| Dispositivo | Largura |
|---|---|
| Mobile pequeno | Até 480px |
| Mobile grande | 481–767px |
| Tablet | 768–1023px |
| Desktop | 1024–1439px |
| Desktop amplo | 1440px ou mais |

A navegação deverá utilizar:

- Barra superior com elementos globais.
- Menu lateral contextual em telas maiores.
- Menu lateral recolhível em notebooks.
- Menu drawer em dispositivos móveis.
- Atalhos móveis para funcionalidades frequentes, quando necessário.

## 3.7. Navegação principal

Estrutura sugerida:

- Dashboard.
- Biblioteca.
- Exercícios.
- Simulados.
- Planejamento.
- Desempenho.
- Ferramentas.
- Perfil e configurações.

A navegação deverá permanecer consistente entre as páginas.

---

# 4. Estrutura geral da plataforma

A plataforma deverá ser organizada em módulos independentes, mas integrados entre si.

## 4.1. Dashboard

O Dashboard será a página inicial do estudante.

Deverá apresentar informações relevantes para sua rotina acadêmica, sem sobrecarregar visualmente a interface.

Funcionalidades:

- Saudação personalizada.
- Resumo da rotina acadêmica.
- Próximas provas e avaliações.
- Trabalhos e atividades pendentes.
- Metas de estudo.
- Progresso acadêmico.
- Atividades recentes.
- Conteúdos acessados recentemente.
- Recomendações de estudo.
- Acesso rápido às ferramentas.
- Sessão de foco.
- Favoritos.

Os widgets do Dashboard deverão ser personalizáveis, permitindo reorganizar ou ocultar elementos quando possível.

O conteúdo apresentado deverá priorizar compromissos próximos e atividades relevantes para o estudante.

## 4.2. Biblioteca de conteúdos

A Biblioteca será o principal espaço de consulta e aprendizagem.

Os conteúdos deverão possuir uma estrutura organizada:

**Área de conhecimento → Disciplina → Unidade → Assunto → Materiais.**

Exemplo:

- Ciências da Natureza.
  - Química.
    - Ligações químicas.
      - Resumo.
      - Explicação detalhada.
      - Exemplos.
      - Exercícios.
      - Revisão.

A biblioteca deverá disponibilizar diferentes tipos de materiais:

- Resumos.
- Textos explicativos.
- Apostilas.
- PDFs.
- Documentos.
- Imagens e diagramas.
- Mapas mentais.
- Exemplos resolvidos.
- Vídeos.
- Links externos.
- Materiais complementares.

Cada conteúdo deverá possuir, quando aplicável:

- Título.
- Descrição.
- Disciplina.
- Unidade e assunto.
- Tempo estimado de leitura.
- Nível de dificuldade.
- Conteúdo principal.
- Materiais relacionados.
- Favoritos.
- Histórico de acesso.
- Marcação de conclusão.

A experiência de leitura deverá ser confortável, com boa hierarquia visual e suporte adequado para fórmulas, imagens, tabelas e códigos.

## 4.3. Explicações e maneiras de pensar

Um dos diferenciais do StudyFCP será apresentar diferentes maneiras de compreender um mesmo conteúdo.

Não limitar os materiais a definições e resumos.

Sempre que possível, disponibilizar:

- Explicação conceitual.
- Explicação simplificada.
- Interpretação prática.
- Exemplos contextualizados.
- Analogias.
- Resolução passo a passo.
- Diferentes estratégias de raciocínio.
- Erros comuns e suas causas.

O objetivo é ajudar o estudante a compreender o assunto, não apenas memorizar informações.

## 4.4. Exercícios

O módulo de exercícios deverá permitir que os estudantes pratiquem os conteúdos estudados.

Tipos de questões:

- Múltipla escolha.
- Verdadeiro ou falso.
- Questões discursivas.
- Questões com imagens.
- Questões com fórmulas.
- Questões contextualizadas.
- Problemas de aplicação.

Filtros:

- Disciplina.
- Unidade.
- Assunto.
- Dificuldade.
- Tipo de questão.

Funcionalidades:

- Resolução de questões.
- Correção automática para questões objetivas.
- Exibição de respostas corretas.
- Resoluções comentadas.
- Histórico de tentativas.
- Registro de erros.
- Identificação de assuntos com dificuldade.
- Recomendação de novos exercícios.

Questões discursivas não deverão receber avaliações automáticas simplificadas que apresentem uma correção como definitiva sem critérios adequados. Na primeira versão, poderão ser respondidas e armazenadas para consulta e revisão do estudante.

## 4.5. Simulados

O sistema deverá permitir a realização de simulados completos ou personalizados.

Funcionalidades:

- Seleção de disciplinas.
- Seleção de assuntos.
- Quantidade de questões.
- Nível de dificuldade.
- Cronômetro.
- Navegação entre questões.
- Salvamento de progresso.
- Finalização do simulado.
- Correção.
- Relatório de desempenho.
- Histórico de tentativas.

Diferenciar claramente:

- Provas oficiais anteriores.
- Simulados institucionais.
- Simulados personalizados.

O estudante deverá conseguir consultar seu desempenho e identificar quais assuntos precisam de revisão.

---

# 5. Aprendizagem adaptativa

## 5.1. Conceito

O StudyFCP deverá adaptar as atividades e recomendações à natureza de cada disciplina e às necessidades do estudante.

A plataforma não deverá utilizar flashcards, questionários ou métodos de memorização como solução universal.

Cada disciplina deverá possuir estratégias de aprendizagem compatíveis com suas habilidades e conteúdos.

## 5.2. Exemplos por disciplina

### Matemática

- Exercícios progressivos.
- Resolução passo a passo.
- Demonstrações.
- Problemas contextualizados.
- Diferentes estratégias de resolução.
- Identificação de erros recorrentes.

### Redação

- Propostas de temas.
- Cronômetro.
- Ambiente de escrita.
- Organização de argumentos.
- Estruturação textual.
- Revisão de textos.
- Acompanhamento da evolução.

A prática de redação deverá priorizar a produção textual efetiva, não apenas atividades de memorização.

### Programação e lógica

- Ambiente próprio de programação.
- Editor de código.
- Execução de programas.
- Desafios de lógica.
- Problemas progressivos.
- Testes de entrada e saída.
- Feedback sobre resultados.

A implementação deverá respeitar as limitações de segurança de execução de código, sem executar programas de estudantes diretamente no servidor principal sem isolamento apropriado.

### Biologia

- Diagramas.
- Identificação de estruturas.
- Associações.
- Questões contextualizadas.
- Revisões de conceitos.
- Interpretação de processos biológicos.

### História

- Linhas do tempo.
- Relações de causa e consequência.
- Contextualização histórica.
- Interpretação de fontes.
- Comparações entre períodos.

## 5.3. Personalização individual

O sistema deverá considerar o desempenho do estudante para recomendar atividades.

Exemplo:

1. O estudante realiza exercícios de determinado assunto.
2. O sistema registra seus resultados.
3. Identifica erros e dificuldades recorrentes.
4. Recomenda uma explicação alternativa ou revisão.
5. Sugere novos exercícios adequados.
6. Acompanha a evolução após a revisão.

A plataforma deverá evitar conclusões precipitadas sobre a capacidade do estudante com base em poucas respostas.

As recomendações deverão ser transparentes e permitir que o aluno escolha se deseja segui-las.

---

# 6. Planejamento acadêmico e calendário

## 6.1. Calendário híbrido

O StudyFCP utilizará um calendário híbrido, combinando compromissos institucionais e pessoais.

### Calendário institucional

Administradores autorizados poderão cadastrar:

- Provas.
- Avaliações.
- Trabalhos.
- Atividades escolares.
- Eventos acadêmicos.
- Prazos.
- Comunicados importantes.

Esses eventos poderão ser visualizados pelos estudantes.

### Calendário pessoal

Cada estudante poderá cadastrar:

- Metas de estudo.
- Sessões de revisão.
- Compromissos pessoais.
- Provas e atividades particulares.
- Lembretes.
- Tarefas.
- Datas importantes.

### Visão unificada

O calendário deverá permitir:

- Visualização de eventos pessoais e institucionais.
- Filtros por categoria.
- Filtros por disciplina.
- Visualização diária, semanal e mensal.
- Criação e edição de eventos pessoais.
- Consulta dos eventos institucionais.
- Notificações antecipadas.
- Sincronização entre dispositivos.

O estudante não poderá modificar eventos institucionais sem autorização.

## 6.2. Planejamento inteligente

O calendário deverá alimentar as recomendações de estudo.

Exemplos:

- Uma prova próxima poderá gerar uma recomendação de revisão.
- Uma atividade com prazo próximo poderá aparecer como prioridade.
- O sistema poderá sugerir a distribuição dos estudos pelos dias disponíveis.
- As recomendações poderão considerar as dificuldades identificadas em cada disciplina.

As recomendações não deverão criar ou alterar compromissos automaticamente sem autorização do estudante.

## 6.3. Notificações

A plataforma deverá permitir notificações relacionadas a:

- Provas próximas.
- Trabalhos pendentes.
- Prazos de entrega.
- Metas de estudo.
- Atividades planejadas.
- Lembretes pessoais.

O estudante deverá poder configurar suas preferências de notificação.

Implementar notificações no navegador e, quando tecnicamente viável, notificações push em dispositivos móveis.

---

# 7. Sistema de notas e desempenho acadêmico

Este módulo deverá utilizar as regras reais de avaliação do colégio.

**Não criar regras genéricas de avaliação nem permitir que o estudante altere os pesos institucionais.**

## 7.1. Regras acadêmicas fixas

O ano letivo é dividido em três trimestres.

Regras:

- Média mínima trimestral: 6,0.
- Pontuação anual mínima: 18,0.
- Pontuação anual: soma das notas dos três trimestres.
- As notas são cadastradas individualmente pelo estudante.

O sistema deverá apresentar separadamente a situação trimestral e a pontuação anual.

Não presumir que uma pontuação anual suficiente compensa automaticamente um trimestre abaixo de 6,0.

## 7.2. Composição das notas

Existem três categorias de avaliação:

- **PO — Provas Oficiais:** duas provas principais, PO1 e PO2.
- **AC — Atividades Contínuas:** quantidade variável de atividades aplicadas pelo professor.
- **SI — Simulado Integrado:** simulado que contempla as matérias curriculares e também fornece nota para as matérias técnicas.

### 7.2.1. Matérias curriculares

| Categoria | Peso |
|---|---:|
| PO | 50% |
| AC | 30% |
| SI | 20% |
| **Total** | **100%** |

A média das Provas Oficiais é calculada pela média aritmética entre PO1 e PO2.

A média das Atividades Contínuas considera todas as ACs cadastradas.

Fórmula:

```text
Media_PO = (PO1 + PO2) / 2
Media_AC = soma_das_ACs / quantidade_de_ACs

Media_Trimestral =
    (Media_PO * 0.5) +
    (Media_AC * 0.3) +
    (SI * 0.2)
```

### 7.2.2. Matérias técnicas

| Categoria | Peso |
|---|---:|
| PO | 50% |
| AC | 40% |
| SI | 10% |
| **Total** | **100%** |

A média das Provas Oficiais e das Atividades Contínuas segue o mesmo método de cálculo das matérias curriculares.

Fórmula:

```text
Media_PO = (PO1 + PO2) / 2
Media_AC = soma_das_ACs / quantidade_de_ACs

Media_Trimestral =
    (Media_PO * 0.5) +
    (Media_AC * 0.4) +
    (SI * 0.1)
```

### 7.2.3. Regras de implementação

- PO1 e PO2 devem ser registradas separadamente.
- O sistema deverá permitir cadastrar quantas ACs forem necessárias.
- O sistema deverá calcular automaticamente a média das ACs.
- O SI deverá ser registrado por disciplina.
- O peso do SI deverá variar conforme a classificação da disciplina.
- As matérias curriculares e técnicas deverão possuir configurações fixas de pesos.
- As notas deverão ser armazenadas com precisão adequada.
- A interface deverá apresentar os cálculos de maneira transparente.

Não considerar avaliações ainda não realizadas como notas zero.

Se ainda não houver AC cadastrada, a média trimestral deverá ser indicada como incompleta, sem inventar uma nota para essa categoria.

A mesma lógica deverá ser aplicada quando alguma avaliação obrigatória estiver pendente.

## 7.3. Pontuação anual

A pontuação anual será calculada pela soma dos três resultados trimestrais:

```text
Pontuacao_Anual =
    Trimestre_1 +
    Trimestre_2 +
    Trimestre_3
```

A pontuação mínima anual é 18,0.

O sistema deverá apresentar:

- Nota do primeiro trimestre.
- Nota do segundo trimestre.
- Nota do terceiro trimestre.
- Pontuação anual acumulada.
- Pontuação restante para alcançar 18,0.
- Situação de cada trimestre.
- Situação da pontuação anual.

## 7.4. Cadastro de notas

O estudante deverá conseguir cadastrar suas próprias avaliações.

Cada registro deverá conter:

- Disciplina.
- Trimestre.
- Categoria (PO, AC ou SI).
- Identificação da avaliação.
- Nota obtida.
- Nota máxima.
- Data, quando aplicável.
- Observações opcionais.

O sistema deverá validar as notas de acordo com a escala configurada para a avaliação, evitando valores inválidos.

## 7.5. Calculadora acadêmica

O StudyFCP deverá calcular automaticamente:

- Média trimestral.
- Média das POs.
- Média das ACs.
- Pontuação anual.
- Pontos necessários para atingir 6,0 no trimestre.
- Pontos necessários para atingir 18,0 no ano.
- Notas necessárias nas avaliações pendentes.
- Projeções de desempenho.

O estudante poderá definir metas pessoais, como média 7,0 ou 8,0, e visualizar quanto precisará obter nas avaliações restantes.

Os cálculos deverão respeitar os pesos específicos das matérias curriculares e técnicas.

Exemplo de cálculo da nota necessária em uma PO:

```text
Meta = média trimestral desejada

Contribuicao_AC = Media_AC * Peso_AC
Contribuicao_SI = SI * Peso_SI

Nota_PO_necessaria =
    (Meta - Contribuicao_AC - Contribuicao_SI)
    / Peso_PO
```

Se a nota necessária ultrapassar a nota máxima possível, o sistema deverá informar que a meta não pode mais ser alcançada apenas com aquela avaliação.

## 7.6. Projeções e simulações

O estudante poderá simular diferentes resultados para compreender como suas notas futuras afetarão seu desempenho.

Exemplos:

- Quanto preciso tirar na PO2 para alcançar média 8?
- Qual será minha média se tirar 7 nas próximas ACs?
- Quantos pontos faltam para atingir 18 no ano?
- Qual resultado preciso alcançar no próximo trimestre?
- Como uma nota maior no SI influencia minha média?

As projeções deverão distinguir notas reais, avaliações pendentes e valores hipotéticos.

## 7.7. Dashboard de desempenho

Apresentar:

- Notas por disciplina.
- Médias trimestrais.
- Pontuação anual.
- Evolução entre trimestres.
- Histórico de avaliações.
- Desempenho por categoria de avaliação.
- Metas acadêmicas.
- Disciplinas que necessitam de atenção.

**Importante:** nota escolar e domínio do conteúdo são indicadores diferentes. O StudyFCP deverá acompanhar ambos separadamente.

---

# 8. Ferramentas de estudo

O StudyFCP deverá disponibilizar ferramentas auxiliares que facilitem a rotina de aprendizagem.

## 8.1. Focus Space

Ambiente de concentração com:

- Pomodoro.
- Cronômetro livre.
- Definição de objetivo da sessão.
- Sons ambientes opcionais.
- Interface minimalista.
- Histórico de sessões.
- Registro do tempo estudado.

O cronômetro deverá continuar funcionando durante a navegação entre páginas, sem ser reiniciado indevidamente.

## 8.2. Flashcards

Sistema de cartões de estudo com:

- Criação manual.
- Pergunta e resposta.
- Organização por disciplina e assunto.
- Revisão de cartões.
- Histórico de revisões.
- Identificação de conteúdos que precisam de reforço.

## 8.3. Anotações

Permitir que o estudante crie e organize anotações pessoais.

As anotações poderão ser associadas a disciplinas e conteúdos.

## 8.4. Mapas mentais

Ferramenta para organizar visualmente conceitos e relações entre assuntos.

## 8.5. Tarefas e metas

Permitir:

- Criar tarefas.
- Definir prazos.
- Estabelecer prioridades.
- Marcar conclusão.
- Relacionar tarefas a disciplinas.
- Acompanhar metas.

## 8.6. Ferramentas auxiliares

Poderão ser adicionadas:

- Calculadora.
- Conversor de unidades.
- Calendário.
- Temporizador.
- Outros recursos de apoio acadêmico.

---

# 9. Módulos futuros

As funcionalidades abaixo fazem parte das possibilidades de expansão do produto, mas não deverão atrasar a implementação dos recursos principais.

## 9.1. Jogos e raciocínio lógico

Adicionar futuramente atividades como:

- Tetris.
- Cubo Mágico.
- Desafios de lógica.
- Reconhecimento de padrões.
- Raciocínio espacial.
- Resolução de problemas.

Essas atividades poderão contribuir para tornar o ambiente mais interessante e estimular habilidades cognitivas.

## 9.2. Ambiente de programação avançado

Expandir o ambiente próprio de programação, com:

- Editor de código.
- Execução segura.
- Testes automatizados.
- Desafios.
- Histórico de soluções.
- Acompanhamento de evolução.

## 9.3. Trilhas de aprendizagem

Criar sequências de conteúdos e atividades recomendadas conforme os objetivos e dificuldades do estudante.

---

# 10. Gerenciamento de conteúdos e administração

## 10.1. Sistema de publicação

O StudyFCP utilizará um sistema de publicação controlada.

Os conteúdos deverão passar por revisão antes de serem disponibilizados aos estudantes.

Fluxo:

```text
Criação do conteúdo
       |
       v
Envio para revisão
       |
       v
Análise administrativa
       |
       +------> Reprovado / Devolvido
       |                |
       |                v
       |         Correção pelo autor
       |                |
       |                v
       |         Novo envio
       |
       v
Aprovado
       |
       v
Publicado na plataforma
```

## 10.2. Editor de conteúdos

Criar um editor visual que permita produzir materiais sem exigir conhecimento de HTML ou Markdown.

O editor deverá permitir:

- Títulos e subtítulos.
- Parágrafos.
- Listas.
- Tabelas.
- Imagens.
- Fórmulas matemáticas.
- Blocos de código.
- Links.
- Arquivos anexos.
- Destaques e observações.
- Exemplos resolvidos.

O conteúdo deverá ser armazenado de maneira estruturada, permitindo edição e apresentação consistente.

Utilizar KaTeX ou MathJax para renderização de fórmulas matemáticas.

## 10.3. Papéis e permissões

### Administrador

Responsável pelo gerenciamento geral da plataforma.

Permissões:

- Gerenciar usuários.
- Gerenciar permissões.
- Criar e editar disciplinas.
- Criar e editar conteúdos.
- Aprovar ou devolver submissões.
- Gerenciar questões.
- Gerenciar simulados.
- Gerenciar eventos institucionais.
- Consultar estatísticas administrativas.
- Gerenciar configurações.
- Consultar registros de auditoria.

### Colaborador

Responsável pela produção de materiais.

Permissões:

- Criar conteúdos.
- Editar suas próprias submissões.
- Enviar materiais para revisão.
- Consultar o status das submissões.
- Corrigir conteúdos devolvidos.

Colaboradores não poderão publicar diretamente conteúdos sem aprovação administrativa.

### Estudante

Responsável pelo consumo dos materiais e pela organização de sua vida acadêmica.

Permissões:

- Consultar conteúdos publicados.
- Resolver exercícios.
- Realizar simulados.
- Utilizar ferramentas.
- Cadastrar notas pessoais.
- Criar eventos pessoais.
- Organizar tarefas e metas.
- Acompanhar desempenho.
- Gerenciar favoritos e anotações.

Os dados pessoais e acadêmicos de cada estudante deverão ser privados.

---

# 11. Autenticação e onboarding

## 11.1. Autenticação

A plataforma deverá utilizar contas individuais.

Funcionalidades:

- Cadastro.
- Login.
- Logout.
- Recuperação de senha.
- Proteção de páginas privadas.
- Gerenciamento de sessão.
- Controle de permissões.

O cadastro inicial deverá ser restrito aos estudantes autorizados do colégio.

O mecanismo de autorização deverá ser definido conforme a realidade institucional, podendo utilizar aprovação administrativa ou código institucional.

Não permitir que qualquer visitante crie uma conta com acesso automático à plataforma.

## 11.2. Onboarding

Após o primeiro acesso, o estudante deverá passar por uma apresentação breve.

O onboarding poderá coletar:

- Informações básicas.
- Interesses acadêmicos.
- Disciplinas de interesse.
- Preferências de estudo.
- Objetivos pessoais.

A experiência deverá ser simples, retomável e não deverá bloquear funcionalidades essenciais desnecessariamente.

---

# 12. Requisitos não funcionais

## 12.1. Performance

- Carregamento rápido das páginas.
- Otimização de imagens.
- Carregamento sob demanda quando apropriado.
- Consultas eficientes ao banco de dados.
- Evitar renderizações desnecessárias.
- Boa experiência em conexões móveis.

## 12.2. Segurança

- Senhas armazenadas com hash seguro.
- Autorização validada no backend.
- Proteção contra SQL Injection.
- Proteção contra XSS.
- Validação de dados recebidos.
- Proteção de rotas privadas.
- Controle de tentativas de login.
- Validação de arquivos enviados.
- Registro de ações administrativas relevantes.
- Isolamento dos dados pessoais dos estudantes.

Não confiar exclusivamente em verificações realizadas no frontend para proteger recursos ou dados.

## 12.3. Privacidade e LGPD

Como a plataforma será utilizada por estudantes, inclusive menores de idade, deverá respeitar a legislação brasileira de proteção de dados.

Requisitos:

- Coletar somente dados necessários.
- Proteger informações pessoais.
- Manter notas e desempenho privados.
- Definir regras adequadas de acesso.
- Disponibilizar termos de uso e política de privacidade.
- Evitar exposição pública de notas ou informações acadêmicas.
- Considerar as exigências legais aplicáveis ao tratamento de dados de crianças e adolescentes.

## 12.4. Acessibilidade

Adotar WCAG 2.2 AA como referência.

Implementar:

- Contraste adequado.
- Navegação por teclado.
- Indicadores de foco.
- Textos alternativos para imagens.
- Estrutura semântica.
- Formulários acessíveis.
- Mensagens de erro claras.
- Respeito à preferência por movimento reduzido.
- Não utilizar somente cores para comunicar informações.

## 12.5. Confiabilidade

- Salvamento consistente de dados.
- Tratamento de erros.
- Confirmação de operações importantes.
- Prevenção de perda de progresso.
- Validação dos cálculos acadêmicos.
- Histórico de alterações relevantes.

---

# 13. Arquitetura técnica

A arquitetura deverá priorizar organização, manutenção, segurança e possibilidade de evolução.

As tecnologias abaixo são sugestões iniciais e deverão ser validadas antes da implementação, considerando os recursos disponíveis na plataforma de desenvolvimento e no ambiente de hospedagem.

## 13.1. Stack sugerida

| Camada | Tecnologia sugerida |
|---|---|
| Frontend | React |
| Framework | Next.js |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS |
| Componentes | shadcn/ui |
| Banco de dados | PostgreSQL |
| Autenticação | Supabase Auth |
| Armazenamento | Supabase Storage |
| Hospedagem | Vercel |
| Versionamento | GitHub |

Não adotar automaticamente todas as tecnologias sem verificar sua compatibilidade com o ambiente escolhido.

## 13.2. Organização do código

Separar o projeto em módulos e responsabilidades.

Estrutura de referência:

```text
studyfcp/
│
├── public/
│
├── src/
│   ├── app/
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── shared/
│   │
│   ├── modules/
│   │   ├── dashboard/
│   │   ├── library/
│   │   ├── exercises/
│   │   ├── simulations/
│   │   ├── calendar/
│   │   ├── grades/
│   │   ├── performance/
│   │   ├── tools/
│   │   └── administration/
│   │
│   ├── services/
│   ├── hooks/
│   ├── lib/
│   ├── types/
│   ├── styles/
│   └── utils/
│
├── database/
│
├── docs/
│
├── README.md
└── package.json
```

A estrutura poderá ser adaptada conforme as características do framework escolhido.

## 13.3. Banco de dados

O banco de dados deverá possuir entidades organizadas e relacionamentos consistentes.

Entidades sugeridas:

| Entidade | Finalidade |
|---|---|
| Users | Contas de acesso |
| Profiles | Informações dos estudantes |
| Roles | Papéis e permissões |
| Subjects | Disciplinas |
| KnowledgeAreas | Áreas de conhecimento |
| Topics | Assuntos e unidades |
| Contents | Materiais publicados |
| ContentVersions | Histórico de versões |
| Submissions | Submissões para revisão |
| Questions | Questões |
| Alternatives | Alternativas de questões |
| Simulations | Simulados |
| SimulationQuestions | Relação entre simulados e questões |
| Attempts | Tentativas de resolução |
| Answers | Respostas dos estudantes |
| Favorites | Conteúdos favoritos |
| Notes | Anotações pessoais |
| StudyTasks | Tarefas e metas |
| StudySessions | Sessões de estudo |
| CalendarEvents | Eventos pessoais e institucionais |
| Grades | Notas e avaliações |
| Notifications | Notificações |
| AuditLogs | Registros de ações administrativas |

Os registros acadêmicos deverão possuir associação clara ao estudante, à disciplina e ao período letivo.

O histórico de tentativas e resultados deverá ser preservado mesmo quando materiais ou questões forem atualizados.

As permissões deverão ser aplicadas também nas operações de leitura e escrita do banco de dados.

## 13.4. Cálculos acadêmicos

Centralizar as fórmulas em um serviço específico, evitando duplicar regras de cálculo em diferentes páginas.

Os cálculos deverão:

- Utilizar os pesos fixos estabelecidos.
- Validar notas e avaliações pendentes.
- Evitar erros de precisão decimal.
- Distinguir valores reais e simulados.
- Ser testados com diferentes cenários.
- Apresentar resultados consistentes no frontend e backend.

## 13.5. Ambiente de programação

Caso seja implementado um editor com execução de código, utilizar ambiente isolado, com limites de tempo, memória e acesso a recursos.

Não permitir execução arbitrária de código diretamente no servidor da aplicação.

---

# 14. Experiência do usuário e critérios de interface

A interface deverá apresentar estados adequados para todas as operações.

Exemplos:

- Carregamento.
- Conteúdo disponível.
- Nenhum conteúdo encontrado.
- Erro de conexão.
- Salvamento em andamento.
- Salvamento concluído.
- Operação não autorizada.
- Formulário inválido.
- Nenhuma atividade cadastrada.

Todos os botões, formulários, menus e controles deverão possuir funcionalidades reais.

Não criar elementos apenas decorativos que aparentem ser interativos.

Não apresentar dados fictícios como se fossem dados reais dos estudantes.

Quando forem utilizados dados de demonstração, identificá-los claramente como exemplos.

## 14.1. Pesquisa global

Implementar pesquisa que permita encontrar:

- Disciplinas.
- Assuntos.
- Conteúdos.
- Questões.
- Simulados.
- Materiais.
- Ferramentas.

A pesquisa deverá possuir sugestões, histórico e filtros quando aplicável.

Os resultados deverão ser organizados por categoria.

## 14.2. Personalização do Dashboard

Permitir que o estudante personalize a apresentação das informações.

Exemplos:

- Ocultar widgets.
- Reorganizar elementos.
- Priorizar compromissos.
- Exibir metas.
- Destacar próximas avaliações.

---

# 15. Roadmap de desenvolvimento

O projeto deverá ser desenvolvido modularmente, garantindo que cada etapa esteja funcional antes da expansão para a próxima.

## Fase 1 — Fundação

Objetivo: construir a estrutura principal da plataforma.

Entregas:

- Configuração do projeto.
- Design System.
- Responsividade.
- Navegação.
- Autenticação.
- Perfis de usuário.
- Controle de permissões.
- Banco de dados.
- Estrutura administrativa.

## Fase 2 — Núcleo educacional

Objetivo: disponibilizar os recursos fundamentais de aprendizagem.

Entregas:

- Dashboard.
- Biblioteca.
- Disciplinas e assuntos.
- Editor de conteúdos.
- Sistema de submissão e aprovação.
- Pesquisa.
- Favoritos.
- Exercícios.
- Correção de questões.

## Fase 3 — Planejamento e desempenho

Objetivo: integrar a rotina escolar do estudante.

Entregas:

- Calendário institucional.
- Calendário pessoal.
- Eventos e lembretes.
- Cadastro de notas.
- Fórmulas acadêmicas.
- Calculadora de médias.
- Projeções.
- Dashboard de desempenho.
- Notificações.

## Fase 4 — Avaliações e ferramentas

Objetivo: expandir os recursos de estudo.

Entregas:

- Simulados.
- Histórico de avaliações.
- Focus Space.
- Flashcards.
- Anotações.
- Mapas mentais.
- Tarefas e metas.
- Ferramentas auxiliares.

## Fase 5 — Personalização avançada

Objetivo: tornar a experiência progressivamente mais inteligente.

Entregas:

- Recomendações adaptativas.
- Identificação de dificuldades.
- Trilhas de aprendizagem.
- Ambiente de programação.
- Ferramentas específicas por disciplina.
- Expansões de acessibilidade e personalização.

## Fase 6 — Expansões futuras

Possibilidades:

- Tetris.
- Cubo Mágico.
- Jogos educativos.
- Desafios cognitivos.
- Outras ferramentas interativas.

Essas funcionalidades são secundárias e não deverão comprometer a entrega dos módulos essenciais.

---

# 16. Critérios gerais de aceitação

Uma funcionalidade somente poderá ser considerada concluída quando estiver efetivamente implementada e funcional.

Critérios obrigatórios:

- [ ] Cadastro e autenticação funcionais.
- [ ] Controle de permissões aplicado no backend.
- [ ] Dados pessoais protegidos.
- [ ] Dashboard funcional.
- [ ] Navegação responsiva.
- [ ] Biblioteca com conteúdos organizados.
- [ ] Editor de conteúdos funcional.
- [ ] Fluxo de submissão e aprovação funcional.
- [ ] Exercícios com correção adequada.
- [ ] Simulados com salvamento de progresso.
- [ ] Calendário institucional e pessoal integrados.
- [ ] Notificações configuráveis.
- [ ] Cadastro de notas funcional.
- [ ] Cálculos acadêmicos validados.
- [ ] Projeções de desempenho corretas.
- [ ] Ferramentas com funcionamento real.
- [ ] Sincronização entre dispositivos.
- [ ] Estados de carregamento, erro e sucesso.
- [ ] Acessibilidade básica implementada.
- [ ] Nenhum botão ou formulário sem funcionalidade.
- [ ] Nenhum dado fictício apresentado como real.

---

# 17. Diretrizes obrigatórias de desenvolvimento

As seguintes diretrizes deverão ser respeitadas durante toda a implementação:

1. **Priorizar funcionalidade:** não considerar uma página concluída apenas porque sua aparência está pronta.
2. **Respeitar o escopo:** desenvolver a plataforma para uma única instituição, utilizando as regras acadêmicas definidas neste documento.
3. **Manter modularidade:** organizar os recursos de forma independente e reutilizável.
4. **Evitar complexidade desnecessária:** não implementar funcionalidades futuras antes de concluir os módulos essenciais.
5. **Preservar a consistência visual:** utilizar o Design System em todas as páginas.
6. **Proteger os dados:** aplicar permissões e validações no backend.
7. **Validar cálculos:** testar as fórmulas acadêmicas com diferentes combinações de notas.
8. **Garantir responsividade:** desenvolver pensando em dispositivos móveis desde o início.
9. **Evitar dados simulados:** utilizar dados reais quando houver integração disponível e identificar claramente qualquer demonstração.
10. **Documentar decisões:** manter registros das principais escolhas técnicas e alterações relevantes.

O desenvolvimento deverá ocorrer em etapas verificáveis. Cada módulo deverá ser testado antes de ser considerado concluído.

---

# 18. Resultado esperado

Ao final de sua implementação, o StudyFCP deverá funcionar como um ambiente digital completo de apoio à vida acadêmica.

O estudante deverá conseguir entrar na plataforma, consultar os conteúdos de suas disciplinas, revisar assuntos, realizar exercícios, organizar seu calendário, acompanhar provas, cadastrar notas, calcular médias, estabelecer metas e compreender sua evolução.

A plataforma deverá ser mais do que uma coleção de ferramentas isoladas: seus módulos deverão trabalhar em conjunto.

Por exemplo, uma prova cadastrada no calendário poderá influenciar as recomendações do Dashboard; uma dificuldade identificada em exercícios poderá gerar sugestões de revisão; e o desempenho acadêmico poderá ajudar o estudante a decidir onde concentrar seus esforços.

**O objetivo final é transformar o StudyFCP em um espaço onde organização, aprendizagem e evolução acadêmica aconteçam de maneira integrada.**

---

*StudyFCP — Learn. Explore. Evolve.*
## Configuração de dados reais (fase de testes)

A primeira integração com Supabase está documentada em `SUPABASE_SETUP.md`. Execute `supabase-schema.sql` no SQL Editor do projeto e crie os usuários manualmente usando os identificadores internos indicados no documento. O frontend usa somente a chave pública do projeto; senhas não são armazenadas no repositório.

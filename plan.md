# Plano de implementação — StudyFCP

## Escopo desta entrega

Construir a primeira versão navegável e responsiva do StudyFCP como uma aplicação estática, compatível com GitHub Pages. A entrega representa a fundação visual e interativa do produto: dashboard, biblioteca, exercícios, simulados, planejamento, desempenho e ferramentas, com navegação consistente e dados de demonstração claramente identificados.

## Implementação

- `index.html`: shell semântico da aplicação, navegação lateral, barra superior, dashboard e views principais.
- `styles.css`: design system em tokens CSS, tema escuro, responsividade mobile/tablet/desktop, estados de foco, hover, active, empty e reduced motion.
- `app.js`: navegação client-side, busca, filtro da biblioteca, completar tarefas, timer de Focus Space e calculadora acadêmica demonstrativa.
- `manus-routes.json`: manifesto das rotas visíveis para o ambiente de desenvolvimento.
- GitHub Pages: publicação direta da raiz da branch `main`, sem backend ou autenticação nesta fase.

## Design

### Estilos considerados

- **Focus OS imersivo** — 0,06: atmosfera de produtividade noturna, painéis translúcidos, brilho controlado e uma área principal que parece um cockpit pessoal.
- **Editorial acadêmico** — 0,04: hierarquia tipográfica forte, ritmo de leitura e cartões mais sóbrios.
- **Neon modular** — 0,08: módulos compactos, acentos coloridos e linguagem mais experimental.

### Direção escolhida: Focus OS imersivo

**Design Movement:** dashboard de produtividade com influência de interfaces ambient computing e espaços de foco digitais, sem copiar o Flocus.

**Core Principles:** clareza antes de densidade; foco progressivo; feedback visual curto; dados sempre contextualizados.

**Color Philosophy:** fundo azul-marinho quase preto para reduzir ruído; violeta como ação e identidade; ciano como orientação; âmbar apenas para atenção e prazos. A cor não será a única forma de comunicar estado.

**Layout Paradigm:** navegação lateral persistente e uma composição assimétrica: coluna de prioridade, faixa de progresso e painel de foco. Em telas menores, os módulos se reorganizam em fluxo vertical.

**Signature Elements:** marca “SF” em um quadrado violeta; linha de progresso com brilho sutil; cartões com micro-rótulos de contexto e ícones lineares.

**Interaction Philosophy:** cada controle deve responder com estado visível. Tarefas podem ser concluídas diretamente, o timer deve funcionar de verdade e a pesquisa deve filtrar conteúdos.

**Animation:** transições curtas de 160–220ms; entrada suave dos painéis; nenhum movimento essencial para compreensão; respeito a `prefers-reduced-motion`.

**Typography System:** Manrope para títulos e números de destaque; Inter para interface e corpo; JetBrains Mono para tempos, códigos e métricas técnicas.

**Brand Essence:** o espaço digital para estudar com intenção, organizar a rotina e enxergar evolução. Personalidade: focada, acolhedora, inteligente.

**Brand Voice:** direto, encorajador e sem tom infantil. Exemplos: “Escolha o próximo passo.” e “Você não precisa estudar tudo agora — só começar pelo que importa.”

**Wordmark & Logo:** monograma SF em moldura arredondada, acompanhado de “StudyFCP” em caixa mista; o monograma funciona como assinatura de aplicativo.

**Signature Brand Color:** violeta `#8B5CF6`, usado como ação principal e ponto de orientação da interface.

## Limitações conscientes

A versão GitHub Pages não terá autenticação, banco de dados, sincronização entre dispositivos ou dados escolares reais. Recursos dependentes de backend ficam sinalizados como próximos passos, preservando a arquitetura visual para integração futura.

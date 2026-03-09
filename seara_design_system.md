# Design System - Baseado em Seara Minha Receita

Este documento define as diretrizes de design baseadas na análise da interface do site *Seara: Minha Receita*. Estas regras devem ser aplicadas na construção do nosso aplicativo para garantir uma experiência premium, moderna e alinhada com as melhores práticas de UI/UX.

## 1. Paleta de Cores

A aplicação utiliza uma paleta vibrante e focada em conversão e usabilidade.

### Cores Principais
- **Cor Primária (Ações principais):** Laranja Seara (`#F25D27`)
  - *Uso:* Botões principais, cabeçalho, bordas de estado de foco (focus) e destaques de ação.
- **Cor da Marca (Ações críticas):** Vermelho (`#C8102E`)
  - *Uso:* Logotipo, botões de exclusão, ícones de curtir (coração) e alertas de erro críticos.

### Cores de Fundo (Backgrounds)
- **Fundo Principal:** Cinza Muito Claro (`#F7F7F7`)
  - *Uso:* Fundo geral das telas e seções de conteúdo para destacar os cards.
- **Fundo de Elementos:** Branco Puro (`#FFFFFF`)
  - *Uso:* Cartões (cards), modais, popups, menus de navegação e campos de entrada (inputs).
- **Fundo Escuro (Contraste):** Grafite Escuro (`#1A1A1A`)
  - *Uso:* Rodapés (footers), seções institucionais ou banners de destaque secundário.

### Cores Categóricas (Identidade Visual Opcional)
Usado para diferenciar categorias de conteúdo/receitas:
- **Aves:** Laranja-avermelhado
- **Peixes:** Azul Celeste
- **Suínos:** Rosa Choque / Pink
- **Bovinos:** Vermelho Vivo
- **Vegetal:** Verde Limão
- **Doces:** Roxo / Violeta

## 2. Tipografia

O uso de uma tipografia limpa e moderna é essencial para a leitura de receitas e uso contínuo.
- **Família de Fontes:** Sans-serif geométrica (ex: `Roobert`, `Poppins`, `Inter` ou `Outfit`).
- **Hierarquia Visual:**
  - **Títulos (H1, H2, H3):** Fontes grandes, espessura em negrito (Bold), geralmente na cor Laranja (`#F25D27`) em fundos claros, ou Branco (`#FFFFFF`) em fundos escuros.
  - **Corpo de Texto (Body):** Cinza Escuro (`#333333`) com espaçamento de linha (line-height) em torno de `1.5` a `1.6` para facilitar a leitura prolongada.
  - **Labels e Tags:** Texto em caixa alta (Uppercase), fonte um pouco menor, peso médio (Medium/Semibold) para criar contraste e organizar categorias (ex: "RECEITA", "NOVO").

## 3. Componentes de UI

### Botões (Buttons)
- **Primários (Solid):** Fundo laranja (`#F25D27`), texto branco. Formato "Pill" (totalmente arredondado - `border-radius: 999px`) ou cantos macios (aproximadamente `10px` a `12px`).
- **Secundários (Outlined):** Borda contínua laranja (`#F25D27`), texto laranja, fundo transparente ou branco. O hover deve inverter para a cor primária sólida.
- **Floating Action Buttons (FAB):** Ícones circulares com leve sombra (Shadow), usados para ações como voltar ao topo, mensagens (WhatsApp) ou opções de página.

### Entradas e Inputs
- **Aparência Base:** Cantos arredondados (entre `8px` e `12px`), fundo branco.
- **Bordas e Estados:** Borda fina na cor cinza claro (`#E0E0E0`). Ao receber foco (Focus), a borda deve mudar suavemente para a Cor Primária Laranja (`#F25D27`), indicando atividade.
- **Barra de Busca:** Proeminente, muitas vezes centralizada ou ocupando boa área, acompanhada de um ícone minimalista de lupa.

### Cards (Cartões de Conteúdo)
- **Formato:** Cantos arredondados (`12px` a `16px`).
- **Sombras (Shadows):** Sombras projetadas muito suaves e amplas para dar a sensação de flutuação e profundidade (ex: `box-shadow: 0 4px 12px rgba(0,0,0,0.05)`). Evite sombras duras.
- **Interações:** Ao passar o mouse (Hover), o card pode elevar ligeiramente ou a imagem interna ganhar um leve zoom.

## 4. Layout e Espaçamento

- **Grid e Respiro:** O design deve respirar. Use espaçamentos internos (padding) generosos, como `60px` a `80px` entre seções maiores, priorizando a não sobrecarga visual (White Space).
- **Micro-interações:** Ícones e imagens devem reagir ao cursor. Aplicar transições suaves (ex: `transition: all 0.3s ease`) com efeitos de zoom nas imagens (escala de `1.05`) ao focar/hover.

## 5. Popups e Notificações (Toasts)

- **Modais / Popups (ex: Login, Filtros):** Formato limpo, dispostos no centro da tela sobre um overlay (fundo semi-transparente escuro). Os campos devem ser minimalistas, e o botão de ação deve ter muito destaque (Laranja).
- **Banners Inferiores (ex: Cookies):** Fundo branco ou claro no rodapé da página. Distinção clara entre botões de "Aceitar" (Primário) e secundários/opções.
- **Toasts (Notificações Rápidas):** Devem aparecer na parte inferior ou superior direita, com cores semânticas (Laranja/Verde para sucesso, Vermelho para erro), cantos arredondados e acompanhados de um ícone claro. Eles devem desaparecer sozinhos após alguns segundos.

## 6. Ícones e Detalhes Visuais

- **Estilo de Ícones:** Minimalistas, traço contínuo (Outline) quando inativos e preenchidos (Solid) quando ativos/focados.
- **Informações Rápidas:** Métricas de receitas como "Rendimento" e "Tempo" devem ser acompanhadas de ícones em pequenos círculos com fundo colorido ou delineado para fácil escaneabilidade.
- **Botão de Favorito:** Ícone de coração (Outline ou Preenchido se ativo), exibido flutuando no canto de imagens de receita, preferencialmente dentro de um pequeno círculo branco translúcido ou preenchido com borda suave.

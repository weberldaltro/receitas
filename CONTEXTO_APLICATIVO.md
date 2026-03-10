# Contexto Principal do Aplicativo

Este documento descreve detalhadamente o estado atual do aplicativo, sua arquitetura, as funcionalidades implementadas e o design system utilizado. A intenção é servir como base e contexto para qualquer desenvolvedor ou agente IA que fará futuras implementações no projeto.

## 1. Visão Geral do Projeto

O projeto é um **Aplicativo de Catálogo de Receitas** ("Minha Receita - Seara Design") focado em oferecer uma experiência visual premium, moderna e rápida para o usuário.

- **Stack Tecnológico:**
  - **Framework Principal:** [Astro v5](https://astro.build/)
  - **Linguagem:** HTML, CSS, JavaScript e TypeScript.
  - **Gerenciamento de Conteúdo:** Astro Content Collections (utilizando arquivos `.md`).
  - **Gerenciador de Pacotes:** NPM.

## 2. Arquitetura de Dados e Conteúdo

Todo o catálogo de dados é gerenciado através da funcionalidade `Content Collections` do Astro. O projeto não usa um banco de dados tradicional ou CMS externo, aproveitando-se de arquivos Markdown estáticos que tornam a aplicação muito rápida (SSG).

### Estrutura da Collection (`src/content/receitas/`)
As receitas ficam armazenadas como arquivos Markdown.
A configuração da tipagem e validação (schema de dados) ocorre em `src/content.config.ts`, exigindo os seguintes campos de "frontmatter" para qualquer nova receita criada:

- `title` (String): O título da receita.
- `description` (String): Um breve resumo descritivo.
- `image` (String): URL ou caminho da imagem representativa.
- `category` (Enum): A categoria exata. *Valores permitidos:* `'Aves', 'Peixes', 'Suínos', 'Bovinos', 'Vegetal', 'Doces', 'Massas', 'Lanches', 'Frutos do Mar', 'Saladas', 'Sopas'`.
- `time` (String): Tempo estimado de preparo (ex: "40 minutos").
- `portions` (String): Rendimento da receita (ex: "4 porções").

A estrutura do conteúdo do `.md` é convertida e renderizada como o corpo da receita (geralmente dividida em "Ingredientes" e "Modo de Preparo").

## 3. Estrutura de Rotas (Pages)

A navegação da aplicação é simples e fluida. As páginas ficam no diretório `src/pages/`.

### 3.1 Página Inicial (`/` - `index.astro`)
- **Apresentação (Hero Section):** Contém um título de boas-vindas ("O que você quer cozinhar hoje?"), subtítulo e o componente de busca (`SearchBar`).
  - *Funcionalidade Atual de Busca:* A busca trabalha de forma dinâmica puramente no cliente. É case insensitive, ignora acentos, e filtra em tempo real as receitas considerando: o título, a categoria e seus ingredientes (conteúdo do corpo).
- **Filtros de Categorias:** Uma lista de botões ("chips") estilo pílula que representam todas as categorias disponíveis.
  - *Funcionalidade Atual:* Trabalha em conjunto com a Busca (`client-side`). Ao ativar uma categoria, a lista é cruzada com a pesquisa atual aplicando `display: none` nas não equivalentes. O botão "Todas" reseta o escopo de categoria.
- **Grid de Receitas:** Onde as receitas são consultadas (`getCollection('receitas')`) e renderizadas individualmente chamando o componente `RecipeCard`.

### 3.2 Página de Receita Detalhada (`/receitas/[id]` - `[id].astro`)
- **Geração de Rotas Dinâmicas:** A página consome a API `getStaticPaths()` do Astro, criando rotas exclusivas baseadas no `id` (nome do arquivo .md) de cada receita na compilação.
- **Hero da Receita (Header):** Mostra a imagem de fundo da receita com uma "tag" (`category-badge`) contendo a sua categoria respectiva.
- **Informações e Metadados:** Exibe Título, Descrição e "Meta Cards" detalhando visualmente (com ícones de destaque) o tempo e os rendimentos definidos no frontmatter.
- **Ações:** Exibe botões visuais para "Imprimir Receita" e "Compartilhar" elaborados via o componente `<Button>`.
- **Corpo da Receita (Markdown):** É renderizado `<Content />` usando estilos globais focados em legibilidade e tipografia limpa.
- **Sidebar (Dica do Chef):** Um painel lateral de design fixo.

## 4. Componentes de UI (`src/components/`)
A interface agrupa blocos reutilizáveis focados em modularização e padrão de design.

- **`RecipeCard.astro`:** Elemento do grid que expõe um preview de uma receita contendo imagem, title, category, meta de infos (time, portions) e um link encapsulando o card que aponta para a rota de detalhes.
- **`SearchBar.astro`:** Sub-componente visual da vitrine. (Atualmente desenhado para compor a estética do cabeçalho).
- **`Button.astro`:** Componente de ação genérico. Trabalha via propriedades ou classes para estabelecer a hierarquia visual (primary, secondary/outlined e com ícones).
- *(Layout Global)* **`Layout.astro` (`src/layouts/`):** Configura a base HTML (`<head>`, `<slot />`) incluindo a estabilização CSS essencial, variáveis globais do tema e estrutura da fonte/body do projeto.

## 5. Design System

Todas as novas interações devem obrigatoriamente seguir as métricas base extraídas de `seara_design_system.md`. O direcionamento busca refletir um estilo corporativo arrojado e engajante, idêntico à plataforma Seara: Minha Receita.

### Variáveis e Padrões Principais
- **Cor Primária:** Laranja Seara (`#F25D27`) – Usada extensivamente em focos de ação, botões primários e states ativos.
- **Cor Crítica da Marca:** Vermelho (`#C8102E`) – Reservada.
- **Fundo Principal (Bg Geral):** Cinza Muito Claro (`#F7F7F7`).
- **Fundo de Cartões / Surfaces:** Branco Puro (`#FFFFFF`)
- **Sombreamentos e Arredondamentos:** 
  - Cantos são macios: Cartões (`12px-16px`), Botões padrão/Entradas (`8px-12px`) ou padrão Pill (totalmente redondo - `999px`) em badges e chips de categoria.
  - Sombras não são duras, e sim sutis, simulando flutuação leve (ex: `box-shadow: 0 4px 12px rgba(0,0,0,0.05)`).
- **Tipografia:** Moderna, limpa, preferencialmente usando fontes formatadas e espaçamentos confortáveis (`1.5` line-height nos textos soltos).
- **Interações (Hover):** Componentes clicáveis geralmente elevam-se suavemente (`transform: translateY(-2px);`) ou escalam suas texturas (imagens e cartões).

## 6. Ferramentas Integradas (Agentes/Skills)

- O diretório `.agents/skills/gerar-receita/` hospeda as regras utilizadas por IAs para **Geração Automatizada de Receitas**.
- Quando instruído a criar uma receita nova, a IA sabe que deve referenciar esta estrutura garantindo as restrições impostas (`schema` de categoria permitida e estrutura em Markdown).

---

> **Atenção:** Qualquer nova feature como, por exemplo, o botão de "Favoritos" ou busca dinâmica com campo SearchBar deve ser estruturada sobre esse mapa sem quebrar a compilação de Tipagem (`schema`) nem adulterar a base de estilos de UI documentada.

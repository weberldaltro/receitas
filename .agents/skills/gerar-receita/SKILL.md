---
name: Gerar Receita
description: Gera um novo arquivo Markdown de receita seguindo o padrão estrutural e visual do projeto.
---

Esta skill instrui o agente a criar arquivos `.md` de receitas bem formatados, que seguem o mesmo layout de dados e seções presentes nas receitas já existentes, como `frango-assado.md`.

## Como usar

Quando o usário pedir para criar uma receita (ex: "Use a skill de gerar receita para criar um brigadeiro"):

1. **Local de Salvação:** 
   Sempre crie o novo arquivo dentro da pasta `src/content/receitas/`.
   Nomeie o arquivo todo em minúsculas e separado por hifens (ex: `brigadeiro-tradicional.md`).

2. **Estrutura Frontmatter (YAML):**
   O arquivo deve obrigatoriamente iniciar com um frontmatter contendo as seguintes chaves. Você deve preencher (inventar, pesquisar ou perguntar) os valores apropriados para a receita sendo criada:
   
   ```markdown
   ---
   title: "Nome da Receita (Ex: Frango Assado com Batatas Rústicas)"
   description: "Uma breve descrição da receita de no máximo 2 linhas."
   image: "Url de uma imagem ilustrativa (use fotos do unsplash com ?q=80&w=2070&auto=format&fit=crop)"
   category: "A categoria (ex: Aves, Carnes, Massas, Doces)"
   time: "Tempo de preparo (ex: 1h 30m ou 45m)"
   portions: "Rendimento (ex: 4 porções)"
   ---
   ```
   **Nota sobre imagens:** Prefira sempre buscar URLs funcionais no banco do Unsplash que correspondam ao prato.

3. **Estrutura do Corpo da Receita (Markdown):**
   O corpo do texto deve consistir obrigatoriamente de duas seções H2 (`## Ingredientes` e `## Modo de Preparo`).

   **Ingredientes:**
   Liste os ingredientes como uma lista não ordenada (usando `-`). As quantidades devem ser claras.
   ```markdown
   ## Ingredientes

   - Ingrediente 1 com medida
   - Ingrediente 2 com medida
   ```

   **Modo de Preparo:**
   Liste as etapas como uma lista numerada (usando `1.`, `2.`).
   Opcionalmente (mas preferencial), inicie cada passo com uma palavra-chave ou pequeno título em negrito.
   ```markdown
   ## Modo de Preparo

   1. **Passo Inicial:** Faça isso e aquilo.
   2. **Preparo Principal:** Leve ao fogo e mexa.
   ```

4. **Ação final:** 
   Uma vez gerado o arquivo em `src/content/receitas/`, confirme ao usuário que a receita foi criada e já está disponível para visualização no servidor local.

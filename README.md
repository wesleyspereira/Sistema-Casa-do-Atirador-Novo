# Casa do Atirador — vitrine premium responsiva

Novo visual de apresentação **React + Vite + CSS + JavaScript**, baseado na identidade camuflada da Casa do Atirador, com destaque para o vídeo original e layout que funciona no computador, tablet e celular.

## Como abrir no VS Code

1. Extraia esta pasta (não use a versão `dist` antiga).
2. Abra a pasta no VS Code.
3. No terminal, execute:

```bash
npm install
npm run dev
```

Acesse o endereço `localhost` informado pelo Vite.

Para gerar a pasta de produção: `npm run build`.

## O que foi alterado

- Vídeo **original** mantido em `public/videos/hero.mp4`, exibido na abertura sem distorção, com reprodução automática silenciosa.
- Quatro categorias: Pistolas, Revólveres, Rifles e Carabinas, Esportivas. Removemos Espingardas da vitrine principal a pedido.
- Seção **Destaques antes de Serviços**, com imagens locais, carrossel horizontal e filtros por categoria.
- Layout celular com menu sanfona, categorias em grade 2x2, vídeo ajustado e Destaques deslizáveis com toque.
- Tema claro corrigido: seções legíveis em tons creme; hero, cabeçalho e cartões de categoria mantêm identidade escura.
- Efeitos de círculos coloridos removidos; textura camuflada preservada.
- Informações de contato e serviços alinhadas à loja antiga. Links de Instagram e WhatsApp reais.
- Nenhum preço ou estoque foi inventado. As imagens da vitrine são **ilustrativas**. Antes de publicar catálogo definitivo, substituir fotos e descrições pelos SKUs oficiais.

## Editar rapidamente

- **Categorias e imagens:** `src/sections/Categories.jsx`.
- **Destaques e imagens:** `src/sections/Featured.jsx`.
- **Textos/vídeo da abertura:** `src/components/Hero.jsx` e `public/videos/hero.mp4`.
- **Serviços:** `src/sections/Services.jsx`.
- **Menu, pesquisa e alternância claro/escuro:** `src/components/Header.jsx`.
- **Layout/cores/responsividade desta versão:** `src/styles/revamp.css` (no final estão as regras mais recentes).
- **Footer/contatos:** `src/components/Footer.jsx`.

## Observações

Este front-end é uma vitrine de apresentação. Não possui backend, sistema de vendas ou estoque conectado. A página antiga não foi alterada. Comercialização e documentação de produtos controlados exigem a verificação dos requisitos legais atuais.

Fontes de conteúdo: catálogo público `casa-do-atirador.lojaintegrada.com.br` e perfil oficial `instagram.com/casadoatiradorguarapari`. A consulta automática ao Instagram pode ser limitada; foto e estoque devem ser revisados com a empresa.

## Acabamento do topo — vídeo integrado (nova atualização)

- **Abertura sem moldura:** o vídeo original continua em `public/videos/hero.mp4`. Agora ele se mistura ao fundo camuflado por `mix-blend-mode: screen` e um degradê suave, sem bordas e sem distorcer a proporção.
- **Cabeçalho:** logo na esquerda, navegação centralizada no desktop; busca, usuário, alternância de tema e carrinho à direita. O carrinho mostra aviso de que a função ainda está em desenvolvimento (não existe checkout).
- **WhatsApp flutuante:** aparece no canto inferior direito no computador e celular e usa o mesmo contato que já constava no rodapé.
- **Personalização:** `src/styles/natural-hero.css`, importado por último em `src/main.jsx` para que os novos ajustes prevaleçam. Para trocar o WhatsApp, atualize `src/components/WhatsAppFloat.jsx` e `src/components/Footer.jsx`.

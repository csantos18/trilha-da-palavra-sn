# Relatorio Tecnico - Trilha da Palavra SN

## 1. Resumo

A Trilha da Palavra SN e uma aplicacao web estatica feita com HTML, CSS e JavaScript puro. O sistema entrega uma experiencia educativa de desafios biblicos praticos, com foco em seguranca, responsividade, uso acompanhado e ausencia de coleta de dados pessoais.

## 2. Arquitetura

- `index.html`: estrutura das telas, botoes, paineis e areas dinamicas.
- `styles.css`: identidade visual, responsividade, estados de interface e ajustes mobile.
- `data.js`: banco local de perguntas, temas, personagens, missoes e mensagens.
- `script.js`: regras do jogo, pontuacao, navegacao, feedback, progresso local e geracao do cartao.
- `netlify.toml`: configuracao de publicacao estatica no Netlify.
- `docs/`: documentacao profissional do projeto.

## 3. Stack

- HTML5.
- CSS3.
- JavaScript client-side.
- `localStorage` para progresso local.
- Netlify para deploy estatico.

## 4. Regras Implementadas

- Rodadas por tema, personagem, fase ou tipo de desafio.
- Resposta correta gera pontuacao.
- Uso de dica reduz a pontuacao da pergunta.
- Sequencia de acertos gera incentivo por combo.
- Medalhas representam progresso por personagem.
- Progresso permanece apenas no navegador do usuario.
- Cartao final pode ser copiado ou salvo como PNG.

## 5. Responsividade

O projeto segue os pontos definidos:

- Mobile: ate 768px.
- Tablet: de 769px a 1024px.
- Desktop: acima de 1024px.

No mobile, o menu hamburguer organiza controles e reduz excesso visual na primeira tela.

## 6. Privacidade e Seguranca

O projeto nao possui login, chat, anuncios, compras, formulario de dados pessoais nem envio de informacoes para servidor. O unico armazenamento previsto e local, via navegador.

## 7. Limitacoes Tecnicas

- Nao possui painel administrativo.
- Nao possui banco de dados remoto.
- Nao possui sincronizacao entre dispositivos.
- Nao possui analytics ou acompanhamento centralizado.
- Conteudo deve passar por revisao biblica e pedagogica antes de uso amplo.

## 8. Qualidade

Validacoes recomendadas:

```bash
node --check script.js
node --check data.js
```

Tambem devem ser feitos testes manuais em celular, tablet e desktop, validando inicio da rodada, respostas, dicas, feedback, tela final e geracao do cartao.

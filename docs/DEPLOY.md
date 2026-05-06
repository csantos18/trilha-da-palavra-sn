# Guia de Deploy - Trilha da Palavra SN

## 1. Objetivo

Publicar a Trilha da Palavra SN como site publico para teste com familia, igreja, escola biblica e responsaveis fora do computador local.

## 2. Plataforma Recomendada

Netlify e a opcao recomendada para validacao publica inicial, pois aceita projeto estatico em HTML, CSS e JavaScript sem servidor proprio.

## 3. Configuracao do Projeto

O arquivo `netlify.toml` define:

- publicacao da raiz do projeto;
- ausencia de etapa de build;
- headers de cache para reduzir risco de carregar versao antiga durante validacoes.

## 4. Publicacao

1. Acessar o Netlify.
2. Criar ou entrar em uma conta.
3. Conectar repositorio ou publicar a pasta do projeto.
4. Confirmar que o diretorio de publicacao e a raiz.
5. Validar o link gerado no celular, tablet e computador.
6. Enviar o link final somente depois de testar uma rodada completa.

## 5. Criterios de Aceite

- O link abre fora do computador local.
- O site carrega no celular usando outra rede.
- Um card de tema inicia a primeira pergunta automaticamente.
- O botao "Comecar agora" funciona como caminho alternativo.
- Depois de responder, aparece o botao "Proxima".
- A tela final aparece ao concluir a rodada.
- O cartao final pode ser copiado ou salvo em PNG.

## 6. Ambiente Profissional Futuro

Para producao robusta, recomenda-se dominio proprio, HTTPS, rotina de versoes, revisao de conteudo antes de publicar e ambiente separado para homologacao.

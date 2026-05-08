# Guia de Deploy - Trilha da Palavra SN

## 1. Objetivo

Manter a Trilha da Palavra SN publicada como site publico para teste com familia, igreja, escola biblica e responsaveis fora do computador local.

## 2. Plataforma Atual

Netlify e o ambiente atual de publicacao:

```text
https://trilha-da-palavra-sn.netlify.app
```

Ele e adequado para a validacao publica inicial porque aceita projeto estatico em HTML, CSS e JavaScript sem servidor proprio.

## 3. Configuracao do Projeto

O arquivo `netlify.toml` define:

- publicacao da raiz do projeto;
- ausencia de etapa de build;
- headers de cache para reduzir risco de carregar versao antiga durante validacoes.

## 4. Publicacao e Manutencao

Status validado em 2026-05-08:

- home `/` abre com status 200;
- `index.html`, `styles.css`, `script.js` e `data.js` abrem com status 200;
- `netlify.toml` nao fica publico no site;
- o projeto local e o GitHub estao sincronizados na branch `main`.

Para novas publicacoes:

1. Enviar as alteracoes para a branch `main`.
2. Confirmar deploy concluido no Netlify.
3. Validar o link no celular, tablet e computador.
4. Testar uma rodada completa antes de enviar o link para terceiros.

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

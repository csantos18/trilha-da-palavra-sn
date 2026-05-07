# Responsividade Content-First

## Objetivo

Garantir que o layout se adapte ao conteudo real da interface.

Em vez de definir apenas pontos fixos como "celular", "tablet" e "desktop", o projeto passa a usar uma regra mais profissional:

> O layout muda quando o conteudo comeca a ficar apertado.

## Problema identificado

Na area "Desafio da semana", os cards estavam organizados em uma grade fixa de 5 colunas.

Essa regra fazia alguns textos ficarem apertados ou passarem do limite visual do card.

Exemplos:

- Responsabilidade.
- Gratidao.
- Recomeço.
- textos secundarios com duas ou mais palavras.

## Regra anterior

```css
.weekly-actions {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
}
```

## Problema da regra anterior

A grade forçava 5 cards por linha mesmo quando o conteudo precisava de mais espaco.

O resultado era:

- texto passando do card;
- quebra visual ruim;
- perda de acabamento profissional;
- sensacao de interface mal configurada.

## Nova regra

```css
.weekly-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(176px, 100%), 1fr));
  gap: 10px;
  align-items: stretch;
}
```

## Como a nova regra funciona

Cada card precisa ter uma largura minima confortavel.

Se houver espaco, o navegador coloca mais cards na mesma linha.

Se nao houver espaco, o card desce automaticamente para a proxima linha.

Isso evita que o texto fique espremido.

## Protecao de texto

```css
.weekly-card strong {
  max-width: 100%;
  overflow-wrap: anywhere;
  word-break: normal;
  hyphens: auto;
  font-size: clamp(0.92rem, 1.5vw, 1.08rem);
  line-height: 1.12;
  text-wrap: balance;
}

.weekly-card span {
  max-width: 100%;
  overflow-wrap: anywhere;
  word-break: normal;
  hyphens: auto;
  font-size: clamp(0.8rem, 1.25vw, 0.9rem);
  line-height: 1.22;
}
```

## Resultado esperado

- Nenhum texto deve passar do card.
- Palavras grandes devem caber com seguranca.
- A grade deve se reorganizar sozinha.
- O layout deve funcionar em telas pequenas, medias e grandes.
- A interface deve manter aparencia profissional.

## Testes realizados

Foram testadas as seguintes larguras:

- Mobile: 390px.
- Tablet estreito: 768px.
- Largura semelhante ao print do cliente: 1150px.
- Desktop: 1366px.

## Resultado dos testes

```text
Sem rolagem horizontal.
Sem texto passando do card.
Sem overflow em Responsabilidade.
Sem quebra visual inadequada em Gratidao.
```

## Regra profissional adotada

O projeto usa responsividade orientada pelo conteudo.

Isso significa que os componentes definem sua propria largura minima segura, e o layout se reorganiza quando essa largura nao cabe mais.

Essa abordagem e mais profissional do que depender apenas de breakpoints fixos por tipo de dispositivo.

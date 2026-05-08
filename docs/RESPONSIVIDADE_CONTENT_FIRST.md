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
  grid-template-columns: repeat(auto-fit, minmax(min(210px, 100%), 1fr));
  gap: 10px;
  align-items: stretch;
}
```

## Como a nova regra funciona

Cada card precisa ter uma largura minima confortavel de ate 210px.

Se houver espaco, o navegador coloca mais cards na mesma linha.

Se nao houver espaco, o card desce automaticamente para a proxima linha.

Isso evita que o texto fique espremido.

## Protecao de texto

```css
.weekly-card strong,
.weekly-card span {
  display: block;
  max-width: 100%;
  overflow-wrap: anywhere;
  word-break: break-word;
  hyphens: auto;
  white-space: normal;
}

.weekly-card strong {
  font-size: clamp(0.82rem, 1.5vw, 1.02rem);
  line-height: 1.12;
  text-wrap: balance;
}

.weekly-card span {
  font-size: clamp(0.76rem, 1.25vw, 0.88rem);
  line-height: 1.22;
}
```

## Regra especifica para mobile estreito

```css
@media (max-width: 768px) {
  .weekly-actions {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 430px) {
  .weekly-card strong {
    font-size: 0.88rem;
    line-height: 1.08;
  }
}
```

## Resultado esperado

- Nenhum texto deve passar do card.
- Palavras grandes devem caber com seguranca.
- A grade deve se reorganizar sozinha.
- O layout deve funcionar em telas pequenas, medias e grandes.
- A interface deve manter aparencia profissional.

## Correção estrutural no HTML

Para garantir o resultado mesmo em telas muito estreitas, os textos mais longos tambem receberam pontos de quebra no HTML.

```html
<strong>Responsa<wbr>bilidade</strong>
<span>cumprir<br>combinados</span>
```

Essa decisao evita depender apenas do navegador para decidir onde quebrar palavras longas.

## Testes realizados

Foram testadas as seguintes larguras:

- Mobile: 390px.
- Tablet estreito: 768px.
- Largura semelhante ao print do cliente: 1150px.
- Desktop: 1366px.
- Tela estreita semelhante ao print: 299px.

## Resultado dos testes

```text
Sem rolagem horizontal.
Sem texto passando do card.
Sem overflow em Responsabilidade.
Sem quebra visual inadequada em Gratidao.
Sem vazamento em tela estreita de 299px.
```

## Regra profissional adotada

O projeto usa responsividade orientada pelo conteudo.

Isso significa que os componentes definem sua propria largura minima segura, e o layout se reorganiza quando essa largura nao cabe mais.

Essa abordagem e mais profissional do que depender apenas de breakpoints fixos por tipo de dispositivo.

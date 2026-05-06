# PRD Oficial - Trilha da Palavra SN

## 1. Visão Geral

**Nome do projeto:** Trilha da Palavra SN  
**Categoria:** ferramenta de desafios bíblicos práticos.  
**Público-alvo principal:** crianças e pré-adolescentes de 9 a 13 anos.  
**Público secundário:** famílias, igrejas, escolas bíblicas, professores, líderes e responsáveis.

A ferramenta conduz desafios curtos que conectam histórias e valores bíblicos com missões práticas para viver fora da tela.

Fluxo principal:

```text
tema da semana -> decisão do jogador -> explicação -> missão prática -> cartão de acompanhamento
```

## 2. Problema

Famílias, igrejas e escolas bíblicas precisam de recursos digitais simples, seguros e atrativos para transformar ensino bíblico em prática real, sem expor crianças a chat aberto, anúncios, compras ou coleta de dados pessoais.

## 3. Objetivo do Produto

Criar uma experiência educativa, segura e responsiva, capaz de orientar conversas e desafios semanais sobre amor, coragem, perdão, fidelidade, esperança, liderança, responsabilidade e transformação.

## 4. Público-alvo

- Crianças e pré-adolescentes de 9 a 13 anos.
- Famílias que desejam uma prática bíblica simples durante a semana.
- Igrejas, escolas bíblicas, professores e líderes que precisam de uma dinâmica curta para grupo.
- Professores, líderes e famílias que desejam usar o jogo como apoio educativo.

## 5. Proposta de Valor

O projeto deixa de ser apenas um quiz e passa a funcionar como ferramenta de desafio prático. O diferencial está no ciclo: jogar, conversar, assumir uma missão, copiar o cartão e acompanhar a prática durante a semana.

## 6. Funcionalidades Implementadas

- Mapa de missões por personagem.
- Trilha completa com todos os personagens.
- Seleção de modo de jogo.
- Perguntas de múltipla escolha com respostas A/B/C.
- Banco de perguntas, situações e histórias separado em `data.js`.
- Pontuação, combo e progresso da rodada.
- Dicas curtas que ajudam sem entregar a resposta.
- Feedback educativo após cada resposta.
- Missão prática após cada pergunta.
- Tela final com nível, conquistas e missão do dia.
- Progresso salvo no navegador com `localStorage`.
- Personagem visual com fala curta.
- Menu responsivo para mobile.
- Botão de início rápido para celular e tablet.
- Tela de perguntas compacta no celular, reduzindo a necessidade de rolagem.
- Rolagem automática para pergunta e próxima ação durante a rodada.
- Visual confortável, com contraste controlado para reduzir cansaço visual.
- JavaScript sem recursos modernos desnecessários que possam travar navegadores móveis mais antigos.
- Coleção com medalhas por personagem.
- Próximo alvo sugerido para incentivar retorno.
- Foco visível para navegação por teclado.
- Suporte a redução de movimento configurada no sistema do usuário.
- Tela inicial com identidade visual reforçada.
- Fases rápidas por tema: coragem, perdão, sabedoria e recomeço.
- Modo responsável com orientação de uso seguro para família, igreja ou aula.
- Sons opcionais para melhorar resposta de jogo sem obrigar o usuário.
- Recompensas visuais na tela final.
- Material comercial e roteiro de teste com público-alvo.
- Desafio da semana com 16 temas práticos para uso recorrente.
- Início automático da rodada ao tocar em um card de tema, reduzindo etapas no celular.
- Cartão de missão copiável ao final da rodada.
- Cartão de missão em PNG gerado localmente, sem internet e sem serviço externo.
- Roteiro rápido de aplicação para família, igreja e escola bíblica.
- Avatares simbólicos leves para reforçar identidade dos personagens sem depender de imagens externas.
- Selo do desafio e etapas visuais durante a rodada.
- Feedback motivador para erro, mantendo a experiência acolhedora para 9 a 13 anos.
- Plano de 12 semanas para facilitar uso recorrente por líderes, professores e famílias.

## 7. Regras de Negócio

- Resposta correta sem dica vale mais pontos.
- Resposta correta com dica vale menos pontos.
- Sequência de acertos gera bônus limitado.
- Medalhas disponíveis: Novo, Bronze, Prata e Ouro.
- Uma medalha melhor não deve ser substituída por uma inferior.
- A coleção considera os personagens principais.
- A trilha completa pode apresentar personagens ainda não jogados.
- O progresso fica somente no navegador do usuário.
- O jogo não exige login para funcionar.

## 8. Privacidade e Segurança

- Sem login.
- Sem chat aberto.
- Sem anúncios.
- Sem compras internas.
- Sem coleta de dados pessoais.
- Sem cadastro de crianças.
- Sem envio de informações para servidor externo.
- Progresso salvo apenas em `localStorage`.
- Conteúdo pensado para uso acompanhado por família, igreja ou educador.

Detalhes formais estão no documento [Política de Privacidade e LGPD](POLITICA_PRIVACIDADE_LGPD.md).

## 9. Responsividade

- Mobile: até 768px.
- Tablet: de 769px a 1024px.
- Desktop: acima de 1024px.

No mobile, o menu organiza jornada e modo de jogo para preservar clareza e navegação simples.

## 10. Critérios de Aceite

- O jogador consegue escolher modo, missão, iniciar, responder e finalizar uma rodada.
- O feedback aparece após cada resposta.
- A pontuação final corresponde aos acertos e ao uso de dicas.
- A tela final mostra nível, conquistas e missão prática.
- A coleção mostra medalhas, pontuação e progresso por personagem.
- O layout permanece utilizável em celular, tablet e desktop.
- O jogador encontra um botão de início sem precisar rolar toda a tela inicial no celular.
- O jogador consegue iniciar uma rodada tocando diretamente no card do desafio escolhido.
- O jogador consegue responder no celular sem procurar as alternativas no fim da tela.
- A tela de jogo mantém leitura confortável, sem fundo escuro intenso.
- Os textos aparecem sem erro de codificação.
- O jogo funciona no navegador local.
- O projeto possui README, PRD oficial e política de privacidade/LGPD sincronizados.
- O projeto possui material comercial e roteiro de teste com público-alvo.
- O projeto possui configuração para deploy estático gratuito.
- A tela final gera uma missão prática clara e um cartão copiável.
- A tela final permite salvar cartão PNG localmente.

## 11. Checklist de Revisão

- Revisão de grafia e acentuação.
- Revisão bíblica por líder, professor ou responsável competente.
- Revisão pedagógica da linguagem para 10 a 12 anos.
- Teste com crianças de 9 a 13 anos, sempre com acompanhamento responsável.
- Observação se o jogador entende a missão prática sem explicação externa.
- Validação de responsividade em celular, tablet e desktop.
- Validação de que não existe coleta de dados pessoais.

## 12. Fora do Escopo Atual

- Login de usuário.
- Chat entre jogadores.
- Ranking público.
- Compras internas.
- Anúncios.
- Coleta de dados pessoais.
- Painel administrativo.
- Banco de dados externo.

Esses itens ficam fora do escopo para manter a proposta segura, leve e adequada ao público-alvo.

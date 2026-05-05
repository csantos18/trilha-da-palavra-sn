# Trilha da Palavra SN

Ferramenta de desafios bíblicos práticos para crianças e pré-adolescentes de 9 a 13 anos, criada para família, igreja e escola bíblica. O projeto transforma histórias e valores bíblicos em missões semanais para praticar fora da tela.

## Objetivo

Oferecer uma experiência segura, simples e educativa para conduzir conversas, desafios práticos e acompanhamento em casa, aula ou grupo, sem login, sem chat, sem anúncios, sem compras e sem coleta de dados pessoais.

## Público-alvo

- Principal: crianças e pré-adolescentes de 9 a 13 anos.
- Secundário: famílias, professores, líderes e responsáveis que conduzem o desafio.
- Uso indicado: família, igreja, escola bíblica, pequenos grupos e atividades educativas.

## Funcionalidades

- Mapa de missões por personagem.
- Modos de jogo: missões bíblicas, situações do dia a dia e histórias com decisões.
- Perguntas de múltipla escolha.
- Dicas com redução de pontuação.
- Feedback educativo depois de cada resposta.
- Missão prática ao final de cada desafio.
- Pontuação, combo, nível e medalhas.
- Progresso salvo somente no navegador do usuário com `localStorage`.
- Interface responsiva para celular, tablet e desktop.
- Botão de início rápido para celular e tablet.
- Tela de perguntas compacta no celular, com respostas mais próximas da pergunta.
- Rolagem automática para pergunta e próxima ação durante a rodada.
- Visual confortável, com contraste controlado para leitura prolongada.
- JavaScript ajustado para maior compatibilidade com navegadores móveis.
- Acessibilidade básica com foco visível e suporte a redução de movimento.
- Fases rápidas por tema: coragem, perdão, sabedoria e recomeço.
- Modo responsável com orientação de uso seguro.
- Sons opcionais para acerto, erro, início e conclusão.
- Recompensas visuais na tela final.
- Desafio da semana com 16 temas práticos para uso recorrente.
- Cartão de missão copiável para compartilhar ou acompanhar.
- Cartão de missão em PNG, gerado localmente e sem internet.
- Roteiro de aplicação para família, igreja e escola bíblica.
- Avatares simbólicos leves para os personagens.
- Selo do desafio e etapas visuais durante a rodada.
- Feedback motivador para erro, sem punir a criança.
- Plano de 12 semanas para uso recorrente.

## Como Executar

Abra o arquivo `index.html` no navegador ou execute com um servidor local simples.

Exemplo:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Estrutura

```text
jogo/
├── index.html
├── styles.css
├── data.js
├── script.js
├── README.md
└── docs/
    ├── PRD.md
    ├── POLITICA_PRIVACIDADE_LGPD.md
    ├── MATERIAL_COMERCIAL.md
    └── ROTEIRO_TESTE_PUBLICO.md
```

## Documentação Oficial

- [PRD oficial](docs/PRD.md)
- [Política de Privacidade e LGPD](docs/POLITICA_PRIVACIDADE_LGPD.md)
- [Material comercial](docs/MATERIAL_COMERCIAL.md)
- [Roteiro de teste com público-alvo](docs/ROTEIRO_TESTE_PUBLICO.md)
- [Deploy gratuito](docs/DEPLOY_GRATUITO.md)

## Privacidade

O projeto não coleta nome, e-mail, telefone, imagem, localização ou qualquer dado pessoal. O progresso fica salvo apenas no navegador do usuário, por meio de `localStorage`, e pode ser apagado limpando os dados do navegador.

## Status do Projeto

Versão funcional para validação educativa, demonstração e publicação estática gratuita. Antes de uso público amplo, recomenda-se revisão bíblica, revisão pedagógica e teste acompanhado com o público-alvo.

# Let Me Do It - Sistema de Correção de Provas

Link para o Frontend do site: https://github.com/gabrii3lmao/LMDI-frontend.git

Este projeto é um sistema backend para **criação de gabaritos oficiais**, **submissão de tentativas de alunos** e **correção automática de respostas**. Ele foi pensado para modelar um problema real de avaliação, separando regras de negócio, persistência de dados e camada de controle de forma clara e sustentável.

---

## O que o sistema faz

- Permite criar **gabaritos oficiais** com número fixo de questões
- Permite que alunos enviem **tentativas** associadas a um gabarito específico
- Corrige automaticamente as respostas com base no gabarito oficial
- Armazena a pontuação final e mantém histórico das tentativas
- Retorna uma visão detalhada de acertos e erros por questão

---

## Arquitetura e organização

O projeto segue uma separação clara de responsabilidades:

- **Models**: representam o domínio e as regras estruturais dos dados
- **Services**: concentram a lógica de negócio (correção, validação, cálculo de pontuação)
- **Controllers**: lidam exclusivamente com HTTP, entrada e saída de dados
- **Rotas**: conectam as ações do sistema aos controllers

Essa separação evita acoplamento excessivo e facilita manutenção, testes e evolução do sistema para futuras features.

---

## Tecnologias utilizadas

- **TypeScript**
- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**

---

## Principais aprendizados

Ao longo do desenvolvimento, o principal aprendizado foi entender melhor como transformar um problema real em uma solução bem modelada. Esse projeto, originado a partir de uma pesquisa da matéria de Projeto Integrador, me serviu para aprender mais sobre o processo de criação de um aplicativo, seguindo passos desde a origem do problema até a forma de solução.

Também foi um exercício importante para escrever código de forma mais clara, organizar melhor a lógica do backend e estruturar o frontend com mais responsabilidade.

---

Feito com amor por Gabriel Moura Luz.

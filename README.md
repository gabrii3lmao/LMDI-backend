# Let Me Do It - Sistema de Correção de Provas
Link para o Frontend do site: https://github.com/gabrii3lmao/LMDI-frontend.git

Este projeto é um sistema backend para **criação de gabaritos oficiais**, **submissão de tentativas de alunos** e **correção automática de respostas**. Ele foi pensado para modelar um problema real de avaliação, separando regras de negócio, persistência de dados e camada de controle de forma clara e sustentável.

Mais do que uma aplicação funcional, este projeto serve como um exercício prático de **arquitetura**, **modelagem de domínio** e **boas decisões técnicas**.
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

## 🛠️ Tecnologias utilizadas

- **TypeScript**  
  Utilizado para garantir tipagem estática, contratos claros entre camadas e maior segurança na evolução do código.

- **Node.js**  
  Plataforma de execução do backend, permitindo a construção de uma API leve e performática.

- **Express**  
  Framework responsável pela camada HTTP, roteamento e controle das requisições.

- **MongoDB**  
  Banco de dados orientado a documentos, adequado para representar estruturas como gabaritos e tentativas na qual o fluxo é dinâmico.
  (ex: um gabarito pode ter 5 questões, enquanto outro já pode ter 10).

- **Mongoose**  
  ODM utilizado para modelar entidades, aplicar validações e definir relacionamentos entre documentos.
---

## Principais aprendizados

Durante o desenvolvimento deste projeto, foram consolidados conceitos importantes:

- Modelagem de domínio baseada em **problemas reais**, não apenas em tabelas
- Diferença clara entre **entidade**, **serviço** e **controller**
- Uso consciente de **Services** para encapsular regras de negócio
- Implementação de **validações no domínio**, não apenas na interface
- Relacionamentos entre documentos no MongoDB usando referências
- Escrita de código TypeScript mais expressivo e confiável
- Organização de CSS por **componente e responsabilidade**, não por conveniência
- Evitar lógica de negócio dentro de rotas ou controllers

---

## Visão educacional
Esse projeto foi construído com foco em aprendizado, não em atalhos. Dentro do contexto do Projeto Integrador do IFPI, cada decisão técnica foi pensada a partir de problemas reais levantados durante a pesquisa, sempre tentando responder a uma pergunta simples: se esse sistema crescer, ele ainda faz sentido?

O resultado é uma base organizada, fácil de entender e de evoluir, alinhada com práticas profissionais de desenvolvimento backend.
---

Feito com amor por Gabriel Moura Luz.

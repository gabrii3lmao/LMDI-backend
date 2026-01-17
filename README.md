# Let Me Do It – Sistema de Correção de Provas

**Frontend:** [https://github.com/gabrii3lmao/LMDI-frontend.git](https://github.com/gabrii3lmao/LMDI-frontend.git)

Este projeto é um sistema backend para criação de gabaritos, submissão de tentativas de alunos e correção automática de respostas. Atualmente, funciona por meio de um formulário, mas há planos para evoluir o projeto com o uso de visão computacional.

Ele foi pensado para modelar um problema real de avaliação, separando regras de negócio, persistência de dados e camada de controle de forma clara e sustentável, facilitando sua manutenção.

Mais do que uma aplicação funcional, este projeto serve como um exercício prático de **arquitetura**, **modelagem de domínio** e **boas decisões técnicas**.

---

## Funcionalidades

- Criação de gabaritos oficiais com número dinâmico de questões  
- Criação de tentativas de alunos associadas a um gabarito específico  
- Correção automática das respostas com base no gabarito oficial  
- Armazenamento da pontuação final e histórico das tentativas  
- Retorno de uma visão detalhada de acertos e erros por questão

---

## Arquitetura e organização

O projeto segue uma separação clara de responsabilidades:

- **Models**: representam o domínio e as regras estruturais dos dados  
- **Services**: concentram a lógica de negócio (correção, validação, cálculo de pontuação)  
- **Controllers**: lidam exclusivamente com HTTP, entrada e saída de dados  
  *(tomei cuidado para não transformar essa camada em um módulo excessivamente grande)*
- **Rotas**: conectam as ações do sistema aos controllers

---

## Tecnologias utilizadas

- **TypeScript**  
  Utilizado para garantir tipagem estática e contratos claros entre camadas, além de aprofundar o aprendizado.
- **Node.js**  
  Plataforma de execução do backend, permitindo a construção de uma API leve e performática.  
  *"Não há lugar melhor do que o nosso lar <3 Node."*
- **Express**  
  Framework responsável pela camada HTTP, roteamento e tratamento das requisições.
- **MongoDB**  
  Banco de dados orientado a documentos, adequado para representar estruturas dinâmicas como gabaritos e tentativas  
  *(exemplo: um gabarito pode ter 5 questões, enquanto outro pode ter 10)*.
- **Mongoose**  
  ODM utilizado para modelar entidades, aplicar validações e definir relacionamentos entre documentos.

---

## Principais aprendizados

Ao longo do desenvolvimento, o principal aprendizado foi entender melhor como transformar um problema real em uma solução bem modelada. Trabalhei na separação entre entidades, services e controllers, mantive as regras de negócio fora das rotas e dediquei mais atenção às validações no próprio domínio. Busquei deixar clara a função de cada linha, módulo e pasta.

Também foi um exercício importante para escrever código de forma mais clara, organizar melhor a lógica do backend e estruturar o frontend com maior responsabilidade.

---

## Visão educacional

Este projeto foi construído com foco em aprendizado, não em atalhos. No contexto do Projeto Integrador do IFPI, cada decisão técnica partiu de problemas reais levantados durante a pesquisa.

O resultado é uma base organizada, fácil de entender e de evoluir, alinhada com práticas profissionais de desenvolvimento backend.

---

**Desenvolvido por Gabriel Moura Luz, com amor e muito café <3**

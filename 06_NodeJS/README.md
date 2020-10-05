# O que é ?
- Javascript no backend:
- Não lida com eventos finais do usuário;
- Rotas e integrações, (regras de negócio, meios de pagamento, tratativa de dados);
- É uma plataforma de desenvolvimento, e não uma linguagem;
- Contruído em cima da máquina V8 do google Chrome;
- Comparável com o PHP, Ruby, Go, entre outras linguagens de backend;

**NPM e Yarn:**

- Instalar biblioteca de terceiros, ex: alguma lib de pagamento;
- Fornecer bibliotecas criadas por usuários;
- Porque utilizar yarn ao invés de npm?
    - Yarn é mais rápido e performático, e tem mais funcionalidades;

**Características do Node:**

- Arquitetura de Event-Loop:
    - Baseada em eventos(Rota na maioria das vezes);
    - Call Stack (Pilha de eventos, que fica rodando eternamente e ouvindo alterações nessa pilha para executar);
- Single Thread(sempre executara somente em uma thread do seu processador):
    - C++ por trás com libuv(por baixo ele utiliza essa biblioteca do c++ que utiliza mais threads do processador, o que deixa o node mais "rápido", que seriam as background thread);
- Non-blocking I/O (Input e output não bloqueante), pode se abrir uma conexão que não se fecha, assim funcinam os chats em tempo real, com websockt.io;

## Frameworks:

- Express como base:
    - Sem onpião (Não tem estrutura fechada, podemos começar de qualquer forma);
    - ótimo para começar (poucos conceitos para poder começar a utilizar);
    - micro-serviços (dividir uma aplicação grande em pequenas aplicações);
- AdonisJs, NestJs
    - Deve seguir sua estrutura para codar, (framework com opnião);
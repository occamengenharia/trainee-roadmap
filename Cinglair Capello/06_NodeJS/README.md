# O que é NodeJs?

Node.js é um ambiente de tempo de execução JavaScript que forma a base de muitos frameworks de aplicativos populares hoje. O que fez com que fosse possível execução de código javascript fora do navegador.

- Foi lançado inicialmente em 2009 por Ryan Dahl. Em um curto período de 10 anos, o Node.js teve uma grande alta no mercado de desenvolvimento.
- Javascript no backend:
    - Não lida com eventos finais do usuário;
    - Rotas e integrações, (regras de negócio, meios de pagamento, tratativa de dados);
- É uma plataforma de desenvolvimento, e não uma linguagem;
- Contruído em cima da máquina V8 do google Chrome;
- Comparável com o PHP, Ruby, Go, entre outras linguagens de backend;
- É uma otima escolha para para construir diversas aplicações sejam elas backend, frontend, mobile, desktop, pelo motive de compartilhar da mesma linguagem como base dos códigos, e também do mesmo gerenciador de pacotes (NPM, Yarn).
 

## NPM e Yarn:

- Instalar biblioteca de terceiros, ex: alguma lib de pagamento;
- Fornecer bibliotecas criadas por usuários;
- Porque utilizar yarn ao invés de npm?
    - Yarn é mais rápido e performático, e tem mais funcionalidades;

## Características do Node:

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
  
<br>

## Diferença entre backend e frontend

- Backend
    - Desenvolvimento da parte da web que não vemos, ex:
        - Regras de negócio da aplicação.
        - Conexão com banco de dados.
        - Persistência de dados.

- Frontend
    - Toda a parte visível das aplicações e sites, ex:
        - usabilidade.
        - efeitos visuais.
        - velocidade de carregamento.
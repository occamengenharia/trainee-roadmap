# O que é React?

- Biblioteca para construção de interfaces, podendo ser web, desktop, realidade virtual, entre outras;
- Utilizado para construção de Single-Page Applications, conceito SPA, onde a página nunca recarrega, só vai alterando os componentes em tela;
- Podemos considerar um Framework?
    - Sim, ele por si só é uma lib;
    - Mas analisando seu ecossistema todo, podemos analizar como um framework;
- Tudo fica dentro do javascript;

## React, ReactJs, React Native ?

- React: se refere a biblioteca de construção de interfaces;
- ReactJs: Comportamento direto no browser, quando conectada com a lib react-dom que controla a dom de elementos do navegador;
- React Native: Soma da biblioteca React com outra biblioteca que lida com elementos nativos para mobile;

> Um exemplo de como tudo fica dentro do javascript:

```jsx
import React from 'react';

import './button.css';
import icon from './button.svg';

function button() {
return (
  <button>
    <img src={icon}/>
  </button>
  );
}
```

obs: graças ao react conseguimos usar sintaxe html dentro do javascript, se chama JSX;

## Vantagens

- Organização do código:
    - Componentização;
- Divisão de responsabilidade:
    - Backend: regra de negócio;
    - Frontend: interface;
- Uma api, múltiplos clientes;
- Programação declarativa:
    - Podemos comparar a programação declarativa vs programação imperativa:
        - Imperativa: o dev descreve ao computador cada passo que ele precisa fazer;
        - Declarativa: a gente descreve qual o resultado esperamos;
- JSX:
    - Escrever HTML dentro do javascript;
    - Com o React podemos criar nossos próprios elementos HTML;

## Babel / Webpack

- O browser não entende todo esse código;
- O Babel converte o código JS de uma forma que o browser entenda;
- Webpack possui várias funções:
    - Criação do bundle, arquivo com todo o código da aplicação (podemos ter inúmeros arquivos js, mas no final teremos somente um arquivo, de forma que o browser entenda);
    - Ensinar ao js como importar arquivos CSS, imagens, etc;
    - Live reload com webpack dev server;

# Componentes

Componentes permitem você dividir a UI em partes independentes, reutilizáveis, ou seja, trata cada parte da aplicação como um bloco isolado, livre de outras dependências externas. Componentes são como funções JavaScript. Eles aceitam entradas e retornam elementos React que descrevem o que deve aparecer na tela.

# Propriedades

Propiedade passsadas de um componente pai para um componente filho, o componente filho recebe essas props para tratar da maneira que quiser.

# Estado e Imutabilidade

Nunca podemos alterar diretamente o valor de uma varial de estado, para isso precisamos de uma função que altere o valor do estado, por isso chamamos os estados de imutáveis.
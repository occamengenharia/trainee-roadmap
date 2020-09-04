## Javascript ES6 +

Javascript em sua forma mais "moderna", ES6 se refere a versão do javascript de 2015, ES7 a versão de 2016... Seria uma nova forma de escrever códigos javascript. Como os navegadores tem um processo de atualização muito mais lento que o do JS, precisamos utilizar uma ferramenta para transpilar/converter o nosso código javascript para uma forma que esses navegadores mais antigos possa, entender, para isso utilizamos o  Babel ([https://babeljs.io/](https://babeljs.io/)).



### Para esse guia você deverá ter instalado o NodeJS e Yarn

- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)



### Configurando Babel

- Iniciar um projeto

  - ```bash
    yarn init
    ```

- Instalando babel cli e preset env, 

  - ```
    yarn add @babel/cli @babel/preset-env @babel/core
    ```

- Criar arquivo na raiz do projeto com o nome de .babelrc

  - ```bash
    touch babelrc
    ```

  - Babel irá transformar nosso código em uma forma que todos os navegadores entendam (preset env tranforma o código para melhor forma, dependendo da plataforma que estamos trabalhando).

  - ```javascript
    {
        "presets" : ["@babel/preset-env"],
        "plugins" : ["@babel/plugin-proposal-object-rest-spread"]
    }
    ```

  - Criar um arquivo js na raiz e colocar algum código dentro

  - ```javascript
    touch main.js && echo "alert('olá mundo')" >> main.js
    ```

    

  - Criar um script no package.json para buildar o código

  - ```json
    "scripts": {
        "dev": "babel ./main.js -o ./bundle.js -w"
      }
    ```

- Criar um arquivo index.html e importar o script no final do arquivo

  - ```bash
    touch index.html
    ```

  - ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <script src="./bundle.js"></script>
    </body>
    </html>
    ```

    

  ### Classes

  No Javascript ES6+ podemos utilizar classes

   

  ```javascript
  class Usuario{
      constructor(email, senha){
          this.email = email;
          this.senha = senha;
      }
  
      isAdmin(){
          return !!this.admin;
      }
  }
  
  class Admin extends Usuario{
      constructor(email, senha){
          super(email, senha);
          this.admin = true;
      }
  }
  
  const User1 = new Usuario('email@teste.com', 'senha123');
  const Adm1 = new Admin('email@teste.com', 'senha123');
  console.log(User1.isAdmin()) // false
  console.log(Adm1.isAdmin()) // true
  ```



### Const e let

- Até então só tinhamos visto como usar o "var" para declarar variáveis, agora no ES6 temos o let e o const

- tanto o let quanto o const tem seu valor definido somente dentro do escopo onde foram declarados.

- const

  - É importante utilizar `const` para declarar nossas variáveis, porque assim conseguimos um comportamento mais previsível, já que o  valor que elas recebem não podem ser alterado.

  - não pode ter seu valor reatribuído, mas podemos mutar valores, ex:

  - ```javascript
    const a = 1;
    a=2;
    // isso dará erro
    
    const user = { name: 'Gabriel' };
    user.name = 'João';
    // isso dará certo;
    
    ```

- let

  - pode ter seu valor reatribuído

- ```javascript
  let a = 1;
  a=2;
  // isso dará certo
  ```



- ```javascript
  var teste = function() {
       if(true) { 
           var varEscopo = 'variável var no escopo da função'; 
           let letEscopo = 'variável let no escopo da função';
  
          console.log(letEscopo); // variável let no escopo da função
      } 
      console.log(varEscopo); // variável var no escopo da função 
      console.log(letEscopo); 
  }
  
  teste(); // Imprime 'variável let no escopo da função', 'variável var no escopo da função' e dá um erro
  ```

- ```javascript
  // constante válida 
  const idade = 18;
  
  // constante inválida: onde está a inicialização? 
  const pi;
  ```

- Graças ao *hoisting*, variáveis declaradas com a palavra-chave `var` podem ser utilizadas mesmo antes de sua declaração.

  Por outro lado, as variáveis criadas com `let` só podem ser utilizadas após sua declaração, pois, apesar de serem elevadas, elas não são inicializadas.

  Além das variáveis declaradas com `var` temos a possibilidade de usar constantes por meio da palavra-chave `const` ou utilizar variáveis com escopo de bloco através da `let`.



### Operações em Arrays

- Método  **forEach( função )**  percorre um *array* e transforma seus elementos, obedecendo a uma função de transformação recebida como parâmetro. não retorna nada.

  ```javascript
  let numeros = [1, 2, 3];
  
  numeros.forEach(item => item * 10);
  console.log(numeros); // 10, 20, 30
  ```

  

- Método  **map( função de transformação )**  percorre um *array* e transforma seus elementos, obedecendo a uma função de transformação recebida como parâmetro. O resultado é um novo *array*, transformado

  ```javascript
  let numeros = [1, 2, 3];
  
  let novosNumeros = numeros.map(item => item * 10);
  console.log(novosNumeros); // 10, 20, 30
  ```

  

- Método **join( critério para junção )** , junta vários elementos de um *array*, tornando-os uma *string*. Na prática, invocamos o método, passando como parâmetro, o critério de junção

  ```javascript
  let numeros = [1, 2, 3];
  
  numeros.join(',');
  
  console.log(numeros); //"10, 20, 30"
  ```

  

- Método **split( critério de separação )** divide um objeto *String* em um *array de strings*, obedecendo ao critério de separação informado como parâmetro.

  ```javascript
  const vet = '2019-11-21'.split('-');
  
  console.log(vet); // ["2019", "11", "21"]
  ```

  

- Método **push( item a ser adicionado no vetor )** adiciona um ou mais elementos ao final de um *array* e retorna o novo comprimento desse *array*.

  ```javascript
  let numeros = [1, 2, 3];
  
  const tam = numeros.push(4);
  
  console.log(tam); // 4
  console.log(numeros) // 1, 2, 3, 4
  ```



- Método **unshift()** funciona  semelhante à push, mas o invés de inserir elementos no final do array,  os insere no início. Podem ser passados um ou vários elementos como  parâmetro.

  ```javascript
  var vetor1 = new Array(1, 2, 3, 4, 5);
  vetor1.unshift(-1, 0);
  console.log(vetor1); // [-1,0,1,2,3,4,5]
  ```

  

- Método **filter( critério de filtro )** cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

  ```javascript
  let numeros = [1, 2, 3];
  
  numeros = numeros.filter(function(item){
  	return item > 1;
  });
  
  console.log(numeros) // 2, 3, 4
  ```

  

- Método **concat( vetor1, vetor2, ... )** retorna um novo array (uma cópia), contendo todos os *arrays* ou valores passados como parâmetro

  ```javascript
  var num1 = [1, 2, 3];
  var num2 = [4, 5, 6];
  var num3 = [7, 8, 9];
  var nums = num1.concat(num2, num3);
  
  console.log(nums); // [1,2,3,4,5,6,7,8,9]
  ```

  

- Método **reduce( )** processa um *array* e retorna um resultado único no final.  Esse método recebe dois parâmetros. Sendo o primeiro uma função, essa função também recebe dois parâmetros. Você pode dar o nome que quiser a eles, mas o primeiro irá acumular o resultado de todas as execuções da  função e, no final, retornar o resultado da operação. Já o segundo  parâmetro, conterá o item atual do array a cada iteração.

  O segundo parâmetro do método `reduce`, é a inicialização da variável que você definiu como sendo o primeiro parâmetro da função.

  ​	

  ```javascript
  [1,2,3].reduce(function(acumulator, i) {
  	acumulator + i;
  }, 0);
  ```

  

- Propriedade **length** mostra quantos elementos possui um array. Mas atribuir zero a esta propriedade, é uma forma de esvaziar um array.

  ​	

  ```javascript
  [2, 5, 6].length = 0;
  
  
  [2, 5, 6] = [] // outra forma de zerar um vetor;
  ```

  

- Método **find( valor de busca )** encontra um item em um vetor. Caso o item procurado não seja encontrado o retorno será *undefined*.

  ```javascript
  const arr = [1,2,3,4,5,6,7,8,9,10]
  const found = arr.find((item) => item === 2)
  console.log(found) //2
  ```

  

- Método **some( valor de busca )** encontra um item em um vetor, diferentemente da função *find* que retorna o item encontrado a função *some* retorna um resultado booleano, *true* se encontrou e *false* se não encontrou.

  ```javascript
  const arr = [1,2,3,4,5,6,7,8,9,10]
  const found = arr.some((item) => item === 2)
  console.log(found) //true
  ```



- Método **indexOf()**  recebe como  parâmetro um valor a ser localizado no array e retorna, caso ele seja  encontrado, a sua posição na lista. A contagem das posições inicia em  zero. Caso o  elemento não seja localizado, o retorno é o valor -1.

  ```javascript
  var vetor1 = new Array(1, 2, 3, 4, 5);
  var indice = vetor1.indexOf(3);
  console.log(indice); // 2
  ```



- Método **pop( )** remove o último elemento do vetor e o retorna como resultado. Nesse caso o array original é alterado.

  ```javascript
  var vetor1 = new Array(1, 2, 3, 2, 7);
  var ultimo = vetor1.pop();
  console.log(ultimo); // 7
  ```



- Método **shift()**  remove o primeiro elemento de um vetor qualquer e o  retorna como resultado. Assim como no pop, o vetor que origina a chamada a este método fica alterado após sua execução

  ```javascript
  var vetor1 = new Array(1, 2, 3, 4, 5);
  var primeiro = vetor1.shift();
  console.log(primeiro); // 1
  ```

  

- Método **slice()**  recebe como  parâmetros dois valores inteiros e retorna uma fração do vetor original  com base nos limites que foram informados. O primeiro parâmetro indica a posição do primeiro elemento do vetor a fazer parte da seleção,  enquanto o segundo indica a posição seguinte a do último elemento  selecionado (um a mais que a posição deste).

  ```javascript
  var vetor1 = new Array(1, 2, 3, 4, 5);
  var selecao = vetor1.slice(1, 4);
  console.log(selecao); // [2, 3, 4]
  ```

  

- Método **sort()** de nome  sugestivo, ordena os elementos do vetor. A chamada mais simples a essa  função não requer parâmetros e ordena no array e ordem crescente. Uma  chamada mais complexa recebe uma função de ordenação como parâmetro,  esta função define o cálculo a ser considerado na comparação entre dois  elementos.

  ```javascript
  var vetor1 = new Array(3, 2, 1, 5, 4);
  vetor1.sort();
  console.log(vetor1); // 1,2,3,4,5
  ```



- Método **splice()** ele serve para  remover e/ou adicionar items de/em um vetor. A chamada a este método  requer dois ou vários (três ou mais) parâmetros. O primeiro  parâmetro representa a posição do elemento a ser removido (começando do  zero) e o segundo indica a quantidade de elementos a serem removidos do  vetor, a partir da posição indicada. Caso não se deseje remover nenhum  item, basta passar 0 (zero) como segundo parâmetro. No exemplo a seguir o segundo e o terceiro elementos são removidos.

  ```javascript
  var vetor1 = new Array(1, 2, 3, 4, 5);
  vetor1.splice(1,2);
  ```



- Método **toString()** comum a  todos os objetos, o toString converte o vetor para string, retornando  esse texto como resultado. No caso de vetores, o resultado contém todos  os elementos separados por vírgula.

  ```javascript
  var vetor1 = new Array(-1, 0 ,1, 2, 3, 4, 5);
  var texto = vetor1.toString();
  console.log(texto); // "-1,0,1,2,3,4,5"
  ```

  

### Arrow functions

- A nova versão do JavaScript, a ES6, trouxe novas features e dentre elas uma nova forma de criar funções usando o operador `=>`

  ```javascript
  const sum = (num1, num2) => {
    return num1 + num2;
  }
  console.log(sum(1, 2));
  ```

  - Podemos encurtar ainda mais a sintaxe de uma arrow function, desde que ela possua apenas uma declaração:

    ```javascript
    const sum = (num1, num2) => num1 + num2;
    ```

    

### Desestruturação

- Podemos utilizar desestruturação para obter valores de dentro de um objeto ou array. ex:

  ```javascript
  const user = {
      name: 'Gabriel',
      student: true,
      techs: ['ES6', 'HTML', 'Vue', 'React', 'Node', ],
  }
  
  // se utilizarmos o método padrão para obter os valores
  const name = user.name;
  const student = user.student;
  const techs = user.techs;
  
  // utilizando desestruturação
  const {name, student, techs} = user;
  // ou
  const {name} = user;
  
  
  // se quisermos desustruturar o vetor
  const [tech0, tech1, tech2] = techs; 
  ```

  

### Rest / spread

- **Sintaxe de Espalhamento (Spread syntax)** permite que um  objeto iterável, como uma expressão de array ou uma string  seja expandido para ser usado onde zero ou mais argumentos (para  chamadas de funções) ou elementos (para arrays *literais*) são esperados, ou que um objeto seja expandido onde zero ou mais pares *propriedade:valor* (para objetos *literais*) são esperados.

  ```javascript
  function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // expected output: 6
  
  console.log(sum.apply(null, numbers));
  // expected output: 6
  
  ```

  

### Async / await

- A declaração **async function** define uma *função assíncrona*, que retorna um objeto [`AsyncFunction`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction).

- Quando uma função assíncrona é chamada, ela retorna uma [`Promise`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise). Quando a função assíncrona retorna um valor, a `Promise` será resolvida com o valor retornado. Quando a função assíncrona lança uma exceção ou algum valor, a `Promise` será rejeitada com o valor lançado.

  Uma função assíncrona pode conter uma expressão [`await`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/await), que pausa a execução da função assíncrona e espera pela resolução da `Promise `passada, e depois retoma a execução da função assíncrona e retorna o valor resolvido.

  ​	

  ```javascript
  function resolverDepoisDe2Segundos(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function adicionar1(x) {
    var a = resolverDepoisDe2Segundos(20);
    var b = resolverDepoisDe2Segundos(30);
    return x + await a + await b;
  }
  
  adicionar1(10).then(v => {
    console.log(v);  // exibe 60 depois de 2 segundos.
  });
  
  async function adicionar2(x) {
    var a = await resolverDepoisDe2Segundos(20);
    var b = await resolverDepoisDe2Segundos(30);
    return x + a + b;
  }
  
  adicionar2(10).then(v => {
    console.log(v);  // exibe 60 depois de 4 segundos.
  });
  ```

  
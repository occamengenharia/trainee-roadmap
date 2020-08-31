# CSS

- ### O que é?

  - CSS (Cascading Style Sheet) em português significa Folhas de Estilos em Cascata. Foi criada por Hakon Lie e Bert Bos em 1995. Esse tipo de linguagem define o layout de documentos HTML, tudo que diz respeito a apresentação da página. As CSS separam a marcação HTML da apresentação do site

- ### Layout com CSS

  - Para os programadores que já conhecem o CSS, poderão construir Folhas de Estilo em Cascata ou mesmo inserir estilos dentro das tags html utilizando o atributo <p style="";"">. Mas, é recomendável utilizar uma folha de estilo externa para definir todas formatações da página. Veja um exemplo de estilo utilizado dentro da tag de parágrafo:

    - ```html
      <p style="border:5px solid green;">
      ```

      - Deixa o texto com borda verde e com tamanho de 5 pixels</p>

- ### Seletores, classes e id

  - Seletor pode ser todo e qualquer elemento HTML

    ```css
    body {
      background: #f3f0ef;
    }
    p {
      background: #f3f0ef;
    }
    ```

    - Classe, é algo que atribuímos dentro da tag HTML e posteriormente podemos utilizar sua referência para estilizar ou fazer alguma ação através do javascript

    ```html
    <div class="main-index">
      <p>Olá mundo</p>
    </div>
    ```

    ```css
    .main-index {
      height: 100vh;
      margin: 0 auto;
      max-width: 1000px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    ```

    - ID segue a mesma lógica da classe, a única diferença é que um id só pode ser atribuído a uma **única** tag HTML.

- ### FlexBox

  ## Para começar a trabalhar com flexbox:

  - Sempre temos que definir por fora dos elementos que queremos alinhar:

  ```css
  display: flex;
  ```

  - Por padrão o display flex alinha nossos items horizontalmente;

  ## Flex-direction

  - Por padrão ele é row, alinhados horrizontalmente todos um do lado do outro.
  - row-reverse: alinha horizontalmente começando do lado direito para o esquerdo;
  - column: alinha eles verticalmente de cima para baixo;
  - column-reverse: alinha eles verticalmente de baixo para cima;

  ## Observação

  align-items e justify-content funcionam de forma inversa conforme o valor do flex-direction.

  Exemplo: com o flex-direction row, o justify-content alinha horizontalmente, e com o flex-direction column ele alinha verticalmente. com o align-items é a mesma coisa.

  ## align-items

  - Alinhar os items de forma verticalmente;
  - valor default: flex-start;
  - center: alinha no centro do espaço disponível;
  - flex-end: alinha todos os valor no final do espaço disponível, ao contrário do flex-start;

  ## justify-content

  - Alinhar os items de forma horizontal;
  - valor default: flex-start;
  - center: alinha no centro do espaço disponível;
  - flex-end: alinha todos os valor no final do espaço disponível, ao contrário do flex-start;
  - space-between: deixará um espaço igual entre todos os elementos. sem colocar espaço no começo e no final dos items;
  - space-around: deixará um espaço igual entre todos os elementos. colocando espaço no começo e no final dos items;

  ## Flex:

  - flex-grow:
    - 1; ocupa todo o espaço disponível em tela, aumentando seu tamanho para ocupar tudo;
    - 0: ele se manter no seu tamanho original mesmo tento espaço sobrando, e quando espremido ele diminui seu tamanho;
  - flex-shrink
    - com o valor 1: tem a capacidade de espremer para cabar no container pai;
    - por default é 1;
    - se pormos 0: o elemento ficará do tamanho original e irá criar uma barra de rolagem para ver o elemento inteiro
  - Flex:
    - é a soma do flex-grow + flex-shrink:
    - por exemplo flex: 1 0;
      - o elemento irá aumentar se necessário e não se esprema;

  ## flex-wrap

  - No flex box é dificil conseguirmos fazer uma quebra de linha, mesmo o elemento não tendo espaço para ficar no seu tamanho original;
  - Com o flex-wrap, passando o valor wrap, quando não tivermos espaço para um elemento, ele irá quebrar a linha;
  - Também funciona o wrap-reverse;

  ### Align-content:

  - Tem a função de alinhar o elementos quando estão em mais de uma linha;
  - Temos as mesma propriedades do justify-content;

  ## Order

  - Temos como ordernar os elementos dentro de uma box, para quando precisarmos fazer uma responsividade e queremos um elemento antes do outro, é só ordenar de forma crescente, os com menos numero viriam antes, como por exempo: order:1; order:2; o elemento com order 1 ficaria primeiro;
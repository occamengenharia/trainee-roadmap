## HTML

- Tags

  A linguagem HTML é formada por tags. As tags são formados por comandos, escritos entre os sinais "<" (menor que) e ">" (maior que), e devem ser escritas com letra minúscula. Podem ser:

  - T**ags Abertas (simples):** 

    ```html
    <comando/>
    ```

  - **Tags Fechadas:**

    ```html
    <comando>...</comando>
    ```

  - **Tags Compostas:**

    ```html
    <comando>
        <elemento1>...</elemento1>
        <elemento2>...</elemento2>
    </comando>
    ```

- Tags básicas

  - ```html
    <html></html>
    ```
    
    - Conceito: Inicia e termina um documento em HTML.
    
  - ```html
    <head></head>
    ```
    
    - Conceito: Define a área de cabeçalho. Os elementos não são visualizados na página.
    
  - ```html
    <title></title>
    ```
    
    - Conceito: Refere-se ao título da página. Coloca o nome da página na barra de título da janela. Essa tag é utilizada entre a tag “head”.
    
  - ```html
    <body></body>
    ```

    - Conceito: Define a área visível do documento.

      

 ```html
  <html>
  <head>
      <title>Título da Página</title>
  <head>
  <body>
      <p>Corpo da Página</p>
  </body>
  </html>
 ```

- Outras tags HTML

  - Textos

    - ```html
      <b></b>
      
      <!-- ou -->
      
      <strong></strong>
      ```

      - Conceito:Texto em negrito.

    - 

      ```html
      <i></i>
      
      <!-- ou -->
      
      <em></em>
      ```

      - Conceito:Texto em itálico.

    - ```html
      <small></small>
      ```

      - Conceito:Texto pequeno.

    - ```html
      <big></big>
      ```

      - Conceito:Texto grande.

    - ```html
       <p> </p>
       ```

       - Conceito: Parágrafo.

    - ```html
      <br />
      ```

      - Conceito:Insere uma quebra de linha.

    - ```html
       <h1>...</h1>
       
       <h2>...</h2>
       
       <h3>...</h3>
       
       <h4>...</h4>
       
       <h5>...</h5>
       
       <h6>...</h6>
       ```

       

       - Conceito:Cada tag heading tem um tamanho e é utilizada para títulos e subtítulos de uma página html.

- Links e imagens

  - ```html
    <a href="/url"></a>
    <!--Conceito:Cria um link-->
    
    <a href="mailto:email"></a>
    <!--Conceito:Cria um link para envio de e-mail-->
    
    <img src="/link do arquivo"/>
    <!--Conceito:Insere uma imagem-->
    
    <img src="/link do arquivo" align="?"/>
    <!--Conceito:Alinha uma imagem em relação ao resto do texto. No lugar da interrogação pode-se utilizar center, left ou right-->
    
    <img src="/link do arquivo" border="?">
    <!--Conceito:Define a borda da imagem-->
    
    <img src="/link do arquivo" alt="foto do site"/>
    <!--Conceito:Insere uma descrição na imagem-->
    ```

    

- Outros elementos

  - ```html
    <!--...-->
    ```
    
    - Conceito:utilizada na realização de comentários para explicação do código. Isso poderá ajudar o criador da página a fazer edições posteriores ou lembrar de algo importante.
    
  - ```html
    <hr>
    ```
    
    - Conceito:Insere uma linha horizontal. É utilizado geralmente para separar o conteúdo de outros elementos.
    
  - Listas
    
    - ```html
      <ul></ul>
      ```
      
      - Conceito:mostra uma lista não-ordenada.
      
    - ```html
      <ol></ol>
      ```
    
      - Conceito:mostra uma lista ordenada.
    
    - ```html
      <div></div>
      ```
    
      - Conceito:mostra uma seção ou divisão dentro do documento. São representadas por blocos que podem ser organizados dentro do CSS.

- Tabelas
  
  - ```html
    <table></table>	
    ```
  
    - Conceito:é utilizada para a construção de tabelas, juntamente com ela os elementos \<tr>, \<th> e \<td> a compõem. Além disso, existem outros elementos mais complexos como \<thead>, \<tfoot>, etc.
  
      

## Tags introduzidas no HTML5

- ```html
  <link>
  ```

  - utilizado para linkar um arquivo de imagem ou css a página html

- ```html
  <script>
  ```

  - utilizado para escrever ou anexar um arquivo normalmente javascript a página

- ```html
  <meta>
  ```

  - metatags, como charset, description, viewport ou keywords

- ```html
  <style>
  ```

  - 

- ```html
  <header>
  ```

  - define um cabeçalho da página ou de uma seção, normalmente pode conter um menu (nav), um logo ou link

- ```html
  <nav>
  ```

  - define uma área de navegação contendo links, para a formação de menus com hiperlinks

- ```html
  <footer>
  ```

  - define o rodapé de uma página ou seção

- ```html
  <main>
  ```

  - define o conteúdo principal da página, deve ser utilizado apenas uma única vez em cada página

- ```html
  <section>
  ```

  - define uma seção do documento

- ```html
  <article>
  ```

  - pode ser um post ou notícia de um fórum ou blog, define um conteúdo independente

  
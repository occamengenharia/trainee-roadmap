# INICIANDO PROJETO REACT



`yarn init -y` iniciar projeto nodejs

`yarn add react react-dom` instalar a biblioteca react e a intregração com a DOM do browser  



# FAZENDO O BROWSER ENTENDER REACT

**BABEL:** Converter (transpilar) o código do react para um código que o browser entenda.

**WEBPACK:** Para cada tipo de arquivo (.js, .css, .png) ele vai converter o código de uma maneira diferente.

**LOADERS:** babel-loader, css-loader, page-loader



`yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli   `  Instalar o babel e o webpack.



# CONFIGURANDO O BABEL

Criar um arquivo `babel.config.js`

```javascript
module.exports = {
    presets: [
        '@babel/preset-env', //converte js mais moderno em js mais antigp
        '@babel/preset-react'
    ]
};
```



Dado o arquivo js de exemplo:

```javascript
const soma = (a, b) => {
    return a + b;
}

console.log(soma(1, 2));
```

O babel vai converter para js mais antigo:

```javascript
"use strict";

var soma = function soma(a, b) {
  return a + b;
};

console.log(soma(1, 2));

```

Através desse comando: `yarn babel src/index.js --out-file public/bundle.js`



# CONFIGURANDO O WEBPACK

Criar um arquivo `webpack.config.js`

```javascript
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'), //aruqivo a ser convertido pelo webpack
    output: {
        path: path.resolve(__dirname, 'public'), //diretŕio onde o arquivo convertido vai ficar
        filename: 'bundle.js' //nome do arquivo convertido
    },
    //regras para conversão dos arquivos
    module: {
        rules: [
            {
                test: /\.js$/, //Procurar arquivos que terminan com .js
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}
```

**Para instalar o babel-loader:** `yarn add babe-loader`

**Para executar o webpack:** `yarn webpack --mode development`. Ele irá executar o arquivo index.js expecificado no *entry*

**Para usar o live-reload do webpack:** `yarn add webpack-dev-server  `. E no mesmo arquivo webpack.config.js:

```javascript
devServer: {
        contentBase: path.resolve(__dirname, 'public') //expecificar a pasta pública do projeto para rodar o live reload
    },
```

E para rodar o webpack-dev-server: `yarn webpack-dev-server --mode development`



## CARREGANDO ARQUIVOS DE IMAGEM NO WEBPACK

Dentro da propriedade `rules`  do webpack.config.js:

```javascript
{
    //carregar arquivos de imagem
    //vai carregar arquivos .gif, .png, .jpg ou .jpeg
    test: /.*\.(gif|png|jpe?g)$/i,
    use: {
    loader: 'file-loader'
},
```


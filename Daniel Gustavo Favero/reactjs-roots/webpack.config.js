const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'), //aruqivo a ser convertido pelo webpack
    output: {
        path: path.resolve(__dirname, 'public'), //diretŕio onde o arquivo convertido vai ficar
        filename: 'bundle.js' //nome do arquivo convertido
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'), //expecificar a pasta pública do projeto para rodar o live reload
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
            },
            {
                //carregar arquivos .css
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                //carregar arquivos de imagem
                test: /.*\.(gif|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader'
                },
            }
        ]
    },
}
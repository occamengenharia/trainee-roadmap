module.exports = {
    presets: [
        '@babel/preset-env', //converte js mais moderno em js mais antigp
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/plugin-transform-runtime' //conseguir utilizar funções assincronas
    ]
};
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import api from './services/api';

import './App.css'

function App() {
    //useState retorna um vetor com 2 posições:
    //0: Variável com o valor inicial
    //1: Função para atualizar seus valores
    const [cat, setCat] = useState('');

    //carregar um estato no momento em que um componente for exibido em tela
    useEffect(async () => {
        const { url } = await api.get();
        setCat(url);
    }, []);

    async function handleUpdateCat() {
        //IMUTABILIDADE: no react você não pode mudar o valora das variáveis, é preciso construi-las de novo
        const { url } = await api.get();
        setCat(url);
    }

    return (
        //FRAGMENT: Tag html vazia. Ela é usada pois no react não é possível utilizar tags sem nada em volta. Ela também não é exibida na DOM do HTML
        <>
            <Header title="Gatinhos :)" />

            <img src={cat} alt="gatinho" width={300} />

            <button type="button" onClick={handleUpdateCat}>Atualizar Gato</button>
        </>
    );
}

export default App;
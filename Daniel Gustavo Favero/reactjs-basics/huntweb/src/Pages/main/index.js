import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api';
import './styles.css'

export default class Main extends Component {
    //VARIÁVEL DE ESTADO
    //variáveis de estado conseguem alterar informações em tela durante a execução da aplicação
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    //executar sempre que um componente é carregado
    componentDidMount() {
        this.loadProducts();
    }

    //é preciso utilizar arrow functions para funções que nós escrevemos
    //assim ela vai ter acesso ao método this
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page });
    }

    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    //o método render fica escutando o objeto state caso ocorra alguma alteração
    render() {
        const { products, page, productInfo } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}></Link>
                    </article>
                ))}

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>proximo</button>
                </div>
            </div>
        );
    }
}
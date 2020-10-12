const cart = [{
        name: 'carne',
        price: 22.25,
        quantity: 3,
    },
    {
        name: 'paçoca',
        price: 1.5,
        quantity: 7,
    },
    {
        name: 'cerveja',
        price: 1.99,
        quantity: 30,
    },
];

// TODO dado um vetor de produtos que estão em um carrinho de compras, 
//retornar o valor total dos produtos 
const sumCart = (arrayProducts) => {
    let sum = 0;
    arrayProducts.map((produto) => {
        sum = sum + produto.price;
    })
    return sum;
}

// TODO adicionar um produto no final do carrinho 
const addProductToCart = (newProduct) => {
    cart.push(newProduct)
    return cart;
}

// TODO retornar qual o produto com valor mais alto 
const upperPrice = (arrayProducts) => {
    let upperP = {
        name: '',
        price: 0,
        quantity: 0,
    };
    arrayProducts.map((product) => {
        if (upperP.price < product.price)
            upperP = product;
    })
    return arrayProducts;
}

// TODO remover o primeiro produto do carrinho (lembre-se de que você não pode retirar o que não existe!)
// dica para tratativa de erro (throw new Error('erro ao remover produto'));
const removeProductToarrayProducts = (arrayProducts) => {
    if (arrayProducts.length > 0) {
        arrayProducts.splice(0, 1);
    }
    return arrayProducts;
}

// TODO em um certo momento você encontrou seu amigo no mercado, então 
// resolveram juntar suas compras e fazer um churrasco, então junte os carrinhos
// e retorne um vetor onde a primeira posição é o carrinho novo com os produtos dos dois 
// e a segunda posição o preço total das compras
const happyCart = (arrayProducts1, arrayProducts2) => {
    return arrayProducts1.concat(arrayProducts2);
}


module.exports = { sumCart, addProductToCart, upperPrice, removeProductToCart, happyCart };
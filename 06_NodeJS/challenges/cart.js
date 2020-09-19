const cart = [
  {
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
  return 0;
}

// TODO adicionar um produto no final do carrinho 
const addProductToCart = (newProduct) => {
  return [];
}

// TODO retornar qual o produto com valor mais alto 
const upperPrice = (arrayProducts) => {
  return [];
}

// TODO remover o primeiro produto do carrinho (lembre-se de que você não pode retirar o que não existe!)
// dica para tratativa de erro (throw new Error('erro ao remover produto'));
const removeProductToCart = (arrayProducts) => {
  return [];
}

// TODO em um certo momento você encontrou seu amigo no mercado, então 
// resolveram juntar suas compras e fazer um churrasco, então junte os carrinhos
// e retorne um vetor onde a primeira posição é o carrinho novo com os produtos dos dois 
// e a segunda posição o preço total das compras
const happyCart = (arrayProducts1, arrayProducts2) => {
  return [];
}


module.exports = { sumCart, addProductToCart, upperPrice, removeProductToCart, happyCart };
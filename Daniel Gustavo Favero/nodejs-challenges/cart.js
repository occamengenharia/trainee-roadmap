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
// retornar o valor total dos produtos 
const sumCart = (arrayProducts) => {
  let sum = 0;
  arrayProducts.forEach(item => sum += (item.price * item.quantity));
  return sum;
}

// TODO adicionar um produto no final do carrinho 
const addProductToCart = (newProduct) => {
  const product = [newProduct];
  cart.push(newProduct);
  return product;
}

// TODO retornar qual o produto com valor mais alto 
const upperPrice = (arrayProducts) => {
  let largestPriceProduct;
  let price = 0;

  arrayProducts.forEach(item => {
    if (item.price > price) {
      price = item.price;
      largestPriceProduct = item;
    }
  });

  return largestPriceProduct;
}

// TODO remover o primeiro produto do carrinho (lembre-se de que você não pode retirar o que não existe!)
// dica para tratativa de erro (throw new Error('erro ao remover produto'));
const removeProductToCart = (arrayProducts) => {
  if (arrayProducts.length > 0) {
    arrayProducts.shift();
  } else {
    throw new Error('erro ao remover produto');
  }

  return arrayProducts;
}

// TODO em um certo momento você encontrou seu amigo no mercado, então 
// resolveram juntar suas compras e fazer um churrasco, então junte os carrinhos
// e retorne um vetor onde a primeira posição é o carrinho novo com os produtos dos dois 
// e a segunda posição o preço total das compras
const happyCart = (arrayProducts1, arrayProducts2) => {
  let newCart = [];
  let cartsSum = 0;

  newCart[0] = arrayProducts1.concat(arrayProducts2);
  newCart[0].map(item => cartsSum += item.price * item.quantity);
  newCart[1] = cartsSum;

  return newCart;
}

module.exports = { sumCart, addProductToCart, upperPrice, removeProductToCart, happyCart };
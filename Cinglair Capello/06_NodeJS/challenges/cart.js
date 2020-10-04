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
  var soma = 0;
  arrayProducts.forEach(function(element) {
    soma += element.price * element.quantity;
  });
  console.log(soma);
  return soma;
}

// TODO adicionar um produto no final do carrinho 
const addProductToCart = (newProduct) => {
  cart.push(newProduct);
  return [newProduct];
}

// TODO retornar qual o produto com valor mais alto 
const upperPrice = (arrayProducts) => {
  var grandao = arrayProducts[0];
  arrayProducts.forEach(function(each){
    if(grandao.price < each.price){
      grandao = each;
    }
  })
  return grandao;
}

// TODO remover o primeiro produto do carrinho (lembre-se de que você não pode retirar o que não existe!)
// dica para tratativa de erro (throw new Error('erro ao remover produto'));
const removeProductToCart = (arrayProducts) => {
  if(arrayProducts.length > 0){
    arrayProducts.shift();
  }
  else {
    Error('erro ao remover produto')
  }
  return arrayProducts;
}

// TODO em um certo momento você encontrou seu amigo no mercado, então 
// resolveram juntar suas compras e fazer um churrasco, então junte os carrinhos
// e retorne um vetor onde a primeira posição é o carrinho novo com os produtos dos dois 
// e a segunda posição o preço total das compras
const happyCart = (arrayProducts1, arrayProducts2) => {

  var solucao = [];
  solucao[1] = 0;
  solucao[0] = arrayProducts1.concat(arrayProducts2);

  solucao[0].forEach(function(element) {
    solucao[1] += element.price * element.quantity;
  });
  
  return solucao;
}


module.exports = { sumCart, addProductToCart, upperPrice, removeProductToCart, happyCart };
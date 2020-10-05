const { sumCart, addProductToCart, upperPrice, removeProductToCart, happyCart } = require('../cart');
const input = [
  {
    name: "produto 1",
    price: 2.25,
    quantity: 1,
  },
  {
    name: "produto 2",
    price: 33.5,
    quantity: 3,
  },
  {
    name: "produto 3",
    price: 9.75,
    quantity: 2,
  },
];

test("soma todos os produtos de um carrinho", () => {

  const output =  sumCart(input);

  const expected = 122.25;

  expect(output).toBe(expected);
});

test("Adicionar produto no final do carrinho", () => {

  const novoProduto = 
  {
    name: "produto 4",
    price: 10.6,
    quantity: 1,
  };
  
  const output =  addProductToCart(novoProduto);

  expect(output).toEqual(
    expect.arrayContaining([novoProduto]),
  );
});

test("Retornar objeto do vetor com o maior preço", () => {
  const output =  upperPrice(input);

  expect(output).toEqual(
    {
      name: "produto 2",
      price: 33.5,
      quantity: 3,
    }
  );
});

test("Remover o primeiro elemento do carrinho", () => {
  const expected = input[0];
  const output =  removeProductToCart(input);

  expect(output).toEqual(
    expect.not.arrayContaining(expected),
  );
});

test("Erro ao remover produto quando o carrinho está vazio", () => {
  const mock = [];
  expect(removeProductToCart(mock)).rejects.toBeInstanceOf(Error);
});

test("Juntar os carrinhos pra festa e somar os dois produtos", () => {
  const mock1 = [
  {
    name: "produto 2",
    price: 33.5,
    quantity: 3,
  },
  {
    name: "produto 3",
    price: 9.75,
    quantity: 2,
  }];

  const mock2 = [
  {
    name: "produto 2",
    price: 33.5,
    quantity: 3,
  },
  {
    name: "produto 3",
    price: 9.75,
    quantity: 2,
  }];

  const output = happyCart(mock1, mock2);

  expect(output).toEqual(
    expect.arrayContaining([[...mock1,...mock2], 240]),
  );
});



const { sum, subtraction } = require('../count');

test('adds a, b', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(6, -2)).toBe(4);
});

test('subtraction a, b', () => {
  expect(subtraction(1, 2)).toBe(-1);
  expect(subtraction(60.5, 8.5)).toBe(52);
});
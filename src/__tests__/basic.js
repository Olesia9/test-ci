// const { calculateTotal } = require('../calculate') //извлекаем пакет, синтаксис CommonJs
import { calculateTotal } from '../calculate';

test('calculateTotal sum', () => {
  const list = [
    {
      id: 456,
      name: 'Война и Мир',
      count: 3,
      price: 400,
    },
    {
      id: 77,
      name: 'JavaScript',
      count: 1,
      price: 1200,
    },
  ];

  const result = calculateTotal(list);
  expect(result).toBe(2400);
});

test('calculateTotal sum without discount', () => {
  const list = [
    {
      id: 456,
      name: 'Война и Мир',
      count: 3,
      price: 401,
    },
    {
      id: 77,
      name: 'JavaScript',
      count: 1,
      price: 1300,
    },
  ];

  const result = calculateTotal(list, true);
  expect(result).toBeCloseTo(2230.173);
});

export function calculateTotal(purchases, applyDiscount) {
  const sum = purchases.reduce((total, item) => total + item.count * item.price, 0); // инициализация с начальным параметром 0, идентично коду ниже

  // let result = 0;
  // for (let i = 0; i < purchases.length; i++) {
  //     result += purchases[i].count * purchases[i].price
  // }
  // return result

  if (applyDiscount) {
    return sum * 0.891;
  }
  return sum;
}

// module.exports = { подход CommonJS
//     calculateTotal
// }

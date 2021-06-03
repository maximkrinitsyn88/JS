function calcValueBasket (sumBasket, numberGoods, promoCode) {

  if (promoCode === 'ДАРИМ300') {                           // 1 условие
    if (sumBasket <= 300) {
      sumBasket = 0;
    }
    else {
      sumBasket = sumBasket - 300;
    }
  }

  if (numberGoods >= 10) {                                  // 2 условие
    sumBasket = sumBasket * 0.95;
  }

  if (sumBasket > 50000) {                                  // 3 условие
    sumBasket = sumBasket - ((sumBasket - 50000) * 0.2);
  }

  if (promoCode === 'СКИДКА15') {                           // 4 условие
    if (sumBasket >= 20000) {
      sumBasket = sumBasket * 0.85;
    }
  }
  return sumBasket;
}

export default calcValueBasket

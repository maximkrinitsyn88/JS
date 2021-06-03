// task 1

function checkValidEmail (email, blacklistEmail) {

 let result = [];

 for (let i = 0; i < email.length; i++) {
   if (!blacklistEmail.includes(email[i])) {
     result.push(email[i]);
    }
  }
  return result;
}

let email = ['papirosa80@mail.ru', 'junior@mail.ru', 'sombrero92@mail.ru', 'petr.ctepanov@mail.ru', 'galinablanka@mail.ru' ]
let blacklistEmail = ['valerysutkin@mail.ru', 'sharapov22@mail.ru', 'galinablanka@mail.ru', 'papirosa80@mail.ru', 'kolbasa@mail.ru' ]

let validEmail = checkValidEmail(email, blacklistEmail);
console.log(`Email-адреса, не попавшие в черный список: `)
console.log(validEmail)

// task 1

// task 2

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

let sumBasket = 60300;
let numberGoods = 1;
let promoСode = 'ДАРИМ300';

let result = calcValueBasket(sumBasket, numberGoods, promoСode)
console.log('Стоимость корзины товаров после применения всех скидок: ' +  result + '!')

// task 2

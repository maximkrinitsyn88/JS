// first task

let x1 = 2;
let y1 = 3;

let x2 = 10;
let y2 = 5;

let area = Math.abs((x2 - x1)*(y2-y1));

console.log(area);

// first task

// second task

let a = 13.123456789;
let b = 2.123;
let n = 5;

let firstNormalized = Math.floor(a % 1 * Math.pow(10, n));
let secondNormalized = Math.floor(b % 1 * Math.pow(10, n));

console.log('Дробные части чисел', firstNormalized, secondNormalized);

console.log('Дробные части числа равны', firstNormalized === secondNormalized)
console.log('Дробные части числа не равны', firstNormalized != secondNormalized)
console.log('Дробная часть первого числа больше дробной части второго числа', firstNormalized > secondNormalized)
console.log('Дробная часть первого числа больше либо равна дробной части второго числа', firstNormalized >= secondNormalized)
console.log('Дробная часть второго числа больше дробной части первого числа', firstNormalized < secondNormalized)
console.log('Дробная часть второго числа больше либо равна дробной части первого числа', firstNormalized <= secondNormalized)

// second task

// third task

let q = 0;
let w = 100;

let range = Math.abs(q-w);
let numberInRange = Math.round(Math.random() * range);
let min = Math.min(q, w);
let result = min + numberInRange;
let oddNumber = (result + (1 - result % 2))

console.log(oddNumber)

// third task

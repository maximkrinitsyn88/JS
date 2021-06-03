// task 1

console.log('Задание 1')

let n = 100;
let m = -5;
let count = 70;

let a = [];

for (let i = 0; i < count; ++i) {
  a[i] = Math.floor(Math.random()*(m-n) + n);
}

console.log('Массив со случайными числами от ' + n + ' до ' + m);
console.log(a);

// task 1

// task 2

console.log('Задание 2')

let str = 'Привет, мир!';
let strReversed = '';

for (let i = str.length - 1; i >= 0; --i) {

  strReversed += (str[i]);
}

console.log('Перевернутая строка: ' + strReversed)

// task 2

// task 3

console.log('Задание 3')

let roadMines = [false, true, false, false, true, false, false, false, false, false];
let damage = 0;


for (let i = 0; i < roadMines.length; ++i) {

  let position = i + 1;
  console.log(`Танк переместился на ${position} позицию`)

  if (roadMines[i] === true) {
    damage++
  if (damage === 2) {
    console.log('Танк уничтожен')
    break
    }
    console.log('Танк поврежден')
  }
}

// task 3


// task 4

console.log('Задание 4')

let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let dayPosition = [];

for (let i = 1; i <= 31; ++i) {
  dayPosition = 0 + i;
  weekDay = days[dayPosition % 7]

  console.log(`${i} января, ${weekDay}`);
}


// task 4



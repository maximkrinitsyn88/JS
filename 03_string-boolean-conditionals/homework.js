// task first

let password = '1234';

if (password.length > 3 && ((password.includes("-")) || (password.includes("_")))) {
  console.log('Пароль надёжный');
}
else {
  console.log('Пароль недостаточно надёжный');
}

// task first

// task second

let name = 'вАлеНтиН';
let surname = 'петроВ';

firstLetterName = name.substr(0, 1);
firstBigLetterName = firstLetterName.toUpperCase();
otherLetterName = name.substr(1);
otherSmallLetterName = otherLetterName.toLowerCase();
resultName = firstBigLetterName + otherSmallLetterName;

firstLetterSurname = surname.substr(0, 1);
firstBigLetterSurname = firstLetterSurname.toUpperCase();
otherLetterSurname = surname.substr(1);
otherSmallLetterSurname = otherLetterSurname.toLowerCase();
resultSurname = firstBigLetterSurname + otherSmallLetterSurname;

result = resultName + " " + resultSurname;

console.log(result);

x = (name === resultName) && (surname === resultSurname) ? console.log("Имя осталось без изменений") : console.log("Имя было преобразовано");

// task second

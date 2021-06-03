function createDropdownList(objects, defaultValue) {

  let select = document.createElement('select');
  document.body.append(select);

  for (let i of objects) {
    let option = document.createElement('option');
    option.innerHTML = i.label;
    option.value = i.value;
    select.append(option);

    if (defaultValue === option.value) {
      option.selected = true;
    }
  }
  return select;
}

let array = [
  { value: 'Чебурашка', label: 'Чебурашка' },
  { value: 'Крокодил Гена', label: 'Крокодил Гена' },
  { value: 'Шапокляк', label: 'Шапокляк' },
]

// 6.3.1
function convertDataToArray(primitiveArray) {
  let arrayOfPrimitive = [];
  for (let i in primitiveArray) {
    arrayOfPrimitive[i] = {value: primitiveArray[i], label: primitiveArray[i]};
  }
  return arrayOfPrimitive;
}

let primitiveArray = [88, 13, 'собака', 'компот', 99]

let result = convertDataToArray(primitiveArray);
console.log(result)

// 6.3.2
function convertObjectToArray(objectArray) {
  let arrayOfObjects = [];
  for (let i in objectArray) {
    let finishedObject = {value:i, label: objectArray[i]}
    arrayOfObjects.push(finishedObject)
  }
  return arrayOfObjects;
}

let objectWithCustomValues = {
  Liverpool: 'Salah',
  ManchesterCity: 'De Bruyne',
  BayernMunich: 'Lewandowski',
  Barcelona: 'Messi',
  RealMadrid: 'RealMadrid',
  Juventus: 'Ronaldo',
};

let secondResult = convertObjectToArray(objectWithCustomValues);
console.log(secondResult)

createDropdownList(array, 'Шапокляк');
createDropdownList(result, 'собака');
createDropdownList(secondResult, 'RealMadrid');

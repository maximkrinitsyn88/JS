function filter(list, key, value) {

  let filteredObjects = [];

  for (let i of list) {
    if (i[key] === value) {
      filteredObjects.push(i)
    }
  }
  return filteredObjects
}

  let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' },
    { name: 'Олег', surname: 'Степанов' },
    { name: 'Артём', surname: 'Васильев' },
    { name: 'Олег', surname: 'Петров' },
    ];

let result = filter(objects, 'surname', 'Петров')

console.log(result)






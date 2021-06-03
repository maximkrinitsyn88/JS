function filter(list, key, value) {

  let filteredObjects = [];

  for (let i of list) {
    if (i[key] === value) {
      filteredObjects.push(i)
    }
  }
  return filteredObjects
}

export default filter

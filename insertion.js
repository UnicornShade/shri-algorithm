function insertionSort(array) {
  if (!Array.isArray(array)) throw new TypeError('Argument must be an array')

  for (let i = 0; i < array.length; i++) {
    const unsorted = array.slice(i)
    const element = Math.max(...unsorted)
    const elementIndex = unsorted.indexOf(element)

    array.splice(elementIndex + i, 1)
    array.unshift(element)
  }

  return array
}

const testCases = [
  [],
  [1],
  [1, 1, 1, 1, 1],
  [1, 2, 3, 4, 1],
  [2, 1, 5, 2, 1],
  [5, 3],
  [4, 3, 4]
]

testCases.map(arr => console.log(insertionSort(arr).toString()))

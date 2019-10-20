function bubbleSort(array) {
  if (!Array.isArray(array)) throw new TypeError('Argument must be an array')

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j + 1] < array[j]) {
        const swap = array[j + 1]
        array[j + 1] = array[j]
        array[j] = swap
      }
    }
  }

  return array
}

const testCases = [
  [],
  [1],
  [1, 1, 1, 1, 1],
  [1, 2, 3, 4, 1],
  [2, 1, 5, 2, 1],
  [5, 3]
]

testCases.map(arr => console.log(bubbleSort(arr).toString()))

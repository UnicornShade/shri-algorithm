function search(array, elemToFind) {
  let start = 0
  let end = array.length - 1

  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    let middleElem = array[middle]

    if (middleElem === elemToFind) return middle
    else if (elemToFind < middleElem) end = middle - 1
    else start = middle + 1
  }

  return -1
}

const array = [1, 3, 4, 5, 6, 7, 10, 13, 14, 17, 20]

console.log(search(array, 6))
console.log(search(array, 8))
console.log(search([], 8))

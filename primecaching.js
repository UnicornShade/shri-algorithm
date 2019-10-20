const isPrime = (function () {
  const cache = []

  return number => {
    if (number < 2) return false

    for (let i = 0; i < number; i++) {
      if (number % cache[i] === 0) return false
    }

    cache.push(number)
    return true
  }
})()

function prime(count) {
  let primesCount = 0
  let i = 2

  while (primesCount < count) {
    if (isPrime(i)) {
      primesCount++
      console.log(i)
    }

    i++
  }
}

prime(100)

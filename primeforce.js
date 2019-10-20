const OFFSET = 2

function isPrime(number) {
  for (let i = OFFSET; i < number; i++) {
    if (number % 2 === 0) {
      return false
      break
    }
  }

  return true
}

function prime(count) {
  for (let i = OFFSET; i < count + OFFSET; i++) {
    if (isPrime(i)) console.log(i)
  }
}

prime(100)

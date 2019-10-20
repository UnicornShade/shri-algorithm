function bracketsBalance(expression, brackets = '()[]<>') {
  if (typeof expression !== 'string') throw new TypeError('Expression must be a string')

  const OPEN_BRACKET_MAP = {
    '(': ')',
    '[': ']',
    '<': '>'
  }

  const CLOSE_BRACKET_MAP = {
    ')': '(',
    ']': '[',
    '>': '<'
  }

  const stack = []

  for (let char of expression) {
    if (OPEN_BRACKET_MAP[char]) {
      stack.push(char)
    } else if (CLOSE_BRACKET_MAP[char]) {
      if (OPEN_BRACKET_MAP[stack.pop()] !== char) return false
    }
  }

  return stack.length === 0
}

const expressions = [
  '[()[]<>()]',                              //true
  '[(<)>]',                                  //false
  'string without brackets',                 //true
  '[]',                                      //true
  '[',                                       //false
  ')(',                                      //false
  'correct string  [<>()] with brackets []', //true
  'incorrect string with <[>] brackets',     //false
  '>',                                       //false
  ''                                         //true
]

expressions.map(expression => console.log(bracketsBalance(expression), expression))

function reverseList(list) {
  if (!list.next) return list.value

  const values = []

  let node = list
  while(node) {
    values.push(node.value)
    node = node.next
  }

  let value = values.pop()
  while (value) {
    console.log(value)
    value = values.pop()
  }
}

const linkedList =
{ value: 1,
  next: { value: 2,
    next: { value: 3,
      next: { value: 4,
        next: { value: 5 }
      }
    }
  }
}

reverseList(linkedList)
reverseList({})

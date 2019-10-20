function DFS(tree, visitor = () => { }) {
  if (typeof visitor !== 'function') throw new TypeError('Visitor must be a function')
  if (typeof tree !== 'object') throw new TypeError('Tree must be an object')

  function traverse(root) {
    if (!root) return

    traverse(root.left)
    visitor(root.value)
    traverse(root.right)
  }

  return traverse(tree)
}


const tree = {
  value: 1,
  left: {
    value: 2,
    left: { value: 3 },
    right: { value: 4 }
  },
  right: {
    value: 5,
    left: {
      value: 6,
      left: { value: 7 },
      right: { value: 8 }
    }
  }
}

DFS(tree, (value) => console.log(value))

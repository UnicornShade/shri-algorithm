function BFS(tree, visitor = () => { }) {
  const queue = []

  queue.push(tree)

  while(queue.length) {
    const node = queue.shift()

    if (!node) continue

    visitor(node.value)
    queue.push(node.left)
    queue.push(node.right)
  }
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

BFS(tree, (value) => console.log(value))

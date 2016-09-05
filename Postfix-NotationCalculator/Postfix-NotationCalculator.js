function calculate(inputs) {
  const stack = []

  inputs.split(' ').forEach(value => {
    if (+value === +value) { // is number
      stack.push(value)
    } else {
      const a = Number(stack.pop())
      const b = Number(stack.pop())
      if (value == '+') stack.push(a + b)
      if (value == '-') stack.push(b - a)
      if (value == '*') stack.push(a * b)
      if (value == '/') stack.push(b / a)
    }
  })
  return stack[0]
}

const reduceByRules = (nums, rules) => nums.reduce((a, b, i) => rules[((i - 1) % rules.length)](a, b))

let rules = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b
]


console.log(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0, 2.0], rules)) //4

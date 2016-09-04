function longestRun(string) {
  let max = [0, 0]
  let current = [0, 0]

  string.split('').forEach((char, i) => {
    if (string[i - 1] === char) {
      current[1] = i
      if (current[1] - current[0] > max[1] - max[0]) {
        max = current
      }
    } else {
      current = [i, i]
    }
  })
  return max
}

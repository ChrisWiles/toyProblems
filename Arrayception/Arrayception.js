const arrayception = array => {
  let max = 0
  array.forEach((ele, i) => {
    if (array[i].length === 0) {
      count = 0
    } else if (Array.isArray(array[i])) {
      count = arrayception(array[i])
      if (count > 0) count++
    } else {
      count = 1
    }
    if (count > max) max = count
  })
  return max
}

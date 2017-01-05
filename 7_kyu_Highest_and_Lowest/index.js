let highAndLow = (n) => {
  n = n.split(' ').map(Number)
  return `${Math.max(...n)} ${Math.min(...n)}`
}

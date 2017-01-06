const snakesOn = (arr) => {
  let snakes = arr
    .reduce((a, b) => ([...a,...b]))
    .filter(char => char !== '_')
    .reduce((a, b) => {
      a[b] ? a[b]++ : a[b] = 1
      return a
    }, {})
    return Object.keys(snakes).length
}

const snakesOn = (arr) => new Set(aPlane.join('')).size - 2

// returns unique
.sort().reduce( (a, b) => a[a.length - 1] === b ? a : a + b )

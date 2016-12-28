const countUniq = (arr) => arr.reduce((a,b) => {
  a[b] ? a[b]++ : a[b] = 1
  return a
}, {})


const findUniq = arr => {
  let obj = countUniq(arr)
  for (let key in obj) {
    if (obj[key] === 1) {
      return +key
    }
  }
}

const findUniq = arr => {
  arr.sort((a, b) => a - b)
  return arr[0] == arr[1] ? arr.pop() : arr[0]
}

const findUniq = arr => +arr.filter(value => arr.indexOf(value) == arr.lastIndexOf(value))

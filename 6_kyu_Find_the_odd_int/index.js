let findOdd = (arr) => {
  let sums = arr.reduce((a,b) => {
    a[b] ? a[b]++ : a[b] = 1
    return a
  }, {})

  for(let key in sums) {
    if(sums[key] % 2 !== 0) {
      return +key
    }
  }
}

const findOdd = (xs) => xs.reduce((a, b) => a ^ b)

let test = findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) // 5

console.log(test)

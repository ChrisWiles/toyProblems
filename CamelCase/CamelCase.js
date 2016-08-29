function main() {
  let s = readLine();


  function isChar(char) {
    let found = false
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
      .forEach(l => {
        if (l == char) {
          found = true
        }
      })
    return found
  }

  let count = 1

  s.split('').forEach(char => {
    if (isChar(char)) {
      count++
    }
  })

  console.log(count)

}

const freqSeq = (str, sep) => {
   str = str.split('')
   let freq = str.reduce((a,b) => {
     a[b] ? a[b]++ : a[b] = 1
     return a
   }, {})
   return str.map(char => freq[char]).join(sep)
}

const freqSeq = (str, sep) => str.split('').map((v, i, arr) => arr.filter(vi => vi === v).length).join(sep)

console.log(freqSeq('hello world', '-')) // => '1-1-3-3-2-1-1-2-1-3-1'

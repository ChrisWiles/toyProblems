function characterFrequency(str) {
  let freq = str.split('').reduce((a, b) => {
    a[b] ? a[b]++ : a[b] = 1;
    return a;
  }, {});


  let freqArr = [];
  for (key in freq) {
    freqArr.push([key, freq[key]]);
  }

  return freqArr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].charCodeAt(0) - b[0].charCodeAt(0);
    }
    return b[1] - a[1]
  })
}

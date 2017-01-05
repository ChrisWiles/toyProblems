const numbersWithDigitInside = (x, d) => {
  const re = new RegExp(d),
        ns = Array.from({length: x}, (p, k) => p = k + 1)
                  .filter(x => re.test(x)),
        len = ns.length,
        sum = len ? ns.reduce((a, b) => a + b) : 0,
        prod = len ? ns.reduce((a, b) => a * b) : 0
  return [len, sum, prod]
}

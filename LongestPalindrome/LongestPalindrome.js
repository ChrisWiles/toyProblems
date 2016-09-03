function longestPalindrome(string) {
  const long = string.length;

  for (let i = long; i > 0; i--) {
    for (let j = 0; j <= long - j; j++) {
      const palin = string.substr(j, i);
      const drome = palin.split('').reverse().join('');

      if (palin === drome) {
        return palin;
      }
    }
  } 
}

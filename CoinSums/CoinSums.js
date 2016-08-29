function coinSums(total) {
  let count = 0;

  const recurse = (cur, n) => {
    if (cur === total) {
      count++;
    } else if (cur < total) {
      for (let i = 0; i < coins.length; i++) {
        if (i >= n) recurse(cur + coins[i], i);
      }
    }
  }

  recurse(0, 0);
  return count;
}

unction mergeSort(arr) {

  if(arr.length === 1) {
    return arr;
  } else {
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  }

}

function merge(left, right) {
  const n = left.length + right.length;
  left.push(Infinity)
  right.push(Infinity)
  let i = 0;
  let j = 0;
  const res = [];

  for(let k = 0; k < n; k++) {
    if(left[i] <= right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  return res;
}

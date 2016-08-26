function binarySearch(array, target) {
  let result = -1;

  const recurse = (array, target, index) => {
    const pivot = Math.floor(array.length / 2);

    if (target < array[pivot]) {
      recurse(array.slice(0, pivot), target, index)
    } else if (target > array[pivot]) {
      recurse(array.slice(pivot + 1), target, index + pivot + 1)
    } else if (target === array[pivot]) {
      result = index + pivot
    }
  }

  recurse(array, target, 0)
  return result;
}

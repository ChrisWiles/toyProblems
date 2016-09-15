function quickSort(arr) {
   if (arr.length === 0) return arr
   let pop = arr.pop()

   return quickSort(arr.filter(e => e < pop)).concat(pop, quickSort(arr.filter(e => e >= pop)))
}

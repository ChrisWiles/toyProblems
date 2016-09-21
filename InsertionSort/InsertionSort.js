function insertionSort(array, comparator) {
    for (let i = 1; i < array.length; i++) {
        const toInsert = array[i];
        let j = i;

        while (j > 0 && compare(toInsert, array[j - 1], comparator) < 0) {
            array[j] = array[j - 1]
            j--;
        }

        array[j] = toInsert;

    }
    return array;
}

function compare(a, b, comparator) {
    let compareFunc = comparator ? comparator : (x, y) => x - y;
    a = typeof a === 'object' ? a.value : a;
    b = typeof b === 'object' ? b.value : b;

    return compareFunc(a, b);
}

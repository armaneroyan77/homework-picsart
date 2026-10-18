
function insertionSort(arr, i) {
    if (i >= arr.length) {
        return arr;
    }

    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }

    arr[j + 1] = key;

    return insertionSort(arr, i + 1);
}

let arr = [12, 3, -5, -6, 2, 1];

console.log(insertionSort(arr, 1));
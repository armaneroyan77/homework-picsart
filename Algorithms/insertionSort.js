
function insertionSort(arr) {
    
    const size = arr.length;
    for(let i = 1; i < size; ++i){

        const key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
    
    return arr;
}

let arr = [12, 3, -5, -6, 2, 1];

console.log(insertionSort(arr));
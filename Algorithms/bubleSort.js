//[12, 4, -3, 4, 12, 5, -1, 5, 23, -23, 564, -2323, 4, 67, 5, 90, -6, 3];

function bubleSort(arr){
    let size = arr.length - 1;
    for(let i = 0; i < size; ++i){
        let swapped = false;

        for(let j = 0; j < size - i; ++j){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        if(!swapped){
            break;
        }
    }
    return arr;
}
const arr = [12, 4, -3, 4, 12, 5, -1, 5, 23, -23, 564, -2323, 4, 67, 5, 90, -6, 3];
const sortedArr = bubleSort(arr);
console.log(sortedArr);

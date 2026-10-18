function selectionSort(arr){
    const size = arr.length;

    for(let i = 0; i < size - 1; ++i){
        let min = i;
        for(let j = i + 1; j < size; ++j){
            if(arr[min] > arr[j]){
                min = j;
            }
        }
    
       if(min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
       
    }
    return arr;
}

const arr = [12, -3, 34, 4, -23, 2];
console.log(selectionSort(arr));

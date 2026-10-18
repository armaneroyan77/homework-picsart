function binarySearch(arr, target){
    let left = 0
    let right = arr.length - 1;
    while(left < right){
        let middle = Math.floor((left + right) / 2);
        if(arr[middle] < target){
            left = middle;
        }
        else if(arr[middle] > target){
            right = middle;
        }
        else{
            return middle;
        }
    }
    return -1;
}

const arr = [12, 34, 333, 536, 2322, 56342, 233435];
console.log(binarySearch(arr, 56342));

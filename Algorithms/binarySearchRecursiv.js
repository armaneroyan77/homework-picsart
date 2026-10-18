function binarySearch(arr, target, left, right){

    if(left > right){
        return -1;
    }

    const middle = Math.floor((left + right) / 2);

    if(arr[middle] < target){
       return binarySearch(arr, target, middle + 1, right);
    }

    else if(arr[middle] > target){
        return binarySearch(arr, target, left, middle - 1);
    }
    else{
        return middle;
    }

}

const arr = [12, 34, 333, 536, 2322, 56342, 233435];
console.log(binarySearch(arr, 2322, 0, arr.length));
